import User from "../models/UserModel.js";
import Food from "../models/foodModel.js";

// Function to suggest a weekly meal plan based on user preferences and goals
const suggestDailyMealPlan = async (user) => {
  const { fitnessGoal, dietaryPreferences, dislikes } = user;

  const meals = ["Breakfast", "Lunch", "Dinner", "Snack"];
  const mealPlan = {};

  for (const mealType of meals) {
    const mealOptions = await Food.find({
      $and: [
        { categoryMeal: mealType },
        { category: fitnessGoal },
        //{ dietTypes: { $in: dietaryPreferences } },
        //{ name: { $nin: dislikes } },
      ],
    }).limit(3); // Suggest top 3 options per meal type

    // Fallback logic for snacks and drinks if no options are found
    if (mealType === "Snack" && mealOptions.length === 0) {
      const alternativeCategory = [
        "weight loss",
        "maintenance",
        "weight gain",
      ].find((cat) => cat !== fitnessGoal);

      if (alternativeCategory) {
        const alternativeOptions = await Food.find({
          $and: [
            { categoryMeal: mealType },
            { category: alternativeCategory },
            //{ dietTypes: { $in: dietaryPreferences } },
            //{ name: { $nin: dislikes } },
          ],
        }).limit(3);

        mealPlan[mealType.toLowerCase()] = alternativeOptions;
      } else {
        mealPlan[mealType.toLowerCase()] = mealOptions;
      }
    } else {
      mealPlan[mealType.toLowerCase()] = mealOptions;
    }
  }

  return mealPlan;
};

export const suggestDailyPlan = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const mealPlan = await suggestDailyMealPlan(user);

    res.status(200).json(mealPlan);
  } catch (err) {
    console.error("Error in suggestDailyPlan:", err);
    res.status(500).json({ message: err.message });
  }
};

export const suggestFoods = async (req, res) => {
  try {
    console.log("Received mealType:", req.body.mealType);

    const user = await User.findById(req.body.userId);
    if (!user) {
      return res.status(404).send("User not found");
    }

    const { currentCalories, macros, fitnessGoal } = user;
    const mealType = req.body.mealType;

    // Map fitnessGoal to the corresponding Food category

    // Ensure that these are numbers
    const remainingCalories = Number(currentCalories);
    const remainingMacros = {
      protein: Number(macros.protein),
      fat: Number(macros.fat),
      carbs: Number(macros.carbs),
    };

    // Build the query
    const query = {
      $and: [
        { categoryMeal: mealType.trim() },
        { category: fitnessGoal },
        { calories: { $lte: remainingCalories } },
        { protein: { $lte: remainingMacros.protein } },
        { fats: { $lte: remainingMacros.fat } },
        { carbs: { $lte: remainingMacros.carbs } },
      ],
    };

    console.log("MongoDB Query:", query);

    // Query for the specific meal type and category
    let suggestedFoods = await Food.find(query);

    // Handle snacks separately if no suitable foods are found
    if (mealType === "Snack" && suggestedFoods.length === 0) {
      const alternativeCategory = [
        "weight loss",
        "maintenance",
        "weight gain",
      ].find((cat) => cat !== fitnessGoal);

      if (alternativeCategory) {
        const alternativeQuery = {
          $and: [
            { categoryMeal: mealType.trim() },
            { category: alternativeCategory },
          ],
        };

        suggestedFoods = await Food.find(alternativeQuery);
      }
    }

    if (suggestedFoods.length === 0) {
      return res.json({ message: "No suitable foods found" });
    }

    res.json(suggestedFoods);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

/*export const suggestDailyPlan = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const mealPlan = await suggestDailyMealPlan(user);

    res.status(200).json(mealPlan);
  } catch (err) {
    console.error("Error in suggestDailyPlan:", err);
    res.status(500).json({ message: err.message });
  }
};*/
