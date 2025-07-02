export const getAbExercisesByDifficulty = (allExercises, difficulty) => {
  return allExercises.filter(
    (ex) => ex.muscleType === "abs" && ex.difficulty === difficulty
  );
};
