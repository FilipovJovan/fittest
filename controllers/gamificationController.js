import Gamification from "../models/GamificationSchema.js";
import Badge from "../models/BadgeSchema.js";
import Challenge from "../models/ChallengeSchema.js";
import { checkAwards } from "./rewardsController.js";

export async function awardXp(gamification, amount) {
  gamification.xp += amount;
  gamification.level = calculateLevel(gamification.xp);

  await checkAwards(gamification);
  await gamification.save();
  return gamification;
}

function calculateLevel(xp) {
  let level = 1;
  let threshold = 500;
  let increment = 50;

  while (xp >= threshold) {
    level++;
    threshold += 500 + (level - 1) * increment;
  }

  return level;
}

export const createGamificationProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const newProfile = new Gamification({
      userId,
      xp: 0,
      level: 1,
      streak: {
        current: 0,
        longest: 0,
        lastWorkoutDate: null,
      },
      badges: [],
      challenges: [],
    });
    await newProfile.save();
    res.json(newProfile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const logWorkout = async (req, res) => {
  try {
    const { userId } = req.params;
    const gamification = await Gamification.findOne({ userId });

    if (!gamification) {
      return res
        .status(404)
        .json({ message: "Gamification profile not found!" });
    }

    // XP & streak
    await awardXp(gamification, 40);
    const today = new Date();
    const last = gamification.streak.lastWorkoutDate
      ? new Date(gamification.streak.lastWorkoutDate)
      : null;

    if (last) {
      const diffDays = Math.floor((today - last) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        gamification.streak.current += 1;
      } else if (diffDays > 1) {
        gamification.streak.current = 1;
      }
    } else {
      gamification.streak.current = 1;
    }

    gamification.streak.lastWorkoutDate = today;
    gamification.streak.longest = Math.max(
      gamification.streak.longest,
      gamification.streak.current
    );

    // Badges
    const badges = await Badge.find();
    for (let badge of badges) {
      if (
        badge.condition.type === "workoutsCompleted" &&
        gamification.xp / 40 >= badge.condition.value &&
        !gamification.badges.some(
          (b) => b.badgeId.toString() === badge._id.toString()
        )
      ) {
        gamification.badges.push({ badgeId: badge._id, earnedAt: new Date() });
      }
    }

    // Challenges
    for (let challengeProgress of gamification.challenges) {
      if (!challengeProgress.completed) {
        const challengeDef = await Challenge.findById(
          challengeProgress.challengeId
        );
        challengeProgress.progress += 1;
        if (challengeProgress.progress >= challengeDef.target) {
          challengeProgress.completed = true;
          gamification.xp += challengeDef.reward.xp;
        }
      }
    }

    await gamification.save();

    res.json({
      message: "Workout logged",
      xp: gamification.xp,
      level: gamification.level,
      streak: gamification.streak,
      badges: gamification.badges,
      challenges: gamification.challenges,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const dailyLogin = async (req, res) => {
  try {
    const { userId } = req.params;
    const gamification = await Gamification.findOne({ userId });

    if (!gamification) {
      return res
        .status(404)
        .json({ message: "Gamification profile not found" });
    }

    const today = new Date().toDateString();
    const lastLogin = gamification.lastLogin
      ? gamification.lastLogin.toDateString()
      : null;

    if (lastLogin === today) {
      return res.json({
        message: "Already claimed today's daily login",
        xp: gamification.xp,
        level: gamification.level,
      });
    }

    await awardXp(gamification, 10);
    gamification.lastLogin = new Date();

    await gamification.save();

    res.json({
      message: "Daily login bonus awarded",
      xp: gamification.xp,
      level: gamification.level,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const gamification = await Gamification.findOne({ userId })
      .populate("badges.badgeId")
      .populate("challenges.challengeId")
      .populate("rewards.rewardId");

    if (!gamification) {
      return res
        .status(404)
        .json({ message: "Gamification profile not found!" });
    }

    res.json(gamification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getLeaderboard = async (req, res) => {
  const topUsers = await Gamification.find()
    .sort({ xp: -1 })
    .limit(10)
    .populate("userId", "username avatar");
  res.json(topUsers);
};
