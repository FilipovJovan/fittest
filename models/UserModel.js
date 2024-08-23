import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    // Existing fields
    name: String,
    lastName: {
      type: String,
      default: "lastName",
    },
    date: {
      type: Date,
      min: "1900-01-01",
      max: new Date(),
    },
    email: String,
    password: String,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    avatar: String,
    avatarPublicId: String,
    tier: Number,

    // New fields for calorie calculation
    age: Number,
    gender: String,
    height: Number,
    weight: Number,
    activityLevel: {
      type: String,
      enum: [
        "sedentary",
        "lightly active",
        "moderately active",
        "very active",
        "super active",
      ],
    },
    fitnessGoal: {
      type: String,
      enum: ["weight loss", "maintenance", "muscle gain"],
    },
    medicalConditions: [String],
    medications: [String],
    lifestyleFactors: {
      workSchedule: String,
      stressLevel: String,
    },
    sleepQuality: {
      duration: Number,
      quality: String,
    },
    hydration: Number, // in liters or other unit
    eatingPatterns: String,
    behavioralFactors: {
      cravings: Boolean,
      eatingOutFrequency: Number,
    },
    fitnessLevelProgress: String,
    initialCalories: Number,
    currentCalories: Number,
    macros: {
      protein: Number, // in grams
      fat: Number, // in grams
      carbs: Number, // in grams
    },
  },
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model("User", UserSchema);
