import User from "../models/UserModel.js";
import {
  calculateBMR,
  calculateTDEE,
  adjustCaloriesForGoal,
  calculateMacros,
} from "../calorieAlgorithm/caloriesCalculation.js";

export const calculateUserCaloriesAndMacros = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).send("User not found");
    }
    const {
      weight = user.weight,
      height = user.height,
      age = user.age,
      gender = user.gender,
      activityLevel = user.activityLevel,
      fitnessGoal = user.fitnessGoal,
      workoutLevel = user.workoutLevel,
    } = req.body;

    const bmr = calculateBMR(weight, height, age, gender);

    const tdee = calculateTDEE(bmr, activityLevel, workoutLevel);

    const dailyCalories = adjustCaloriesForGoal(tdee, fitnessGoal);

    const macros = calculateMacros(dailyCalories, fitnessGoal);

    const roundedCalories = Math.round(dailyCalories);
    const roundedMacros = {
      protein: Math.round(macros.protein),
      fat: Math.round(macros.fat),
      carbs: Math.round(macros.carbs),
    };

    await user.updateOne(req.body);
    user.currentCalories = roundedCalories;
    user.macros = roundedMacros;
    await user.save();

    res.json({ calories: roundedCalories, macros: roundedMacros });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const calculateActivityMultiplier = (steps, workouts) => {
  let activityMultiplier = 1.2;
  if (steps > 10000 || workouts >= 4) {
    activityMultiplier = 1.5;
  } else if (steps > 7000 || workouts >= 3) {
    activityMultiplier = 1.375;
  } else if (steps > 5000 || workouts >= 2) {
    activityMultiplier = 1.2;
  }

  return activityMultiplier;
};

const calculateSleepMultiplier = (hours) => {
  if (hours >= 8) return 1.1;
  if (hours >= 6) return 1.05;
  return 1.0;
};

const calculateHydrationMultiplier = (liters) => {
  if (liters >= 3) return 1.1;
  if (liters >= 2) return 1.05;
  return 1.0;
};
