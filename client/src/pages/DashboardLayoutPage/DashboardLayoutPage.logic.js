// Logic for DashboardLayoutPage
import {useAuth} from "../../../context/AuthContext.jsx";
import {useWorkout} from "../../../context/WorkoutContext.jsx";
import {useEffect, useState} from "react";
import customFetch from "../../utils/customFetch.js";
import {toast} from "react-toastify";

export const useDashboardLayoutPage = () => {
    const {user, authChecked} = useAuth();
    const {currentWorkout, fullWorkoutPlan, loading, refreshWorkoutPlan} =
        useWorkout();
    const [showRefresh, setShowRefresh] = useState(false);

    useEffect(() => {
        if (!user?._id) return;

        const today = new Date().toDateString();
        const lastLogin = localStorage.getItem("lastDailyLogin");

        if (lastLogin === today) return;

        const sendDailyLogin = async () => {
            try {
                const apiKey = import.meta.env.VITE_API_KEY;
                const {data} = await customFetch.post(
                    `/gamification/daily-login/${user._id}`,
                    {},
                    {
                        headers: {
                            "x-api-key": apiKey,
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (data.message === "Daily login rewarded") {
                    toast.success("You earned 10xp! 🔥");
                    localStorage.setItem("lastDailyLogin", today);
                } else {
                    toast.info(data.message);
                }
            } catch (error) {
                toast.error(error?.response?.data?.message || "Daily login failed!");
            }
        };

        sendDailyLogin();
    }, [user]);

    useEffect(() => {
        if (!loading) {
            setShowRefresh(false);
            return;
        }
        const timer = setTimeout(() => setShowRefresh(true), 3000);
        return () => clearTimeout(timer);
    }, [loading]);

    const calculateProgress = () => {
        if (!fullWorkoutPlan?.workoutProgram?.[0]?.weeks) {
            return {
                totalWorkouts: 0,
                completedWorkouts: 0,
                workoutsLeft: 0,
                percentage: 0,
            };
        }

        const days = fullWorkoutPlan.workoutProgram[0].weeks.flatMap(
            (week) => week.days
        );

        const totalWorkouts = days.filter((day) => day.type === "workout").length;
        const completedWorkouts = days.filter(
            (day) =>
                day.type === "workout" &&
                day.isFinished &&
                day.finishedType === "completed"
        ).length;
        const workoutsLeft = totalWorkouts - completedWorkouts;
        const percentage = totalWorkouts
            ? Math.round((completedWorkouts / totalWorkouts) * 100)
            : 0;

        return {totalWorkouts, completedWorkouts, workoutsLeft, percentage};
    };

    const {workoutsLeft, percentage} = calculateProgress();

    return {
        percentage,
        workoutsLeft,
        currentWorkout,
        loading,
        refreshWorkoutPlan,
        fullWorkoutPlan,
        showRefresh,
        authChecked,
        user
    }
};
