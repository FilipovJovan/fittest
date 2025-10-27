// Logic for RewardsPage
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import customFetch from "../../utils/customFetch.js";
import {toast} from "react-toastify";

export const useRewardsPage = () => {
    const location = useLocation();
    const apiKey = import.meta.env.VITE_API_KEY;
    const [rewards, setRewards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("all");
    const [showFilters, setShowFilters] = useState(false);

    const unlockedRewards = location.state?.rewards || [];

    useEffect(() => {
        const fetchRewards = async () => {
            try {
                const res = await customFetch.get("/gamification/reward/get", {
                    headers: {"x-api-key": apiKey},
                });

                const unlockedIds = unlockedRewards.map((rw) =>
                    typeof rw.rewardId === "string" ? rw.rewardId : rw.rewardId._id
                );

                const allRewards = res.data.map((reward) => ({
                    ...reward,
                    unlocked: unlockedIds.includes(reward._id),
                }));

                setRewards(allRewards);
            } catch (error) {
                console.error("Error:", error);
                toast.error(
                    error?.response?.data?.message || "No gamification profile!"
                );
            } finally {
                setLoading(false);
            }
        };
        fetchRewards();
    }, [apiKey, unlockedRewards]);

    const filteredRewards = rewards.filter((reward) => {
        if (filter === "unlocked") return reward.unlocked;
        if (filter === "locked") return !reward.unlocked;
        return true;
    });

    const handleFilterSelect = (type) => {
        setFilter(type);
        setShowFilters(false);
    };

    return {
        loading,
        rewards,
        setShowFilters,
        filter,
        handleFilterSelect,
        showFilters,
        filteredRewards
    }
};
