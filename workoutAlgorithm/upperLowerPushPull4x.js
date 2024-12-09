import {
  getSetsRepsRestByWorkoutType,
  getRandomNumberInRange,
  splitWorkout,
  filterExercisesByEquipment,
  selectRandomExercise,
} from "../fitnessApp.js";

const upperLowerPushPull4x = (
  day,
  equipmentType,
  workoutWithSetsRepsRest,
  workoutType,
  difficultyLevel,
  dailyWorkout
) => {
  let name = "";
  const musclesList = [
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
  ];

  const upperLowerMuscles = {
    1: musclesList,
    2: musclesList,
    3: musclesList,
    4: musclesList,
    5: musclesList,
  };

  const muscleTypesUpperLower = upperLowerMuscles[day];
  const muscleGroupExercisesUpperLower = splitWorkout(
    workoutWithSetsRepsRest,
    muscleTypesUpperLower
  );
  const filteredMuscleGroupExercisesUpperLower = filterExercisesByEquipment(
    muscleGroupExercisesUpperLower,
    equipmentType
  );

  const addCompoundExercise = (muscleType) => {
    const compoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesUpperLower.filter(
        (exercise) => exercise.muscleType === muscleType
      ),
      "compound"
    );

    if (compoundExercise) {
      const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
        getSetsRepsRestByWorkoutType(workoutType);
      dailyWorkout.push({
        exercise: {
          _id: compoundExercise._id,
          name: compoundExercise.name,
          muscleType: compoundExercise.muscleType,
          equipment: compoundExercise.equipment,
          instructions: compoundExercise.instructions,
        },
        sets: getRandomNumberInRange(minSets, maxSets),
        reps: getRandomNumberInRange(minReps, maxReps),
        rest: getRandomNumberInRange(minRest, maxRest),
        exerciseType: "compound",
      });
    }
  };

  const addIsolationExercise = (muscleType) => {
    const isolationExercise = selectRandomExercise(
      filteredMuscleGroupExercisesUpperLower.filter(
        (exercise) => exercise.muscleType === muscleType
      ),
      "isolation"
    );

    if (isolationExercise) {
      const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
        getSetsRepsRestByWorkoutType(workoutType);
      dailyWorkout.push({
        exercise: {
          _id: isolationExercise._id,
          name: isolationExercise.name,
          muscleType: isolationExercise.muscleType,
          equipment: isolationExercise.equipment,
          instructions: isolationExercise.instructions,
        },
        sets: getRandomNumberInRange(minSets, maxSets),
        reps: getRandomNumberInRange(minReps, maxReps),
        rest: getRandomNumberInRange(minRest, maxRest),
        exerciseType: "isolation",
      });
    }
  };

  const addSupersetExercises = (muscleType1, muscleType2) => {
    const exercise1 = selectRandomExercise(
      filteredMuscleGroupExercisesUpperLower.filter(
        (exercise) => exercise.muscleType === muscleType1
      ),
      "isolation"
    );

    const exercise2 = selectRandomExercise(
      filteredMuscleGroupExercisesUpperLower.filter(
        (exercise) => exercise.muscleType === muscleType2
      ),
      "isolation"
    );

    if (exercise1 && exercise2) {
      const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
        getSetsRepsRestByWorkoutType(workoutType);

      dailyWorkout.push(
        {
          exercise: {
            _id: exercise1._id,
            name: exercise1.name,
            muscleType: exercise1.muscleType,
            equipment: exercise1.equipment,
            instructions: exercise1.instructions,
          },
          sets: getRandomNumberInRange(minSets, maxSets),
          reps: getRandomNumberInRange(minReps, maxReps),
          rest: getRandomNumberInRange(minRest, maxRest),
          exerciseType: "isolation",
        },
        {
          exercise: {
            _id: exercise2._id,
            name: exercise2.name,
            muscleType: exercise2.muscleType,
            equipment: exercise2.equipment,
            instructions: exercise2.instructions,
          },
          sets: getRandomNumberInRange(minSets, maxSets),
          reps: getRandomNumberInRange(minReps, maxReps),
          rest: getRandomNumberInRange(minRest, maxRest),
          exerciseType: "isolation",
        }
      );
    }
  };

  if (day === 1) {
    name = "Upper day";
    if (difficultyLevel === "beginner") {
      addCompoundExercise("overall chest");
      addCompoundExercise("overall back");
      addCompoundExercise("front deltoid");
      addSupersetExercises("biceps", "triceps") ||
        addSupersetExercises("lateral deltoid", "rear deltoid");
    } else {
      addCompoundExercise("overall chest");
      addCompoundExercise("upper chest");
      addCompoundExercise("overall back");
      addCompoundExercise("middle back");
      addCompoundExercise("front deltoid");
      if (
        difficultyLevel === "intermediate" ||
        difficultyLevel === "advanced"
      ) {
        for (let i = 0; i < 2; i++) {
          addSupersetExercises("triceps", "biceps");
        }
      } else {
        for (let i = 0; i < 1; i++) {
          addIsolationExercise("triceps");
          addIsolationExercise("biceps");
        }
      }
    }
  } else if (day === 2) {
    name = "Lower day";
    for (let i = 0; i < 2; i++) {
      addCompoundExercise("hamstrings");
      addCompoundExercise("quadriceps");
    }
    for (let i = 0; i < 2; i++) {
      addIsolationExercise("calves");
      addIsolationExercise("abs");
    }
  } else if (day === 3) {
    name = "Push day";
    if (difficultyLevel === "beginner") {
      addCompoundExercise("overall chest");
      addCompoundExercise("lower chest") || addCompoundExercise("upper chest");
      addCompoundExercise("front deltoid");
      addIsolationExercise("lateral deltoid");
      addIsolationExercise("triceps");
    } else {
      addCompoundExercise("overall chest");
      addCompoundExercise("lower chest") || addCompoundExercise("upper chest");
      addCompoundExercise("front deltoid");
      for (let i = 0; i < 2; i++) {
        addIsolationExercise("lateral deltoid");
        addIsolationExercise("triceps");
      }
      addIsolationExercise("lower chest") ||
        addIsolationExercise("upper chest");
    }
  } else if (day === 4) {
    name = "Pull day";
    if (difficultyLevel === "beginner") {
      addCompoundExercise("overall back");
      addCompoundExercise("middle back") || addCompoundExercise("lats");
      addIsolationExercise("rear deltoid");
      addIsolationExercise("biceps");
    } else {
      addCompoundExercise("overall back");
      addCompoundExercise("middle back");
      addCompoundExercise("lats");
      addCompoundExercise("traps");
      for (let i = 0; i < 2; i++) {
        addIsolationExercise("rear deltoid");
        addIsolationExercise("biceps");
      }
      addIsolationExercise("lats");
    }
  }
  return {
    name,
    dailyWorkout,
  };
};

export default upperLowerPushPull4x;
