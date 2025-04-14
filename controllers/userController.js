import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";

export const getCurrentUser = async (req, res) => {
  //console.log("Request received! Checking user...");
  //console.log("req.user:", req.user); // 🔍 Log the user object

  if (!req.user) {
    return res.status(401).json({ msg: "Unauthorized! No user found." });
  }

  try {
    const user = await User.findOne({ _id: req.user.userId });
    if (!user) {
      return res.status(404).json({ msg: "User not found!" });
    }

    const userWithoutPassword = user.toJSON();
    res.status(200).json({ user: userWithoutPassword });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  res.status(StatusCodes.OK).json({ users });
};

export const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;

  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
  }
  res.status(StatusCodes.OK).json({ msg: "update user" });
};
