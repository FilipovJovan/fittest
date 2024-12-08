import {
  getSetsRepsRestByWorkoutType,
  getRandomNumberInRange,
  splitWorkout,
  filterExercisesByEquipment,
  selectRandomExercise,
} from "../fitnessApp.js";

const fullBody4x = (
  day,
  equipmentType,
  workoutWithSetsRepsRest,
  workoutType,
  difficultyLevel,
  dailyWorkout,
  week
) => {
  let name = "";
  const fullBodyMuscles = {
    A: [
      "overall chest",
      "upper chest",
      "lower chest",
      "overall back",
      "middle back",
      "lats",
      "front deltoid",
      "middle deltoid",
      "rear deltoid",
      "biceps",
      "triceps",
      "hamstrings",
      "quadriceps",
      "calves",
      "abs",
    ],
    B: [
      "overall chest",
      "upper chest",
      "lower chest",
      "overall back",
      "middle back",
      "lats",
      "front deltoid",
      "middle deltoid",
      "rear deltoid",
      "biceps",
      "triceps",
      "hamstrings",
      "quadriceps",
      "calves",
      "abs",
    ],
    C: [
      "overall chest",
      "upper chest",
      "lower chest",
      "overall back",
      "middle back",
      "lats",
      "front deltoid",
      "middle deltoid",
      "rear deltoid",
      "biceps",
      "triceps",
      "hamstrings",
      "quadriceps",
      "calves",
      "abs",
    ],
    D: [
      "overall chest",
      "upper chest",
      "lower chest",
      "overall back",
      "middle back",
      "lats",
      "front deltoid",
      "middle deltoid",
      "rear deltoid",
      "biceps",
      "triceps",
      "hamstrings",
      "quadriceps",
      "calves",
      "abs",
    ],
  };

  const addExercise = (muscleType, exerciseType, focus) => {
    const exercise = selectRandomExercise(
      filteredMuscleGroupExercisesFullBody.filter(
        (ex) => ex.muscleType === muscleType
      ),
      exerciseType
    );

    if (exercise) {
      const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
        getSetsRepsRestByWorkoutType(focus);

      dailyWorkout.push({
        exercise: {
          _id: exercise._id,
          name: exercise.name,
          muscleType: exercise.muscleType,
          equipment: exercise.equipment,
          instructions: exercise.instructions,
        },
        sets: getRandomNumberInRange(minSets, maxSets),
        reps: getRandomNumberInRange(minReps, maxReps),
        rest: getRandomNumberInRange(minRest, maxRest),
        exerciseType,
      });
    } else {
      console.log("Exercise not found" + exercise);
    }
  };

  const addCompoundExercise = (muscleType, focus) =>
    addExercise(muscleType, "compound", focus);
  const addIsolationExercise = (muscleType, focus) =>
    addExercise(muscleType, "isolation", focus);

  const dayRoutineMap = ["A", "B", "C", "D"];

  name = dayRoutineMap[day - 1];

  const muscleTypesFullBody = fullBodyMuscles[name];
  const muscleGroupExercisesFullBody = splitWorkout(
    workoutWithSetsRepsRest,
    muscleTypesFullBody
  );
  const filteredMuscleGroupExercisesFullBody = filterExercisesByEquipment(
    muscleGroupExercisesFullBody,
    equipmentType
  );

  // Adding exercises based on the day
  if (name === "A") {
    // Strength and Hypertrophy Focus
    if (difficultyLevel === "beginner") {
      addCompoundExercise("overall chest", "strength");
      addCompoundExercise("quadriceps", "hypertrophy");
      addCompoundExercise("overall back", "hypertrophy");
      addIsolationExercise("lateral deltoid", "hypertrophy");
    } else if (difficultyLevel === "intermediate") {
      addCompoundExercise("overall chest", "strength");
      addCompoundExercise("quadriceps", "hypertrophy");
      addCompoundExercise("overall back", "hypertrophy");
      addCompoundExercise("front deltoid", "hypertrophy");
      addIsolationExercise("biceps", "hypertrophy");
      addIsolationExercise("calves", "hypertrophy");
    } else {
      addCompoundExercise("overall chest", "strength");
      addCompoundExercise("quadriceps", "hypertrophy");
      addCompoundExercise("overall back", "hypertrophy");
      addCompoundExercise("front deltoid", "hypertrophy");
      addIsolationExercise("biceps", "hypertrophy");
      addIsolationExercise("triceps", "hypertrophy");
      addIsolationExercise("calves", "hypertrophy");
    }
  } else if (name === "B") {
    // Hypertrophy Focus
    if (difficultyLevel === "beginner") {
      addCompoundExercise("quadriceps", "strength");
      addCompoundExercise("upper chest", "hypertrophy");
      addCompoundExercise("lats", "hypertrophy");
      addIsolationExercise("hamstrings", "hypertrophy");
    } else if (difficultyLevel === "intermediate") {
      addCompoundExercise("overall back", "strength");
      addCompoundExercise("hamstrings", "hypertrophy");
      addCompoundExercise("lower chest", "hypertrophy");
      addIsolationExercise("lateral deltoid", "hypertrophy");
      addIsolationExercise("triceps", "hypertrophy");
      addIsolationExercise("hamstrings", "hypertrophy");
    } else {
      addCompoundExercise("overall back", "strength");
      addCompoundExercise("hamstrings", "hypertrophy");
      addCompoundExercise("lower chest", "hypertrophy");
      addCompoundExercise("middle back", "hypertrophy");
      addIsolationExercise("lateral deltoid", "hypertrophy");
      addIsolationExercise("rear deltoid", "hypertrophy");
      addIsolationExercise("hamstrings", "hypertrophy");
    }
  } else if (name === "C") {
    if (difficultyLevel === "beginner") {
      addCompoundExercise("middle back", "strength");
      addCompoundExercise("lower chest", "hypertrophy");
      addCompoundExercise("hamstrings", "hypertrophy");
      addIsolationExercise("biceps", "hypertrophy");
      addIsolationExercise("triceps", "hypertrophy");
    } else if (difficultyLevel === "intermediate") {
      addCompoundExercise("quadriceps", "strength");
      addCompoundExercise("upper chest", "hypertrophy");
      addCompoundExercise("overall back", "hypertrophy");
      addIsolationExercise("rear deltoid", "hypertrophy");
      addIsolationExercise("quadriceps", "hypertrophy");
      addIsolationExercise("calves", "hypertrophy");
    } else {
      addCompoundExercise("quadriceps", "strength");
      addCompoundExercise("overall chest", "hypertrophy");
      addCompoundExercise("overall back", "hypertrophy");
      addCompoundExercise("upper chest", "hypertrophy");
      addIsolationExercise("rear deltoid", "hypertrophy");
      addIsolationExercise("quadriceps", "hypertrophy");
      addIsolationExercise("calves", "hypertrophy");
    }
  } else {
    if (difficultyLevel === "beginner") {
      addCompoundExercise("front deltoid", "strength");
      addCompoundExercise("lats", "hypertrophy");
      addCompoundExercise("quadriceps", "hypertrophy");
      addIsolationExercise("calves", "hypertrophy");
      addIsolationExercise("rear deltoid", "hypertrophy");
    } else if (difficultyLevel === "intermediate") {
      addCompoundExercise("hamstrings", "strength");
      addCompoundExercise("lats", "hypertrophy");
      addCompoundExercise("front deltoid", "hypertrophy");
      addIsolationExercise("lower chest" || "upper chest", "hypertrophy");
      addIsolationExercise("lats", "hypertrophy");
    } else {
      addCompoundExercise("hamstrings", "strength");
      addCompoundExercise("traps");
      addCompoundExercise("lats", "hypertrophy");
      addCompoundExercise("front deltoid", "hypertrophy");
      addIsolationExercise("lateral deltoid");
      addIsolationExercise("lower chest" || "upper chest", "hypertrophy");
      addIsolationExercise("lats", "hypertrophy");
      addIsolationExercise("quadriceps");
    }
  }

  return {
    name,
    dailyWorkout,
  };
};

export default fullBody4x;
