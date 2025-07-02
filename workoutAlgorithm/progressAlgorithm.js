import Workout from "../models/WorkoutSchema.js";
import {
  PROGRESS_QUESTIONS_FIRST,
  PROGRESS_QUESTIONS_SECOND,
  PROGRESS_QUESTIONS_THIRD,
} from "../utils/constants.js";

function calculateVolume(reps, weight, sets) {
  return reps * weight * sets;
}

function adjustWorkout(counter, exerciseRef, currentWeek) {
  const { reps, sets, rest } = exerciseRef;

  if (currentWeek == 1) {
    exerciseRef.reps = reps + 1;
    exerciseRef.sets = sets;
    exerciseRef.rest = rest + 0.25;
  } else if (currentWeek >= 2 && currentWeek <= 5) {
    if (counter < 2) {
      exerciseRef.reps = reps + 2;
      exerciseRef.sets = sets + 1;
    } else if (counter >= 2 && counter < 4) {
      exerciseRef.reps = reps + 1;
      exerciseRef.sets = sets + 1;
    } else if (counter < 6) {
      exerciseRef.reps = reps;
      exerciseRef.sets = sets;
    } else {
      exerciseRef.reps = Math.max(1, reps - 1);
      exerciseRef.sets = Math.max(1, sets - 1);
      exerciseRef.rest = rest + 0.25;
    }
  } else if (currentWeek == 6) {
    exerciseRef.reps = Math.max(1, reps - 1);
    exerciseRef.sets = Math.max(1, sets - 1);
    exerciseRef.rest = rest + 0.25;
  }
}

async function findNextWorkoutWithSameName(workout, currentDayId, name) {
  let foundCurrent = false;
  for (const week of workout.weeks) {
    for (const day of week.days) {
      if (day._id.toString() === currentDayId.toString()) {
        foundCurrent = true;
      } else if (foundCurrent && day.name === name) {
        return day;
      }
    }
  }
  return null;
}

export const progressTracker = async (req, res) => {
  try {
    const { questionOne, questionTwo, questionThree, workoutId, currentDayId } =
      req.body;

    let counter = 0;

    switch (questionOne) {
      case "no connection":
        counter += PROGRESS_QUESTIONS_FIRST.NO_MIND_MUSCLE_CONNECTION;
        break;
      case "some connection":
        counter += PROGRESS_QUESTIONS_FIRST.SOME_MIND_MUSCLE_CONNECTION;
        break;
      case "high connection":
        counter += PROGRESS_QUESTIONS_FIRST.HIGH_MIND_MUSCLE_CONNECTION;
        break;
    }

    switch (questionTwo) {
      case "no soreness":
        counter += PROGRESS_QUESTIONS_SECOND.NO_SORENESS;
        break;
      case "some soreness":
        counter += PROGRESS_QUESTIONS_SECOND.SOME_SORENESS;
        break;
      case "high soreness":
        counter += PROGRESS_QUESTIONS_SECOND.HIGH_SORENESS;
        break;
    }

    switch (questionThree) {
      case "no muscle pump":
        counter += PROGRESS_QUESTIONS_THIRD.NO_MUSCLE_PUMP;
        break;
      case "some muscle pump":
        counter += PROGRESS_QUESTIONS_THIRD.SOME_MUSCLE_PUMP;
        break;
      case "high muscle pump":
        counter += PROGRESS_QUESTIONS_THIRD.HIGH_MUSCLE_PUMP;
        break;
    }

    console.log(`Total Score: ${counter}`);

    const workout = await Workout.findById(workoutId);

    if (!workout) {
      return res.status(404).send("Workout not found");
    }

    const currentWeekIndex = workout.weeks.findIndex((week) =>
      week.days.some((day) => day._id.toString() === currentDayId)
    );
    let workoutPhase = "overload";
    if (currentWeekIndex === 0) {
      workoutPhase = "adaptation";
    } else if (currentWeekIndex === workout.weeks.length - 1) {
      workoutPhase = "deload";
    }

    const currentWeek = currentWeekIndex + 1;
    const currentDay = workout.weeks
      .flatMap((week) => week.days)
      .find((day) => day._id.toString() === currentDayId);

    if (!currentDay) {
      return res.status(404).send("Current workout day not found");
    }

    const nextDay = await findNextWorkoutWithSameName(
      workout,
      currentDayId,
      currentDay.name
    );

    if (!nextDay) {
      console.log("No next workout found with the same name");
      return res.status(200).send("No next workout found with the same name");
    }

    nextDay.workout.forEach((exerciseRef) => {
      adjustWorkout(counter, exerciseRef, currentWeek);
    });

    let response = [];
    for (const week of workout.weeks) {
      let weeklyVolume = 0;

      for (const day of week.days) {
        let dailyVolume = 0;
        for (const exercise of day.workout) {
          const reps = exercise.reps;
          const weight = exercise.weight;
          const sets = exercise.sets;
          const volume = calculateVolume(reps, weight, sets);
          dailyVolume += volume;
        }
        weeklyVolume += dailyVolume;
      }
      response.push(
        `Week ${
          week.name || workout.weeks.indexOf(week) + 1
        }: Weekly Volume = ${weeklyVolume}`
      );
    }

    res.status(200).send("Evaluation and adjustment complete");
    await workout.save();
  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      res.status(500).send("Internal Server Error");
    }
  }
};

export const getSetsPerMuscleGroup = async (req, res) => {
  try {
    const { workoutId } = req.params;
    const workout = await Workout.findById(workoutId);

    if (!workout) return res.status(404).send("Workout not found");

    let result = [];

    for (const week of workout.weeks) {
      const setsPerMuscle = {};

      for (const day of week.days) {
        for (const exercise of day.workout) {
          const muscleType = exercise.exercise.muscleType;
          const sets = exercise.sets;

          if (!setsPerMuscle[muscleType]) {
            setsPerMuscle[muscleType] = 0;
          }
          setsPerMuscle[muscleType] += sets;
        }
      }

      result.push({
        week: week.name || `Week ${workout.weeks.indexOf(week) + 1}`,
        setsPerMuscle,
      });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export const getVolumePerMuscleGroup = async (req, res) => {
  try {
    const { workoutId } = req.params;
    const workout = await Workout.findById(workoutId);

    if (!workout) return res.status(404).send("Workout not found");

    function calculateVolume(reps, weight, sets) {
      return reps * weight * sets;
    }

    let result = [];

    for (const week of workout.weeks) {
      const volumePerMuscle = {};

      for (const day of week.days) {
        for (const exercise of day.workout) {
          const muscleType = exercise.exercise.muscleType;
          const reps = exercise.reps;
          const sets = exercise.sets;
          const weight = exercise.weight;

          const volume = calculateVolume(reps, weight, sets);

          if (!volumePerMuscle[muscleType]) {
            volumePerMuscle[muscleType] = 0;
          }
          volumePerMuscle[muscleType] += volume;
        }
      }

      result.push({
        week: week.name || `Week ${workout.weeks.indexOf(week) + 1}`,
        volumePerMuscle,
      });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export const getWeeklyVolume = async (req, res) => {
  try {
    const { workoutId } = req.params;
    const workout = await Workout.findById(workoutId);

    if (!workout) return res.status(404).send("Workout not found");

    function calculateVolume(reps, weight, sets) {
      return reps * weight * sets;
    }

    let result = [];

    for (const week of workout.weeks) {
      let weeklyVolume = 0;

      for (const day of week.days) {
        for (const exercise of day.workout) {
          const reps = exercise.reps;
          const sets = exercise.sets;
          const weight = exercise.weight;

          weeklyVolume += calculateVolume(reps, weight, sets);
        }
      }

      result.push({
        week: week.name || `Week ${workout.weeks.indexOf(week) + 1}`,
        weeklyVolume,
      });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
