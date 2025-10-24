import { Router } from "express";
import {
  createGamificationProfile,
  dailyLogin,
  getProfile,
  logWorkout,
} from "../controllers/gamificationController.js";
import {
  createBadge,
  getBadges,
  awardBadge,
} from "../controllers/badgeController.js";
import {
  createChallenge,
  getChallenges,
  enrollChallenge,
  updateChallengeProgress,
} from "../controllers/challengeController.js";
import {
  addReward,
  getRewards,
  getUserRewards,
} from "../controllers/rewardsController.js";

const router = Router();

// gamification routes
router.post("/log-workout/:userId", logWorkout);
router.post("/daily-login/:userId", dailyLogin);
router.post("/create-profile/:userId", createGamificationProfile);
router.get("/profile/:userId", getProfile);

// badges routes
router.post("/badge/create", createBadge);
router.get("/badge/get", getBadges);
router.post("/badge/award", awardBadge);

// challenge routes
router.post("/challenge/create", createChallenge);
router.get("/challenge/get", getChallenges);
router.post("/challenge/enroll", enrollChallenge);
router.post("/challenge/update", updateChallengeProgress);

// reward routes
router.post("/reward/create", addReward);
router.get("/reward/get", getRewards);
router.get("/rewards/get-user-reward/:userId", getUserRewards);

export default router;
