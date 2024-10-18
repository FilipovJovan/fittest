import cron from "node-cron";
import moment from "moment-timezone";
import Workout from "../models/WorkoutSchema.js";
import User from "../models/UserModel.js";

async function scheduleCronJobsForUsers() {
  try {
    const users = await User.find();

    if (!users || users.length === 0) {
      console.log("No users found.");
      return;
    }

    console.log(`Scheduling for ${users.length} users...`);

    users.forEach(async (user) => {
      const utcOffset = user.utcOffset || "+00:00";
      const workoutPlan = await Workout.findOne({ createdBy: user._id });

      if (!workoutPlan || !workoutPlan.currentDate) {
        console.log(
          `No workout plan or currentDate found for user ${user._id}`
        );
        return;
      }

      // Set the user's time to 7:00 AM in their timezone
      const userTime = moment().utcOffset(utcOffset).set({
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
      });

      const userHour = userTime.hours();
      const userMinute = userTime.minutes();

      /*console.log(
        `Scheduling cron for user ${user._id} at 00:00 in their local timezone (UTC offset: ${utcOffset})`
      );*/

      cron.schedule(`${userMinute} ${userHour} * * *`, async () => {
        try {
          const now = moment().utcOffset(utcOffset);
          const todayStart = now.clone().startOf("day");

          console.log(
            `Now: ${now.format()} | Today start: ${todayStart.format()}`
          );

          const pendingWorkouts = await Workout.find({
            createdBy: user._id,
            "weeks.days.isFinished": false,
            "weeks.days.date": {
              $gte: todayStart.toDate(),
              $lt: now.toDate(),
            },
          });

          console.log(
            `Pending workouts query result: ${pendingWorkouts.length}`
          );

          if (pendingWorkouts.length > 0) {
            console.log("Pending workouts found:", pendingWorkouts.length);
          } else {
            console.log("No pending workouts found for today.");
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
            `Checked and updated unfinished workouts for today before 7:00 AM for user ${user._id}`
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

scheduleCronJobsForUsers();
