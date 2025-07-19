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
      "traps",
      "front deltoid",
      "rear deltoid",
      "lateral deltoid",
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
      filteredMuscleGroupExercisesFullBody3x.filter(
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

  const extendedEquipment = [
    ...equipmentType,
    "no equipment",
    "dip & pull up bars",
    "ab roller",
  ];

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
  const muscleGroupExercisesFullBody3x = splitWorkout(
    workoutWithSetsRepsRest,
    muscleTypesUpperLower
  );
  const filteredMuscleGroupExercisesFullBody3x = filterExercisesByEquipment(
    muscleGroupExercisesFullBody3x,
    equipmentType
  );

  const filteredAbExercises = filterExercisesByEquipment(
    muscleGroupExercisesFullBody3x.filter((ex) => ex.muscleType === "abs"),
    extendedEquipment
  );

  const addAbIsolationExercise = (muscleType, difficultyLevel) => {
    const abIsolationExercise = selectRandomExercise(
      filteredAbExercises.filter((exercise) => {
        return (
          exercise.muscleType === muscleType &&
          (!exercise.difficulty || exercise.difficulty === difficultyLevel)
        );
      }),
      "isolation"
    );

    if (abIsolationExercise) {
      const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
        getSetsRepsRestByWorkoutType(workoutType);
      dailyWorkout.push({
        exercise: {
          _id: abIsolationExercise._id,
          name: abIsolationExercise.name,
          muscleType: abIsolationExercise.muscleType,
          equipment: abIsolationExercise.equipment,
          instructions: abIsolationExercise.instructions,
        },
        sets: getRandomNumberInRange(minSets, maxSets),
        reps: getRandomNumberInRange(minReps, maxReps),
        rest: 0.5,
        exerciseType: "isolation",
      });
    }
  };

  if (name === "fullBodyA") {
    if (difficultyLevel === "beginner") {
      addCompoundExercise("overall chest");
      addCompoundExercise("hamstrings");
      addCompoundExercise("overall back");
      addCompoundExercise("front deltoid");
      addIsolationExercise("biceps");
      for (let i = 0; i < 6; i++) {
        addAbIsolationExercise("abs", difficultyLevel);
      }
    } else if (difficultyLevel === "intermediate") {
      addCompoundExercise("overall chest");
      addCompoundExercise("quadriceps");
      addCompoundExercise("overall back");
      addCompoundExercise("front deltoid");
      addIsolationExercise("quadriceps");
      addIsolationExercise("triceps");
      addIsolationExercise("biceps");
      addIsolationExercise("calves");
      for (let i = 0; i < 6; i++) {
        addAbIsolationExercise("abs", difficultyLevel);
      }
    } else {
      addCompoundExercise("overall chest");
      addCompoundExercise("overall back");
      addCompoundExercise("front deltoid");
      addSupersetExercises("triceps", "biceps");
      addSupersetExercises("lats", "hamstrings");
      for (let i = 0; i < 6; i++) {
        addAbIsolationExercise("abs", difficultyLevel == "advanced");
      }
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
      for (let i = 0; i < 6; i++) {
        addAbIsolationExercise("abs", difficultyLevel);
      }
    } else if (difficultyLevel === "intermediate") {
      addCompoundExercise("lower chest");
      addCompoundExercise("quadriceps");
      addCompoundExercise("middle back");
      addCompoundExercise("front deltoid");
      addIsolationExercise("quadriceps");
      addIsolationExercise("upper chest");
      addIsolationExercise("lower chest");
      addIsolationExercise("calves");
      for (let i = 0; i < 6; i++) {
        addAbIsolationExercise("abs", difficultyLevel);
      }
    } else {
      addCompoundExercise("lats");
      addCompoundExercise("upper chest") || addCompoundExercise("lower chest");
      addCompoundExercise("overall back");
      addSupersetExercises(
        "lower chest" || "upper chest",
        "biceps" || "triceps"
      );
      addSupersetExercises("quadriceps", "hamstrings");
      for (let i = 0; i < 6; i++) {
        addAbIsolationExercise("abs", difficultyLevel == "advanced");
      }
    }
  }

  return {
    name,
    dailyWorkout,
  };
};

export default fullBody3x;
