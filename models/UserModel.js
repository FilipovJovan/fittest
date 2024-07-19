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
  },
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model("User", UserSchema);
