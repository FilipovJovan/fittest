// Logic for WorkoutWeekCardComponent
import {useNavigate} from "react-router-dom";
import {useMemo, useState} from "react";

export const useWorkoutWeekCardComponent = ({
                                                week,
                                                weekNumber,
                                                days = [],
                                                workoutId,
                                                status,
                                                onClick,
                                            }) => {
    const navigate = useNavigate();
    const [hideWeeks, setHideWeeks] = useState(false);

    const today = useMemo(() => {
        const t = new Date();
        t.setHours(0, 0, 0, 0);
        return t;
    }, []);

    const currentDay = useMemo(() => {
        return days.find((day) => {
            if (!day.date) return false;
            const dayDate = new Date(day.date);
            dayDate.setHours(0, 0, 0, 0);
            return dayDate.getTime() === today.getTime();
        });
    }, [days, today]);

    const completedDays = days.filter(
        (d) => d.finishedType === "completed"
    ).length;
    const totalDays = days.length;

    const handleClick = () => {
        localStorage.setItem("allDays", JSON.stringify(days));
        localStorage.setItem("workoutId", workoutId);
        navigate(`week/${week._id}`, {
            state: {days, workoutId, currentDay, weekNumber},
        });
    };

    // Calculate progress percentage
    const progressPercentage =
        totalDays > 0 ? (completedDays / totalDays) * 100 : 0;
    return {handleClick, progressPercentage, hideWeeks, completedDays, totalDays, currentDay};
};
