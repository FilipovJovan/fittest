import Gamification from "../models/GamificationSchema.js";
import Badge from "../models/BadgeSchema.js";

export const createBadge = async (req, res) => {
  try {
    const { name, description, condition } = req.body;
    const badge = await Badge.create({ name, description, condition });
    res.status(201).json(badge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBadges = async (req, res) => {
  try {
    const badges = await Badge.find();
    res.json(badges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const awardBadge = async (req, res) => {
  try {
    const { userId, badgeId } = req.body;
    const gamification = await Gamification.findOne({ userId });

    if (!gamification) {
      return res
        .status(404)
        .json({ message: "Gamification profile not found" });
    }

    if (!gamification.badges.some((b) => b.badgeId.toString() === badgeId)) {
      gamification.badges.push({ badgeId, earnedAt: new Date() });
      await gamification.save();
    }

    res.json({ message: "Badge awarded", badges: gamification.badges });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
