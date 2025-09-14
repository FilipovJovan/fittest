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
    enum: ["reps", "workouts", "streaks"],
  },
  target: Number,
  startDate: Date,
  endDate: Date,
  reward: {
    xp: Number,
    currency: Number,
  },
});

export default mongoose.model("Challenge", ChallengeSchema);
