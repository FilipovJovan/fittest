import User from "../models/UserModel.js";
import Food from "../models/foodModel.js";
import { StatusCodes } from "http-status-codes";

const suggestDailyMealPlan = async (user) => {
  const { fitnessGoal, dietaryPreferences, dislikes } = user;

  const meals = ["Breakfast", "Lunch", "Dinner", "Snack"];
  const mealPlan = {};

  for (const mealType of meals) {
    let mealOptions = [];

    try {
      mealOptions = await Food.find({
        $and: [
          { categoryMeal: mealType },
          { category: fitnessGoal },
          //{ dietTypes: { $in: dietaryPreferences } },
          //{ name: { $nin: dislikes } },
        ],
      }).limit(4); // top 4 options
    } catch (error) {
      console.error(`Error fetching ${mealType}:`, error);
    }

    if (mealType === "Snack" && mealOptions.length === 0) {
      const alternativeCategory = [
        "weight loss",
        "maintenance",
        "weight gain",
      ].find((cat) => cat !== fitnessGoal);

      if (alternativeCategory) {
        try {
          const alternativeOptions = await Food.find({
            $and: [
              { categoryMeal: mealType },
              { category: alternativeCategory },
              //{ dietTypes: { $in: dietaryPreferences } },
              //{ name: { $nin: dislikes } },
            ],
          }).limit(3);

          mealPlan[mealType.toLowerCase()] = alternativeOptions;
        } catch (err) {
          console.error(`Error fetching fallback for ${mealType}:`, err);
          mealPlan[mealType.toLowerCase()] = []; // fallback in case of failure
        }
      } else {
        mealPlan[mealType.toLowerCase()] = [];
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
    let suggestedFoods = await Food.find(query);

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

export const getMeals = async (req, res) => {
  const { search, categoryMeal, category } = req.query;
  const queryObject = {};

  // Apply filters only if not "all"
  if (categoryMeal && categoryMeal !== "all") {
    queryObject.categoryMeal = categoryMeal;
  }

  if (category && category !== "all") {
    queryObject.category = category;
  }

  if (search) {
    queryObject.$or = [
      { name: { $regex: search, $options: "i" } },
      { ingredients: { $regex: search, $options: "i" } },
      { recipe: { $regex: search, $options: "i" } },
    ];
  }

  // Pagination setup
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  // Fetch data
  const meals = await Food.find(queryObject).skip(skip).limit(limit);
  const totalMeals = await Food.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalMeals / limit);

  // Respond
  res.status(StatusCodes.OK).json({
    totalMeals,
    numOfPages,
    currentPage: page,
    meals,
  });
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
