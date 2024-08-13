import {
  getSetsRepsRestByWorkoutType,
  getRandomNumberInRange,
  splitWorkout,
  filterExercisesByEquipment,
  selectRandomExercise,
} from "../fitnessApp.js";
const pushPullLegs = (
  day,
  equipmentType,
  workoutWithSetsRepsRest,
  workoutType,
  difficultyLevel,
  dailyWorkout
) => {
  let name = "";
  const pushPullLegsMuscles = {
    1: [
      "overall chest",
      "upper chest",
      "lower chest",
      "triceps",
      "front deltoid",
    ],
    2: ["overall back", "lats", "biceps", "traps", "rear deltoid"],
    3: ["hamstrings", "quadriceps", "calves", "abs"],
    4: [
      "overall chest",
      "upper chest",
      "lower chest",
      "triceps",
      "front deltoid",
    ],
    5: ["overall back", "lats", "biceps", "traps", "rear deltoid"],
    6: ["hamstrings", "quadriceps", "calves", "abs"],
  };

  const muscleTypesPushPullLegs = pushPullLegsMuscles[day];
  const muscleGroupExercisesPushPullLegs = splitWorkout(
    workoutWithSetsRepsRest,
    muscleTypesPushPullLegs
  );

  const filteredMuscleGroupExercisesPPLSplit = filterExercisesByEquipment(
    muscleGroupExercisesPushPullLegs,
    equipmentType
  );

  if (day === 1 || day === 4) {
    // Push day
    // Add 3 compound chest exercises
    name = "Push day";
    const lowerChestCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLSplit.filter(
        (exercise) => exercise.muscleType === "lower chest"
      ),
      "compound"
    );

    if (lowerChestCompoundExercise) {
      const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
        getSetsRepsRestByWorkoutType(workoutType);

      dailyWorkout.push({
        exercise: {
          _id: lowerChestCompoundExercise._id,
          name: lowerChestCompoundExercise.name,
          muscleType: lowerChestCompoundExercise.muscleType,
          equipment: lowerChestCompoundExercise.equipment,
          instructions: lowerChestCompoundExercise.instructions,
        },
        sets: getRandomNumberInRange(minSets, maxSets),
        reps: getRandomNumberInRange(minReps, maxReps),
        rest: getRandomNumberInRange(minRest, maxRest),
        exerciseType: "compound",
      });
    }

    // Add 1 upper chest compound exercise
    const upperChestCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLSplit.filter(
        (exercise) => exercise.muscleType === "upper chest"
      ),
      "compound"
    );

    if (upperChestCompoundExercise) {
      const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
        getSetsRepsRestByWorkoutType(workoutType);

      dailyWorkout.push({
        exercise: {
          _id: upperChestCompoundExercise._id,
          name: upperChestCompoundExercise.name,
          muscleType: upperChestCompoundExercise.muscleType,
          equipment: upperChestCompoundExercise.equipment,
          instructions: upperChestCompoundExercise.instructions,
        },
        sets: getRandomNumberInRange(minSets, maxSets),
        reps: getRandomNumberInRange(minReps, maxReps),
        rest: getRandomNumberInRange(minRest, maxRest),
        exerciseType: "compound",
      });
    }

    // Add 1 overall chest compound exercise
    const overallChestCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLSplit.filter(
        (exercise) => exercise.muscleType === "overall chest"
      ),
      "compound"
    );

    if (overallChestCompoundExercise) {
      const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
        getSetsRepsRestByWorkoutType(workoutType);

      dailyWorkout.push({
        exercise: {
          _id: overallChestCompoundExercise._id,
          name: overallChestCompoundExercise.name,
          muscleType: overallChestCompoundExercise.muscleType,
          equipment: overallChestCompoundExercise.equipment,
          instructions: overallChestCompoundExercise.instructions,
        },
        sets: getRandomNumberInRange(minSets, maxSets),
        reps: getRandomNumberInRange(minReps, maxReps),
        rest: getRandomNumberInRange(minRest, maxRest),
        exerciseType: "compound",
      });
    }
    // Add 1 compound shoulder exercise
    const shoulderCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLSplit.filter(
        (exercise) => exercise.muscleType === "front deltoid"
      ),
      "compound"
    );

    if (shoulderCompoundExercise) {
      const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
        getSetsRepsRestByWorkoutType(workoutType);

      dailyWorkout.push({
        exercise: {
          _id: shoulderCompoundExercise._id,
          name: shoulderCompoundExercise.name,
          muscleType: shoulderCompoundExercise.muscleType,
          equipment: shoulderCompoundExercise.equipment,
          instructions: shoulderCompoundExercise.instructions,
        },
        sets: getRandomNumberInRange(minSets, maxSets),
        reps: getRandomNumberInRange(minReps, maxReps),
        rest: getRandomNumberInRange(minRest, maxRest),
        exerciseType: "compound",
      });
    }

    // Add 2 isolation triceps exercises
    for (let i = 0; i < 2; i++) {
      const tricepsIsolationExercise = selectRandomExercise(
        filteredMuscleGroupExercisesPPLSplit.filter(
          (exercise) => exercise.muscleType === "triceps"
        ),
        "isolation"
      );

      if (tricepsIsolationExercise) {
        const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
          getSetsRepsRestByWorkoutType(workoutType);

        dailyWorkout.push({
          exercise: {
            _id: tricepsIsolationExercise._id,
            name: tricepsIsolationExercise.name,
            muscleType: tricepsIsolationExercise.muscleType,
            equipment: tricepsIsolationExercise.equipment,
            instructions: tricepsIsolationExercise.instructions,
          },
          sets: getRandomNumberInRange(minSets, maxSets),
          reps: getRandomNumberInRange(minReps, maxReps),
          rest: getRandomNumberInRange(minRest, maxRest),
          exerciseType: "isolation",
        });
      }
    }
    const lowerChestIsolationExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLSplit.filter(
        (exercise) => exercise.muscleType === "lower chest"
      ),
      "isolation"
    );

    if (lowerChestIsolationExercise) {
      const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
        getSetsRepsRestByWorkoutType(workoutType);

      dailyWorkout.push({
        exercise: {
          _id: lowerChestIsolationExercise._id,
          name: lowerChestIsolationExercise.name,
          muscleType: lowerChestIsolationExercise.muscleType,
          equipment: lowerChestIsolationExercise.equipment,
          instructions: lowerChestIsolationExercise.instructions,
        },
        sets: getRandomNumberInRange(minSets, maxSets),
        reps: getRandomNumberInRange(minReps, maxReps),
        rest: getRandomNumberInRange(minRest, maxRest),
        exerciseType: "isolation",
      });
    }
  } else if (day === 2 || day === 5) {
    // Pull day
    // Add 3 compound back exercises
    name = "Pull day";
    for (let i = 0; i < 3; i++) {
      const backCompoundExercise = selectRandomExercise(
        filteredMuscleGroupExercisesPPLSplit,
        "compound"
      );

      if (backCompoundExercise) {
        const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
          getSetsRepsRestByWorkoutType(workoutType);

        dailyWorkout.push({
          exercise: {
            _id: backCompoundExercise._id,
            name: backCompoundExercise.name,
            muscleType: backCompoundExercise.muscleType,
            equipment: backCompoundExercise.equipment,
            instructions: backCompoundExercise.instructions,
          },
          sets: getRandomNumberInRange(minSets, maxSets),
          reps: getRandomNumberInRange(minReps, maxReps),
          rest: getRandomNumberInRange(minRest, maxRest),
          exerciseType: "compound",
        });
      }
    }

    // Add 2 isolation biceps exercises
    for (let i = 0; i < 2; i++) {
      const bicepsIsolationExercise = selectRandomExercise(
        filteredMuscleGroupExercisesPPLSplit.filter(
          (exercise) => exercise.muscleType === "biceps"
        ),
        "isolation"
      );

      if (bicepsIsolationExercise) {
        const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
          getSetsRepsRestByWorkoutType(workoutType);

        dailyWorkout.push({
          exercise: {
            _id: bicepsIsolationExercise._id,
            name: bicepsIsolationExercise.name,
            muscleType: bicepsIsolationExercise.muscleType,
            equipment: bicepsIsolationExercise.equipment,
            instructions: bicepsIsolationExercise.instructions,
          },
          sets: getRandomNumberInRange(minSets, maxSets),
          reps: getRandomNumberInRange(minReps, maxReps),
          rest: getRandomNumberInRange(minRest, maxRest),
          exerciseType: "isolation",
        });
      }
    }

    // Add 1 isolation shoulder exercise
    const shoulderIsolationExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLSplit.filter(
        (exercise) => exercise.muscleType === "rear deltoid"
      ),
      "isolation"
    );

    if (shoulderIsolationExercise) {
      const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
        getSetsRepsRestByWorkoutType(workoutType);

      dailyWorkout.push({
        exercise: {
          _id: shoulderIsolationExercise._id,
          name: shoulderIsolationExercise.name,
          muscleType: shoulderIsolationExercise.muscleType,
          equipment: shoulderIsolationExercise.equipment,
          instructions: shoulderIsolationExercise.instructions,
        },
        sets: getRandomNumberInRange(minSets, maxSets),
        reps: getRandomNumberInRange(minReps, maxReps),
        rest: getRandomNumberInRange(minRest, maxRest),
        exerciseType: "isolation",
      });
    }
  } else if (day === 3 || day === 6) {
    // Leg day
    // Add 3 compound exercises for the legs
    name = "Leg day";
    for (let i = 0; i < 3; i++) {
      const legCompoundExercise = selectRandomExercise(
        filteredMuscleGroupExercisesPPLSplit.filter(
          (exercise) =>
            exercise.muscleType === "hamstrings" ||
            exercise.muscleType === "quadriceps"
        ),
        "compound"
      );

      if (legCompoundExercise) {
        const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
          getSetsRepsRestByWorkoutType(workoutType);

        dailyWorkout.push({
          exercise: {
            _id: legCompoundExercise._id,
            name: legCompoundExercise.name,
            muscleType: legCompoundExercise.muscleType,
            equipment: legCompoundExercise.equipment,
            instructions: legCompoundExercise.instructions,
          },
          sets: getRandomNumberInRange(minSets, maxSets),
          reps: getRandomNumberInRange(minReps, maxReps),
          rest: getRandomNumberInRange(minRest, maxRest),
          exerciseType: "compound",
        });
      }
    }

    // Add 2 isolation calves exercises
    for (let i = 0; i < 2; i++) {
      const calvesIsolationExercise = selectRandomExercise(
        filteredMuscleGroupExercisesPPLSplit.filter(
          (exercise) => exercise.muscleType === "calves"
        ),
        "isolation"
      );

      if (calvesIsolationExercise) {
        const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
          getSetsRepsRestByWorkoutType(workoutType);

        dailyWorkout.push({
          exercise: {
            _id: calvesIsolationExercise._id,
            name: calvesIsolationExercise.name,
            muscleType: calvesIsolationExercise.muscleType,
            equipment: calvesIsolationExercise.equipment,
            instructions: calvesIsolationExercise.instructions,
          },
          sets: getRandomNumberInRange(minSets, maxSets),
          reps: getRandomNumberInRange(minReps, maxReps),
          rest: getRandomNumberInRange(minRest, maxRest),
          exerciseType: "isolation",
        });
      }
    }
  }
  return { name, dailyWorkout };
};
export default pushPullLegs;
