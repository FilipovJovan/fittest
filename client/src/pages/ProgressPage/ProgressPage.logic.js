// Logic for ProgressPage
import {getFullWorkoutPlan, useWorkout} from "../../../context/WorkoutContext.jsx";
import {useLocation, useNavigate} from "react-router-dom";

export const useProgressPage = () => {
    const {fullWorkoutPlan} = useWorkout();
    const location = useLocation(); // Get current route
    const navigate = useNavigate(); // For navigation

    const isMainPage = location.pathname === "/dashboard/progress";

    const plan = getFullWorkoutPlan();

    if (!fullWorkoutPlan?.workoutProgram?.[0]?.weeks) {
        return <p>No workouts found.</p>;
    }

    const splitName = plan?.workoutProgram?.[0]?.workoutSplitName;

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
    const skippedWorkouts = days.filter(
        (day) =>
            day.type === "workout" && day.isFinished && day.finishedType === "skipped"
    ).length;
    const workoutsLeft = totalWorkouts - completedWorkouts;
    return {
        isMainPage,
        splitName,
        totalWorkouts,
        completedWorkouts,
        skippedWorkouts,
        workoutsLeft,
        navigate
    };
};
