import Workout from "../models/WorkoutSchema.js";
import {
  PROGRESS_QUESTIONS_FIRST,
  PROGRESS_QUESTIONS_SECOND,
  PROGRESS_QUESTIONS_THIRD,
} from "../utils/constants.js";

// Utility function to calculate workout volume
function calculateVolume(reps, weight, sets) {
  return reps * weight * sets;
}

// Function to adjust exercise parameters based on user feedback
function adjustWorkout(counter, exerciseRef, currentWeek) {
  const { reps, sets, rest } = exerciseRef;

  if (currentWeek == 1) {
    // Less intense, focus on learning movements and form
    exerciseRef.reps = reps + 1;
    exerciseRef.sets = sets;
    exerciseRef.rest = rest + 0.25;
  } else if (currentWeek >= 2 && currentWeek <= 5) {
    // Gradual increase in intensity based on user feedback
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
    // Reduce intensity to allow for recovery
    exerciseRef.reps = Math.max(1, reps - 1);
    exerciseRef.sets = Math.max(1, sets - 1);
    exerciseRef.rest = rest + 0.25;
  }
}

// Function to find the next workout day with the same name
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
  return null; // If no next workout found with the same name
}

export const progressTracker = async (req, res) => {
  try {
    const { questionOne, questionTwo, questionThree, workoutId, currentDayId } =
      req.body;

    let counter = 0;

    // Calculate counter based on user feedback
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

    // Determine the current phase of the workout (adaptation, overload, deload)
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
    // Find the current workout day by ID
    const currentDay = workout.weeks
      .flatMap((week) => week.days)
      .find((day) => day._id.toString() === currentDayId);

    if (!currentDay) {
      return res.status(404).send("Current workout day not found");
    }

    // Find the next workout day with the same name
    const nextDay = await findNextWorkoutWithSameName(
      workout,
      currentDayId,
      currentDay.name
    );

    if (!nextDay) {
      console.log("No next workout found with the same name");
      return res.status(200).send("No next workout found with the same name");
    }

    // Adjust the workout parameters for the next workout day based on user feedback
    nextDay.workout.forEach((exerciseRef) => {
      adjustWorkout(counter, exerciseRef, currentWeek);
    });

    // Save the updated workout plan
    await workout.save();

    res.status(200).send("Evaluation and adjustment complete");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
