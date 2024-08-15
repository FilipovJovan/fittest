import mongoose from "mongoose";
const FoodSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    ingredients: String,
    recipe: String,
    calories: Number,
    protein: Number,
    carbs: Number,
    fats: Number,
    category: String,
  },
  { timestamps: true }
);

export default mongoose.model("Food", FoodSchema);
