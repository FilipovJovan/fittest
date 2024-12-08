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
  const musclesList = [
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
  ];

  const broSplitMuscles = {
    1: musclesList,
    2: musclesList,
    3: musclesList,
    4: musclesList,
    5: musclesList,
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

  const addExercise = (muscleType, exerciseType) => {
    const exercise = selectRandomExercise(
      filteredMuscleGroupExercisesBroSplit.filter(
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

  if (day == 1) {
    name = "Chest day";
    addCompoundExercise("overall chest");
    addCompoundExercise("lower chest") || addCompoundExercise("upper chest");
    addIsolationExercise("triceps");
    addIsolationExercise("lower chest") || addIsolationExercise("upper chest");
    addIsolationExercise("overall chest");
  } else if (day == 2) {
    name = "Back day";
    addCompoundExercise("overall back");
    addCompoundExercise("lats");
    addIsolationExercise("biceps");
    addCompoundExercise("middle back");
    addIsolationExercise("lats");
  } else if (day == 3) {
    name = "Shoulder day";
    addCompoundExercise("front deltoid");
    addCompoundExercise("traps");
    addIsolationExercise("front deltoid");
    addIsolationExercise("lateral deltoid");
    addIsolationExercise("rear deltoid");
  } else if (day == 4) {
    name = "Legs day";
    addCompoundExercise("quadriceps");
    addCompoundExercise("hamstrings");
    addIsolationExercise("quadriceps");
    addIsolationExercise("hamstrings");
    addIsolationExercise("calves");
    addIsolationExercise("calves");
  } else {
    name = "Arms day";
    addCompoundExercise("triceps");
    addCompoundExercise("biceps");
    addIsolationExercise("triceps");
    addIsolationExercise("biceps");
    addIsolationExercise("triceps");
    addIsolationExercise("biceps");
    addIsolationExercise("biceps") || addIsolationExercise("triceps");
  }
  return { name, dailyWorkout };
};
export default broSplit;
