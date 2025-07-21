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

export const calculateTDEE = (bmr, activityLevel, workoutLevel) => {
  const activityMultiplier = {
    Sedentary: 1.2,
    "Lightly active": 1.375,
    "Moderately active": 1.55,
    "Very active": 1.725,
    "Extra active": 1.9,
  };

  const baseTDEE = bmr * activityMultiplier[activityLevel];
  let workoutMultiplier = 1;
  if (workoutLevel >= 5) {
    workoutMultiplier = 1.15;
  } else if (workoutLevel >= 3) {
    workoutMultiplier = 1.1;
  } else if (workoutLevel > 0) {
    workoutMultiplier = 1.05;
  }

  return baseTDEE * workoutMultiplier;
};

export const adjustCaloriesForGoal = (tdee, fitnessGoal) => {
  let calorieAdjustment;

  switch (fitnessGoal) {
    case "Weight Loss":
      calorieAdjustment = -500;
      break;
    case "Maintenance":
      calorieAdjustment = 0;
      break;
    case "Muscle Gain":
      calorieAdjustment = 250;
      break;
    default:
      calorieAdjustment = 0;
  }

  return tdee + calorieAdjustment;
};

export const calculateMacros = (calories, goal) => {
  let proteinPercentage, fatPercentage, carbPercentage;

  switch (goal) {
    case "Weight Loss":
      proteinPercentage = 0.3;
      fatPercentage = 0.25;
      carbPercentage = 0.45;
      break;
    case "Maintenance":
      proteinPercentage = 0.25;
      fatPercentage = 0.3;
      carbPercentage = 0.45;
      break;
    case "Muscle Gain":
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
    protein: proteinCalories / 4,
    fat: fatCalories / 9,
    carbs: carbCalories / 4,
  };
};
