import {
  getSetsRepsRestByWorkoutType,
  getRandomNumberInRange,
  splitWorkout,
  filterExercisesByEquipment,
  selectRandomExercise,
} from "../fitnessApp.js";

let previousIsolationType = "bicepsTriceps"; // Initial state moved outside the function

const upperLower3x = (
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
    upper: [
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
    lower: ["hamstrings", "quadriceps", "calves", "abs"],
  };

  const addExercise = (muscleType, exerciseType) => {
    const exercise = selectRandomExercise(
      filteredMuscleGroupExercisesUpperLower.filter(
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

  const isEvenWeek = week % 2 === 0;
  const routine = isEvenWeek
    ? ["Lower day", "Upper day", "Lower day"]
    : ["Upper day", "Lower day", "Upper day"];
  name = routine[day - 1];

  const muscleTypesUpperLower =
    name === "Upper day" ? upperLowerMuscles.upper : upperLowerMuscles.lower;
  const muscleGroupExercisesUpperLower = splitWorkout(
    workoutWithSetsRepsRest,
    muscleTypesUpperLower
  );
  const filteredMuscleGroupExercisesUpperLower = filterExercisesByEquipment(
    muscleGroupExercisesUpperLower,
    equipmentType
  );

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

  if (name === "Upper day") {
    addCompoundExercise("overall chest");
    addCompoundExercise("upper chest");
    addCompoundExercise("overall back");
    addCompoundExercise("middle back");
    addCompoundExercise("front deltoid");

    if (difficultyLevel === "intermediate" || difficultyLevel === "advanced") {
      if (previousIsolationType === "bicepsTriceps") {
        console.log(
          "Filtered exercises for lateral deltoid:",
          filteredMuscleGroupExercisesUpperLower.filter(
            (exercise) => exercise.muscleType === "lateral deltoid"
          )
        );
        addSupersetExercises("lateral deltoid", "rear deltoid");
        previousIsolationType = "middleRearDeltoid";
      } else {
        addSupersetExercises("triceps", "biceps");
        previousIsolationType = "bicepsTriceps";
      }
    } else {
      if (previousIsolationType === "bicepsTriceps") {
        console.log(
          "Filtered exercises for lateral deltoid:",
          filteredMuscleGroupExercisesUpperLower.filter(
            (exercise) => exercise.muscleType === "lateral deltoid"
          )
        );
        addIsolationExercise("lateral deltoid");
        addIsolationExercise("rear deltoid");
        previousIsolationType = "middleRearDeltoid";
      } else {
        addIsolationExercise("triceps");
        addIsolationExercise("biceps");
        previousIsolationType = "bicepsTriceps";
      }
    }
  } else if (name === "Lower day") {
    for (let i = 0; i < 2; i++) {
      addCompoundExercise("hamstrings");
      addCompoundExercise("quadriceps");
    }
    for (let i = 0; i < 2; i++) {
      addIsolationExercise("calves");
    }
    for (let i = 0; i < 6; i++) {
      addAbIsolationExercise("abs", difficultyLevel);
    }
  }

  return {
    name,
    dailyWorkout,
  };
};

export default upperLower3x;
