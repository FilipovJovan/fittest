import { useEffect, useState } from "react";
import { useWorkout } from "../../../context/WorkoutContext";

export const useVolumePerMuscleLogic = () => {
    const { fullWorkoutPlan, isLoading } = useWorkout();
    const [muscleDataByWeek, setMuscleDataByWeek] = useState({});

    useEffect(() => {
        if (isLoading || !fullWorkoutPlan?.workoutProgram?.[0]?.weeks) return;

        const muscleData = {};

        try {
            fullWorkoutPlan.workoutProgram[0].weeks.forEach((week, weekIndex) => {
                const weekLabel = `Week ${weekIndex + 1}`;

                week.days?.forEach((day) => {
                    day.workout?.forEach((workoutItem) => {
                        const exercise = workoutItem?.exercise;
                        const muscleType = exercise?.muscleType;
                        const sets = Number(workoutItem?.sets) || 0;
                        const reps = Number(workoutItem?.reps) || 0;
                        const weight = Number(workoutItem?.weight) || 0;
                        const volume = sets * reps * weight;

                        if (muscleType) {
                            if (!muscleData[muscleType]) muscleData[muscleType] = {};
                            if (!muscleData[muscleType][weekLabel])
                                muscleData[muscleType][weekLabel] = 0;
                            muscleData[muscleType][weekLabel] += volume;
                        }
                    });
                });
            });

            const formattedData = {};
            Object.keys(muscleData).forEach((muscle) => {
                formattedData[muscle] = Object.keys(muscleData[muscle]).map((week) => ({
                    week,
                    volume: muscleData[muscle][week],
                }));
            });

            setMuscleDataByWeek(formattedData);
        } catch (error) {
            console.error("Error processing volume per muscle by week:", error);
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

    const maxVolume = Math.max(
        ...Object.values(muscleDataByWeek).flatMap((data) =>
            data.map((d) => d.volume)
        ),
        0
    );

    const yAxisMax = Math.ceil(maxVolume / 1000) * 1000;

    const formatYAxis = (tick) => (tick >= 1000 ? `${tick / 1000}k` : tick);

    return {
        fullWorkoutPlan,
        isLoading,
        muscleDataByWeek,
        muscleGroups,
        groupsWithMuscleLabels,
        yAxisMax,
        formatYAxis,
    };
};
