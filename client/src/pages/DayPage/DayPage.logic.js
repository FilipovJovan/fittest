// Logic for DayPage
import {useAuth} from "../../../context/AuthContext.jsx";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useWorkout} from "../../../context/WorkoutContext.jsx";
import {useEffect, useState} from "react";
import customFetch from "../../utils/customFetch.js";
import {toast} from "react-toastify";


export const useDayPage = () => {
    const {user} = useAuth();
    const apiKey = import.meta.env.VITE_API_KEY;
    const {state} = useLocation();
    const {weekId, day, days, workoutId, weekNumber, dayNumber, isToday} =
    state || {};
    const {exerciseId} = useParams();
    const navigate = useNavigate();
    const {setResumeState, refreshWorkoutPlan} = useWorkout();
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

    useEffect(() => {
        if (showExitModal) { /* empty */
        }
    }, [showExitModal]);

    useEffect(() => {
        if (showModal) {
            // console.log("showModal changed to true, modal should show now!");
        }
    }, [showModal]);

    // console.log(day.isFinished);

    const currentIndex = day.workout.findIndex(
        (ex) => String(ex._id) === String(exerciseId)
    );
    const currentExercise = day.workout[currentIndex];
    const isLast = currentIndex === day.workout.length - 1;
    const isFirst = currentIndex === 0;

    const isRestDay = (day.type === "rest");

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
                {state: {workoutId, day, days, weekId, weekNumber, dayNumber}}
            );
        }
    };

    const handleBackExercise = () => {
        const prevExercise = day.workout[currentIndex - 1];
        if (prevExercise) {
            saveWorkoutProgress(prevExercise._id);
            navigate(
                `/dashboard/workout/week/${weekId}/day/${dayNumber}/exercise/${prevExercise._id}`,
                {state: {workoutId, day, days, weekId, weekNumber, dayNumber}}
            );
        }
        currentExerciseId = prevExercise._id;
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
                    dayId: day._id,
                    userId: user._id,
                },
                {
                    headers: {
                        "x-api-key": apiKey,
                    },
                }
            );
            navigate(`/dashboard/workout`);
            await refreshWorkoutPlan();
        } catch (err) {
            console.error("Failed to update workout", err);
        }
        await logWorkout();
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
                    headers: {"x-api-key": apiKey},
                }
            );
            day.currentExerciseId = exerciseIdToSave;
        } catch (error) {
            console.error("Failed to save workout progress", error);
        }
    };

    const handleResumingWorkout = async () => {
        try {
            const {data} = await customFetch.get(
                `/generate-custom/workout/get-workout`,
                {
                    headers: {"x-api-key": apiKey},
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

        const updatedDay = {...day, completed: true};

        navigate("/dashboard/workout", {
            state: {
                days: days.map((d) => (d.name === day.name ? updatedDay : d)),
            },
        });
    };

    const handleBackNavigation = () => {
        if (isRestDay && day.finishedType === "completed") {
            handleExitConfirm();
        } else
            setShowExitModal(true);
    };

    const handleExitConfirm = () => {
        // console.log(exerciseId);
        setShowExitModal(false);
        saveWorkoutProgress(exerciseId);
        navigate(`/dashboard/workout/week/${weekId}`, {
            state: {weekId, day, days, workoutId, weekNumber, dayNumber},
        });
    };

    const handleExitCancel = () => {
        setShowExitModal(false);
    };

    return {
        handleBackNavigation,
        isRestDay,
        dayNumber,
        currentExercise,
        isLast,
        workoutId,
        weekNumber,
        weekId,
        day,
        days,
        isFirst,
        handleBackExercise,
        handleNext,
        handleFinish,
        handleModalClose,
        showModal,
        showStartModal,
        handleStartWorkout,
        navigate,
        showResumeModal,
        setShowResumeModal,
        handleResumingWorkout,
        showExitModal,
        handleExitCancel,
        handleExitConfirm
    }
};
