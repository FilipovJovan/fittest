import * as dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.API_KEY;

export const authenticateApiKey = (req, res, next) => {
  const providedApiKey = req.headers["x-api-key"];

  console.log("API_KEY from env:", apiKey);
  console.log("Provided API_KEY:", providedApiKey);

  if (!providedApiKey || providedApiKey !== apiKey) {
    return res.status(403).json({ msg: "Forbidden: Invalid API Key" });
  }

  next();
};
