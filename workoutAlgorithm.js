// workoutAlgorithm.js
import {
  WORKOUT_TYPE,
  EXERCISE_IMPORTANCE,
  DIFFICULTY,
  EQUIPMENT,
  MUSCLE_TYPE,
} from "./utils/constants.js";

// Function to assign sets, reps, and rest based on user's goal
function assignSetsRepsRest(exercises, goal) {
  return exercises.map((exercise) => {
    let sets, reps, rest;

    switch (goal) {
      case WORKOUT_TYPE.STRENGTH:
        sets = 4;
        reps = getRandomNumberInRange(3, 5);
        rest = getRandomNumberInRange(3, 5); // in minutes
        break;
      case WORKOUT_TYPE.HYPERTROPHY:
        if (DIFFICULTY.BEGINNER) {
          sets = 2;
          reps = getRandomNumberInRange(8, 15);
          rest = getRandomNumberInRange(2, 3); // in minutes
          break;
        } else {
          sets = 4;
          reps = getRandomNumberInRange(8, 15);
          rest = getRandomNumberInRange(2, 3); // in minutes
          break;
        }

      case WORKOUT_TYPE.ENDURANCE:
        sets = 4;
        reps = getRandomNumberInRange(15, 25);
        rest = getRandomNumberInRange(0.5, 2); // in minutes
        break;
      default:
        sets = 3;
        reps = 10;
        rest = 2;
    }

    return {
      ...exercise,
      sets,
      reps,
      rest,
    };
  });
}

// Utility function to get a random number within a specified range
function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exerciseImportance(exercises, count) {
  // Filter exercises based on muscle type and importance
  const primaryExercises = exercises.filter(
    (exercise) => exercise.exerciseImportance === "primary"
  );
  const secondaryExercises = exercises.filter(
    (exercise) => exercise.exerciseImportance === "secondary"
  );
  const tertiaryExercises = exercises.filter(
    (exercise) => exercise.exerciseImportance === "tertiary"
  );

  // Combine the exercises prioritizing primary first, then secondary, then tertiary
  const combinedExercises = [
    ...primaryExercises,
    ...secondaryExercises,
    ...tertiaryExercises,
  ];

  // Return the desired count of exercises
  return combinedExercises.slice(0, count);
}

export { assignSetsRepsRest, getRandomNumberInRange, exerciseImportance };
