// Logic for ExerciseItemComponent
import {useEffect, useState} from "react";
import {useWorkout} from "../../../context/WorkoutContext.jsx";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import customFetch from "../../utils/customFetch.js";

export const useExerciseItemComponent = ({
                                             dayIndex,
                                             exercise,
                                             sets,
                                             isLast,
                                             workoutId,
                                             weekId,
                                             day,
                                             weekNumber,
                                             dayNumber,
                                         }) => {
    const [availableExercises, setAvailableExercises] = useState([]);
    const [selectedExerciseId, setSelectedExerciseId] = useState(null);
    const [timeLeft, setTimeLeft] = useState(sets[0].rest * 60);
    const [initialTimeLeft, setInitialTimeLeft] = useState(sets[0].rest * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [completedSets, setCompletedSets] = useState([]);
    const [showInstructions, setShowInstructions] = useState(false);
    const [showChangeExerciseForm, setShowChangeExerciseForm] = useState(false);
    const [applyToWholePlan, setApplyToWholePlan] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleClose = () => setShowChangeExerciseForm(false);
    const newExerciseId = exercise._id;
    const apiKey = import.meta.env.VITE_API_KEY;
    const {fullWorkoutPlan, refreshWorkoutPlan, setRedirectTo} = useWorkout();
    const navigate = useNavigate();

    useEffect(() => {
        const newTime = sets[0].rest * 60;
        setTimeLeft(newTime);
        setInitialTimeLeft(newTime);
        setIsRunning(false);
        setCompletedSets([]);
    }, [exercise]);

    useEffect(() => {
        let interval;

        if (timeLeft === 0 && isRunning) {
            playBeep();
            toast.success("Your Time Is Up!");
            setIsRunning(false);
            setTimeLeft(initialTimeLeft);
        }

        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning, timeLeft]);

    // console.log("Day: " + dayNumber + " Week: " + weekNumber);

    const playBeep = () => {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

        for (let i = 0; i < 3; i++) {
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            oscillator.type = "sine";
            oscillator.frequency.setValueAtTime(1000, audioCtx.currentTime + i * 0.4);
            gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime + i * 0.4);

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            oscillator.start(audioCtx.currentTime + i * 0.4);
            oscillator.stop(audioCtx.currentTime + i * 0.4 + 0.2);
        }
    };

    const handleChange = async () => {
        setShowChangeExerciseForm(true);

        try {
            const data = await fetchExercises({
                muscleType: exercise.muscleType,
            });
            setAvailableExercises(data.exercises);
        } catch (err) {
            console.error("Failed to fetch alternative exercises", err);
        }
    };

    const fetchExercises = async ({
                                      search = "",
                                      muscleType = "",
                                      equipment = "",
                                      sort = "newest",
                                      page = 1,
                                      limit = 20,
                                  }) => {
        try {
            const params = new URLSearchParams();

            if (search) params.append("search", search);
            if (muscleType) params.append("muscleType", muscleType);
            if (equipment) params.append("equipment", equipment);
            if (sort) params.append("sort", sort);
            if (page) params.append("page", page);
            if (limit) params.append("limit", limit);

            const response = await customFetch.get(
                `/generate-custom/workout/get-exercises?${params.toString()}`,
                {
                    headers: {
                        "x-api-key": apiKey,
                        "Content-Type": "application/json",
                    },
                }
            );

            return response.data;
        } catch (err) {
            console.error("Error fetching exercises:", err);
            throw err;
        }
    };

    // useEffect(() => {
    //   const loadExercises = async () => {
    //     const data = await fetchExercises({
    //       muscleType: "",
    //       equipment: "",
    //     });
    //     console.log(data.exercises);
    //   };

    //   loadExercises();
    // }, []);

    const confirmExerciseChange = async () => {
        if (!selectedExerciseId) return toast.error("Please select a new exercise");

        setLoading(true);
        try {
            const apiKey = import.meta.env.VITE_API_KEY;

            const payload = {
                week: weekNumber,
                day: dayNumber,
                newExerciseId: selectedExerciseId,
                applyToWholePlan: applyToWholePlan,
                exerciseType: exercise.type,
            };

            const res = await customFetch.patch(
                `/generate-custom/workout/change-exercise/${workoutId}/${exercise._id}`,
                payload,
                {
                    headers: {
                        "x-api-key": apiKey,
                        "Content-Type": "application/json",
                    },
                }
            );

            toast.success("Exercise changed successfully! Go back to you workout.");
            setShowChangeExerciseForm(false);
            await refreshWorkoutPlan();
            // setRedirectTo({
            //   workoutId,
            //   weekId,
            //   dayNumber,
            //   exerciseId: exercise._id,
            // });
            // setTimeout(() => {
            //   navigate(
            //     `/dashboard/workout/week/${weekId}/day/${dayNumber}/exercise/${exercise._id}`
            //   );
            // }, 300);
        } catch (error) {
            console.error("Error updating exercise:", error);
            toast.error("Failed to change exercise");
        } finally {
            setLoading(false);
        }
    };

    const handleStartStop = () => {
        setIsRunning((prev) => !prev);
    };

    const handleSetDone = (index) => {
        if (!completedSets.includes(index)) {
            setCompletedSets([...completedSets, index]);
            handleStartStop();
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const progress = (completedSets.length / sets.length) * 100;
    const circleProgress = ((timeLeft / initialTimeLeft) * 100).toFixed(0);
    return {
        handleChange,
        progress,
        circleProgress,
        formatTime,
        handleSetDone,
        showChangeExerciseForm,
        handleClose,
        completedSets,
        setShowInstructions,
        showInstructions,
        handleStartStop,
        timeLeft
    };
};
