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

const WeeklyVolumePage = () => {
  const { fullWorkoutPlan, isLoading } = useWorkout();
  const [weeklyVolumeData, setWeeklyVolumeData] = useState([]);

  useEffect(() => {
    if (isLoading || !fullWorkoutPlan?.workoutProgram?.[0]?.weeks) {
      console.log("Waiting for data or invalid fullWorkoutPlan:", {
        isLoading,
        fullWorkoutPlan,
      });
      return;
    }

    const volumeData = {};

    try {
      fullWorkoutPlan.workoutProgram[0].weeks.forEach((week, weekIndex) => {
        const weekLabel = `Week ${weekIndex + 1}`;

        if (!week.days) {
          console.log("No days found in week:", week);
          return;
        }

        let weeklyVolume = 0;

        week.days.forEach((day) => {
          if (!day.workout) {
            console.log("No workout found in day:", day);
            return;
          }

          day.workout.forEach((workoutItem) => {
            const sets = Number(workoutItem?.sets) || 0;
            const reps = Number(workoutItem?.reps) || 0;
            const weight = Number(workoutItem?.weight) || 0;
            const volume = sets * reps * weight;
            weeklyVolume += volume;
          });
        });

        volumeData[weekLabel] = weeklyVolume;
      });

      // Format data for recharts
      const formattedData = Object.keys(volumeData).map((week) => ({
        week,
        volume: volumeData[week],
      }));

      console.log("Formatted weeklyVolumeData:", formattedData);
      setWeeklyVolumeData(formattedData);
    } catch (error) {
      console.error("Error processing weekly volume:", error);
    }
  }, [fullWorkoutPlan, isLoading]);

  if (isLoading) {
    return (
      <div className="w-full min-h-[500px] p-4">
        <h2 className="text-2xl font-bold mb-4">Weekly Volume</h2>
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="h-48 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!fullWorkoutPlan?.workoutProgram?.[0]?.weeks) {
    return (
      <div className="w-full min-h-[500px] p-4">
        <h2 className="text-2xl font-bold mb-4">Weekly Volume</h2>
        <p>No workout plan found. Please ensure a workout plan is set up.</p>
      </div>
    );
  }

  // Calculate max volume for Y-axis domain
  const maxVolume = Math.max(...weeklyVolumeData.map((d) => d.volume), 0);
  const yAxisMax = Math.ceil(maxVolume / 1000) * 1000;

  // Custom Y-axis tick formatter to show "k" for thousands
  const formatYAxis = (tick) => {
    if (tick >= 1000) {
      return `${tick / 1000}k`;
    }
    return tick;
  };

  // Custom tooltip for better UX
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 text-white p-3 rounded-lg shadow-lg">
          <p className="font-semibold">{label}</p>
          <p>Volume: {payload[0].value.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Wrapper>
      <div className="progress-container">
        <div className="weekly-volume-container">
          <h3 className="weekly-volume-title">Weekly volume</h3>
          <div className="volume-card">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={weeklyVolumeData}
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
                <Bar
                  dataKey="volume"
                  fill="#3B82F6"
                  radius={[4, 4, 0, 0]}
                  barSize={40}
                  animationDuration={1000}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default WeeklyVolumePage;
