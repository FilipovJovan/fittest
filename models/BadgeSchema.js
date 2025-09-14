import mongoose from "mongoose";

const BadgeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  condition: {
    type: {
      type: String,
    },
    value: Number,
  },
  icon: String,
});

export default mongoose.model("Badge", BadgeSchema);
