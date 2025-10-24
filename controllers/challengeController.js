import Gamification from "../models/GamificationSchema.js";
import Challenge from "../models/ChallengeSchema.js";
import User from "../models/UserModel.js";

export const createChallenge = async (req, res) => {
  try {
    const { name, description, xpReward, condition } = req.body;
    const challenge = await Challenge.create({
      name,
      description,
      xpReward,
      condition,
    });
    res.status(201).json(challenge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const enrollChallenge = async (req, res) => {
  try {
    const { userId, challengeId } = req.body;
    const gamification = await Gamification.findOne({ userId });

    if (!gamification) {
      return res
        .status(404)
        .json({ message: "Gamification profile not found" });
    }

    if (
      !gamification.challenges.some(
        (c) => c.challengeId.toString() === challengeId
      )
    ) {
      gamification.challenges.push({
        challengeId,
        progress: 0,
        completed: false,
      });
      await gamification.save();
    }

    res.json({
      message: "User enrolled in challenge",
      challenges: gamification.challenges,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateChallengeProgress = async (req, res) => {
  try {
    const { userId, challengeId, progress } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const gamification = await Gamification.findOne({ userId });
    if (!gamification) {
      return res
        .status(404)
        .json({ message: "Gamification profile not found" });
    }

    const challenge = gamification.challenges.find(
      (c) => c.challengeId.toString() === challengeId
    );
    if (!challenge) {
      return res.status(404).json({ message: "Challenge not found for user" });
    }

    const challengeDef = await Challenge.findById(challengeId);
    if (!challengeDef) {
      return res
        .status(404)
        .json({ message: "Challenge definition not found" });
    }

    if (challengeDef.endDate && new Date() > challengeDef.endDate) {
      return res.status(400).json({ message: "Challenge expired" });
    }

    // calculate progress increment based on the source
    let progressIncrement = progress || 0;

    switch (challengeDef.progressSource) {
      case "loginStreak":
        progressIncrement = gamification.streak?.current || 0;
        break;
      case "workoutsCompleted":
        progressIncrement = gamification.stats?.workoutsCompleted || 0;
        break;
      case "repsCompleted":
        progressIncrement = gamification.stats?.totalReps || 0;
        break;
      case "daysActive":
        progressIncrement = gamification.stats?.activeDays || 0;
        break;
      case "custom":
      default:
        break;
    }

    // update challenge progress
    challenge.progress = progressIncrement;

    // collect frontend events
    const events = [];

    // check completion
    if (!challenge.completed && challenge.progress >= challengeDef.target) {
      challenge.completed = true;

      // reward handling
      let xpGained = 0;
      let currencyGained = 0;

      if (challengeDef.reward?.xp) {
        gamification.xp += challengeDef.reward.xp;
        xpGained = challengeDef.reward.xp;
        events.push({ type: "xpEarned", amount: xpGained });
      }

      if (challengeDef.reward?.currency) {
        gamification.currency =
          (gamification.currency || 0) + challengeDef.reward.currency;
        currencyGained = challengeDef.reward.currency;
        events.push({ type: "currencyEarned", amount: currencyGained });
      }

      // notify challenge completion
      events.push({
        type: "challengeCompleted",
        name: challengeDef.name,
        xp: xpGained,
        currency: currencyGained,
      });
    }

    await gamification.save();

    res.json({
      message: "Challenge progress updated",
      challenges: gamification.challenges,
      events,
    });
  } catch (err) {
    console.error("Error updating challenge:", err);
    res.status(500).json({ message: err.message });
  }
};
