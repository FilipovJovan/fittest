import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import crypto from "crypto";
import nodemailer from "nodemailer";

// Router imports
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import exerciseRouter from "./routes/exerciseRouter.js";
import workoutRouter from "./routes/generateWorkoutRouter.js";
import calorieRouter from "./routes/calorieRouter.js";

// Public things
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// Middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
import { authenticateApiKey } from "./middleware/apiKeyMiddleware.js";

// Models and services for newsletter
import NewsletterSubscriber from "./models/newsletterSubscriber.js";
import { sendVerificationEmail, sendBulkEmails } from "./emailService.js";

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
    let subscriber = await NewsletterSubscriber.findOne({ email });
    if (subscriber) {
      return res.status(400).send("Email already exists.");
    }

    const verificationToken = crypto.randomBytes(32).toString("hex");
    subscriber = new NewsletterSubscriber({ email, verificationToken });
    await subscriber.save();

    const verificationUrl = `http://localhost:${port}/verify/${verificationToken}`;

    // Send verification email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "FittestApp Newsletter Subscription Verification",
      html: `
  <p>Dear ${email},</p>
  <p>Thank you for subscribing to our newsletter!</p>
  <p>At FittestApp, we use advanced algorithms to tailor personalized food and workout plans just for you. Get ready to achieve your fitness goals with us!</p>
  <p>Best regards,<br/>The FittestApp Team</p>
  <p>Please verify your email by clicking on the following link:</p>
  <a href="${verificationUrl}" style="text-decoration: underline; color: blue;">Verify Email</a>
  <br/><br/>
  <p>If you wish to unsubscribe, please click the following link:</p>
  <a href="http://localhost:5000/unsubscribe?email=${encodeURIComponent(
    email
  )}" style="text-decoration: underline; color: blue;">Unsubscribe</a>`,
      attachments: [
        {
          filename: "Introduction to bodybuilding ebook.pdf",
          path: path.resolve("public/assets/freeEbook.pdf"),
          contentType: "application/pdf",
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    res.status(201).send("Signup successful! Please verify your email.");
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/verify/:token", async (req, res) => {
  const { token } = req.params;
  try {
    const subscriber = await NewsletterSubscriber.findOne({
      verificationToken: token,
    });
    if (!subscriber) {
      return res.status(400).send("Invalid token.");
    }

    subscriber.verified = true;
    subscriber.verificationToken = undefined;
    await subscriber.save();

    res.redirect("/verification");
  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/unsubscribe", async (req, res) => {
  const { email } = req.body;
  try {
    await NewsletterSubscriber.findOneAndDelete({ email });
    res.redirect("/unsubscribe");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.post("/sendBulkEmails", async (req, res) => {
  const { subject, text } = req.body;
  try {
    const subscribers = await NewsletterSubscriber.find({ verified: true });
    const emails = subscribers.map((subscriber) => subscriber.email);
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
app.use("/api/v1/calculate-calories-macros", calorieRouter);
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
  console.log("connected");

  app.listen(port, "0.0.0.0", () => {
    console.log(`server running on PORT ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
