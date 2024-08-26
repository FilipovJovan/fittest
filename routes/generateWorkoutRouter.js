import { Router } from "express";
import { generateWorkout } from "../fitnessApp.js";
import { getExercisesWeight } from "../workoutAlgorithm/weightAlgorithm.js";
import { progressTracker } from "../workoutAlgorithm/progressAlgorithm.js";
import {
  addExerciseToWorkout,
  updateExerciseInWorkout,
} from "../controllers/workoutController.js";
const router = Router();

router.post("/workout", generateWorkout);
router.post("/workout/weight-exercises", getExercisesWeight);
router.post("/workout/progress", progressTracker);
router.patch(
  "/workout/change-exercise/:workoutId/:exerciseId",
  updateExerciseInWorkout
);
router.post("/workout/add-exercise/:workoutId", addExerciseToWorkout);

export default router;
