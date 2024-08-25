import { readFile } from "fs/promises";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import User from "./models/UserModel.js";
import Exercise from "./models/ExerciseModel.js";

try {
  await mongoose.connect(process.env.MONGO_URL);
  //const user = await User.findOne({ email: "jovan@gmail.com" });
  //const user = await User.insertMany();

  const jsonExercises = JSON.parse(
    await readFile(new URL("./utils/exercisesData.json", import.meta.url))
  );
  const exercises = jsonExercises.map((exercise) => {
    return { ...exercise };
  });
  //console.log(user._id);
  await Exercise.create(exercises);
  console.log("Success!!!");
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
