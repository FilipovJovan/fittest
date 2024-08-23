import {
  getSetsRepsRestByWorkoutType,
  getRandomNumberInRange,
  splitWorkout,
  filterExercisesByEquipment,
  selectRandomExercise,
} from "../fitnessApp.js";

let previousIsolationType = "bicepsTriceps"; // Initial state moved outside the function

const fullBody3x = (
  day,
  equipmentType,
  workoutWithSetsRepsRest,
  workoutType,
  difficultyLevel,
  dailyWorkout,
  week
) => {
  let name = "";
  const upperLowerMuscles = {
    fullBodyA: [
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
    fullBodyB: [
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
    fullBodyC: [
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

  const addExercise = (muscleType, exerciseType) => {
    const exercise = selectRandomExercise(
      filteredMuscleGroupExercisesUpperLower.filter(
        (ex) => ex.muscleType === muscleType
      ),
      exerciseType
    );

    if (exercise) {
      const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
        getSetsRepsRestByWorkoutType(workoutType);
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
    }
  };

  const addCompoundExercise = (muscleType) =>
    addExercise(muscleType, "compound");
  const addIsolationExercise = (muscleType) =>
    addExercise(muscleType, "isolation");
  const addSupersetExercises = (muscleType1, muscleType2) => {
    addIsolationExercise(muscleType1);
    addIsolationExercise(muscleType2);
  };

  const routinePatterns = [
    ["fullBodyA", "fullBodyB", "fullBodyC"], // Week 1
    ["fullBodyB", "fullBodyC", "fullBodyA"], // Week 2
    ["fullBodyC", "fullBodyA", "fullBodyB"], // Week 3
    ["fullBodyA", "fullBodyB", "fullBodyC"], // Week 4
  ];

  // Determine which pattern to use based on the week
  const currentPattern = routinePatterns[(week - 1) % routinePatterns.length];

  // Determine the workout for the current day
  name = currentPattern[day - 1];

  const muscleTypesUpperLower = upperLowerMuscles[name];
  const muscleGroupExercisesUpperLower = splitWorkout(
    workoutWithSetsRepsRest,
    muscleTypesUpperLower
  );
  const filteredMuscleGroupExercisesUpperLower = filterExercisesByEquipment(
    muscleGroupExercisesUpperLower,
    equipmentType
  );

  if (name === "fullBodyA") {
    if (difficultyLevel === "beginner") {
      addCompoundExercise("overall chest");
      addCompoundExercise("hamstrings");
      addCompoundExercise("overall back");
      addCompoundExercise("front deltoid");
      addIsolationExercise("biceps");
    } else if (difficultyLevel === "intermediate") {
      addCompoundExercise("overall chest");
      addCompoundExercise("quadriceps");
      addCompoundExercise("overall back");
      addCompoundExercise("front deltoid");
      addIsolationExercise("quadriceps");
      addIsolationExercise("triceps");
      addIsolationExercise("biceps");
      addIsolationExercise("calves");
    } else {
      addCompoundExercise("overall chest");
      addCompoundExercise("overall back");
      addCompoundExercise("front deltoid");
      addSupersetExercises("triceps", "biceps");
      addSupersetExercises("lats", "hamstrings");
    }
  } else if (name === "fullBodyB") {
    if (difficultyLevel === "beginner") {
      addCompoundExercise("upper chest");
      addCompoundExercise("quadriceps");
      addCompoundExercise("middle back");
      addCompoundExercise("traps");
      addIsolationExercise("triceps");
    } else if (difficultyLevel === "intermediate") {
      addCompoundExercise("upper chest");
      addCompoundExercise("hamstrings");
      addCompoundExercise("lats");
      addCompoundExercise("traps");
      addIsolationExercise("hamstrings");
      addIsolationExercise("rear deltoid");
      addIsolationExercise("lateral deltoid");
    } else {
      addCompoundExercise("quadriceps");
      addCompoundExercise("middle back");
      addCompoundExercise("hamstrings");
      addSupersetExercises("lateral deltoid", "rear deltoid");
      addSupersetExercises("lower chest", "calves");
    }
  } else if (name === "fullBodyC") {
    if (difficultyLevel === "beginner") {
      addCompoundExercise("lower chest");
      addCompoundExercise("quadriceps");
      addCompoundExercise("lats");
      addCompoundExercise("front deltoid");
      addIsolationExercise("lateral deltoid");
    } else if (difficultyLevel === "intermediate") {
      addCompoundExercise("lower chest");
      addCompoundExercise("quadriceps");
      addCompoundExercise("middle back");
      addCompoundExercise("front deltoid");
      addIsolationExercise("quadriceps");
      addIsolationExercise("upper chest");
      addIsolationExercise("lower chest");
      addIsolationExercise("calves");
    } else {
      addCompoundExercise("lats");
      addCompoundExercise("upper chest") || addCompoundExercise("lower chest");
      addCompoundExercise("overall back");
      addSupersetExercises(
        "lower chest" || "upper chest",
        "biceps" || "triceps"
      );
      addSupersetExercises("quadriceps", "hamstrings");
    }
  }

  return {
    name,
    dailyWorkout,
  };
};

export default fullBody3x;
