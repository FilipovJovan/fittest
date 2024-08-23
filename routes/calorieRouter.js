import express from "express";
import { calculateUserCaloriesAndMacros } from "../controllers/calculationController.js";

const router = express.Router();

router.post("/calculate/:userId", calculateUserCaloriesAndMacros);

export default router;
