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

  const PPLUPMuscles = {
    1: musclesList,
    2: musclesList,
    3: musclesList,
    4: musclesList,
    5: musclesList,
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

  const addExercise = (muscleType, exerciseType) => {
    const exercise = selectRandomExercise(
      filteredMuscleGroupExercisesPPLUPSplit.filter(
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
    } else {
      console.log("Exercise not found" + exercise);
    }
  };

  const addCompoundExercise = (muscleType) =>
    addExercise(muscleType, "compound");
  const addIsolationExercise = (muscleType) =>
    addExercise(muscleType, "isolation");

  if (day == 1) {
    name = "Push day";
    addCompoundExercise("overall chest");
    addCompoundExercise("upper chest");
    addCompoundExercise("front deltoid");
    addIsolationExercise("lower chest");
    for (let i = 0; i < 2; i++) {
      addIsolationExercise("triceps");
    }
  } else if (day == 2) {
    name = "Pull day";
    addCompoundExercise("lats");
    addCompoundExercise("overall back");
    addCompoundExercise("traps") || addCompoundExercise("middle back");
    addIsolationExercise("lats");
    for (let i = 0; i < 2; i++) {
      addIsolationExercise("biceps");
      addIsolationExercise("rear deltoid");
    }
  } else if (day == 3) {
    name = "Legs day";
    addCompoundExercise("quadriceps");
    addCompoundExercise("hamstrings");
    addCompoundExercise("quadriceps");
    addIsolationExercise("quadriceps") || addIsolationExercise("hamstrings");
    for (let i = 0; i < 2; i++) {
      addIsolationExercise("calves");
      addIsolationExercise("lateral deltoid");
    }
  } else if (day == 4) {
    name = "Upper day";
    addCompoundExercise("overall chest");
    addCompoundExercise("overall back") || addCompoundExercise("lats");
    addCompoundExercise("front deltoid");
    addIsolationExercise("lower chest") || addIsolationExercise("upper chest");
    addIsolationExercise("lats");
    for (let i = 0; i < 2; i++) {
      addIsolationExercise("triceps");
      addIsolationExercise("biceps");
    }
  } else if (day == 5) {
    name = "Lower day";
    addCompoundExercise("quadriceps");
    addCompoundExercise("hamstrings");
    addCompoundExercise("quadriceps");
    addIsolationExercise("quadriceps") || addIsolationExercise("hamstrings");
    for (let i = 0; i < 2; i++) {
      addIsolationExercise("calves");
      addIsolationExercise("lateral deltoid");
    }
  }
  return { name, dailyWorkout };
};
export default pushPullLegsUpperLower;
