import Workout from "./models/WorkoutSchema.js";
import {
  PROGRESS_QUESTIONS_FIRST,
  PROGRESS_QUESTIONS_SECOND,
  PROGRESS_QUESTIONS_THIRD,
} from "./utils/constants.js";

function calculateVolume(reps, weight, sets) {
  return reps * weight * sets;
}

function adjustWorkout(counter, exerciseRef) {
  const { reps, sets, rest } = exerciseRef;
  if (counter < 2) {
    exerciseRef.reps = reps + 2;
    exerciseRef.sets = sets + 1;
    exerciseRef.rest = rest;
  } else if (counter >= 2 && counter < 4) {
    exerciseRef.reps = reps + 1;
    exerciseRef.sets = sets + 1;
    exerciseRef.rest = rest;
  } else if (counter >= 4 && counter < 6) {
    exerciseRef.reps = reps + 1;
    exerciseRef.sets = sets;
    exerciseRef.rest = rest;
  } else {
    exerciseRef.reps = Math.max(1, reps - 1);
    exerciseRef.sets = Math.max(1, sets - 1);
    exerciseRef.rest = rest + 0.25;
  }
}

export const progressTracker = async (req, res) => {
  try {
    const { questionOne, questionTwo, questionThree, workoutId } = req.body;

    let counter = 0;

    switch (questionOne) {
      case "no connection":
        counter += PROGRESS_QUESTIONS_FIRST.NO_MIND_MUSCLE_CONNECTION;
        break;
      case "some connection":
        counter += PROGRESS_QUESTIONS_FIRST.SOME_MIND_MUSCLE_CONNECTION;
        break;
      case "strong connection":
        counter += PROGRESS_QUESTIONS_FIRST.STRONG_MIND_MUSCLE_CONNECTION;
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

    if (counter < 2) {
      console.log("no hypertrophy");
    } else if (counter >= 2 && counter < 4) {
      console.log("maintenance");
    } else if (counter < 6) {
      console.log("maximal hypertrophy");
    } else {
      console.log("high stress");
    }

    const workout = await Workout.findById(workoutId);

    if (!workout) {
      return res.status(404).send("Workout not found");
    }

    workout.weeks.forEach((week, weekIndex) => {
      let weeklyVolume = 0;
      week.days.forEach((day) => {
        let dailyVolume = 0;
        day.workout.forEach((exerciseRef) => {
          adjustWorkout(counter, exerciseRef);

          const volume = calculateVolume(
            exerciseRef.reps,
            exerciseRef.weight,
            exerciseRef.sets
          );
          dailyVolume += volume;
          /*console.log(
            `Week ${weekIndex + 1} Day ${day.dayNumber} Exercise ${
              exerciseRef.exercise.name
            } Volume: ${volume}`
          );*/
        });
        weeklyVolume += dailyVolume;
        console.log(
          `Week ${weekIndex + 1} Day ${
            day.dayNumber
          } Total Daily Volume: ${dailyVolume}`
        );
      });
      //console.log(`Week ${weekIndex + 1} Total Weekly Volume: ${weeklyVolume}`);
    });

    //await workout.save();
    res.status(200).send("Evaluation and adjustment complete");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
