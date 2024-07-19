// workoutSchema.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const exerciseReferenceSchema = new Schema({
  exercise: {
    type: Object,
    ref: "Exercise", // Reference the Exercise model
    required: true,
    validate: {
      validator: async function (value) {
        const exercise = await mongoose.model("Exercise").findById(value);
        return exercise !== null;
      },
      message: "Invalid exercise ID",
    },
  },
  sets: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  rest: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    default: 0,
  },
});

const workoutDaySchema = new Schema({
  workout: [exerciseReferenceSchema],
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const workoutSchema = new Schema({
  /*user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },*/
  weeks: [
    {
      days: [workoutDaySchema],
    },
  ],
  currentDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

export default Workout;
