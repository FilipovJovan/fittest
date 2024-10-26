import { Router } from "express";
import { generateWorkout } from "../fitnessApp.js";
import { getExercisesWeight } from "../workoutAlgorithm/weightAlgorithm.js";
import { getExercisesSettings } from "../workoutAlgorithm/weightAlgorithmSecondGroup.js";
import { progressTracker } from "../workoutAlgorithm/progressAlgorithm.js";
import {
  addExerciseToWorkout,
  archiveWorkout,
  isWorkoutFinished,
  updateExerciseInWorkout,
  updatingUserValues,
  workoutDelete,
} from "../controllers/workoutController.js";
const router = Router();

router.post("/workout", generateWorkout);
router.post("/workout/weight-exercises", getExercisesWeight);
router.post("/workout/weight-exercises/second-group", getExercisesSettings);
router.post("/workout/progress", progressTracker);
router.patch(
  "/workout/change-exercise/:workoutId/:exerciseId",
  updateExerciseInWorkout
);
router.post("/workout/add-exercise/:workoutId", addExerciseToWorkout);
router.patch("/workout/is-workout-finished", isWorkoutFinished);
router.patch("/workout/user-values", updatingUserValues);
router.delete("/workout/delete-workout/:workoutId", workoutDelete);
router.post("/workout/archive-workout/:workoutId", archiveWorkout);

export default router;
