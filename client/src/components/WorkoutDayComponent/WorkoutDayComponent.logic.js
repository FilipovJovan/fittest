// Logic for WorkoutDayComponent
import {useNavigate, useParams} from "react-router-dom";

export const useWorkoutDayComponent = ({ day, workoutId }) => {
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
  return {handleClick, day};
};
