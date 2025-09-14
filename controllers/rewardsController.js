import Reward from "../models/RewardSchema.js";
import Gamification from "../models/GamificationSchema.js";

export async function checkAwards(gamification) {
  const rewards = await Reward.find();

  for (let reward of rewards) {
    const alreadyUnlocked = gamification.rewards.some(
      (r) => r.rewardId.toString() === reward._id.toString()
    );
    if (!alreadyUnlocked && gamification.xp >= reward.xpRequired) {
      gamification.rewards.push({
        rewardId: reward._id,
        unlockedAt: new Date(),
      });
    }
  }
}

export const addReward = async (req, res) => {
  try {
    const { name, description, type, xpRequired, icon, link } = req.body;
    const reward = await Reward.create({
      name,
      description,
      type,
      xpRequired,
      icon,
      link,
    });
    res.status(201).json(reward);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRewards = async (req, res) => {
  try {
    const rewards = await Reward.find();
    res.json(rewards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserRewards = async (req, res) => {
  try {
    const { userId } = req.params;
    const gamification = await Gamification.findOne({ userId }).populate(
      "rewards.rewardId"
    );

    if (!gamification) {
      return res
        .status(404)
        .json({ message: "Gamification profile not found" });
    }

    res.json(gamification.rewards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
