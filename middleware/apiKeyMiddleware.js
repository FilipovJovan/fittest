import * as dotenv from "dotenv";
dotenv.config();

export const authenticateApiKey = (req, res, next) => {
  if (req.path.startsWith("/auth/verify-email")) {
    return next();
  }

  const apiKey = req.header("x-api-key");
  const validApiKey = process.env.API_KEY;

  if (!apiKey || apiKey !== validApiKey) {
    return res.status(403).json({ msg: "Forbidden: Invalid API Key" });
  }

  next();
};
