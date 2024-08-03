import Workout from "./models/WorkoutSchema.js";

export const progressTracker = async (req, res) => {
  try {
    const {} = req.body;
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
