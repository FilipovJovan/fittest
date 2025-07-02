import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ExerciseItem from "../components/ExerciseItem";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import WorkoutFeedbackModal from "../components/WorkoutFeedbackModel";

const DayPage = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { state } = useLocation();
  const { weekId, day, days, workoutId } = state || {};
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isModalClosed, setIsModalClosed] = useState(false);

  if (!day || !weekId) return <p>Data missing</p>;

  const currentExercise = day.workout[currentIndex];
  const isLast = currentIndex === day.workout.length - 1;

  const isRestDay = (day.type == "rest") === true;

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleFinish = async () => {
    try {
      console.log("Before");
      setShowModal(true); // Show modal
      console.log("After");

      await customFetch.put(
        `/generate-custom/workout/${workoutId}/finish-day`,
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

  useEffect(() => {
    if (showModal) {
      console.log("showModal changed to true, modal should show now!");
    }
  }, [showModal]);

  const handleModalClose = () => {
    setShowModal(false);
    setIsModalClosed(true);

    const updatedDay = { ...day, completed: true };

    navigate("/dashboard/workout/", {
      state: {
        days: days.map((d) => (d.name === day.name ? updatedDay : d)),
      },
    });
  };

  const handleBackNavigation = () => {
    navigate(`/dashboard/workout/week/${weekId}`, {
      state: {
        days,
      },
    });
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
              dayIndex={currentIndex + 1}
              exercise={currentExercise.exercise}
              sets={Array.from({ length: currentExercise.sets }, () => ({
                reps: currentExercise.reps,
                rest: currentExercise.rest,
                weight: currentExercise.weight,
              }))}
              isLast={isLast}
              workoutId={workoutId}
              weekId={weekId}
              day={day}
            />

            {!isLast ? (
              <button onClick={handleNext} className="btn btn-primary mt-4">
                Next Exercise →
              </button>
            ) : (
              <button onClick={handleFinish} className="btn btn-success mt-4">
                Finish Workout ✅
              </button>
            )}
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
    </>
  );
};

export default DayPage;
