import React, { useEffect, useState } from "react";
import { useWorkout } from "../../context/WorkoutContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import Wrapper from "../assets/Wrappers/ProgressPage";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#2d3748",
          color: "#fff",
          padding: "0.75rem",
          borderRadius: "0.25rem",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <p>{`Week ${label.replace(
          "Week ",
          ""
        )}: ${payload[0].value.toLocaleString()} volume`}</p>
      </div>
    );
  }
  return null;
};

// Main Component
const VolumePerMusclePage = () => {
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
            const reps = Number(workoutItem?.reps) || 0;
            const weight = Number(workoutItem?.weight) || 0;
            const volume = sets * reps * weight;

            if (muscleType) {
              if (!muscleData[muscleType]) {
                muscleData[muscleType] = {};
              }
              if (!muscleData[muscleType][weekLabel]) {
                muscleData[muscleType][weekLabel] = 0;
              }
              muscleData[muscleType][weekLabel] += volume;
            } else {
              // console.log("No muscleType found in exercise:", workoutItem);
            }
          });
        });
      });

      const formattedData = {};
      Object.keys(muscleData).forEach((muscle) => {
        formattedData[muscle] = Object.keys(muscleData[muscle]).map((week) => ({
          week: week, // Ensure week is a string like "Week 1"
          volume: muscleData[muscle][week],
        }));
      });

      // console.log("Formatted muscleDataByWeek (Volume):", formattedData);
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

  // Calculate max volume for Y-axis domain
  const maxVolume = Math.max(
    ...Object.values(muscleDataByWeek).flatMap((data) =>
      data.map((d) => d.volume)
    ),
    0
  );
  const yAxisMax = Math.ceil(maxVolume / 1000) * 1000;

  // Custom Y-axis tick formatter to show "k" for thousands
  const formatYAxis = (tick) => {
    if (tick >= 1000) {
      return `${tick / 1000}k`;
    }
    return tick;
  };

  if (isLoading) {
    return (
      <Wrapper>
        <div className="loading-container">
          <h2 className="loading-title">Volume Per Muscle Group</h2>
          <div className="loading-pulse">
            <div className="loading-bar loading-bar-short animate-pulse"></div>
            <div className="loading-bar loading-bar-tall animate-pulse"></div>
            <div className="loading-bar loading-bar-short animate-pulse"></div>
            <div className="loading-bar loading-bar-tall animate-pulse"></div>
          </div>
        </div>
      </Wrapper>
    );
  }

  if (!fullWorkoutPlan?.workoutProgram?.[0]?.weeks) {
    return (
      <Wrapper>
        <div className="error-container">
          <h2 className="error-title">Volume Per Muscle Group</h2>
          <p className="error-message">
            No workout plan found. Please ensure a workout plan is set up.
          </p>
        </div>
      </Wrapper>
    );
  }

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
                    <LineChart
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
                        tickFormatter={formatYAxis}
                        stroke="#666"
                        fontSize={12}
                        tickLine={false}
                        axisLine={{ stroke: "#ccc" }}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Line
                        type="monotone"
                        dataKey="volume"
                        stroke="#00C4B4"
                        strokeWidth={3}
                        dot={{ r: 4, strokeWidth: 2, fill: "#fff" }}
                        activeDot={{ r: 6, fill: "#00C4B4", stroke: "#fff" }}
                        animationDuration={1000}
                      />
                    </LineChart>
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

export default VolumePerMusclePage;
