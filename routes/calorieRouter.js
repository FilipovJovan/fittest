import express from "express";
import { calculateUserCaloriesAndMacros } from "../controllers/calculationController.js";
import {
  suggestFoods,
  suggestDailyPlan,
  getMeals,
} from "../controllers/foodSuggestionController.js";

const router = express.Router();

router.post("/calculate/:userId", calculateUserCaloriesAndMacros);
router.post("/suggestFoods", suggestFoods);
router.post("/suggestDailyPlan", suggestDailyPlan);
router.get("/get-meals", getMeals);

export default router;
