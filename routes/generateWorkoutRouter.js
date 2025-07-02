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
  getWorkout,
  finishWorkoutDay,
  getCurrentWorkoutDay,
} from "../controllers/workoutController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";
import {
  getSetsPerMuscleGroup,
  getVolumePerMuscleGroup,
  getWeeklyVolume,
} from "../workoutAlgorithm/progressAlgorithm.js";
const router = Router();

//GET routes
router.get("/workout/get-workout", authenticateUser, getWorkout);
router.get("/workout/get-current-workout", getCurrentWorkoutDay);
router.get("/workout/progress/sets/:workoutId", getSetsPerMuscleGroup);
router.get("/workout/progress/volume/:workoutId", getVolumePerMuscleGroup);
router.get("/workout/progress/weekly/:workoutId", getWeeklyVolume);

//POST routes
router.post("/workout", generateWorkout);
router.post("/workout/weight-exercises", getExercisesWeight);
router.post("/workout/weight-exercises/second-group", getExercisesSettings);
router.post("/workout/progress", progressTracker);
router.post("/workout/add-exercise/:workoutId", addExerciseToWorkout);
router.post("/workout/archive-workout/:workoutId", archiveWorkout);

//PATCH routes
router.patch(
  "/workout/change-exercise/:workoutId/:exerciseId",
  updateExerciseInWorkout
);
router.patch("/workout/is-workout-finished", isWorkoutFinished);
router.patch("/workout/user-values", updatingUserValues);

//PUT routes
router.put("/workout/:id/finish-day", finishWorkoutDay);

//DELETE routes
router.delete("/workout/delete-workout/:workoutId", workoutDelete);

export default router;
