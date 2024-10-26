import mongoose from "mongoose";

const ArchivedWorkoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  workoutData: { type: Object, required: true },
  label: { type: String, required: true },
  startDate: { type: Date },
  endDate: { type: Date },
  completionDate: { type: Date },
});

export default mongoose.model("ArchivedWorkout", ArchivedWorkoutSchema);
