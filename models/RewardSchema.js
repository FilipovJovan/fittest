import mongoose from "mongoose";

const RewardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  type: {
    type: String,
    enum: ["ebook", "discount", "currency", "unlock"],
    required: true,
  },
  xpRequired: { type: Number, required: true },
  icon: String,
  link: String,
});

export default mongoose.model("Reward", RewardSchema);
