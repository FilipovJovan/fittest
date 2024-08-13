import {
  getSetsRepsRestByWorkoutType,
  getRandomNumberInRange,
  splitWorkout,
  filterExercisesByEquipment,
  selectRandomExercise,
} from "../fitnessApp.js";
const pushPullLegsUpperLower = (
  day,
  equipmentType,
  workoutWithSetsRepsRest,
  workoutType,
  difficultyLevel,
  dailyWorkout
) => {
  let name = "";
  const PPLUPMuscles = {
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
      "overall back",
      "lats",
      "front deltoid",
      "triceps",
      "biceps",
    ],
    5: ["hamstrings", "quadriceps", "calves", "abs"],
  };

  const muscleTypesPPLUP = PPLUPMuscles[day];
  const muscleGroupExercisesPPLUP = splitWorkout(
    workoutWithSetsRepsRest,
    muscleTypesPPLUP
  );

  const filteredMuscleGroupExercisesPPLUPSplit = filterExercisesByEquipment(
    muscleGroupExercisesPPLUP,
    equipmentType
  );

  if (day == 1) {
    name = "Push day";
    const overallChestCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLUPSplit.filter(
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
    const upperChestCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLUPSplit.filter(
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
    const lowerChestCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLUPSplit.filter(
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
    const frontDeltoidCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLUPSplit.filter(
        (exercise) => exercise.muscleType === "front deltoid"
      ),
      "compound"
    );

    if (frontDeltoidCompoundExercise) {
      const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
        getSetsRepsRestByWorkoutType(workoutType);

      dailyWorkout.push({
        exercise: {
          _id: frontDeltoidCompoundExercise._id,
          name: frontDeltoidCompoundExercise.name,
          muscleType: frontDeltoidCompoundExercise.muscleType,
          equipment: frontDeltoidCompoundExercise.equipment,
          instructions: frontDeltoidCompoundExercise.instructions,
        },
        sets: getRandomNumberInRange(minSets, maxSets),
        reps: getRandomNumberInRange(minReps, maxReps),
        rest: getRandomNumberInRange(minRest, maxRest),
        exerciseType: "compound",
      });
    }
    for (let i = 0; i < 2; i++) {
      const tricepsIsolationExercise = selectRandomExercise(
        filteredMuscleGroupExercisesPPLUPSplit.filter(
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
  } else if (day == 2) {
    name = "Pull day";
    const middleBackCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLUPSplit.filter(
        (exercise) => exercise.muscleType === "middle back"
      ),
      "compound"
    );

    if (middleBackCompoundExercise) {
      const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
        getSetsRepsRestByWorkoutType(workoutType);

      dailyWorkout.push({
        exercise: {
          _id: middleBackCompoundExercise._id,
          name: middleBackCompoundExercise.name,
          muscleType: middleBackCompoundExercise.muscleType,
          equipment: middleBackCompoundExercise.equipment,
          instructions: middleBackCompoundExercise.instructions,
        },
        sets: getRandomNumberInRange(minSets, maxSets),
        reps: getRandomNumberInRange(minReps, maxReps),
        rest: getRandomNumberInRange(minRest, maxRest),
        exerciseType: "compound",
      });
    }
    const overallBackCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLUPSplit.filter(
        (exercise) => exercise.muscleType === "overall back"
      ),
      "compound"
    );

    if (overallBackCompoundExercise) {
      const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
        getSetsRepsRestByWorkoutType(workoutType);

      dailyWorkout.push({
        exercise: {
          _id: overallBackCompoundExercise._id,
          name: overallBackCompoundExercise.name,
          muscleType: overallBackCompoundExercise.muscleType,
          equipment: overallBackCompoundExercise.equipment,
          instructions: overallBackCompoundExercise.instructions,
        },
        sets: getRandomNumberInRange(minSets, maxSets),
        reps: getRandomNumberInRange(minReps, maxReps),
        rest: getRandomNumberInRange(minRest, maxRest),
        exerciseType: "compound",
      });
    }
    const latsCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLUPSplit.filter(
        (exercise) => exercise.muscleType === "lats"
      ),
      "compound"
    );

    if (latsCompoundExercise) {
      const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
        getSetsRepsRestByWorkoutType(workoutType);

      dailyWorkout.push({
        exercise: {
          _id: latsCompoundExercise._id,
          name: latsCompoundExercise.name,
          muscleType: latsCompoundExercise.muscleType,
          equipment: latsCompoundExercise.equipment,
          instructions: latsCompoundExercise.instructions,
        },
        sets: getRandomNumberInRange(minSets, maxSets),
        reps: getRandomNumberInRange(minReps, maxReps),
        rest: getRandomNumberInRange(minRest, maxRest),
        exerciseType: "compound",
      });
    }
    const trapsCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLUPSplit.filter(
        (exercise) => exercise.muscleType === "traps"
      ),
      "compound"
    );

    if (trapsCompoundExercise) {
      const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
        getSetsRepsRestByWorkoutType(workoutType);

      dailyWorkout.push({
        exercise: {
          _id: trapsCompoundExercise._id,
          name: trapsCompoundExercise.name,
          muscleType: trapsCompoundExercise.muscleType,
          equipment: trapsCompoundExercise.equipment,
          instructions: trapsCompoundExercise.instructions,
        },
        sets: getRandomNumberInRange(minSets, maxSets),
        reps: getRandomNumberInRange(minReps, maxReps),
        rest: getRandomNumberInRange(minRest, maxRest),
        exerciseType: "compound",
      });
    }
    for (let i = 0; i < 2; i++) {
      const bicepsIsolationExercise = selectRandomExercise(
        filteredMuscleGroupExercisesPPLUPSplit.filter(
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
  } else if (day == 3) {
    name = "Legs day";
    for (let i = 0; i < 4; i++) {
      const legCompoundExercise = selectRandomExercise(
        filteredMuscleGroupExercisesPPLUPSplit.filter(
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
        filteredMuscleGroupExercisesPPLUPSplit.filter(
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
  } else if (day == 4) {
    name = "Upper day";
    const overallChestCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLUPSplit.filter(
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
    const overallBackCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLUPSplit.filter(
        (exercise) => exercise.muscleType === "overall back"
      ),
      "compound"
    );

    if (overallBackCompoundExercise) {
      const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
        getSetsRepsRestByWorkoutType(workoutType);

      dailyWorkout.push({
        exercise: {
          _id: overallBackCompoundExercise._id,
          name: overallBackCompoundExercise.name,
          muscleType: overallBackCompoundExercise.muscleType,
          equipment: overallBackCompoundExercise.equipment,
          instructions: overallBackCompoundExercise.instructions,
        },
        sets: getRandomNumberInRange(minSets, maxSets),
        reps: getRandomNumberInRange(minReps, maxReps),
        rest: getRandomNumberInRange(minRest, maxRest),
        exerciseType: "compound",
      });
    }
    const chestIsolationExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLUPSplit.filter(
        (exercise) => exercise.muscleType === "upper chest" || "lower chest"
      ),
      "isolation"
    );

    if (chestIsolationExercise) {
      const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
        getSetsRepsRestByWorkoutType(workoutType);

      dailyWorkout.push({
        exercise: {
          _id: chestIsolationExercise._id,
          name: chestIsolationExercise.name,
          muscleType: chestIsolationExercise.muscleType,
          equipment: chestIsolationExercise.equipment,
          instructions: chestIsolationExercise.instructions,
        },
        sets: getRandomNumberInRange(minSets, maxSets),
        reps: getRandomNumberInRange(minReps, maxReps),
        rest: getRandomNumberInRange(minRest, maxRest),
        exerciseType: "isolation",
      });
    }
    const shoulderCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLUPSplit.filter(
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
    const bicepsIsolationExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLUPSplit.filter(
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
    const tricepsIsolationExercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLUPSplit.filter(
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
  } else if (day == 5) {
    name = "Lower day";
    for (let i = 0; i < 2; i++) {
      const quadsCompoundExercise = selectRandomExercise(
        filteredMuscleGroupExercisesPPLUPSplit.filter(
          (exercise) => exercise.muscleType === "quadriceps"
        ),
        "compound"
      );

      if (quadsCompoundExercise) {
        const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
          getSetsRepsRestByWorkoutType(workoutType);

        dailyWorkout.push({
          exercise: {
            _id: quadsCompoundExercise._id,
            name: quadsCompoundExercise.name,
            muscleType: quadsCompoundExercise.muscleType,
            equipment: quadsCompoundExercise.equipment,
            instructions: quadsCompoundExercise.instructions,
          },
          sets: getRandomNumberInRange(minSets, maxSets),
          reps: getRandomNumberInRange(minReps, maxReps),
          rest: getRandomNumberInRange(minRest, maxRest),
          exerciseType: "compound",
        });
      }
    }
    for (let i = 0; i < 2; i++) {
      const hamstringsCompoundExercise = selectRandomExercise(
        filteredMuscleGroupExercisesPPLUPSplit.filter(
          (exercise) => exercise.muscleType === "hamstrings"
        ),
        "compound"
      );

      if (hamstringsCompoundExercise) {
        const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
          getSetsRepsRestByWorkoutType(workoutType);

        dailyWorkout.push({
          exercise: {
            _id: hamstringsCompoundExercise._id,
            name: hamstringsCompoundExercise.name,
            muscleType: hamstringsCompoundExercise.muscleType,
            equipment: hamstringsCompoundExercise.equipment,
            instructions: hamstringsCompoundExercise.instructions,
          },
          sets: getRandomNumberInRange(minSets, maxSets),
          reps: getRandomNumberInRange(minReps, maxReps),
          rest: getRandomNumberInRange(minRest, maxRest),
          exerciseType: "compound",
        });
      }
    }
    for (let i = 0; i < 2; i++) {
      const calvesIsolationExercise = selectRandomExercise(
        filteredMuscleGroupExercisesPPLUPSplit.filter(
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
export default pushPullLegsUpperLower;
