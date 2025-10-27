import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import { useVolumePerMuscleLogic } from "./VolumePerMusclePage.logic";

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p>{`Week ${label.replace("Week ", "")}: ${payload[0].value.toLocaleString()} volume`}</p>
            </div>
        );
    }
    return null;
};

const VolumePerMusclePage = () => {
    const {
        fullWorkoutPlan,
        isLoading,
        muscleDataByWeek,
        muscleGroups,
        groupsWithMuscleLabels,
        yAxisMax,
        formatYAxis,
    } = useVolumePerMuscleLogic();

    if (isLoading) {
        return (
            <>
                <div className="loading-container">
                    <h2 className="loading-title">Volume Per Muscle Group</h2>
                    <div className="loading-pulse">
                        <div className="loading-bar loading-bar-short animate-pulse"></div>
                        <div className="loading-bar loading-bar-tall animate-pulse"></div>
                        <div className="loading-bar loading-bar-short animate-pulse"></div>
                        <div className="loading-bar loading-bar-tall animate-pulse"></div>
                    </div>
                </div>
            </>
        );
    }

    if (!fullWorkoutPlan?.workoutProgram?.[0]?.weeks) {
        return (
            <>
                <div className="error-container">
                    <h2 className="error-title">Volume Per Muscle Group</h2>
                    <p className="error-message">
                        No workout plan found. Please ensure a workout plan is set up.
                    </p>
                </div>
            </>
        );
    }

    return (
        <>
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
        </>
    );
};

export default VolumePerMusclePage;
