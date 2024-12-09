// fitnessApp.js
import {
  assignSetsRepsRest,
  getRandomNumberInRange,
} from "./workoutAlgorithm/workoutAlgorithm.js";
import User from "./models/UserModel.js";
import Exercise from "./models/ExerciseModel.js";
import Workout from "./models/WorkoutSchema.js";
import { WORKOUT_TYPE, DIFFICULTY } from "./utils/constants.js";
import broSplit from "./workoutAlgorithm/broSplit.js";
import pushPullLegsUpperLower from "./workoutAlgorithm/pushPullLegsUpperLower.js";
import upperLower4x from "./workoutAlgorithm/upperLower4x.js";
import upperLower3x from "./workoutAlgorithm/upperLower3x.js";
import upperLower2x from "./workoutAlgorithm/upperLower2x.js";
import pushPullLegs3x from "./workoutAlgorithm/pushPullLegs3x.js";
import pushPullLegs6x from "./workoutAlgorithm/pushPullLegs.js";
import fullBody2x from "./workoutAlgorithm/fullBodySplit2x.js";
import fullBody3x from "./workoutAlgorithm/fullBodySplit3x.js";
import fullBody4x from "./workoutAlgorithm/fullBodySplit4x.js";
import upperLowerPushPull4x from "./workoutAlgorithm/upperLowerPushPull4x.js";

import moment from "moment-timezone";

export const generateWorkout = async (req, res) => {
  try {
    const {
      difficultyLevel,
      workoutType,
      workoutsPerWeek,
      splitPreference,
      equipmentType,
      userId,
      startDate,
      restDays,
      label,
      goal,
    } = req.body;

    const utcOffset = req.body.utcOffset || "+00:00";
    const currentDate = startDate
      ? moment(startDate).utcOffset(utcOffset).startOf("day")
      : moment().utcOffset(utcOffset).startOf("day");
    const exercises = await Exercise.find({}).lean();

    // Generate the workout program
    const generatedProgram = await generateWorkoutProgram({
      difficultyLevel,
      workoutType,
      workoutsPerWeek,
      splitPreference,
      exercises,
      userId,
      startDate: currentDate,
      equipmentType,
      restDays: restDays || [],
      label,
    });

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
  const filteredByEquipment = exercises.filter((exercise) =>
    equipmentPreference.includes(exercise.equipment)
  );

  if (filteredByEquipment.length === 0) {
    console.warn(
      "No exercises found for the given equipment preference. Returning all exercises."
    );
    return exercises;
  }

  return filteredByEquipment;
}

function selectRandomExercise(exercises, exerciseType) {
  const filteredByType = exercises.filter(
    (exercise) => exercise.exerciseType === exerciseType
  );

  const pool = filteredByType.length > 0 ? filteredByType : exercises;

  if (pool.length === 0) {
    console.error("No exercises available for fallback. Check your data.");
    return null;
  }

  const randomIndex = getRandomNumberInRange(0, pool.length - 1);
  const selectedExercise = pool[randomIndex];

  return selectedExercise;
}

function splitWorkout(workoutWithSetsRepsRest, muscleGroups) {
  if (!muscleGroups || !Array.isArray(muscleGroups)) {
    console.error("Invalid muscleGroups array:", muscleGroups);
    return [];
  }

  const filteredExercises = workoutWithSetsRepsRest.filter((exercise) =>
    muscleGroups.includes(exercise.muscleType)
  );

  if (filteredExercises.length === 0) {
    console.warn(
      "No exercises found for the specified muscle groups. Returning all exercises."
    );
    return workoutWithSetsRepsRest;
  }

  return filteredExercises;
}

const getSetsRepsRestByWorkoutType = (workoutType, difficultyLevel) => {
  switch (workoutType) {
    case "strength":
      return {
        minSets: 3,
        maxSets: 4,
        minReps: 3,
        maxReps: 5,
        minRest: 4,
        maxRest: 5,
      };
    case "hypertrophy":
      if (difficultyLevel === "beginner") {
        return {
          minSets: 2,
          maxSets: 3,
          minReps: 8,
          maxReps: 12,
          minRest: 1.5,
          maxRest: 2,
        };
      } else {
        return {
          minSets: 3,
          maxSets: 4,
          minReps: 8,
          maxReps: 12,
          minRest: 1.5,
          maxRest: 2,
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

async function generateWorkoutProgram({
  difficultyLevel,
  workoutType,
  workoutsPerWeek,
  splitPreference,
  exercises,
  userId,
  startDate,
  equipmentType,
  restDays,
  label,
}) {
  const frequency = workoutsPerWeek || 3;
  const weeks = 5;

  console.log(splitPreference + " " + workoutsPerWeek);

  const goal = workoutType || WORKOUT_TYPE.ALL_TYPES;
  const workoutWithSetsRepsRest = assignSetsRepsRest(exercises, goal);

  let workoutSplitName = "";
  switch (splitPreference) {
    case "pushPullLegs6x":
      workoutSplitName = "Push Pull Legs Split";
      break;
    case "pushPullLegs3x":
      workoutSplitName = "Push Pull Legs 3x Split";
      break;
    case "upperLower4x":
      workoutSplitName = "Upper Lower Split 4x per week";
      break;
    case "upperLower3x":
      workoutSplitName = "Upper Lower Split 3x per week";
      break;
    case "upperLower2x":
      workoutSplitName = "Upper Lower Split 2x per week";
      break;
    case "broSplit5x":
      workoutSplitName = "Bro Split Split";
      break;
    case "fullBody":
      workoutSplitName = "Full Body Split";
      break;
    case "pushPullLegsUpperLower5x":
      workoutSplitName = "Push Pull Legs Upper Lower Split";
      break;
    case "fullBody2x":
      workoutSplitName = "Full Body 2x per week";
      break;
    case "fullBody3x":
      workoutSplitName = "Full Body 3x per week";
      break;
    case "fullBody4x":
      workoutSplitName = "Full Body 4x per week";
      break;
    case "upperLowerPushPull4x":
      workoutSplitName = "Upper Lower Push Pull Split";
      break;
  }
  const workoutProgram = {
    workoutSplitName: workoutSplitName,
    weeks: [],
    exercises: workoutWithSetsRepsRest,
  };

  const generateDailyWorkout = () => {
    const dailyWorkout = [];

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

  for (let week = 1; week <= weeks; week++) {
    const weekObject = {
      weekNumber: week,
      days: [],
    };

    let dayCounter = 1;

    for (let day = 1; day <= 7; day++) {
      let dailyWorkout = [];
      let name = "";

      const workoutDate = startDate
        .clone()
        .add(week - 1, "weeks")
        .add(day - 1, "days");

      if (restDays.includes(day)) {
        weekObject.days.push({
          name: "Rest Day",
          type: "rest",
          dayNumber: day,
          workout: [],
          date: workoutDate.toDate(),
        });
      } else if (dayCounter <= frequency) {
        switch (splitPreference) {
          case "upperLower4x":
            const resultUpperLower4x = upperLower4x(
              dayCounter,
              equipmentType,
              workoutWithSetsRepsRest,
              workoutType,
              difficultyLevel,
              dailyWorkout
            );
            dailyWorkout = resultUpperLower4x.dailyWorkout;
            name = resultUpperLower4x.name;
            break;
          case "upperLower3x":
            const resultUpperLower3x = upperLower3x(
              dayCounter,
              equipmentType,
              workoutWithSetsRepsRest,
              workoutType,
              difficultyLevel,
              dailyWorkout,
              week
            );
            dailyWorkout = resultUpperLower3x.dailyWorkout;
            name = resultUpperLower3x.name;
            break;
          case "upperLower2x":
            const resultUpperLower2x = upperLower2x(
              dayCounter,
              equipmentType,
              workoutWithSetsRepsRest,
              workoutType,
              difficultyLevel,
              dailyWorkout,
              week
            );
            dailyWorkout = resultUpperLower2x.dailyWorkout;
            name = resultUpperLower2x.name;
            break;
          case "broSplit5x":
            const resultBroSplit = broSplit(
              dayCounter,
              equipmentType,
              workoutWithSetsRepsRest,
              workoutType,
              difficultyLevel,
              dailyWorkout,
              week
            );
            dailyWorkout = resultBroSplit.dailyWorkout;
            name = resultBroSplit.name;
            break;
          case "pushPullLegs6x":
            const resultPushPullLegs6x = pushPullLegs6x(
              dayCounter,
              equipmentType,
              workoutWithSetsRepsRest,
              workoutType,
              difficultyLevel,
              dailyWorkout,
              week
            );
            dailyWorkout = resultPushPullLegs6x.dailyWorkout;
            name = resultPushPullLegs6x.name;
            break;
          case "pushPullLegs3x":
            const resultPushPullLegs3x = pushPullLegs3x(
              dayCounter,
              equipmentType,
              workoutWithSetsRepsRest,
              workoutType,
              difficultyLevel,
              dailyWorkout,
              week
            );
            dailyWorkout = resultPushPullLegs3x.dailyWorkout;
            name = resultPushPullLegs3x.name;
            break;
          case "pushPullLegsUpperLower5x":
            const resultPushPullLegsUpperLower = pushPullLegsUpperLower(
              dayCounter,
              equipmentType,
              workoutWithSetsRepsRest,
              workoutType,
              difficultyLevel,
              dailyWorkout,
              week
            );
            dailyWorkout = resultPushPullLegsUpperLower.dailyWorkout;
            name = resultPushPullLegsUpperLower.name;
            break;
          case "fullBody2x":
            const resultFullBody2x = fullBody2x(
              dayCounter,
              equipmentType,
              workoutWithSetsRepsRest,
              workoutType,
              difficultyLevel,
              dailyWorkout,
              week
            );
            dailyWorkout = resultFullBody2x.dailyWorkout;
            name = resultFullBody2x.name;
            break;
          case "fullBody3x":
            const resultFullBody3x = fullBody3x(
              dayCounter,
              equipmentType,
              workoutWithSetsRepsRest,
              workoutType,
              difficultyLevel,
              dailyWorkout,
              week
            );
            dailyWorkout = resultFullBody3x.dailyWorkout;
            name = resultFullBody3x.name;
            break;
          case "fullBody4x":
            const resultFullBody4x = fullBody4x(
              dayCounter,
              equipmentType,
              workoutWithSetsRepsRest,
              workoutType,
              difficultyLevel,
              dailyWorkout,
              week
            );
            dailyWorkout = resultFullBody4x.dailyWorkout;
            name = resultFullBody4x.name;
            break;
          case "upperLowerPushPull4x":
            const resultUpperLowerPushPull4x = upperLowerPushPull4x(
              dayCounter,
              equipmentType,
              workoutWithSetsRepsRest,
              workoutType,
              difficultyLevel,
              dailyWorkout,
              week
            );
            dailyWorkout = resultUpperLowerPushPull4x.dailyWorkout;
            name = resultUpperLowerPushPull4x.name;
            break;
        }

        weekObject.days.push({
          name: name,
          dayNumber: day,
          workout: dailyWorkout,
          date: workoutDate.toDate(),
          label: label,
        });

        dayCounter++;
      }
    }

    workoutProgram.weeks.push(weekObject);
  }

  const endDate = startDate
    .clone()
    .add(weeks * 7, "days")
    .toDate();

  const createdBy = userId;

  const savedWorkout = await saveWorkoutProgramToDatabase(
    workoutProgram,
    workoutSplitName,
    startDate,
    endDate,
    createdBy
  );

  async function saveWorkoutProgramToDatabase(
    workoutProgram,
    workoutSplitName,
    currentDate,
    endDate,
    createdBy
  ) {
    try {
      const startDate = moment(currentDate);

      const exercises = workoutProgram.weeks
        .map((week, weekIndex) => {
          if (!week.days || !Array.isArray(week.days)) {
            throw new Error(`Invalid days structure in week ${weekIndex + 1}`);
          }
          return week.days.map((day, dayIndex) => {
            const workoutDate = startDate
              .clone()
              .add(weekIndex * 7 + dayIndex, "days");
            return {
              ...day,
              date: workoutDate.toDate(),
            };
          });
        })
        .flat()
        .map((day, dayIndex) => {
          if (!day.workout || !Array.isArray(day.workout)) {
            throw new Error(`Invalid workout structure on day ${dayIndex + 1}`);
          }
          return day.workout.map((exercise) => ({
            ...exercise,
            date: day.date,
          }));
        })
        .flat();
      const populatedExercises = await Promise.all(
        exercises.map(async (exercise) => {
          const populatedExercise = await Exercise.findById(
            exercise.exercise
          ).lean();
          if (!populatedExercise) {
            throw new Error(`Exercise not found for ID: ${exercise.exercise}`);
          }

          return {
            ...exercise,
            exercise: populatedExercise,
          };
        })
      );
      const newWorkout = new Workout({
        weeks: workoutProgram.weeks,
        workoutSplitName,
        createdBy,
        currentDate: startDate.toDate(),
        endDate,
        exercises: populatedExercises,
        label,
      });
      const savedWorkout = await newWorkout.save();

      return savedWorkout;
    } catch (error) {
      if (error.name === "ValidationError") {
        console.error("Validation error:", error.errors);
      } else if (error.name === "MongoError" && error.code === 11000) {
        console.error("Duplicate key error:", error);
      } else {
        console.error("Failed to save workout program to the database:", error);
      }
      return null;
    }
  }

  return workoutProgram;
}
export {
  getSetsRepsRestByWorkoutType,
  getRandomNumberInRange,
  splitWorkout,
  filterExercisesByEquipment,
  selectRandomExercise,
  generateWorkoutProgram,
};
