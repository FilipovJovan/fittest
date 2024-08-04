import Workout from "./models/WorkoutSchema.js";
import {
  PROGRESS_QUESTIONS_FIRST,
  PROGRESS_QUESTIONS_SECOND,
  PROGRESS_QUESTIONS_THIRD,
} from "./utils/constants.js";

export const progressTracker = async (req, res) => {
  try {
    const { questionOne, questionTwo, questionThree } = req.body;

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

    res.status(200).send("Evaluation complete");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
