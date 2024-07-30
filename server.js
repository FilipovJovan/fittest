import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express, { response } from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

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

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.json());

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.get("/", (req, res) => {
  res.json({ msg: "test route" });
});

app.get("/test", (req, res) => {
  res.json({ msg: "test route" });
});

//app.use("/api/v1", authenticateApiKey);
app.use("/api/v1/generate-custom", authenticateUser, workoutRouter);
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
