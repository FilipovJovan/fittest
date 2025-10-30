// Logic for WorkoutPage
import customFetch from "../../utils/customFetch.js";
import {toast} from "react-toastify";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../../context/AuthContext.jsx";
import {useEffect, useState} from "react";
import {useWorkout} from "../../../context/WorkoutContext.jsx";

export const useWorkoutPage = () => {
    // Add your hooks, state, or logic here
    const navigate = useNavigate();
    const {authChecked, user, setUser} = useAuth();
    const {
        fullWorkoutPlan,
        loading,
        workoutPhase,
        refreshWorkoutPlan,
        redirectTo,
        setRedirectTo,
        resumeState,
    } = useWorkout();
    const workoutId = fullWorkoutPlan?.workoutProgram?.[0]?._id;
    const {pathname} = useLocation();
    const apiKey = import.meta.env.VITE_API_KEY;
    const userId = user?._id;
    // console.log(workoutId);

    // console.log("User id: " + userId);

    const areWeightsPutted = user?.areWeightsPutted;
    const userKnowsWeight = user?.knowsWeight;
    const testWeekStartDate = user?.testWeekStartDate;

    const [selectedUnit, setSelectedUnit] = useState("");
    const [metricUnit, setMetricUnit] = useState("metric");
    const [practiceWeights, setPracticeWeights] = useState({
        benchPress: null,
        latPulldown: null,
        barbellRow: null,
        militaryPress: null,
        bicepsCurl: null,
        tricepsPushdown: null,
        squat: null,
        romanianDeadlift: null,
    });
    const [showWeightForm, setShowWeightForm] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);
    const [showEnteredWeights, setShowEnteredWeights] = useState(false);
    const [submitted, setSubmitted] = useState(areWeightsPutted || false);
    const [hasChosenWeightOption, setHasChosenWeightOption] = useState(false);

    const isAtWorkoutRoot = pathname === "/dashboard/workout";

    // useEffect(() => {
    //   if (resumeState) {
    //     const { workoutId, weekId, dayNumber, exerciseId } = resumeState;

    //     // Ask user if they want to resume
    //     if (window.confirm("Do you want to resume your last workout?")) {
    //       navigate(
    //         `/dashboard/workout/week/${weekId}/day/${dayNumber}${
    //           exerciseId ? `/exercise/${exerciseId}` : ""
    //         }`
    //       );
    //     }
    //   }
    // }, [resumeState, navigate]);
    // Fetch test weights on component mount
    useEffect(() => {
        const fetchWeights = async () => {
            try {
                const response = await customFetch.get(
                    `/generate-custom/workout/get-test-weights/${userId}`,
                    {
                        headers: {
                            "x-api-key": apiKey,
                            "Content-Type": "application/json",
                        },
                    }
                );
                const {testWeights} = response.data;
                if (testWeights) {
                    setPracticeWeights(testWeights);
                }
            } catch (error) {
                console.error("Error fetching weights:", error);
            }
        };
        if (userId) {
            fetchWeights();
        }
    }, [userId]);

    // Set testWeekStartDate to today if not set and user doesn't know weights
    useEffect(() => {
        if (userKnowsWeight === false && !testWeekStartDate && !areWeightsPutted) {
            const setStartDate = async () => {
                try {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    const apiKey = import.meta.env.VITE_API_KEY;
                    await customFetch.put(
                        `/generate-custom/workout/update-test-weights/${userId}`,
                        {testWeekStartDate: today.toISOString()},
                        {
                            headers: {
                                "x-api-key": apiKey,
                                "Content-Type": "application/json",
                            },
                        }
                    );
                    // Note: Do not mutate user.testWeekStartDate directly; rely on backend update
                } catch (error) {
                    console.error("Error setting test week start date:", error);
                }
            };
            setStartDate();
        }
    }, [userKnowsWeight, testWeekStartDate, areWeightsPutted, userId]);

    // useEffect(() => {
    //   if (redirectTo) {
    //     const { workoutId, weekId, dayNumber, exerciseId } = redirectTo;
    //     refreshWorkoutPlan().then(() => {
    //       // navigate(`/dashboard/workout/week/${weekId}/day/${dayNumber}`, {
    //       //   replace: true,
    //       //   state: { redirectToExercise: exerciseId },
    //       // });
    //       setRedirectTo(null); // clear after use
    //     });
    //   }
    // }, [redirectTo, refreshWorkoutPlan, navigate]);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const daysSinceStart =
        testWeekStartDate &&
        Math.floor((today - new Date(testWeekStartDate)) / (1000 * 60 * 60 * 24));
    const isSeventhDay = testWeekStartDate && daysSinceStart >= 6;

    const workoutProgram = fullWorkoutPlan?.workoutProgram ?? [];


    const handleChange = (e) => {
        const {name, value} = e.target;
        setPracticeWeights((prev) => ({
            ...prev,
            [name]: value ? Number(value) : null,
        }));
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            await customFetch.put(
                `/generate-custom/workout/update-test-weights/${userId}`,
                {testWeights: {...practiceWeights}},
                {
                    headers: {
                        "x-api-key": apiKey,
                        "Content-Type": "application/json",
                    },
                }
            );
            setShowWeightForm(false);
        } catch (error) {
            console.error("Error saving weights:", error);
        }
    };

    const handleSubmit = async (e) => {
        const allWeightsFilled = Object.values(practiceWeights).every(
            (weight) => weight !== null && !isNaN(weight)
        );
        // if (!allWeightsFilled) {
        //   alert("Please enter weights for all 8 exercises before submitting.");
        //   return;
        // }

        let convertedWeights = {...practiceWeights};
        if (metricUnit === "imperial") {
            convertedWeights = Object.fromEntries(
                Object.entries(practiceWeights).map(([key, value]) => [
                    key,
                    value ? +(value / 2.20462).toFixed(1) : null,
                ])
            );
        }

        try {
            // First: update test weights (PUT)
            const updatePayload = {
                areWeightsPutted: true,
                testWeights: null,
                finalWeights: convertedWeights,
            };

            // console.log("Reached 1");
            await customFetch.put(
                `/generate-custom/workout/update-test-weights/${userId}`,
                updatePayload,
                {
                    headers: {
                        "x-api-key": apiKey,
                        "Content-Type": "application/json",
                    },
                }
            );

            // Second: post weights (POST)
            const weightPayload = {
                ...convertedWeights,
                workoutId,
            };

            // console.log("Reached 2");
            await customFetch.post(
                `/generate-custom/workout/weight-exercises`,
                weightPayload,
                {
                    headers: {
                        "x-api-key": apiKey,
                        "Content-Type": "application/json",
                    },
                }
            );

            // ✅ Third: remove test week (PUT) — only if above is successful
            // console.log("Reached 3");
            // await customFetch.put(
            //   `/generate-custom/workout/remove-test-week/${workoutId}`,
            //   {},
            //   {
            //     headers: {
            //       "x-api-key": apiKey,
            //     },
            //   }
            // );

            setSubmitted(true);
            setShowWeightForm(false);
            toast.success("Weights submitted successfully!");
            navigate("/dashboard");

            setTimeout(() => {
                window.location.reload();
            }, 100);
        } catch (error) {
            console.error("Error during weight submission workflow:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    const setUserKnowsWeight = async (user, weightValue, optionValue) => {
        try {
            await customFetch.put(
                `/generate-custom/workout/update-test-weights/${userId}`,
                {knowsWeight: weightValue, hasChosenWeightOption: optionValue},
                {
                    headers: {
                        "x-api-key": apiKey,
                        "Content-Type": "application/json",
                    },
                }
            );

            setUser((prevUser) => ({
                ...prevUser,
                knowsWeight: weightValue,
                hasChosenWeightOption: optionValue,
            }));
            setHasChosenWeightOption(true);
        } catch (error) {
            console.error("Error updating knowsWeight:", error);
        }
    };

    const getWeekStatus = (week) => {
        if (!week?.days?.length) return "not-started";

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const dayDates = week.days
            .map((day) => new Date(day.date).setHours(0, 0, 0, 0))
            .filter((date) => !isNaN(date));

        const minDate = Math.min(...dayDates);
        const maxDate = Math.max(...dayDates);

        if (dayDates.every((date) => date < today)) return "finished";
        if (minDate <= today && today <= maxDate) return "current";

        return "not-started";
    };

    const shouldShowForm = userKnowsWeight && !submitted;

    const allWeightsFilled = Object.values(practiceWeights).every(
        (weight) => weight !== null && !isNaN(weight)
    );

    return {
        selectedUnit,
        setMetricUnit,
        setSelectedUnit,
        handleSubmit,
        practiceWeights,
        handleChange,
        setShowInstructions,
        showInstructions,
        workoutProgram,
        getWeekStatus,
        submitted,
        setShowWeightForm,
        showWeightForm,
        isSeventhDay,
        handleSave,
        allWeightsFilled,
        setShowEnteredWeights,
        showEnteredWeights,
        user,
        setUserKnowsWeight,
        isAtWorkoutRoot,
        authChecked,
        loading,
        workoutPhase
    };
};
