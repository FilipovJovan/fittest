import cron from "node-cron";
import moment from "moment-timezone";
import Workout from "../models/WorkoutSchema.js";
import User from "../models/UserModel.js";

async function scheduleCronJobsForUsers() {
    try {
        const users = await User.find();

        if (!users || users.length === 0) {
            //console.log("No users found.");
            return;
        }

        //console.log(`Scheduling for ${users.length} users...`);

        for (const user of users) {
            const utcOffset = user.userValues.utcOffset || "+00:00";
            const workoutPlan = await Workout.findOne({createdBy: user._id});

            if (!workoutPlan || !workoutPlan.currentDate) {
                continue;
            }

            const userTime = moment().utcOffset(utcOffset).set({
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0,
            });

            const userHour = userTime.hours();
            const userMinute = userTime.minutes();

            cron.schedule(`${userMinute} ${userHour} * * *`, async () => {
                try {
                    const now = moment().utcOffset(utcOffset);
                    const todayStart = now.clone().startOf("day");

                    const pendingWorkouts = await Workout.find({
                        createdBy: (await user)._id,
                        "weeks.days.isFinished": false,
                        "weeks.days.date": {
                            $gte: todayStart.toDate(),
                            $lt: now.toDate(),
                        },
                    });

                    for (const workout of pendingWorkouts) {
                        let hasChanges = false;
                        for (const week of (await workout).weeks) {
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
                        }
                    }

                    console.log(
                        `Checked unfinished workouts for user ${(await user)._id} before 7:00 AM`
                    );
                } catch (error) {
                    console.error(
                        `Error marking skipped workouts for user ${(await user)._id}:`,
                        error
                    );
                }
            });
        }
    } catch (error) {
        console.error("Error fetching users or scheduling cron jobs:", error);
    }
}

scheduleCronJobsForUsers().catch((err) => {
    console.error("Error scheduling cron jobs:", err);
});
