import Workout from "../models/WorkoutSchema.js";
import { StatusCodes } from "http-status-codes";

function calculate1RM(weight, reps) {
  return weight * (1 + reps / 30);
}

async function setExercisesWeight({
  pushupsNumber,
  dumbbellRows,
  bodyweightSquats,
  shoulderDumbbellPress,
  tricepsOverheadExtensions,
  dumbbellCurls,
  resistanceBandWeight,
  romanianDeadlift,
  workoutId,
  userWeight,
}) {
  const pushUps = Math.round(calculate1RM(userWeight, pushupsNumber));
  const latPulldown1RM = Math.round(calculate1RM(latPulldown, 10));
  const barbellRow1RM = Math.round(calculate1RM(barbellRow, 10));
  const militaryPress1RM = Math.round(calculate1RM(militaryPress, 10));
  const bicepsCurl1RM = Math.round(calculate1RM(bicepsCurl, 10));
  const tricepsPushdown1RM = Math.round(calculate1RM(tricepsPushdown, 10));
  const squat1RM = Math.round(calculate1RM(squat, 10));
  const romanianDeadlift1RM = Math.round(calculate1RM(romanianDeadlift, 10));

  const chestEstimatedWeights = {
    benchPress: benchPress1RM,
    inclineBenchPress: Math.round(benchPress1RM * 0.78),
    declineBenchPress: Math.round(benchPress1RM * 0.85),
    dumbbellBenchPress: Math.round(benchPress1RM * 0.8),
    inclineDumbbellBenchPress: Math.round(benchPress1RM * 0.72),
    declineDumbbellBenchPress: Math.round(benchPress1RM * 0.78),
    machineChestFly: Math.round(benchPress1RM * 0.55),
    dumbbellChestFly: Math.round(benchPress1RM * 0.45),
    standingCableChestFly: Math.round(benchPress1RM * 0.42),
    standingInclineCableChestFly: Math.round(benchPress1RM * 0.4),
    standingDeclineCableChestFly: Math.round(benchPress1RM * 0.47),
  };

  const backEstimatedWeights = {
    latPulldown: latPulldown1RM,
    barbellRow: barbellRow1RM,
    tbarRows: Math.round((latPulldown1RM * 0.85 + barbellRow1RM * 0.95) / 2),
    cableRows: Math.round((latPulldown1RM * 0.75 + barbellRow1RM * 0.85) / 2),
    machineRows: Math.round((latPulldown1RM * 0.75 + barbellRow1RM * 0.85) / 2),
    dumbbellRows: Math.round(
      (latPulldown1RM * 0.65 + barbellRow1RM * 0.75) / 2
    ),
    straightArmCablePulldown: Math.round(
      (latPulldown1RM * 0.45 + barbellRow1RM * 0.55) / 2
    ),
    seatedOneArmCablePulldown: Math.round(
      (latPulldown1RM * 0.55 + barbellRow1RM * 0.65) / 2
    ),
    wideGripPulldown: Math.round(
      (latPulldown1RM * 0.95 + barbellRow1RM * 0.95) / 2
    ),
    closeGripPulldown: Math.round(
      (latPulldown1RM * 0.85 + barbellRow1RM * 0.85) / 2
    ),
    undergripGripPulldown: Math.round(
      (latPulldown1RM * 0.9 + barbellRow1RM * 0.9) / 2
    ),
  };

  const legEstimatedWeights = {
    squat: squat1RM,
    romanianDeadlift: romanianDeadlift1RM,
    barbellSquats: Math.round((squat1RM * 1 + romanianDeadlift1RM * 1) / 2),
    deadlift: Math.round(romanianDeadlift1RM * 1.02),
    dumbbellBulgarianSquats: Math.round(
      squat1RM * 0.6 + romanianDeadlift1RM * 0.6
    ),
    dumbbellLunges: Math.round(squat1RM * 0.7 + romanianDeadlift1RM * 0.68),
    frontSquats: Math.round((squat1RM * 0.75 + romanianDeadlift1RM * 1.8) / 2),
    legPress: Math.round((squat1RM * 2 + romanianDeadlift1RM * 0.55) / 2),
    legExtension: Math.round((squat1RM * 0.4 + romanianDeadlift1RM * 0.45) / 2),
    legCurls: Math.round((squat1RM * 0.45 + romanianDeadlift1RM * 0.48) / 2),
    hipTrust: Math.round((squat1RM * 0.8 + romanianDeadlift1RM * 0.72) / 2),
    smithMachineCalfRaises: Math.round(
      (squat1RM * 0.45 + romanianDeadlift1RM * 0.48) / 2
    ),
  };

  const shoulderEstimatedWeights = {
    militaryPress: militaryPress1RM,
    standingDumbbellPress: Math.round(militaryPress1RM * 0.92),
    seatedDumbbellPress: Math.round(militaryPress1RM * 0.88),
    behindTheNeckPress: Math.round(militaryPress1RM * 0.65),
    standingDumbbellUpRightRow: Math.round(militaryPress1RM * 0.6),
    standingBarbellUprightRow: Math.round(militaryPress1RM * 0.55),
    frontLateralRaises: Math.round(militaryPress1RM * 0.36),
    cableFrontLateralRaises: Math.round(militaryPress1RM * 0.28),
    sideLateralRaises: Math.round(militaryPress1RM * 0.36),
    cableLateralRaises: Math.round(militaryPress1RM * 0.13),
    rearDeltoidFly: Math.round(militaryPress1RM * 0.34),
    cableRearDeltoidFly: Math.round(militaryPress1RM * 0.34),
    dumbbellShrugs: Math.round(militaryPress1RM * 0.57),
    facePulls: Math.round(militaryPress1RM * 0.26),
  };

  const bicepsEstimatedWeights = {
    bicepsCurl: bicepsCurl1RM,
    barbellCurl: Math.round(bicepsCurl1RM * 0.9),
    hammerCurl: Math.round(bicepsCurl1RM * 0.75),
    concentrationCurl: Math.round(bicepsCurl1RM * 0.45),
    ezBarCurl: Math.round(bicepsCurl1RM * 0.75),
    spiderCurl: Math.round(bicepsCurl1RM * 0.45),
    preacherMachineCurl: Math.round(bicepsCurl1RM * 0.57),
    preacherDumbbellCurl: Math.round(bicepsCurl1RM * 0.4),
    cableCurl: Math.round(bicepsCurl1RM * 0.58),
  };

  const tricepsEstimatedWeights = {
    tricepsPushdown: tricepsPushdown1RM,
    cableTricepsExtension: Math.round(tricepsPushdown1RM * 0.9),
    dumbbellTricepsExtension: Math.round(tricepsPushdown1RM * 0.45),
    lyingTricepsExtension: Math.round(tricepsPushdown1RM * 0.75),
  };

  return {
    chestEstimatedWeights,
    backEstimatedWeights,
    legEstimatedWeights,
    shoulderEstimatedWeights,
    bicepsEstimatedWeights,
    tricepsEstimatedWeights,
  };
}

function calculateWeightsAndReps(oneRepMax, currentReps, weekIndex) {
  if (weekIndex === 0) {
    let weight = Math.round((oneRepMax / (1 + currentReps / 30)) * 0.8);
    let reps;
    if (weight % 5 === 0) {
      reps = Math.round(((30 * (oneRepMax - weight)) / weight) * 0.5);
    } else if (
      weight >= (weight / 10 - (weight % 10) / 10) * 10 + 2.5 &&
      weight <= (weight / 10 - (weight % 10) / 10) * 10 + 7.5
    ) {
      weight = Math.round((weight / 10 - (weight % 10) / 10) * 10 + 5);
      reps = Math.round(((30 * (oneRepMax - weight)) / weight) * 0.5);
    } else {
      weight = Math.round(weight / 10) * 10;
      reps = Math.round(30 * (oneRepMax / weight - 1) * 0.5);
    }
    return { weight, reps };
  } else {
    let weight = Math.round(oneRepMax / (1 + currentReps / 30));
    let reps;
    if (weight % 5 === 0) {
      reps = Math.round((30 * (oneRepMax - weight)) / weight) - 2; // -2 reps for RIR
    } else if (
      weight >= (weight / 10 - (weight % 10) / 10) * 10 + 2.5 &&
      weight <= (weight / 10 - (weight % 10) / 10) * 10 + 7.5
    ) {
      weight = Math.round((weight / 10 - (weight % 10) / 10) * 10 + 5);
      reps = Math.round((30 * (oneRepMax - weight)) / weight) - 2; // -2 reps for RIR
    } else {
      weight = Math.round(weight / 10) * 10;
      reps = Math.round(30 * (oneRepMax / weight - 1)) - 2;
    }

    return { weight, reps };
  }
}

async function updateWorkoutWeights(workoutId, setExercisesWeight) {
  try {
    const workout = await Workout.findById(workoutId);

    if (!workout) {
      throw new Error("Workout not found");
    }

    workout.weeks.forEach((week, weekIndex) => {
      week.days.forEach((day) => {
        day.workout.forEach((exerciseRef) => {
          const exerciseName = exerciseRef.exercise.name;
          let oneRepMax;
          let currentReps = exerciseRef.reps;
          let updatedValues;
          let weight;
          for (let i = 0; i <= weekIndex; i++) {
            if (currentReps === 12) {
              weight = Math.round(oneRepMax / (1 + 8 / 30));
              currentReps = 8;
            } else {
              currentReps++;
            }
          }

          switch (exerciseName) {
            case "declined bench press":
              oneRepMax =
                setExercisesWeight.chestEstimatedWeights.declineBenchPress;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
          }
        });
      });
    });
    await workout.save();
    console.log("Workout weights updated successfully");
  } catch (error) {
    console.error("Error updating workout weights:", error);
  }
}

export const getExercisesSettings = async (req, res) => {
  try {
    const {
      pushupsNumber,
      dumbbellRows,
      bodyweightSquats,
      shoulderDumbbellPress,
      tricepsOverheadExtensions,
      dumbbellCurls,
      romanianDeadlift,
      resistanceBandWeight,
      workoutId,
      userWeight,
    } = req.body;

    const calculatedWeights = await setExercisesWeight({
      pushupsNumber,
      dumbbellRows,
      bodyweightSquats,
      shoulderDumbbellPress,
      tricepsOverheadExtensions,
      dumbbellCurls,
      romanianDeadlift,
      resistanceBandWeight,
      workoutId,
      userWeight,
    });
    res.status(StatusCodes.OK).json("Success");
    await updateWorkoutWeights(workoutId, calculatedWeights);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
