import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
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

    // New fields for fitness calculations
    height: {
      type: Number, // height in centimeters
      required: true,
    },
    weight: {
      type: Number, // weight in kilograms
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    activityLevel: {
      type: String,
      enum: [
        "sedentary",
        "lightly active",
        "moderately active",
        "very active",
        "extra active",
      ],
    },
    workoutLevel: {
      type: Number, // workouts per week
      required: true,
    },
    /*sleepQuality: {
      type: Number,
      required: true,
    },
    hydration: {
      type: Number, // liters per day
      required: true,
    },*/
    fitnessGoal: {
      type: String,
      enum: ["weight loss", "maintenance", "muscle gain"],
      required: true,
    },
    currentCalories: {
      type: Number,
    },
    macros: {
      protein: Number,
      fat: Number,
      carbs: Number,
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
