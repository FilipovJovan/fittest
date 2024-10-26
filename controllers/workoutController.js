import Workout from "../models/WorkoutSchema.js";
import Exercise from "../models/ExerciseModel.js";
import User from "../models/UserModel.js";
import ArchivedWorkout from "../models/ArchivedWorkoutSchema.js";
import { StatusCodes } from "http-status-codes";

export const getWorkout = async (req, res) => {
  const queryObject = {
    createdBy: req.user.userId,
  };

  console.log(queryObject);
  const workoutProgram = await Workout.find(queryObject);
  console.log(workoutProgram);
  res.status(StatusCodes.OK).json({ workoutProgram });
};

export const addExerciseToWorkout = async (req, res) => {
  try {
    const { week, day, exerciseId, sets, reps, rest, exerciseType } = req.body;
    const { workoutId } = req.params;

    // Find the workout plan by ID
    const workoutPlan = await Workout.findById(workoutId);

    if (!workoutPlan) {
      return res.status(404).json({ message: "Workout plan not found" });
    }

    // Check if the week exists
    if (week < 1 || week > workoutPlan.weeks.length) {
      return res
        .status(404)
        .json({ message: "Week not found in the workout plan" });
    }

    // Find the specific day within the specified week
    const workoutDay = workoutPlan.weeks[week - 1].days[day - 1]; // Adjust for 0-based index

    if (!workoutDay) {
      return res
        .status(404)
        .json({ message: "Day not found in the workout plan" });
    }

    // Fetch the exercise details from the Exercise model
    const exercise = await Exercise.findById(exerciseId);

    if (!exercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }

    // Add the new exercise to the day's workout with full details
    workoutDay.workout.push({
      exercise: {
        _id: exercise._id,
        name: exercise.name,
        muscleType: exercise.muscleType,
        equipment: exercise.equipment,
        instructions: exercise.instructions,
      },
      sets,
      reps,
      rest,
      exerciseType,
    });

    // Save the updated workout plan
    await workoutPlan.save();

    res
      .status(200)
      .json({ message: "Exercise added successfully", workoutPlan });
  } catch (error) {
    console.error("Error adding exercise:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller to update an existing exercise in the workout plan
export const updateExerciseInWorkout = async (req, res) => {
  try {
    const { week, day, newExerciseId, sets, reps, rest, exerciseType } =
      req.body;
    const { workoutId, exerciseId } = req.params;

    // Find the workout plan by ID
    const workoutPlan = await Workout.findById(workoutId);

    if (!workoutPlan) {
      return res.status(404).json({ message: "Workout plan not found" });
    }

    // Check if the week exists
    if (week < 1 || week > workoutPlan.weeks.length) {
      return res
        .status(404)
        .json({ message: "Week not found in the workout plan" });
    }

    // Find the specific day within the specified week
    const workoutDay = workoutPlan.weeks[week - 1].days[day - 1]; // Adjust for 0-based index

    if (!workoutDay) {
      return res
        .status(404)
        .json({ message: "Day not found in the workout plan" });
    }

    // Find the exercise in the workout day
    const exerciseIndex = workoutDay.workout.findIndex(
      (exerciseEntry) => exerciseEntry.exercise._id.toString() === exerciseId
    );

    if (exerciseIndex === -1) {
      return res
        .status(404)
        .json({ message: "Exercise not found in the workout plan" });
    }

    // Fetch the new exercise details from the Exercise model
    const newExercise = await Exercise.findById(newExerciseId);

    if (!newExercise) {
      return res.status(404).json({ message: "New exercise not found" });
    }

    // Update the exercise with new details
    workoutDay.workout[exerciseIndex] = {
      exercise: {
        _id: newExercise._id,
        name: newExercise.name,
        muscleType: newExercise.muscleType,
        equipment: newExercise.equipment,
        instructions: newExercise.instructions,
      },
      sets,
      reps,
      rest,
      exerciseType,
    };

    // Save the updated workout plan
    await workoutPlan.save();

    res
      .status(200)
      .json({ message: "Exercise updated successfully", workoutPlan });
  } catch (error) {
    console.error("Error updating exercise:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const isWorkoutFinished = async (req, res) => {
  try {
    const { workoutId, weekIndex, dayIndex, finishedType } = req.body;

    const workoutPlan = await Workout.findById(workoutId);

    if (!workoutPlan) {
      return res.status(404).json({ message: "Workout plan not found" });
    }

    const workoutDay = workoutPlan.weeks[weekIndex].days[dayIndex];

    if (!workoutDay) {
      return res
        .status(404)
        .json({ message: "Day not found in the workout plan" });
    }

    workoutDay.finishedType = finishedType;
    workoutDay.isFinished = true;

    await workoutPlan.save();

    res.status(200).json({ message: "Values updated successfully" });
  } catch (error) {
    console.error("Error updating values:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updatingUserValues = async (req, res) => {
  try {
    const {
      weight,
      height,
      muscleInjuries = "none", // default to "none" if not provided
      jointInjuries = "none", // default to "none" if not provided
      split,
      utcOffset,
      userId,
    } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Ensure `userValues` object exists
    if (!user.userValues) {
      user.userValues = {};
    }

    // Update user values
    user.userValues.height = height;
    user.userValues.weight = weight;
    user.userValues.muscleInjuries =
      muscleInjuries || user.userValues.muscleInjuries || "none";
    user.userValues.jointInjuries =
      jointInjuries || user.userValues.jointInjuries || "none";
    user.userValues.split = split;
    user.userValues.utcOffset = utcOffset;

    // Mark the nested `userValues` object as modified so that Mongoose will save it
    user.markModified("userValues");

    await user.save();

    res.status(200).json({ message: "Values updated successfully" });
  } catch (error) {
    console.error("Error updating values:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const workoutDelete = async (req, res) => {
  try {
    const { workoutId } = req.params;

    // Delete the workout plan from the active workouts
    const result = await Workout.deleteOne({ _id: workoutId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.status(200).json({ message: "Workout deleted successfully" });
  } catch (error) {
    console.error("Error deleting workout:", error);
    res.status(500).json({ message: "Failed to delete workout" });
  }
};

export const archiveWorkout = async (req, res) => {
  try {
    const { workoutId } = req.params;

    // Find the workout by ID
    const workout = await Workout.findById(workoutId);

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    // Create an archived workout entry
    const archivedWorkout = new ArchivedWorkout({
      userId: workout.createdBy,
      workoutData: workout.toObject(), // Copy all workout details
      label: `Workout ${workout.label}`,
      startDate: workout.startDate,
      endDate: new Date(), // Set the archive date
    });

    await archivedWorkout.save();

    // Remove the workout from the active collection
    await Workout.deleteOne({ _id: workoutId });

    res
      .status(200)
      .json({ message: "Workout archived successfully", archivedWorkout });
  } catch (error) {
    console.error("Error archiving workout:", error);
    res.status(500).json({ message: "Failed to archive workout" });
  }
};
