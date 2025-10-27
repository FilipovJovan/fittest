import React from "react";
import "./ProgressPage.scss";
import {useProgressPage} from "./ProgressPage.logic";
import ProgressStat from "../../components/ProgressStat.jsx";
import {AlertTriangle, ArrowLeft, CheckCircle, Dumbbell, FastForward} from "lucide-react";
import ProgressLinks from "../../components/ProgressLinks.jsx";
import {Outlet} from "react-router-dom";

const ProgressPage = () => {
    const {
        isMainPage,
        splitName,
        totalWorkouts,
        completedWorkouts,
        skippedWorkouts,
        workoutsLeft,
        navigate
    } = useProgressPage();
    return (
        <>
            {isMainPage ? (
                <>
                    <h2>Your mesocycle</h2>
                    <h5>{splitName || "No workout split name found"}</h5>

                    <div className="max-w-sm mx-auto p-3 mb-2 progress-container">
                        <div className="progress-stats">
                            <h3 className="text-xl font-bold mb-4">Workouts</h3>
                            <ProgressStat
                                icon={<Dumbbell size={20}/>}
                                label="Total number"
                                number={totalWorkouts}
                            />
                            <ProgressStat
                                icon={<CheckCircle size={20} className="finished"/>}
                                label="Completed"
                                number={completedWorkouts}
                            />
                            <ProgressStat
                                icon={<FastForward size={20} className="skipped"/>}
                                label="Skipped"
                                number={skippedWorkouts}
                            />
                            <ProgressStat
                                icon={<AlertTriangle size={20} className="not-finished"/>}
                                label="Not finished"
                                number={workoutsLeft}
                            />
                        </div>
                        <div className="progress-stats">
                            <ProgressLinks
                                label={"Sets per muscle group"}
                                route={"/dashboard/progress/sets"}
                            />
                            <ProgressLinks
                                label={"Volume per muscle group"}
                                route={"/dashboard/progress/volume"}
                            />
                            <ProgressLinks
                                label={"Weekly volume"}
                                route={"/dashboard/progress/weekly"}
                            />
                        </div>
                    </div>
                </>
            ) : (
                <div className="relative">
                    <button
                        onClick={() => navigate("/dashboard/progress")}
                        className="mb-4 flex items-center text-blue-500 hover:text-blue-700 bg-gray-100 p-2 rounded"
                    >
                        <ArrowLeft size={20} className="mr-2"/>
                        Back
                    </button>
                    <Outlet/>
                </div>
            )}
        </>
    );
};

export default ProgressPage;
