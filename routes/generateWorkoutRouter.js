import { Router } from "express";
import { generateWorkout } from "../fitnessApp.js";
import { getExercisesWeight } from "../workoutAlgorithm/weightAlgorithm.js";
import { progressTracker } from "../workoutAlgorithm/progressAlgorithm.js";
const router = Router();

router.post("/workout", generateWorkout);
router.post("/workout/weight-exercises", getExercisesWeight);
router.post("/workout/progress", progressTracker);

export default router;
