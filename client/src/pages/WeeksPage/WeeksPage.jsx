// eslint-disable-next-line no-unused-vars
import React from "react";
import "./WeeksPage.scss";
import {useWeeksPage} from "./WeeksPage.logic";
import WorkoutWeekCard from "../../components/WorkoutWeekCard.jsx";

const WeeksPage = (workoutProgram) => {
    const {navigate} = useWeeksPage();
    if (!Array.isArray(workoutProgram) || workoutProgram.length === 0) {
        return <p>No workout program found.</p>;
    }

    return (
        <>
            {workoutProgram.map((program) => (
                <div key={program._id}>
                    <h2>{program.workoutSplitName}</h2>
                    {program.weeks.map((week, index) => (
                        <WorkoutWeekCard
                            key={week._id}
                            week={week}
                            weekNumber={index + 1}
                            onClick={() => navigate(`week/${week._id}`, {state: {week}})}
                        />
                    ))}
                </div>
            ))}
        </>
    );
};

export default WeeksPage;
