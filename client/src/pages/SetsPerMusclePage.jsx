import React, { useEffect, useState } from "react";
import { useWorkout } from "../../context/WorkoutContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import Wrapper from "../assets/Wrappers/ProgressPage";

const SetsPerMusclePage = () => {
  const { fullWorkoutPlan, isLoading } = useWorkout();
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

  if (isLoading) {
    return (
      <div className="w-full min-h-[500px] p-4">
        <h2 className="text-2xl font-bold mb-4">Sets Per Muscle Group</h2>
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="h-48 bg-gray-200 rounded"></div>
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="h-48 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!fullWorkoutPlan?.workoutProgram?.[0]?.weeks) {
    return (
      <div className="w-full min-h-[500px] p-4">
        <h2 className="text-2xl font-bold mb-4">Sets Per Muscle Group</h2>
        <p>No workout plan found. Please ensure a workout plan is set up.</p>
      </div>
    );
  }

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
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 text-white p-3 rounded-lg shadow-lg">
          <p className="font-semibold">{label}</p>
          <p>Sets: {payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Wrapper>
      <div className="progress-container">
        {Object.keys(muscleGroups).map((group) => {
          const musclesInGroup = muscleGroups[group].filter(
            (muscle) => muscleDataByWeek[muscle]
          );

          if (musclesInGroup.length === 0) return null;

          return (
            <div key={group} className="muscle-group-container">
              <h3 className="muscle-group-title">{group} muscles</h3>
              {musclesInGroup.map((muscle) => (
                <div key={muscle} className="muscle-card">
                  {groupsWithMuscleLabels.includes(group) && (
                    <h4 className="muscle-title">{muscle}</h4>
                  )}
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart
                      data={muscleDataByWeek[muscle]}
                      margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
                    >
                      <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3" />
                      <XAxis
                        dataKey="week"
                        stroke="#666"
                        fontSize={12}
                        tickLine={false}
                        axisLine={{ stroke: "#ccc" }}
                      />
                      <YAxis
                        domain={[0, yAxisMax]}
                        stroke="#666"
                        fontSize={12}
                        tickLine={false}
                        axisLine={{ stroke: "#ccc" }}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar
                        dataKey="sets"
                        fill="#8884d8"
                        radius={[4, 4, 0, 0]}
                        barSize={30}
                        animationDuration={1000}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default SetsPerMusclePage;
