import express from "express";
import { calculateUserCaloriesAndMacros } from "../controllers/calculationController.js";
import {
  suggestFoods,
  suggestDailyPlan,
} from "../controllers/foodSuggestionController.js";

const router = express.Router();

router.post("/calculate/:userId", calculateUserCaloriesAndMacros);

router.post("/suggestFoods", suggestFoods);
router.post("/suggestDailyPlan", suggestDailyPlan);

export default router;
