import mongoose from "mongoose";

const BadgeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  metric: {
    type: String,
    enum: ["reps", "workouts", "streaks", "days", "weeks", "sets", "weights"],
  },
  description: String,
  condition: {
    type: {
      type: String,
    },
    value: Number,
  },
  icon: String,
  progressSource: {
    type: String,
    enum: [
      "loginStreak",
      "workoutsCompleted",
      "repsCompleted",
      "weightLifted",
      "setsCompleted",
      "daysActive",
      "custom",
    ],
    default: "loginStreak",
  },
});

export default mongoose.model("Badge", BadgeSchema);
