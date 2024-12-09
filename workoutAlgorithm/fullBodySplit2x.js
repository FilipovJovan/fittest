import {
  getSetsRepsRestByWorkoutType,
  getRandomNumberInRange,
  splitWorkout,
  filterExercisesByEquipment,
  selectRandomExercise,
} from "../fitnessApp.js";

const fullBody2x = (
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
    1: [
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
    2: [
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
    name = "Full Body Day 1";
    if (difficultyLevel === "beginner") {
      addCompoundExercise("overall chest");
      addCompoundExercise("quadriceps");
      addCompoundExercise("overall back");
      addCompoundExercise("front deltoid");
    } else if (difficultyLevel === "intermediate") {
      addCompoundExercise("overall chest");
      addCompoundExercise("quadriceps");
      addCompoundExercise("overall back");
      addCompoundExercise("front deltoid");
      addIsolationExercise("quadriceps");
      addIsolationExercise("biceps");
      addIsolationExercise("rear deltoid");
    } else {
      addCompoundExercise("overall chest") ||
        addCompoundExercise("upper chest");
      addCompoundExercise("quadriceps");
      addCompoundExercise("overall back") || addCompoundExercise("middle back");
      addCompoundExercise("front deltoid");
      for (let i = 0; i < 2; i++) {
        addSupersetExercises("triceps", "biceps");
      }
      for (let i = 0; i < 2; i++) {
        addSupersetExercises("lower chest", "lats");
      }
    }
  } else {
    name = "Full Body Day 2";
    if (difficultyLevel === "beginner") {
      addCompoundExercise("upper chest");
      addCompoundExercise("hamstrings");
      addCompoundExercise("lats");
      addCompoundExercise("front deltoid");
      addIsolationExercise("calves");
    } else if (difficultyLevel === "intermediate") {
      addCompoundExercise("upper chest");
      addCompoundExercise("hamstrings");
      addCompoundExercise("lats");
      addCompoundExercise("front deltoid");
      addIsolationExercise("biceps");
      addIsolationExercise("lateral deltoid");
      addIsolationExercise("hamstrings");
      addIsolationExercise("calves");
    } else {
      addCompoundExercise("lower chest");
      addCompoundExercise("hamstrings");
      addCompoundExercise("lats");
      addCompoundExercise("front deltoid");
      for (let i = 0; i < 2; i++) {
        addSupersetExercises("middle deltoid", "rear deltoid");
      }
      for (let i = 0; i < 2; i++) {
        addSupersetExercises("hamstrings", "quadriceps");
      }
    }
  }
  return { name, dailyWorkout };
};
export default fullBody2x;
