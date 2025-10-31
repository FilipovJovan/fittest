// Logic for WorkoutFeedbackModalComponent
import {useState} from "react";
import {toast} from "react-toastify";
import customFetch from "../../utils/customFetch.js";

export const useWorkoutFeedbackModalComponent = ({
                                                     handleClose,
                                                     workoutId,
                                                     currentDayId,
                                                 }) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const [feedback, setFeedback] = useState({
        mindMuscle: "",
        soreness: "",
        pump: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFeedback({...feedback, [e.target.name]: e.target.value});
    };

    const handleSubmit = async () => {
        const {mindMuscle, soreness, pump} = feedback;

        if (!mindMuscle || !soreness || !pump) {
            toast.warning("Please answer all questions before submitting.");
            return;
        }

        setLoading(true);
        try {
            await customFetch.post(
                "generate-custom/workout/progress",
                {
                    questionOne: mindMuscle,
                    questionTwo: soreness,
                    questionThree: pump,
                    workoutId,
                    currentDayId,
                },
                {
                    headers: {
                        "x-api-key": apiKey,
                    },
                }
            );

            toast.success("Feedback submitted! Great job 💪");
            handleClose();
        } catch (err) {
            console.error("Error submitting feedback:", err);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    return {loading, handleChange, handleSubmit};
};
