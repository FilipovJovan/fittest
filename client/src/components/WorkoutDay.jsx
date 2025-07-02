import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const WorkoutDayCard = ({ day, workoutId }) => {
  const { weekId } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`day/${day._id}`, {
      state: {
        day,
        weekId,
        workoutId,
      },
    });
  };

  return (
    <div className="day-card" onClick={handleClick}>
      <h4>{day.name}</h4>
    </div>
  );
};
d;

export default WorkoutDayCard;
