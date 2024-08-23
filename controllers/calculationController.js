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
    } = req.body;

    // Calculate BMR
    const bmr = calculateBMR(weight, height, age, gender);

    // Calculate TDEE
    const tdee = calculateTDEE(bmr, activityLevel);

    // Adjust for fitness goal
    const dailyCalories = adjustCaloriesForGoal(tdee, fitnessGoal);

    // Calculate macronutrients
    const macros = calculateMacros(dailyCalories, fitnessGoal);

    // Round the numbers
    const roundedCalories = Math.round(dailyCalories);
    const roundedMacros = {
      protein: Math.round(macros.protein),
      fat: Math.round(macros.fat),
      carbs: Math.round(macros.carbs),
    };

    // Optionally update user document with new data
    user.currentCalories = roundedCalories;
    user.macros = roundedMacros;
    await user.save();

    res.json({ calories: roundedCalories, macros: roundedMacros });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
