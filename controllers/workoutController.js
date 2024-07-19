import Workout from "../models/WorkoutSchema.js";
import { StatusCodes } from "http-status-codes";

export const getWorkout = async (req, res) => {
  const queryObject = {
    createdBy: req.user.userId,
  };

  console.log(queryObject);
  const workoutProgram = await Workout.find(queryObject);
  console.log(workoutProgram);
  res.status(StatusCodes.OK).json({ workoutProgram });
};
