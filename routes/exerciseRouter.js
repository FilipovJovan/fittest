import { Router } from "express";
const router = Router();

import { getAllExercises } from "../controllers/exerciseController.js";
import { getWorkout } from "../controllers/workoutController.js";

router.route("/").get(getAllExercises);
router.route("/workout").get(getWorkout);

export default router;
