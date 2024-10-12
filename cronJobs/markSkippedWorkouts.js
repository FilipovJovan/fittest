import cron from "node-cron";
import moment from "moment-timezone";
import Workout from "../models/WorkoutSchema.js";
import User from "../models/UserModel.js"; // Assuming User schema includes a `utcOffset` field

// Define an async function to handle the user fetching and cron setup
async function scheduleCronJobsForUsers() {
  try {
    // Fetch users with their UTC offsets
    const users = await User.find();

    if (!users || users.length === 0) {
      console.log("No users found.");
      return;
    }

    //console.log(`Scheduling for ${users.length} users...`);

    users.forEach((user) => {
      const utcOffset = user.utcOffset || "+00:00";
      const userTime = moment()
        .utcOffset(utcOffset)
        .set({ hour: 7, minute: 0, second: 0, millisecond: 0 });
      const userHour = userTime.utc().hours();
      const userMinute = userTime.utc().minutes();
      /*console.log(
        `Scheduling cron for user ${user._id} at ${userHour}:${userMinute} UTC (user offset: ${utcOffset})`
      );*/
      cron.schedule(`${userMinute} ${userHour} * * *`, async () => {
        try {
          const now = moment().utcOffset(utcOffset);
          const todayStart = now.clone().startOf("day");

          const pendingWorkouts = await Workout.find({
            "weeks.days.isFinished": false,
            "weeks.days.date": {
              $gte: todayStart.toDate(),
              $lt: now.toDate(),
            },
          });
          if (pendingWorkouts) {
            console.log("found");
          }

          for (const workout of pendingWorkouts) {
            let hasChanges = false;

            for (const week of workout.weeks) {
              for (const day of week.days) {
                if (
                  !day.isFinished &&
                  moment(day.date).isSame(todayStart, "day")
                ) {
                  day.isFinished = true;
                  day.finishedType = "skipped";
                  hasChanges = true;
                }
              }
            }

            if (hasChanges) {
              workout.markModified("weeks");
              await workout.save();
              console.log(
                `Workout ${workout._id} updated with skipped status.`
              );
            }
          }

          console.log(
            `Checked and updated unfinished workouts for today before 14:15 PM for user ${user._id}`
          );
        } catch (error) {
          console.error(
            `Error marking skipped workouts for user ${user._id}:`,
            error
          );
        }
      });
    });
  } catch (error) {
    console.error("Error fetching users or scheduling cron jobs:", error);
  }
}

// Call the function to schedule the cron jobs
scheduleCronJobsForUsers();
