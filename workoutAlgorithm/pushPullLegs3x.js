import {
  getSetsRepsRestByWorkoutType,
  getRandomNumberInRange,
  splitWorkout,
  filterExercisesByEquipment,
  selectRandomExercise,
} from "../fitnessApp.js";

const pushPullLegs3x = (
  day,
  equipmentType,
  workoutWithSetsRepsRest,
  workoutType,
  difficultyLevel,
  dailyWorkout,
  week
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

  const pushPullLegs3 = {
    1: musclesList,
    2: musclesList,
    3: musclesList,
  };

  const muscleTypesUpperLower = pushPullLegs3[day];
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

  const extendedEquipment = [
    ...equipmentType,
    "no equipment",
    "dip & pull up bars",
    "ab roller",
  ];

  const filteredAbExercises = filterExercisesByEquipment(
    muscleGroupExercisesUpperLower.filter((ex) => ex.muscleType === "abs"),
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

  if (day === 1) {
    name = "Push day";
    addCompoundExercise("overall chest");
    addCompoundExercise("upper chest");
    addCompoundExercise("front deltoid");
    if (difficultyLevel === "intermediate" || difficultyLevel === "advanced") {
      for (let i = 0; i < 2; i++) {
        addSupersetExercises("triceps", "front deltoid");
      }
      addIsolationExercise("lower chest");
    } else {
      for (let i = 0; i < 1; i++) {
        addIsolationExercise("triceps");
        addIsolationExercise("front deltoid");
      }
    }
    for (let i = 0; i < 6; i++) {
      addAbIsolationExercise("abs", difficultyLevel);
    }
  } else if (day === 2) {
    name = "Pull day";
    addCompoundExercise("overall back");
    addCompoundExercise("middle back");
    addCompoundExercise("lats");
    addCompoundExercise("lats");
    for (let i = 0; i < 2; i++) {
      addIsolationExercise("rear deltoid");
      addIsolationExercise("biceps");
    }
  } else {
    name = "Legs day";
    for (let i = 0; i < 2; i++) {
      addCompoundExercise("quadriceps");
    }
    addCompoundExercise("hamstrings");
    addIsolationExercise("hamstrings");
    for (let i = 0; i < 2; i++) {
      addIsolationExercise("calves");
      addIsolationExercise("abs");
    }
    for (let i = 0; i < 6; i++) {
      addAbIsolationExercise("abs", difficultyLevel);
    }
  }
  return { name, dailyWorkout };
};
export default pushPullLegs3x;
