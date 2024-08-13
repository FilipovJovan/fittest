import {
  getSetsRepsRestByWorkoutType,
  getRandomNumberInRange,
  splitWorkout,
  filterExercisesByEquipment,
  selectRandomExercise,
} from "../fitnessApp.js";
const broSplit = (
  day,
  equipmentType,
  workoutWithSetsRepsRest,
  workoutType,
  difficultyLevel,
  dailyWorkout
) => {
  let name = "";
  const broSplitMuscles = {
    1: ["overall chest", "upper chest", "lower chest"],
    2: ["overall back", "lats", "middle back"],
    3: ["front deltoid", "lateral deltoid", "rear deltoid"],
    4: ["hamstrings", "quadriceps", "calves", "abs"],
    5: ["biceps", "triceps"],
  };

  const muscleTypesBroSplit = broSplitMuscles[day];
  const muscleGroupExercisesBroSplit = splitWorkout(
    workoutWithSetsRepsRest,
    muscleTypesBroSplit
  );

  const filteredMuscleGroupExercisesBroSplit = filterExercisesByEquipment(
    muscleGroupExercisesBroSplit,
    equipmentType
  );

  /*const absFilteredExercisesBroSplit = filterExercisesByEquipment(
              muscleGroupExercisesBroSplit,
              (equipmentType = EQUIPMENT.NO_EQUIPMENT)
            );*/

  if (day == 1) {
    name = "Push day";
    const overallChestCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesBroSplit.filter(
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

    const lowerChestCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesBroSplit.filter(
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

    const upperChestCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesBroSplit.filter(
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
    for (let i = 0; i < 2; i++) {
      const chestIsolationExercise = selectRandomExercise(
        filteredMuscleGroupExercisesBroSplit.filter(
          (exercise) =>
            exercise.muscleType === "lower chest" ||
            exercise.muscleType === "upper chest"
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
    }
  } else if (day == 2) {
    name = "Pull day";
    for (let i = 0; i < 3; i++) {
      const backCompoundExercise = selectRandomExercise(
        filteredMuscleGroupExercisesBroSplit,
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
    for (let i = 0; i < 2; i++) {
      const backIsolationExercise = selectRandomExercise(
        filteredMuscleGroupExercisesBroSplit.filter(
          (exercise) => exercise.muscleType === "lats"
        ),
        "isolation"
      );

      if (backIsolationExercise) {
        const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
          getSetsRepsRestByWorkoutType(workoutType);

        dailyWorkout.push({
          exercise: {
            _id: backIsolationExercise._id,
            name: backIsolationExercise.name,
            muscleType: backIsolationExercise.muscleType,
            equipment: backIsolationExercise.equipment,
            instructions: backIsolationExercise.instructions,
          },
          sets: getRandomNumberInRange(minSets, maxSets),
          reps: getRandomNumberInRange(minReps, maxReps),
          rest: getRandomNumberInRange(minRest, maxRest),
          exerciseType: "isolation",
        });
      }
    }
  } else if (day == 3) {
    name = "Shoulder day";
    for (let i = 0; i < 2; i++) {
      const frontDeltoidCompoundExercise = selectRandomExercise(
        filteredMuscleGroupExercisesBroSplit.filter(
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
    }

    for (let i = 0; i < 2; i++) {
      const middleDeltoidIsolationExercise = selectRandomExercise(
        filteredMuscleGroupExercisesBroSplit.filter(
          (exercise) => exercise.muscleType === "lateral deltoid"
        ),
        "isolation"
      );

      if (middleDeltoidIsolationExercise) {
        const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
          getSetsRepsRestByWorkoutType(workoutType);

        dailyWorkout.push({
          exercise: {
            _id: middleDeltoidIsolationExercise._id,
            name: middleDeltoidIsolationExercise.name,
            muscleType: middleDeltoidIsolationExercise.muscleType,
            equipment: middleDeltoidIsolationExercise.equipment,
            instructions: middleDeltoidIsolationExercise.instructions,
          },
          sets: getRandomNumberInRange(minSets, maxSets),
          reps: getRandomNumberInRange(minReps, maxReps),
          rest: getRandomNumberInRange(minRest, maxRest),
          exerciseType: "isolation",
        });
      }
    }
    for (let i = 0; i < 2; i++) {
      const rearDeltoidIsolationExercise = selectRandomExercise(
        filteredMuscleGroupExercisesBroSplit.filter(
          (exercise) => exercise.muscleType === "rear deltoid"
        ),
        "isolation"
      );

      if (rearDeltoidIsolationExercise) {
        const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
          getSetsRepsRestByWorkoutType(workoutType);

        dailyWorkout.push({
          exercise: {
            _id: rearDeltoidIsolationExercise._id,
            name: rearDeltoidIsolationExercise.name,
            muscleType: rearDeltoidIsolationExercise.muscleType,
            equipment: rearDeltoidIsolationExercise.equipment,
            instructions: rearDeltoidIsolationExercise.instructions,
          },
          sets: getRandomNumberInRange(minSets, maxSets),
          reps: getRandomNumberInRange(minReps, maxReps),
          rest: getRandomNumberInRange(minRest, maxRest),
          exerciseType: "isolation",
        });
      }
    }
  } else if (day == 4) {
    name = "Legs day";
    for (let i = 0; i < 2; i++) {
      const quadCompoundExercise = selectRandomExercise(
        filteredMuscleGroupExercisesBroSplit.filter(
          (exercise) => exercise.muscleType === "quadriceps"
        ),
        "compound"
      );

      if (quadCompoundExercise) {
        const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
          getSetsRepsRestByWorkoutType(workoutType);

        dailyWorkout.push({
          exercise: {
            _id: quadCompoundExercise._id,
            name: quadCompoundExercise.name,
            muscleType: quadCompoundExercise.muscleType,
            equipment: quadCompoundExercise.equipment,
            instructions: quadCompoundExercise.instructions,
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
        filteredMuscleGroupExercisesBroSplit.filter(
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
        filteredMuscleGroupExercisesBroSplit.filter(
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
  } else {
    name = "Arms day";
    for (let i = 0; i < 3; i++) {
      const bicepsIsolationExercise = selectRandomExercise(
        filteredMuscleGroupExercisesBroSplit.filter(
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
    for (let i = 0; i < 3; i++) {
      const tricepsIsolationExercise = selectRandomExercise(
        filteredMuscleGroupExercisesBroSplit.filter(
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
    for (let i = 0; i < 3; i++) {
      const absIsolationExercise = selectRandomExercise(
        filteredMuscleGroupExercisesBroSplit.filter(
          (exercise) =>
            exercise.muscleType === "abs" &&
            exercise.equipmentType === "no equipment"
        ),
        "isolation"
      );

      if (absIsolationExercise) {
        const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
          getSetsRepsRestByWorkoutType(workoutType);

        dailyWorkout.push({
          exercise: {
            _id: absIsolationExercise._id,
            name: absIsolationExercise.name,
            muscleType: absIsolationExercise.muscleType,
            equipment: absIsolationExercise.equipment,
            instructions: absIsolationExercise.instructions,
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
export default broSplit;
