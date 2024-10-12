import cron from "node-cron";
import moment from "moment-timezone";
import Workout from "../models/WorkoutSchema.js";

cron.schedule("0 7 * * *", async () => {
  try {
    const now = moment().tz("Europe/Paris");
    const todayStart = now.clone().startOf("day");

    const pendingWorkouts = await Workout.find({
      "weeks.days.isFinished": false,
      "weeks.days.date": {
        $gte: todayStart.toDate(),
        $lt: now.toDate(),
      },
    });

    for (const workout of pendingWorkouts) {
      let hasChanges = false;

      for (const week of workout.weeks) {
        for (const day of week.days) {
          if (!day.isFinished && moment(day.date).isSame(todayStart, "day")) {
            day.isFinished = true;
            day.finishedType = "skipped";
            hasChanges = true;
          }
        }
      }

      if (hasChanges) {
        workout.markModified("weeks");
        await workout.save();
        console.log(`Workout ${workout._id} updated with skipped status.`);
      }
    }

    console.log(
      "Checked and updated unfinished workouts for today before 7: 00 AM CET."
    );
  } catch (error) {
    console.error("Error marking skipped workouts:", error);
  }
});
