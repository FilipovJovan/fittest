import React from "react";
import "./WorkoutDayComponent.scss";
import { useWorkoutDayComponent } from "./WorkoutDayComponent.logic";

const WorkoutDayComponent = ({ day, workoutId }) => {
  const {handleClick} = useWorkoutDayComponent();
    return (
        <div className="day-card" onClick={handleClick}>
            <h4>{day.name}</h4>
        </div>
    );
};

export default WorkoutDayComponent;
