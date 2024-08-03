import Workout from "./models/WorkoutSchema.js";
import {
  PROGRESS_QUESTIONS_FIRST,
  PROGRESS_QUESTIONS_SECOND,
  PROGRESS_QUESTIONS_THIRD,
} from "./utils/constants.js";

export const progressTracker = async (req, res) => {
  try {
    const { questionOne, questionTwo, questionThree } = req.body;
    let counter;
    PROGRESS_QUESTIONS_FIRST.NO_MIND_MUSCLE_CONNECTION = 0;
    PROGRESS_QUESTIONS_FIRST.SOME_MIND_MUSCLE_CONNECTION = 1;
    PROGRESS_QUESTIONS_FIRST.STRONG_MIND_MUSCLE_CONNECTION = 2;

    PROGRESS_QUESTIONS_SECOND.NO_SORENESS = 0;
    PROGRESS_QUESTIONS_SECOND.SOME_SORENESS = 1;
    PROGRESS_QUESTIONS_SECOND.HIGH_SORENESS = 2;

    PROGRESS_QUESTIONS_THIRD.NO_MUSCLE_PUMP = 0;
    PROGRESS_QUESTIONS_THIRD.SOME_MUSCLE_PUMP = 1;
    PROGRESS_QUESTIONS_THIRD.HIGH_MUSCLE_PUMP = 2;

    counter = questionOne + questionTwo + questionThree;
    if (counter < 2) {
      console.log("no hypertrophy");
    } else if (counter >= 2 && counter < 4) {
      console.log("maintenance");
    } else if (counter < 6) {
      console.log("maximal hypertrophy");
    } else {
      console.log("high stress");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
