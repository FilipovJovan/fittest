import mongoose from "mongoose";

const GamificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "User", unique: true },
  xp: {
    type: Number,
    default: 0,
  },
  level: {
    type: Number,
    default: 1,
  },
  streak: {
    current: {
      type: Number,
      default: 0,
    },
    longest: {
      type: Number,
      default: 0,
    },
    lastWorkoutDate: Date,
  },
  lastLogin: {
    type: Date,
  },
  badges: [
    {
      badgeId: {
        type: mongoose.Types.ObjectId,
        ref: "Badge",
      },
      earnedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  challenges: [
    {
      challengeId: {
        type: mongoose.Types.ObjectId,
        ref: "Challenge",
      },
      progress: {
        type: Number,
        default: 0,
      },
      completed: {
        type: Boolean,
        default: false,
      },
    },
  ],
  currency: {
    type: Number,
    default: 0,
  },
  rewards: [{ rewardId: mongoose.Types.ObjectId, unlockedAt: Date }],
});

export default mongoose.model("Gamification", GamificationSchema);
