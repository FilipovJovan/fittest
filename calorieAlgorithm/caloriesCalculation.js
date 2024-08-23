export const calculateBMR = (weight, height, age, gender) => {
  let bmr;

  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else if (gender === "female") {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  } else {
    bmr =
      (10 * weight + 6.25 * height - 5 * age + 5) * 0.5 +
      (10 * weight + 6.25 * height - 5 * age - 161) * 0.5;
  }

  return bmr;
};

export const calculateTDEE = (bmr, activityLevel) => {
  const activityMultiplier = {
    sedentary: 1.2,
    "lightly active": 1.375,
    "moderately active": 1.55,
    "very active": 1.725,
    "extra active": 1.9,
  };

  return bmr * activityMultiplier[activityLevel];
};

export const adjustCaloriesForGoal = (tdee, fitnessGoal) => {
  let calorieAdjustment;

  switch (fitnessGoal) {
    case "weight loss":
      calorieAdjustment = -500; // typical deficit for weight loss
      break;
    case "maintenance":
      calorieAdjustment = 0; // maintain TDEE
      break;
    case "muscle gain":
      calorieAdjustment = 250; // slight surplus for muscle gain
      break;
    default:
      calorieAdjustment = 0;
  }

  return tdee + calorieAdjustment;
};

export const calculateMacros = (calories, goal) => {
  let proteinPercentage, fatPercentage, carbPercentage;

  switch (goal) {
    case "weight loss":
      proteinPercentage = 0.3;
      fatPercentage = 0.25;
      carbPercentage = 0.45;
      break;
    case "maintenance":
      proteinPercentage = 0.25;
      fatPercentage = 0.3;
      carbPercentage = 0.45;
      break;
    case "muscle gain":
      proteinPercentage = 0.3;
      fatPercentage = 0.25;
      carbPercentage = 0.45;
      break;
    default:
      proteinPercentage = 0.25;
      fatPercentage = 0.3;
      carbPercentage = 0.45;
  }

  const proteinCalories = calories * proteinPercentage;
  const fatCalories = calories * fatPercentage;
  const carbCalories = calories * carbPercentage;

  return {
    protein: proteinCalories / 4, // grams
    fat: fatCalories / 9, // grams
    carbs: carbCalories / 4, // grams
  };
};
