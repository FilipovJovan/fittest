import { readFile } from "fs/promises";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import User from "./models/UserModel.js";
import Food from "./models/foodModel.js";

try {
  await mongoose.connect(process.env.MONGO_URL);
  //const user = await User.findOne({ email: "jovan@gmail.com" });
  const user = await User.insertMany();

  const jsonFoods = JSON.parse(
    await readFile(new URL("./utils/foodChatGPTdata.json", import.meta.url))
  );
  const foods = jsonFoods.map((exercise) => {
    return { ...exercise };
  });
  console.log(user._id);
  await Food.create(foods);
  console.log("Success!!!");
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
