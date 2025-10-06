import fetch from "node-fetch";

const URL = process.env.LOCAL_GLOBAL_ENV;
export const triggerChallengeProgress = async (userId, progressSource) => {
  try {
    await fetch(`${URL}/gamification/challenge/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.API_KEY,
      },
      body: JSON.stringify({ userId, progressSource }),
    });
    console.log("Reached");
  } catch (error) {
    console.error(`Error updating challenge (${progressSource}):`, err.message);
  }
};
