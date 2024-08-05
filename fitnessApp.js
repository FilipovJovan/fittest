// fitnessApp.js
import {
  assignSetsRepsRest,
  getRandomNumberInRange,
} from "./workoutAlgorithm.js";
import Exercise from "./models/ExerciseModel.js";
import Workout from "./models/WorkoutSchema.js";
import { WORKOUT_TYPE } from "./utils/constants.js";

export const generateWorkout = async (req, res) => {
  try {
    const {
      difficultyLevel,
      workoutType,
      workoutsPerWeek,
      splitPreference,
      equipmentType,
      userId,
    } = req.body;

    // Simulated exercise fetch from the database
    const exercises = await Exercise.find({}).lean();

    // Save the workout program to the database
    const currentDate = new Date();
    const endDate = new Date(currentDate);
    endDate.setDate(currentDate.getDate() + 8 * 7);

    // Generate the workout program
    const generatedProgram = await generateWorkoutProgram({
      difficultyLevel,
      workoutType,
      workoutsPerWeek,
      splitPreference,
      exercises,
      userId,
      equipmentType,
    });

    // Respond with the workout and endDate
    res.json({
      //endDate,
      generatedProgram,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

function filterExercisesByEquipment(exercises, equipmentPreference) {
  return exercises.filter((exercise) =>
    equipmentPreference.includes(exercise.equipment)
  );
}

// Function to generate workout program for the user
async function generateWorkoutProgram({
  difficultyLevel,
  workoutType,
  workoutsPerWeek,
  splitPreference,
  exercises,
  userId,
  equipmentType,
}) {
  const frequency = workoutsPerWeek || 3; // Replace with user's selected frequency
  const weeks = 5;

  console.log(splitPreference + " " + workoutsPerWeek);

  // Assign sets, reps, and rest based on user's goal and muscle preference
  const goal = workoutType || WORKOUT_TYPE.ALL_TYPES;
  const workoutWithSetsRepsRest = assignSetsRepsRest(exercises, goal);

  // Create the workout program structure
  const workoutProgram = {
    weeks: [],
    exercises: workoutWithSetsRepsRest,
  };

  function selectRandomExercise(exercises, exerciseType) {
    const filteredExercises = exercises.filter(
      (exercise) => exercise.exerciseType === exerciseType
    );

    if (filteredExercises.length === 0) {
      return null; // Return null or handle the case when no exercises of the specified type are found
    }

    const randomIndex = getRandomNumberInRange(0, filteredExercises.length - 1);
    return filteredExercises[randomIndex];
  }

  // ...

  // Function to generate daily workout
  const generateDailyWorkout = () => {
    const dailyWorkout = [];

    // Loop to select compound exercises
    for (let i = 0; i < 4; i++) {
      const compoundExercise = selectRandomExercise(exercises, "compound");

      if (compoundExercise) {
        const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
          getSetsRepsRestByWorkoutType(workoutType);

        const sets = getRandomNumberInRange(minSets, maxSets);
        const reps = getRandomNumberInRange(minReps, maxReps);
        const rest = getRandomNumberInRange(minRest, maxRest);

        dailyWorkout.push({
          exercise: {
            _id: compoundExercise._id,
            name: compoundExercise.name,
            muscleType: compoundExercise.muscleType,
            equipment: compoundExercise.equipment,
            instructions: compoundExercise.instructions,
          },
          sets,
          reps,
          rest,
          exerciseType: "compound",
        });
      }
    }

    // Loop to select isolation exercises
    for (let i = 0; i < 2; i++) {
      const isolationExercise = selectRandomExercise(exercises, "isolation");

      if (isolationExercise) {
        const { minSets, maxSets, minReps, maxReps, minRest, maxRest } =
          getSetsRepsRestByWorkoutType(workoutType);

        const sets = getRandomNumberInRange(minSets, maxSets);
        const reps = getRandomNumberInRange(minReps, maxReps);
        const rest = getRandomNumberInRange(minRest, maxRest);

        dailyWorkout.push({
          exercise: {
            _id: isolationExercise._id,
            name: isolationExercise.name,
            muscleType: isolationExercise.muscleType,
            equipment: isolationExercise.equipment,
            instructions: isolationExercise.instructions,
          },
          sets,
          reps,
          rest,
          exerciseType: "isolation",
        });
      }
    }

    return dailyWorkout;
  };

  const getSetsRepsRestByWorkoutType = (workoutType) => {
    switch (workoutType) {
      case "strength":
        return {
          minSets: 3,
          maxSets: 4,
          minReps: 3,
          maxReps: 5,
          minRest: 3,
          maxRest: 5,
        };
      case "hypertrophy":
        if (difficultyLevel === "beginner") {
          return {
            minSets: 2,
            maxSets: 2,
            minReps: 8,
            maxReps: 12,
            minRest: 2,
            maxRest: 3,
          };
        } else {
          return {
            minSets: 3,
            maxSets: 4,
            minReps: 8,
            maxReps: 12,
            minRest: 2,
            maxRest: 3,
          };
        }
      case "endurance":
        return {
          minSets: 2,
          maxSets: 5,
          minReps: 12,
          maxReps: 25,
          minRest: 0.5,
          maxRest: 1.5,
        };
      default:
        return {
          minSets: 3,
          maxSets: 4,
          minReps: 8,
          maxReps: 12,
          minRest: 1,
          maxRest: 2,
        };
    }
  };

  // Rest of the code remains unchanged
  function splitWorkout(workoutWithSetsRepsRest, muscleGroups) {
    if (!muscleGroups || !Array.isArray(muscleGroups)) {
      // Handle the case where muscleGroups is undefined or not an array
      console.error("Invalid muscleGroups array");
      return [];
    }

    return workoutWithSetsRepsRest.filter((exercise) =>
      muscleGroups.includes(exercise.muscleType)
    );
  }
  for (let week = 1; week <= weeks; week++) {
    const weekObject = {
      weekNumber: week,
      days: [],
    };

    for (let day = 1; day <= 7; day++) {
      if (day <= frequency) {
        let dailyWorkout = [];

        switch (splitPreference) {
          //---------------UPPER LOWER SPLIT------------------//
          case "upperLower":
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

            const filteredMuscleGroupExercisesUpperLower =
              filterExercisesByEquipment(
                muscleGroupExercisesUpperLower,
                equipmentType
              );
            if (day === 1) {
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
              if (
                difficultyLevel === "intermediate" ||
                difficultyLevel === "advanced"
              ) {
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
                    const {
                      minSets,
                      maxSets,
                      minReps,
                      maxReps,
                      minRest,
                      maxRest,
                    } = getSetsRepsRestByWorkoutType(workoutType);

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
                    const {
                      minSets,
                      maxSets,
                      minReps,
                      maxReps,
                      minRest,
                      maxRest,
                    } = getSetsRepsRestByWorkoutType(workoutType);

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
                    const {
                      minSets,
                      maxSets,
                      minReps,
                      maxReps,
                      minRest,
                      maxRest,
                    } = getSetsRepsRestByWorkoutType(workoutType);

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
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
              for (let i = 0; i < 5; i++) {
                const compoundExercise = selectRandomExercise(
                  filteredMuscleGroupExercisesUpperLower,
                  "compound"
                );

                if (compoundExercise) {
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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

            break;

          // -------------FULL BODY--------------//
          case "fullBody":
            dailyWorkout = generateDailyWorkout();
            break;

          // -------------BRO SPLIT--------------//
          case "broSplit":
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

            const filteredMuscleGroupExercisesBroSplit =
              filterExercisesByEquipment(
                muscleGroupExercisesBroSplit,
                equipmentType
              );

            /*const absFilteredExercisesBroSplit = filterExercisesByEquipment(
              muscleGroupExercisesBroSplit,
              (equipmentType = EQUIPMENT.NO_EQUIPMENT)
            );*/

            if (day == 1) {
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
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
              for (let i = 0; i < 3; i++) {
                const backCompoundExercise = selectRandomExercise(
                  filteredMuscleGroupExercisesBroSplit,
                  "compound"
                );
                if (backCompoundExercise) {
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
              for (let i = 0; i < 2; i++) {
                const frontDeltoidCompoundExercise = selectRandomExercise(
                  filteredMuscleGroupExercisesBroSplit.filter(
                    (exercise) => exercise.muscleType === "front deltoid"
                  ),
                  "compound"
                );

                if (frontDeltoidCompoundExercise) {
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
              for (let i = 0; i < 2; i++) {
                const quadCompoundExercise = selectRandomExercise(
                  filteredMuscleGroupExercisesBroSplit.filter(
                    (exercise) => exercise.muscleType === "quadriceps"
                  ),
                  "compound"
                );

                if (quadCompoundExercise) {
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
              for (let i = 0; i < 3; i++) {
                const bicepsIsolationExercise = selectRandomExercise(
                  filteredMuscleGroupExercisesBroSplit.filter(
                    (exercise) => exercise.muscleType === "biceps"
                  ),
                  "isolation"
                );

                if (bicepsIsolationExercise) {
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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

            break;

          //-------------PUSH PULL LEGS SPLIT----------------//
          case "pushPullLegs":
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

            const filteredMuscleGroupExercisesPPLSplit =
              filterExercisesByEquipment(
                muscleGroupExercisesPushPullLegs,
                equipmentType
              );

            if (day === 1 || day === 4) {
              // Push day
              // Add 3 compound chest exercises
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
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
              for (let i = 0; i < 3; i++) {
                const backCompoundExercise = selectRandomExercise(
                  filteredMuscleGroupExercisesPPLSplit,
                  "compound"
                );

                if (backCompoundExercise) {
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
            break;

          //-------------PUSH PULL LEGS UPPER LOWER SPLIT----------------//
          case "pplUpperLower":
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

            const filteredMuscleGroupExercisesPPLUPSplit =
              filterExercisesByEquipment(
                muscleGroupExercisesPPLUP,
                equipmentType
              );

            if (day == 1) {
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
                  filteredMuscleGroupExercisesPPLSplit.filter(
                    (exercise) => exercise.muscleType === "triceps"
                  ),
                  "isolation"
                );

                if (tricepsIsolationExercise) {
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
                  filteredMuscleGroupExercisesPPLSplit.filter(
                    (exercise) => exercise.muscleType === "biceps"
                  ),
                  "isolation"
                );

                if (bicepsIsolationExercise) {
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
              for (let i = 0; i < 4; i++) {
                const legCompoundExercise = selectRandomExercise(
                  filteredMuscleGroupExercisesPPLSplit.filter(
                    (exercise) =>
                      exercise.muscleType === "hamstrings" ||
                      exercise.muscleType === "quadriceps"
                  ),
                  "compound"
                );

                if (legCompoundExercise) {
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
                  (exercise) =>
                    exercise.muscleType === "upper chest" || "lower chest"
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
              for (let i = 0; i < 2; i++) {
                const quadsCompoundExercise = selectRandomExercise(
                  filteredMuscleGroupExercisesPPLUPSplit.filter(
                    (exercise) => exercise.muscleType === "quadriceps"
                  ),
                  "compound"
                );

                if (quadsCompoundExercise) {
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
                  const {
                    minSets,
                    maxSets,
                    minReps,
                    maxReps,
                    minRest,
                    maxRest,
                  } = getSetsRepsRestByWorkoutType(workoutType);

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
            break;

          //-------------DEFAULT WORKOUT----------------//
          case "daily workout":
            dailyWorkout = generateDailyWorkout();
        }

        weekObject.days.push({
          dayNumber: day,
          workout: dailyWorkout,
        });
      }
    }

    workoutProgram.weeks.push(weekObject);
  }

  // Save the workout program to the database (simulated for demonstration)
  const currentDate = new Date();
  const endDate = new Date(currentDate);
  endDate.setDate(currentDate.getDate() + weeks * 7); // Replace with actual end date calculation
  //await saveWorkoutProgramToDatabase(workoutProgram, endDate);

  const createdBy = userId;

  const savedWorkout = await saveWorkoutProgramToDatabase(
    workoutProgram,
    currentDate,
    endDate,
    createdBy
  );

  async function saveWorkoutProgramToDatabase(
    workoutProgram,
    currentDate,
    endDate,
    createdBy
  ) {
    try {
      // Flatten the workoutProgram.weeks structure into a single array of exercises
      const exercises = workoutProgram.weeks
        .map((week) => week.days)
        .flat()
        .map((day) => day.workout)
        .flat();

      const populatedExercises = await Promise.all(
        exercises.map(async (exercise) => {
          // Populate the exercise details
          const populatedExercise = await Exercise.findById(
            exercise.exercise
          ).lean();
          return {
            ...exercise,
            exercise: populatedExercise._id, // Use the ObjectId of the populated exercise
          };
        })
      );
      // Create a new Workout document
      const newWorkout = new Workout({
        weeks: workoutProgram.weeks,
        createdBy,
        currentDate,
        endDate,
        exercises: populatedExercises, // Assign the flattened array of exercises
      });

      // Save the workout to the database
      const savedWorkout = await newWorkout.save();

      console.log("Workout program saved successfully:");

      return savedWorkout;
    } catch (error) {
      console.error("Failed to save workout program to the database.", error);
      return null;
    }
  }

  return workoutProgram;
}
