import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ExerciseItem from "../components/ExerciseItem";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import WorkoutFeedbackModal from "../components/WorkoutFeedbackModel";
import { useWorkout } from "../../context/WorkoutContext";
import { Modal } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";

const DayPage = () => {
  const { user } = useAuth();
  const apiKey = import.meta.env.VITE_API_KEY;
  const { state } = useLocation();
  const { weekId, day, days, workoutId, weekNumber, dayNumber, isToday } =
    state || {};
  const { exerciseId } = useParams();
  const navigate = useNavigate();
  const { setResumeState } = useWorkout();
  // eslint-disable-next-line no-unused-vars
  let currentExerciseId;
  // console.log(day.finishedType);

  // console.log(isToday);

  // console.log(weekNumber + " " + dayNumber);

  // const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isModalClosed, setIsModalClosed] = useState(false);
  const [showStartModal, setShowStartModal] = useState(true);
  const [showExitModal, setShowExitModal] = useState(false);
  const handleClose = () => setShowExitModal(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  // console.log("Day: " + day + " Week id: " + weekId);
  if (!day || !weekId) return <p>Data missing</p>;

  // console.log(day.isFinished);

  const currentIndex = day.workout.findIndex(
    (ex) => String(ex._id) === String(exerciseId)
  );
  const currentExercise = day.workout[currentIndex];
  const isLast = currentIndex === day.workout.length - 1;
  const isFirst = currentIndex === 0;

  const isRestDay = (day.type == "rest") === true;

  useEffect(() => {
    if (day.finishedType === "started") {
      setShowResumeModal(true);
    }
  }, [day.finishedType]);

  useEffect(() => {
    setResumeState({
      workoutId,
      weekId,
      dayNumber,
      exerciseId,
    });
  }, [workoutId, weekId, dayNumber, exerciseId, setResumeState]);

  const handleStartWorkout = async () => {
    try {
      setHasStarted(true);
      setShowStartModal(false);
      // console.log("reached");

      await customFetch.put(
        `/generate-custom/workout/${workoutId}/started-day`,
        {
          weekId,
          dayName: day.name,
        },
        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      );
    } catch (err) {
      console.error("Failed to update workout", err);
    }
  };

  const handleNext = () => {
    const nextExercise = day.workout[currentIndex + 1];
    if (nextExercise) {
      saveWorkoutProgress(nextExercise._id);
      navigate(
        `/dashboard/workout/week/${weekId}/day/${dayNumber}/exercise/${nextExercise._id}`,
        { state: { workoutId, day, days, weekId, weekNumber, dayNumber } }
      );
    }
  };

  const handleBackExercise = () => {
    const prevExercise = day.workout[currentIndex - 1];
    if (prevExercise) {
      saveWorkoutProgress(prevExercise._id);
      navigate(
        `/dashboard/workout/week/${weekId}/day/${dayNumber}/exercise/${prevExercise._id}`,
        { state: { workoutId, day, days, weekId, weekNumber, dayNumber } }
      );
    }
    currentExerciseId = nextExercise._id;
  };

  const handleFinish = async () => {
    try {
      // console.log("Before");
      setShowModal(true); // Show modal
      // console.log("After");

      await customFetch.put(
        `/generate-custom/workout/${workoutId}/finish-day`,
        {
          weekId,
          dayName: day.name,
          userId: user._id,
        },
        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      );
    } catch (err) {
      console.error("Failed to update workout", err);
    }
    logWorkout();
  };

  const logWorkout = async () => {
    try {
      const res = await customFetch.post(
        `/gamification/log-workout/${user._id}`,
        {},
        {
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
        }
      );
      const events = res.data.events || [];

      if (events.length === 0) {
        toast.info("Workout logged successfully!");
        return;
      }

      events.forEach((event) => {
        switch (event.type) {
          case "xpEarned":
            toast.success(`+${event.amount} XP earned! 💪`);
            break;
          case "badgeUnlocked":
            toast.success(`🏅 New badge unlocked: ${event.name}`);
            break;
          case "rewardUnlocked":
            toast.info(`🎁 You unlocked: ${event.name}`);
            break;
          default:
            toast.info(event.message || "Progress updated!");
        }
      });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Logging Workout Failed!");
      console.log(error);
    }
  };

  const saveWorkoutProgress = async (exerciseIdToSave) => {
    try {
      await customFetch.put(
        `/generate-custom/workout/${workoutId}/save-progress`,
        {
          weekId,
          dayName: day.name,
          currentExerciseId: exerciseIdToSave,
        },
        {
          headers: { "x-api-key": apiKey },
        }
      );
      day.currentExerciseId = exerciseIdToSave;
    } catch (error) {
      console.error("Failed to save workout progress", error);
    }
  };

  const handleResumingWorkout = async () => {
    try {
      const { data } = await customFetch.get(
        `/generate-custom/workout/get-workout`,
        {
          headers: { "x-api-key": apiKey },
        }
      );
      const workout = data.workoutProgram.find((w) => w._id === workoutId);
      if (!workout) {
        console.error("Workout not found for id", workoutId);
        return;
      }
      const updatedWeek = workout.weeks.find((w) => w._id === weekId);
      if (!updatedWeek) {
        console.error("Week not found", weekId);
        return;
      }
      const updatedDay = updatedWeek.days.find((d) => d.name === day.name);
      if (!updatedDay) {
        console.error("Day not found", day.name);
        return;
      }
      const resumeId =
        updatedDay.currentExerciseId || updatedDay.workout[0]._id;
      navigate(
        `/dashboard/workout/week/${weekId}/day/${dayNumber}/exercise/${resumeId}`,
        {
          state: {
            workoutId,
            day: updatedDay,
            days: updatedWeek.days,
            weekId,
            weekNumber,
            dayNumber,
          },
        }
      );
    } catch (err) {
      console.error("Failed to fetch workout", err);
    }
  };

  useEffect(() => {
    if (showExitModal) {
    }
  }, [showExitModal]);

  useEffect(() => {
    if (showModal) {
      // console.log("showModal changed to true, modal should show now!");
    }
  }, [showModal]);

  // useEffect(() => {
  //   if (location.state?.redirectToExercise && day) {
  //     navigate(`/dashboard/workout/week/${weekId}/day/${dayNumber}`, {
  //       replace: true,
  //     });
  //   }
  // }, [day, location.state, workoutId, weekId, dayNumber, navigate]);

  const handleModalClose = () => {
    setShowModal(false);
    setIsModalClosed(true);

    const updatedDay = { ...day, completed: true };

    navigate("/dashboard/workout", {
      state: {
        days: days.map((d) => (d.name === day.name ? updatedDay : d)),
      },
    });
  };

  const handleBackNavigation = () => {
    setShowExitModal(true);
  };

  const handleExitConfirm = () => {
    // console.log(exerciseId);
    setShowExitModal(false);
    saveWorkoutProgress(exerciseId);
    navigate(`/dashboard/workout/week/${weekId}`, {
      state: { weekId, day, days, workoutId, weekNumber, dayNumber },
    });
  };

  const handleExitCancel = () => {
    setShowExitModal(false);
  };

  return (
    <>
      <button onClick={handleBackNavigation} className="go-back-button">
        ← Back to Days
      </button>

      <div className="day-page">
        {/* If it's a rest day, display a message */}
        {isRestDay ? (
          <div className="rest-day-container">
            <h2>Rest Day</h2>
            <p>Take some time to recover and relax. You’ve earned it!</p>
          </div>
        ) : (
          <>
            <ExerciseItem
              dayNumber={dayNumber}
              exercise={currentExercise.exercise}
              sets={Array.from({ length: currentExercise.sets }, () => ({
                reps: currentExercise.reps,
                rest: currentExercise.rest,
                weight: currentExercise.weight,
              }))}
              isLast={isLast}
              workoutId={workoutId}
              weekNumber={weekNumber}
              day={day}
              weekId={weekId}
            />
            <div className="exercise-navigation mt-4 flex gap-4">
              {!isFirst && (
                <button
                  onClick={handleBackExercise}
                  className="btn btn-secondary back-button"
                >
                  ← Back Exercise
                </button>
              )}
              {!isLast ? (
                <button onClick={handleNext} className="btn btn-primary">
                  Next Exercise →
                </button>
              ) : (
                <button onClick={handleFinish} className="btn btn-success">
                  Finish Workout ✅
                </button>
              )}
            </div>
          </>
        )}
      </div>

      {showModal && (
        <WorkoutFeedbackModal
          show={showModal}
          handleClose={handleModalClose}
          workoutId={workoutId}
          currentDayId={day._id}
        />
      )}

      {showStartModal && !(day.finishedType === "started") && (
        <Modal show={showStartModal} centered>
          <Modal.Header>
            <Modal.Title>Start Workout</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you ready to start today’s workout?</p>
            <div className="button-row">
              <button onClick={handleStartWorkout} className="btn btn-primary">
                Start
              </button>
              <button
                onClick={() => navigate(-1)}
                className="btn btn-secondary"
              >
                Cancel
              </button>
            </div>
          </Modal.Body>
        </Modal>
      )}

      {day.finishedType === "started" && (
        <Modal
          show={showResumeModal}
          onHide={() => setShowResumeModal(false)}
          centered
        >
          <Modal.Header>
            <Modal.Title>Continue with your workout</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Do you want to continue with your workout?</p>
            <div className="button-row">
              <button
                onClick={() => {
                  handleResumingWorkout();
                  setShowResumeModal(false);
                }}
                className="btn btn-primary"
              >
                Yes
              </button>
              <button
                onClick={() => {
                  navigate(
                    `/dashboard/workout/week/${weekId}/day/${dayNumber}/exercise/${day.workout[0]._id}`,
                    {
                      state: {
                        workoutId,
                        day,
                        days,
                        weekId,
                        weekNumber,
                        dayNumber,
                      },
                    }
                  );
                  setShowResumeModal(false);
                }}
                className="btn btn-secondary"
              >
                No
              </button>
            </div>
          </Modal.Body>
        </Modal>
      )}

      {showExitModal && (
        <Modal show={showExitModal} centered>
          <Modal.Header>
            <Modal.Title>Workout Paused</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to quit the workout?</p>
            <div className="button-row">
              <button onClick={handleExitConfirm} className="btn btn-secondary">
                Yes
              </button>
              <button onClick={handleExitCancel} className="btn btn-primary">
                No
              </button>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default DayPage;
