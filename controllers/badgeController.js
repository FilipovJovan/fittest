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

export const checkAndAwardBadges = async (userId) => {
  try {
    const gamification = await Gamification.findOne({ userId });
    if (!gamification) throw new Error("Gamification profile not found");

    const badges = await Badge.find();
    const earnedBadgesId = gamification.badges.map((b) => b.badgeId.toString());
    const newlyAwarded = [];

    // Map badge type to gamification stats
    const statMap = {
      workoutsCompleted: gamification.stats.workoutsCompleted,
      streakDays: gamification.streak?.current || 0,
      repsCompleted: gamification.stats.totalReps,
      setsCompleted: gamification.stats.totalSets,
      weightLifted: gamification.stats.totalWeight,
      daysActive: gamification.stats.daysActive,
    };

    for (const badge of badges) {
      const { type, value } = badge.condition || {};
      const userValue = statMap[type];
      const targetValue = value || 1;

      if (userValue !== undefined && userValue >= targetValue) {
        if (!earnedBadgesId.includes(badge._id.toString())) {
          gamification.badges.push({
            badgeId: badge._id,
            earnedAt: new Date(),
          });
          newlyAwarded.push(badge);
        }
      }
    }

    if (newlyAwarded.length > 0) {
      await gamification.save();
      console.log(
        `🏅 Awarded badges: ${newlyAwarded.map((b) => b.name).join(", ")}`
      );
    } else {
      console.log("No new badges earned");
    }

    return newlyAwarded;
  } catch (error) {
    console.error("Error in checkAndAwardBadges:", error.message);
    return [];
  }
};
