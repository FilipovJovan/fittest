//exercise schema
import mongoose from "mongoose";
import {
  DIFFICULTY,
  EQUIPMENT,
  FREQUENCY,
  MUSCLE_TYPE,
  SPLITS,
  WORKOUT_TYPE,
  EXERCISE_TYPE,
  EXERCISE_IMPORTANCE,
  EXERCISE_TYPE_BY_WEIGHT,
} from "../utils/constants.js";

const ExerciseSchema = new mongoose.Schema(
  {
    name: String,
    workoutType: {
      type: String,
      enum: Object.values(WORKOUT_TYPE),
      default: WORKOUT_TYPE.HYPERTROPHY,
    },
    difficultyLevel: {
      type: String,
      enum: Object.values(DIFFICULTY),
      default: DIFFICULTY.BEGINNER,
    },
    muscleType: {
      type: String,
      enum: Object.values(MUSCLE_TYPE),
    },
    equipment: {
      type: String,
      enum: Object.values(EQUIPMENT),
      default: EQUIPMENT.FULL_EQUIPMENT,
    },
    exerciseType: {
      type: String,
      enum: Object.values(EXERCISE_TYPE),
    },
    exerciseTypeByWeight: {
      type: String,
      enum: Object.values(EXERCISE_TYPE_BY_WEIGHT),
    },
    weight: {
      type: Number,
      default: 0,
    },
    exerciseImportance: {
      type: String,
      enum: Object.values(EXERCISE_IMPORTANCE),
    },
    frequency: {
      type: String,
      enum: Object.values(FREQUENCY),
      //default: FREQUENCY.WORKOUTS_6,
    },
    workoutSplits: {
      type: String,
      enum: Object.values(SPLITS),
      //default: SPLITS.PUSH_PULL_LEGS,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    instructions: String,
  },
  { timestamps: true }
);

export default mongoose.model("Exercise", ExerciseSchema);
