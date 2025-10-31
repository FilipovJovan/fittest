// Logic for ChallengeComponent
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext.jsx";
import customFetch from "../../utils/customFetch.js";
import { toast } from "react-toastify";

export const useChallengeComponent = (_id, target, progress) => {
    const [showModal, setShowModal] = useState(false);
    const apiKey = import.meta.env.VITE_API_KEY;
    const { user } = useAuth();

    const formatDate = (date) =>
        date ? new Date(date).toLocaleDateString() : "N/A";

    const currentProgress = progress || 0;
    const challengeProgress =
        target > 0 ? Math.min((currentProgress / target) * 100, 100) : 0;

    const handleEnrollClick = () => setShowModal(true);

    const confirmEnroll = async () => {
        try {
            await customFetch.post(
                `/gamification/challenge/enroll`,
                { challengeId: _id, userId: user._id },
                { headers: { "x-api-key": apiKey } }
            );
            toast.success("You have enrolled in the challenge! ⚔️");
        } catch (error) {
            console.error("Error:", error);
            toast.error(
                error?.response?.data?.message || "Cannot enroll in the challenge!"
            );
        } finally {
            setShowModal(false);
        }
    };

    return {
        showModal,
        setShowModal,
        formatDate,
        currentProgress,
        challengeProgress,
        handleEnrollClick,
        confirmEnroll,
    };
};
