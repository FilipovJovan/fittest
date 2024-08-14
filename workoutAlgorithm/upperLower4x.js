import {
  getSetsRepsRestByWorkoutType,
  getRandomNumberInRange,
  splitWorkout,
  filterExercisesByEquipment,
  selectRandomExercise,
} from "../fitnessApp.js";
const upperLower4x = (
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
      "overall back",
      "middle back",
      "front deltoid",
      "biceps",
      "triceps",
    ],
    2: ["hamstrings", "quadriceps", "calves", "abs"],
    3: [
      "overall chest",
      "lower chest",
      "overall back",
      "lats",
      "front deltoid",
      "lateral deltoid",
      "rear deltoid",
    ],
    4: ["hamstrings", "quadriceps", "calves", "abs"],
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
  if (day === 1) {
    name = "Upper day";
    const overallChestCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesUpperLower.filter(
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
      filteredMuscleGroupExercisesUpperLower.filter(
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
    const overallBackCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesUpperLower.filter(
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
    const middleBackCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesUpperLower.filter(
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
    const frontDeltoidCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesUpperLower.filter(
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
    if (difficultyLevel === "intermediate" || difficultyLevel === "advanced") {
      for (let i = 0; i < 2; i++) {
        const tricepsIsolationExercise = selectRandomExercise(
          filteredMuscleGroupExercisesUpperLower.filter(
            (exercise) => exercise.muscleType === "triceps"
          ),
          "isolation"
        );

        const bicepsIsolationExercise = selectRandomExercise(
          filteredMuscleGroupExercisesUpperLower.filter(
            (exercise) => exercise.muscleType === "biceps"
          ),
          "isolation"
        );

        if (tricepsIsolationExercise && bicepsIsolationExercise) {
          const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
            getSetsRepsRestByWorkoutType(workoutType);

          // Superset: Triceps and Biceps isolation exercises
          dailyWorkout.push(
            {
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
            },
            {
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
            }
          );
        }
      }
    } else {
      for (let i = 0; i < 2; i++) {
        const tricepsIsolationExercise = selectRandomExercise(
          filteredMuscleGroupExercisesUpperLower.filter(
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

        const bicepsIsolationExercise = selectRandomExercise(
          filteredMuscleGroupExercisesUpperLower.filter(
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
    }
  } else if (day === 3) {
    name = "Upper day";
    const overallChestCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesUpperLower.filter(
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
      filteredMuscleGroupExercisesUpperLower.filter(
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
    const overallBackCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesUpperLower.filter(
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
      filteredMuscleGroupExercisesUpperLower.filter(
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
    const frontDeltoidCompoundExercise = selectRandomExercise(
      filteredMuscleGroupExercisesUpperLower.filter(
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
      const middleDeltoidIsolationExercise = selectRandomExercise(
        filteredMuscleGroupExercisesUpperLower.filter(
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

      const rearDeltoidIsolationExercise = selectRandomExercise(
        filteredMuscleGroupExercisesUpperLower.filter(
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
  } else {
    name = "Lower day";
    for (let i = 0; i < 5; i++) {
      const compoundExercise = selectRandomExercise(
        filteredMuscleGroupExercisesUpperLower,
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
    }
    for (let i = 0; i < 2; i++) {
      const calvesIsolationExercise = selectRandomExercise(
        filteredMuscleGroupExercisesUpperLower.filter(
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

      const absIsolationExercise = selectRandomExercise(
        filteredMuscleGroupExercisesUpperLower.filter(
          (exercise) => exercise.muscleType === "abs"
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
export default upperLower4x;
