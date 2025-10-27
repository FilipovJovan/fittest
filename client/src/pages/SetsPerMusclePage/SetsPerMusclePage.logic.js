// Logic for SetsPerMusclePage
import {useWorkout} from "../../../context/WorkoutContext.jsx";
import {useEffect, useState} from "react";

export const useSetsPerMusclePage = () => {
    const {fullWorkoutPlan, isLoading} = useWorkout();
    const [muscleDataByWeek, setMuscleDataByWeek] = useState({});

    useEffect(() => {
        if (isLoading || !fullWorkoutPlan?.workoutProgram?.[0]?.weeks) {
            // console.log("Waiting for data or invalid fullWorkoutPlan:", {
            //   isLoading,
            //   fullWorkoutPlan,
            // });
            return;
        }

        const muscleData = {};

        try {
            fullWorkoutPlan.workoutProgram[0].weeks.forEach((week, weekIndex) => {
                const weekLabel = `Week ${weekIndex + 1}`;

                if (!week.days) {
                    // console.log("No days found in week:", week);
                    return;
                }

                week.days.forEach((day) => {
                    if (!day.workout) {
                        // console.log("No workout found in day:", day);
                        return;
                    }

                    day.workout.forEach((workoutItem) => {
                        const exercise = workoutItem?.exercise;
                        const muscleType = exercise?.muscleType;
                        const sets = Number(workoutItem?.sets) || 0;

                        if (muscleType) {
                            if (!muscleData[muscleType]) {
                                muscleData[muscleType] = {};
                            }
                            if (!muscleData[muscleType][weekLabel]) {
                                muscleData[muscleType][weekLabel] = 0;
                            }
                            muscleData[muscleType][weekLabel] += sets;
                        } else {
                            // console.log("No muscleType found in exercise:", workoutItem);
                        }
                    });
                });
            });

            const formattedData = {};
            Object.keys(muscleData).forEach((muscle) => {
                formattedData[muscle] = Object.keys(muscleData[muscle]).map((week) => ({
                    week,
                    sets: muscleData[muscle][week],
                }));
            });

            // console.log("Formatted muscleDataByWeek (Sets):", formattedData);
            setMuscleDataByWeek(formattedData);
        } catch (error) {
            console.error("Error processing sets per muscle by week:", error);
        }
    }, [fullWorkoutPlan, isLoading]);

    const muscleGroups = {
        Chest: ["overall chest", "upper chest", "lower chest"],
        Back: ["overall back", "middle back", "lats"],
        Biceps: ["biceps"],
        Legs: ["hamstrings", "quadriceps", "calves"],
        Abs: ["abs"],
        Shoulders: ["front deltoid", "rear deltoid", "lateral deltoid"],
        Triceps: ["triceps"],
    };

    const groupsWithMuscleLabels = ["Chest", "Back", "Shoulders", "Legs"];

    // Calculate max sets for Y-axis domain
    const maxSets = Math.max(
        ...Object.values(muscleDataByWeek).flatMap((data) =>
            data.map((d) => d.sets)
        ),
        0
    );
    const yAxisMax = Math.ceil(maxSets / 5) * 5; // Round up to nearest 5

    // Custom tooltip for better UX
    const CustomTooltip = ({active, payload, label}) => {
        if (active && payload && payload.length) {
            return (
                <div
                    className="bg-gray-900 text-white p-4 rounded-xl shadow-xl border border-gray-700 transition-all duration-150">
                    <p className="font-bold text-sm mb-1 text-red-300">Week {label}</p>
                    <p className="text-indigo-400 font-medium">
                        Sets: {payload[0].value}
                    </p>
                </div>
            );
        }
        return null;
    };

    return {
        isLoading,
        fullWorkoutPlan,
        muscleGroups,
        muscleDataByWeek,
        groupsWithMuscleLabels,
        yAxisMax
    }
};
