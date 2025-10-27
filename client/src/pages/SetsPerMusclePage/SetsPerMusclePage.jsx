import React from "react";
import "./SetsPerMusclePage.scss";
import {useSetsPerMusclePage} from "./SetsPerMusclePage.logic";
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const SetsPerMusclePage = () => {
    const {
        isLoading,
        fullWorkoutPlan,
        muscleGroups,
        muscleDataByWeek,
        groupsWithMuscleLabels,
        yAxisMax
    } = useSetsPerMusclePage();
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
                                        <BarChart
                                            data={muscleDataByWeek[muscle]}
                                            margin={{top: 10, right: 20, left: 0, bottom: 10}}
                                        >
                                            <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3"/>
                                            <XAxis
                                                dataKey="week"
                                                stroke="#666"
                                                fontSize={12}
                                                tickLine={false}
                                                axisLine={{stroke: "#ccc"}}
                                            />
                                            <YAxis
                                                domain={[0, yAxisMax]}
                                                stroke="#666"
                                                fontSize={12}
                                                tickLine={false}
                                                axisLine={{stroke: "#ccc"}}
                                            />
                                            <Tooltip/>
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
        </>
    );
};

export default SetsPerMusclePage;
