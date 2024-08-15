import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

//router import
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import exerciseRouter from "./routes/exerciseRouter.js";
import workoutRouter from "./routes/generateWorkoutRouter.js";
//public things
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

//middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
import { authenticateApiKey } from "./middleware/apiKeyMiddleware.js";

// Models and services for newsletter
import User from "./models/UserModel.js";
import { sendVerificationEmail, sendBulkEmails } from "./emailService.js";
import jwt from "jsonwebtoken";

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.json());
app.use(cors());

// Newsletter routes
app.post("/signup", async (req, res) => {
  const { email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("Email already exists.");
    }

    user = new User({ email });
    await user.save();

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    await sendVerificationEmail(email, token);

    res.status(201).send("Signup successful! Please verify your email.");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.get("/verify/:token", async (req, res) => {
  const { token } = req.params;
  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRET);
    await User.findOneAndUpdate({ email }, { verified: true });
    res.send("Email verified successfully!");
  } catch (error) {
    res.status(400).send("Invalid or expired token.");
  }
});

app.post("/unsubscribe", async (req, res) => {
  const { email } = req.body;
  try {
    await User.findOneAndDelete({ email });
    res.send("Unsubscribed successfully!");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.post("/sendBulkEmails", async (req, res) => {
  const { subject, text } = req.body;
  try {
    const users = await User.find({ verified: true });
    const emails = users.map((user) => user.email);
    await sendBulkEmails(emails, subject, text);
    res.send("Bulk emails sent successfully!");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.get("/", (req, res) => {
  res.json({ msg: "test route" });
});

app.get("/test", (req, res) => {
  res.json({ msg: "test route" });
});

app.use("/api/v1", authenticateApiKey);
app.use("/api/v1/generate-custom", workoutRouter);
app.use("/api/v1/exercises", authenticateUser, exerciseRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, "0.0.0.0", () => {
    console.log(`server running on PORT ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
