import Exercise from "../models/ExerciseModel.js";
import { StatusCodes } from "http-status-codes";

export const getAllExercises = async (req, res) => {
  const { search, equipment, muscleType, sort } = req.query;

  const queryObject = {};

  if (search) {
    queryObject.$or = [
      { name: { $regex: search, $options: "i" } },
      { muscleType: { $regex: search, $options: "i" } },
    ];
  }
  console.log(req.query);

  if (equipment && equipment !== "all") {
    queryObject.equipment = equipment;
  }
  if (muscleType && muscleType !== "all") {
    queryObject.muscleType = muscleType;
  }

  const sortOptions = {
    newest: "-createdAt",
    oldest: "createdAt",
    "a-z": "position",
    "z-a": "-position",
  };
  const sortKey = sortOptions[sort] || sortOptions.newest;

  //setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const exercises = await Exercise.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);

  const totalExercises = await Exercise.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalExercises / limit);
  res
    .status(StatusCodes.OK)
    .json({ totalExercises, numOfPages, currentPage: page, exercises });
};
