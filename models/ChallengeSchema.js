import mongoose from "mongoose";

const ChallengeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["solo", "group", "global"],
    default: "solo",
  },
  metric: {
    type: String,
    enum: ["reps", "workouts", "streaks", "days", "weeks", "sets"],
  },
  target: Number,
  startDate: Date,
  endDate: Date,
  reward: {
    xp: Number,
    currency: Number,
  },
  progressSource: {
    type: String,
    enum: [
      "loginStreak",
      "workoutsCompleted",
      "repsCompleted",
      "daysActive",
      "custom",
    ],
    default: "loginStreak",
  },
});

export default mongoose.model("Challenge", ChallengeSchema);
