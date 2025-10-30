import Workout from "../models/WorkoutSchema.js";
import Exercise from "../models/ExerciseModel.js";
import User from "../models/UserModel.js";
import Gamification from "../models/GamificationSchema.js";
import ArchivedWorkout from "../models/ArchivedWorkoutSchema.js";
import {StatusCodes} from "http-status-codes";
import {comparePassword, hashPassword} from "../utils/passwordUtils.js";
import setExercisesWeight from "../workoutAlgorithm/weightAlgorithm.js";
import {triggerChallengeProgress} from "../utils/helperFunctions.js";
import {checkAndAwardBadges} from "./badgeController.js";

export const getWorkout = async (req, res) => {
    const queryObject = {
        createdBy: req.user.userId,
    };

    //console.log(queryObject);
    const workoutProgram = await Workout.find(queryObject);
    //console.log(workoutProgram);
    res.status(StatusCodes.OK).json({workoutProgram});
};

export const addExerciseToWorkout = async (req, res) => {
    try {
        const {week, day, exerciseId, sets, reps, rest, exerciseType} = req.body;
        const {workoutId} = req.params;

        // Find the workout plan by ID
        const workoutPlan = await Workout.findById(workoutId);

        if (!workoutPlan) {
            return res.status(404).json({message: "Workout plan not found"});
        }

        // Check if the week exists
        if (week < 1 || week > workoutPlan.weeks.length) {
            return res
                .status(404)
                .json({message: "Week not found in the workout plan"});
        }

        // Find the specific day within the specified week
        const workoutDay = workoutPlan.weeks[week - 1].days[day - 1]; // Adjust for 0-based index

        if (!workoutDay) {
            return res
                .status(404)
                .json({message: "Day not found in the workout plan"});
        }

        // Fetch the exercise details from the Exercise model
        const exercise = await Exercise.findById(exerciseId);

        if (!exercise) {
            return res.status(404).json({message: "Exercise not found"});
        }

        // Add the new exercise to the day's workout with full details
        workoutDay.workout.push({
            exercise: {
                _id: exercise._id,
                name: exercise.name,
                muscleType: exercise.muscleType,
                equipment: exercise.equipment,
                instructions: exercise.instructions,
            },
            sets,
            reps,
            rest,
            exerciseType,
        });

        // Save the updated workout plan
        await workoutPlan.save();

        res
            .status(200)
            .json({message: "Exercise added successfully", workoutPlan});
    } catch (error) {
        console.error("Error adding exercise:", error);
        res.status(500).json({message: "Internal Server Error"});
    }
};

// export const updateExerciseInWorkout = async (req, res) => {
//   try {
//     const { week, day, newExerciseId, sets, reps, rest, exerciseType } =
//       req.body;
//     const { workoutId, exerciseId } = req.params;
//     console.log("Request body:", req.body);
//     console.log("Params:", req.params);

//     const workoutPlan = await Workout.findById(workoutId);

//     if (!workoutPlan) {
//       return res.status(404).json({ message: "Workout plan not found" });
//     }

//     if (week < 1 || week > workoutPlan.weeks.length) {
//       return res
//         .status(404)
//         .json({ message: "Week not found in the workout plan" });
//     }

//     const workoutDay = workoutPlan.weeks[week - 1].days[day - 1];

//     if (!workoutDay) {
//       return res
//         .status(404)
//         .json({ message: "Day not found in the workout plan" });
//     }

//     const exerciseIndex = workoutDay.workout.findIndex(
//       (exerciseEntry) => exerciseEntry.exercise._id.toString() === exerciseId
//     );

//     if (exerciseIndex === -1) {
//       return res
//         .status(404)
//         .json({ message: "Exercise not found in the workout plan" });
//     }

//     const newExercise = await Exercise.findById(newExerciseId);

//     if (!newExercise) {
//       return res.status(404).json({ message: "New exercise not found" });
//     }

//     workoutDay.workout[exerciseIndex] = {
//       exercise: {
//         _id: newExercise._id,
//         name: newExercise.name,
//         muscleType: newExercise.muscleType,
//         equipment: newExercise.equipment,
//         instructions: newExercise.instructions,
//       },
//       sets,
//       reps,
//       rest,
//       exerciseType,
//     };

//     await workoutPlan.save();

//     res.status(200).json({ message: "Exercise updated successfully" });
//   } catch (error) {
//     console.error("Error updating exercise:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

export const isWorkoutFinished = async (req, res) => {
    try {
        const {workoutId, weekIndex, dayIndex, finishedType} = req.body;

        const workoutPlan = await Workout.findById(workoutId);

        if (!workoutPlan) {
            return res.status(404).json({message: "Workout plan not found"});
        }

        const workoutDay = workoutPlan.weeks[weekIndex].days[dayIndex];

        if (!workoutDay) {
            return res
                .status(404)
                .json({message: "Day not found in the workout plan"});
        }

        workoutDay.finishedType = finishedType;
        workoutDay.isFinished = true;

        await workoutPlan.save();

        res.status(200).json({message: "Values updated successfully"});
    } catch (error) {
        console.error("Error updating values:", error);
        res.status(500).json({message: "Internal Server Error"});
    }
};

export const updatingUserValues = async (req, res) => {
    try {
        const {
            name,
            lastName,
            email,
            password,
            weight,
            height,
            muscleInjuries = [],
            jointInjuries = [],
            userId,
        } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({message: "User not found"});
        }

        // Update top-level user info if provided
        if (name) user.name = name;
        if (lastName) user.lastName = lastName;
        if (email) user.email = email;

        if (password) {
            const hashedPassword = await hashPassword(password);
            user.password = hashedPassword;
        }

        // Ensure userValues object exists
        user.userValues = user.userValues || {};

        // Update userValues
        if (height !== undefined) user.userValues.height = height;
        if (weight !== undefined) user.userValues.weight = weight;

        user.userValues.muscleInjuries = Array.isArray(muscleInjuries)
            ? muscleInjuries.length
                ? muscleInjuries
                : ["none"]
            : ["none"];

        user.userValues.jointInjuries = Array.isArray(jointInjuries)
            ? jointInjuries.length
                ? jointInjuries
                : ["none"]
            : ["none"];

        user.markModified("userValues");
        await user.save();

        res.status(200).json({message: "Values updated successfully"});
    } catch (error) {
        console.error("Error updating values:", error);
        res.status(500).json({message: "Internal Server Error"});
    }
};

export const workoutDelete = async (req, res) => {
    try {
        const {workoutId} = req.params;

        // Delete the workout plan from the active workouts
        const result = await Workout.deleteOne({_id: workoutId});

        if (result.deletedCount === 0) {
            return res.status(404).json({message: "Workout not found"});
        }

        res.status(200).json({message: "Workout deleted successfully"});
    } catch (error) {
        console.error("Error deleting workout:", error);
        res.status(500).json({message: "Failed to delete workout"});
    }
};

export const archiveWorkout = async (req, res) => {
    try {
        const {workoutId} = req.params;

        // Find the workout by ID
        const workout = await Workout.findById(workoutId);

        if (!workout) {
            return res.status(404).json({message: "Workout not found"});
        }

        // Create an archived workout entry
        const archivedWorkout = new ArchivedWorkout({
            userId: workout.createdBy,
            workoutData: workout.toObject(), // Copy all workout details
            label: `Workout ${workout.label}`,
            startDate: workout.startDate,
            endDate: new Date(), // Set the archive date
        });

        await archivedWorkout.save();

        // Remove the workout from the active collection
        await Workout.deleteOne({_id: workoutId});

        res
            .status(200)
            .json({message: "Workout archived successfully", archivedWorkout});
    } catch (error) {
        console.error("Error archiving workout:", error);
        res.status(500).json({message: "Failed to archive workout"});
    }
};

export const finishWorkoutDay = async (req, res) => {
    try {
        const {id} = req.params;
        const {weekId, dayName, userId, dayId} = req.body;
        console.log(userId);

        const workout = await Workout.findById(id);
        if (!workout) return res.status(404).send("Workout not found");

        const week = workout.weeks.find((w) => w._id.toString() === weekId);
        if (!week) return res.status(400).send("Invalid week ID");

        const day = week.days.id(dayId) || week.days.find(d => d._id.toString() === dayId);
        if (!day) return res.status(400).send("Day not found");

        day.isFinished = true;
        day.finishedType = "completed";
        await workout.save();

        const user = await User.findById(userId);
        if (!user) return res.status(404).send("User not found");

        let gamification = await Gamification.findOne({userId});
        if (!gamification) {
            gamification = await Gamification.create({userId});
        }

        let totalSets = 0;
        let totalReps = 0;
        let totalWeight = 0;

        for (const w of day.workout) {
            totalSets += w.sets || 0;
            totalReps += (w.reps || 0) * (w.sets || 1);
            totalWeight += (w.reps || 0) * (w.sets || 1) * (w.weight || 0);
        }

        gamification.stats.workoutsCompleted =
            (gamification.stats.workoutsCompleted || 0) + 1;
        gamification.stats.totalSets =
            (gamification.stats.totalSets || 0) + totalSets;
        gamification.stats.totalReps =
            (gamification.stats.totalReps || 0) + totalReps;
        gamification.stats.totalWeight =
            (gamification.stats.totalWeight || 0) + totalWeight;
        gamification.stats.daysActive = (gamification.stats.daysActive || 0) + 1;

        const xpGained = 10 + Math.floor(totalWeight / 100);
        gamification.xp = (gamification.xp || 0) + xpGained;

        await gamification.save();

        await triggerChallengeProgress(userId, "workoutsCompleted");
        const newBadges = await checkAndAwardBadges(userId);

        res.status(200).json({
            message: "Workout day marked as finished",
            totals: {totalSets, totalReps, totalWeight},
            xpGained,
            newBadges,
        });
    } catch (err) {
        console.error("Error finishing workout day:", err);
        res.status(500).send("Server error while finishing workout day");
    }
};

export const startedWorkoutDay = async (req, res) => {
    const {id} = req.params;
    const {weekId, dayName} = req.body;
    const workout = await Workout.findById(id);
    if (!workout) return res.status(404).send("Workout not found");

    // Find the week by matching _id (as a string) with weekId
    const week = workout.weeks.find((w) => w._id.toString() === weekId);
    if (!week) return res.status(400).send("Invalid week ID");

    // Find the day within the week
    const day = week.days.find((d) => d.name === dayName);
    if (!day) return res.status(400).send("Day not found");

    // Mark the day as finished
    day.isFinished = false;
    day.finishedType = "started";
    await workout.save();

    res.status(200).send("Workout day marked as finished");
};

export const saveWorkoutProgress = async (req, res) => {
    try {
        const {id} = req.params;
        const {weekId, dayName, currentExerciseId} = req.body;

        const workout = await Workout.findById(id);
        if (!workout) return res.status(404).send("Workout not found");

        // Find the correct week
        const week = workout.weeks.find((w) => w._id.toString() === weekId);
        if (!week) return res.status(400).send("Invalid week ID");

        // Find the correct day
        // console.log(dayName);

        const day = week.days.find((d) => d.name === dayName);
        if (!day) return res.status(400).send("Day not found");

        // Save progress (just store the id directly)
        day.currentExerciseId = currentExerciseId;

        await workout.save();

        res.status(200).json({
            message: "Workout progress saved",
            currentExerciseId: day.currentExerciseId,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
};

export const getCurrentWorkoutDay = async (req, res) => {
    try {
        const userId = req.user.userId;

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const workout = await Workout.findOne({createdBy: userId});

        if (!workout) {
            return res.status(404).json({message: "No workout plan found."});
        }
        for (let weekIndex = 0; weekIndex < workout.weeks.length; weekIndex++) {
            const week = workout.weeks[weekIndex];
            for (let dayIndex = 0; dayIndex < week.days.length; dayIndex++) {
                const day = week.days[dayIndex];

                const dayDate = new Date(day.date);
                dayDate.setHours(0, 0, 0, 0);

                if (dayDate.getTime() === today.getTime()) {
                    return res.json({
                        weekIndex,
                        dayIndex,
                        name: day.name,
                        type: day.type,
                        workout: day.workout,
                        isFinished: day.isFinished,
                        finishedType: day.finishedType,
                    });
                }
            }
        }

        return res.status(404).json({message: "No workout scheduled for today."});
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Server error."});
    }
};

export const updateTestWeights = async (req, res) => {
    try {
        const userId = req.params.userId;
        const {
            testWeights,
            testWeekStartDate,
            knowsWeight,
            hasChosenWeightOption,
            areWeightsPutted,
            finalWeights,
        } = req.body;

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({message: "User not found"});

        if (testWeights && typeof testWeights === "object") {
            const allowedFields = [
                "benchPress",
                "latPulldown",
                "barbellRow",
                "militaryPress",
                "bicepsCurl",
                "tricepsPushdown",
                "squat",
                "romanianDeadlift",
            ];

            allowedFields.forEach((field) => {
                if (field in testWeights) {
                    user.testWeights[field] = testWeights[field];
                }
            });
        }

        if (finalWeights && typeof finalWeights === "object") {
            const allowedFields = [
                "benchPress",
                "latPulldown",
                "barbellRow",
                "militaryPress",
                "bicepsCurl",
                "tricepsPushdown",
                "squat",
                "romanianDeadlift",
            ];

            allowedFields.forEach((field) => {
                if (field in finalWeights) {
                    user.finalWeights[field] = finalWeights[field];
                }
            });
        }

        if (testWeekStartDate) {
            user.testWeekStartDate = testWeekStartDate;
        }

        if (knowsWeight) {
            user.knowsWeight = knowsWeight;
        }

        if (hasChosenWeightOption) {
            user.hasChosenWeightOption = hasChosenWeightOption;
        }

        if (areWeightsPutted) {
            user.areWeightsPutted = areWeightsPutted;
        }

        await user.save();

        return res.status(200).json({
            message: "User data updated",
            testWeights: user.testWeights,
            testWeekStartDate: user.testWeekStartDate,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({message: "Server error"});
    }
};

export const getTestWeights = async (req, res) => {
    try {
        const userId = req.params.userId;

        const user = await User.findById(userId).select("testWeights");
        if (!user) return res.status(404).json({message: "User not found"});

        return res.status(200).json({testWeights: user.testWeights || {}});
    } catch (err) {
        console.error(err);
        return res.status(500).json({message: "Server error"});
    }
};

export const removeTestWeek = async (req, res) => {
    const {workoutId} = req.params;

    try {
        const workout = await Workout.findById(workoutId);
        if (!workout) {
            return res.status(404).json({message: "Workout not found"});
        }

        const originalLength = workout.weeks.length;

        workout.weeks = workout.weeks.filter((week) => !week.isTestWeek);

        if (workout.weeks.length === originalLength) {
            return res.status(400).json({message: "No test week to remove"});
        }

        await workout.save();
        res.status(200).json({message: "Test week removed successfully"});
    } catch (error) {
        console.error("Error removing test week:", error);
        res.status(500).json({message: "Internal Server Error"});
    }
};

// Change exercise helper functions
const findExistingExerciseInPlan = (plan, exerciseId) => {
    for (const week of plan.weeks) {
        for (const day of week.days) {
            for (const entry of day.workout) {
                if (entry.exercise._id.toString() === exerciseId) {
                    return entry;
                }
            }
        }
    }
    return null;
};

const roundWeight = (weight) => {
    if (weight % 5 === 0) {
        return weight;
    } else if (
        weight >= (weight / 10 - (weight % 10) / 10) * 10 + 2.5 &&
        weight <= (weight / 10 - (weight % 10) / 10) * 10 + 7.5
    ) {
        return Math.round((weight / 10 - (weight % 10) / 10) * 10 + 5);
    } else {
        return Math.round(weight / 10) * 10;
    }
};

const getMuscleGroupKey = (muscleType) => {
    switch (muscleType.toLowerCase()) {
        case "overall chest" || "upper chest" || "lower chest":
            return "chestEstimatedWeights";
        case "middle back" || "lats" || "overall back":
            return "backEstimatedWeights";
        case "hamstrings" || "quadriceps" || "calves":
            return "legEstimatedWeights";
        case "front deltoid" || "rear deltoid" || "lateral deltoid" || "traps":
            return "shoulderEstimatedWeights";
        case "biceps":
            return "bicepsEstimatedWeights";
        case "triceps":
            return "tricepsEstimatedWeights";
        default:
            return null;
    }
};

const toCamelCase = (str) =>
    str
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .split(" ")
        .map((word, index) =>
            index === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join("");

// Change exercise function
export const updateExerciseInWorkout = async (req, res) => {
    try {
        const {week, day, newExerciseId, exerciseType, applyToWholePlan} =
            req.body;
        const {workoutId, exerciseId} = req.params;

        const workoutPlan = await Workout.findById(workoutId);
        if (!workoutPlan)
            return res.status(404).json({message: "Workout plan not found"});

        const workoutDay = workoutPlan.weeks[week - 1]?.days[day - 1];
        if (!workoutDay) return res.status(404).json({message: "Day not found"});

        const exerciseIndex = workoutDay.workout.findIndex(
            (e) => e.exercise._id.toString() === exerciseId
        );
        if (exerciseIndex === -1)
            return res.status(404).json({message: "Exercise not found"});

        const newExercise = await Exercise.findById(newExerciseId);
        if (!newExercise)
            return res.status(404).json({message: "New exercise not found"});

        const existingEntry = findExistingExerciseInPlan(
            workoutPlan,
            newExerciseId
        );

        let sets, reps, rest, weight;

        if (existingEntry) {
            ({sets, reps, rest, weight} = existingEntry);
        } else {
            const groupKey = getMuscleGroupKey(newExercise.muscleType);
            if (!groupKey) {
                return res
                    .status(400)
                    .json({message: "Unsupported muscle group for weight calculation"});
            }
            const mainLiftData = {
                benchPress: 60,
                latPulldown: 50,
                barbellRow: 55,
                militaryPress: 40,
                bicepsCurl: 25,
                tricepsPushdown: 30,
                squat: 80,
                romanianDeadlift: 70,
                workoutId,
            };

            const weightTable = await setExercisesWeight(mainLiftData);
            const camelName = toCamelCase(newExercise.name);

            if (!weightTable[groupKey][camelName]) {
                return res
                    .status(400)
                    .json({message: `No weight mapping found for ${newExercise.name}`});
            }

            weight = roundWeight(Math.round(weightTable[groupKey][camelName]));
            sets = exerciseType === "compound" ? 3 : 2;
            reps = exerciseType === "compound" ? 8 : 12;
            rest = exerciseType === "compound" ? 2 : 1.5;
        }

        // 2️⃣ Apply change
        const updatedExerciseEntry = {
            exercise: {
                _id: newExercise._id,
                name: newExercise.name,
                muscleType: newExercise.muscleType,
                equipment: newExercise.equipment,
                instructions: newExercise.instructions,
            },
            sets,
            reps,
            rest,
            weight,
            exerciseType,
        };

        if (applyToWholePlan) {
            for (const weekData of workoutPlan.weeks) {
                for (const dayData of weekData.days) {
                    dayData.workout = dayData.workout.map((e) =>
                        e.exercise._id.toString() === exerciseId ? updatedExerciseEntry : e
                    );
                }
            }
        } else {
            workoutDay.workout[exerciseIndex] = updatedExerciseEntry;
        }

        await workoutPlan.save();
        res.status(200).json({message: "Exercise updated successfully"});
    } catch (error) {
        console.error("Error updating exercise:", error);
        res.status(500).json({message: "Internal Server Error"});
    }
};
