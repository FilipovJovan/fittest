import { Router } from "express";
import { generateWorkout } from "../fitnessApp.js";
import { getExercisesWeight } from "../weightAlgorithm.js";
const router = Router();

router.post("/workout", generateWorkout);
router.post("/workout/weight-exercises", getExercisesWeight);

export default router;
