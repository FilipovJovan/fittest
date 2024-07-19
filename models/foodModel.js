import mongoose from "mongoose";
const FoodSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    ingredients: String,
    calories: Number,
    protein: Number,
    carbs: Number,
    fats: Number,
  },
  { timestamps: true }
);

export default mongoose.model("Food", FoodSchema);
