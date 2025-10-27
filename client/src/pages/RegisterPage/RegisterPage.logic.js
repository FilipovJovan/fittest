// Logic for RegisterPage
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {FaAppleAlt, FaDumbbell, FaUserPlus} from "react-icons/fa";
import customFetch from "../../utils/customFetch.js";
import {toast} from "react-toastify";

export const useRegisterPage = () => {
    const [formData, setFormData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [dotCount, setDotCount] = useState(0);
    const [currentMessage, setCurrentMessage] = useState(null);
    const navigate = useNavigate();

    const loadingMessages = [
        {text: "Creating your account", delay: 2000, icon: <FaUserPlus/>},
        {text: "Generating your workout plan", delay: 5000, icon: <FaDumbbell/>},
        {text: "Calculating your macros", delay: 3000, icon: <FaAppleAlt/>},
    ];

    // Dot animation effect
    useEffect(() => {
        if (!isSubmitting) return;
        const interval = setInterval(() => {
            setDotCount((prev) => (prev + 1) % 4);
        }, 500);
        return () => clearInterval(interval);
    }, [isSubmitting]);

    const handleFormDataChange = (data) => {
        setFormData((prevState) => ({
            ...prevState,
            ...data,
        }));
    };

    // Animate loading messages with delay
    const animateLoadingMessages = async () => {
        for (const msg of loadingMessages) {
            setCurrentMessage(msg);
            await new Promise((res) => setTimeout(res, msg.delay));
        }
    };

    const handleFinalStep = async (data) => {
        const finalData = {...formData, ...data};
        setFormData(finalData);
        const apiKey = import.meta.env.VITE_API_KEY;

        try {
            setIsSubmitting(true);

            // Start animation and API in parallel
            const messageAnimation = animateLoadingMessages();

            const registerRes = await customFetch.post("/auth/register", finalData, {
                headers: {
                    "x-api-key": apiKey,
                    "Content-Type": "application/json",
                },
            });

            const userId = registerRes?.data?.user?._id;
            if (!userId) throw new Error("User ID not returned from registration.");

            const workoutGenerationData = {
                difficultyLevel: finalData.userValues?.difficultyLevel || "beginner",
                workoutType: finalData.userValues?.workoutType || "hypertrophy",
                splitPreference: finalData.userValues?.split || "pushPullLegs6x",
                workoutsPerWeek: finalData.workoutLevel,
                equipmentType: finalData.userValues?.equipment || [],
                userId,
                restDays: finalData.userValues?.restDays || [7],
                startDate: new Date().toISOString(),
                label: 1,
            };

            await customFetch.post(
                "/generate-custom/workout/",
                workoutGenerationData,
                {
                    headers: {
                        "x-api-key": apiKey,
                        "Content-Type": "application/json",
                    },
                }
            );

            const macrosCalculationData = {
                weight: finalData.userValues?.weight,
                height: finalData.userValues.height,
                age: finalData.age,
                gender: finalData.gender,
                activityLevel: finalData.activityLevel,
                fitnessGoal: finalData.fitnessGoal,
                workoutLevel: finalData.workoutLevel,
            };

            await customFetch.post(
                `calculate-calories-macros/calculate/${userId}`,
                macrosCalculationData,
                {
                    headers: {
                        "x-api-key": apiKey,
                        "Content-Type": "application/json",
                    },
                }
            );

            // Wait for message animation to finish before proceeding
            await messageAnimation;
            // Optional: wait an extra second to show last message
            await new Promise((res) => setTimeout(res, 1000));

            toast.success(
                "Registration successful! Please check your email to verify your account."
            );
            navigate("/login");
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.msg || "Registration failed");
        } finally {
            setIsSubmitting(false);
        }
    };

    return {isSubmitting, currentMessage, dotCount, handleFormDataChange, handleFinalStep, formData};
};
