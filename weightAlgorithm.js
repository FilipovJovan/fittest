import Workout from "./models/WorkoutSchema.js";
import { StatusCodes } from "http-status-codes";

function calculate1RM(weight, reps) {
  return weight * (1 + reps / 30);
}

async function setExercisesWeight({
  benchPress,
  latPulldown,
  barbellRow,
  militaryPress,
  bicepsCurl,
  tricepsPushdown,
  squat,
  romanianDeadlift,
  workoutId,
}) {
  const benchPress1RM = Math.round(calculate1RM(benchPress, 10));
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
      reps = Math.round((30 * (oneRepMax - weight)) / weight) - 2;
    } else if (
      weight >= (weight / 10 - (weight % 10) / 10) * 10 + 2.5 &&
      weight <= (weight / 10 - (weight % 10) / 10) * 10 + 7.5
    ) {
      weight = Math.round((weight / 10 - (weight % 10) / 10) * 10 + 5);
      reps = Math.round((30 * (oneRepMax - weight)) / weight) - 2;
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
            //CHEST EXERCISES
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
            case "inclined dumbbells bench press":
              oneRepMax =
                setExercisesWeight.chestEstimatedWeights
                  .inclineDumbbellBenchPress;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "bench press":
              oneRepMax = setExercisesWeight.chestEstimatedWeights.benchPress;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "inclined bench press":
              oneRepMax =
                setExercisesWeight.chestEstimatedWeights.inclineBenchPress;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "dumbbells bench press":
              oneRepMax =
                setExercisesWeight.chestEstimatedWeights.dumbbellBenchPress;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "inclined dumbbells bench press":
              oneRepMax =
                setExercisesWeight.chestEstimatedWeights
                  .inclineDumbbellBenchPress;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "declined dumbbells bench press":
              oneRepMax =
                setExercisesWeight.chestEstimatedWeights
                  .inclineDumbbellBenchPress;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "machine chest fly":
              oneRepMax =
                setExercisesWeight.chestEstimatedWeights.machineChestFly;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "dumbbell fly":
              oneRepMax =
                setExercisesWeight.chestEstimatedWeights.dumbbellChestFly;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "standing cable chest fly":
              oneRepMax =
                setExercisesWeight.chestEstimatedWeights.standingCableChestFly;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "standing incline cable chest fly":
              oneRepMax =
                setExercisesWeight.chestEstimatedWeights
                  .standingInclineCableChestFly;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "standing decline cable chest fly":
              oneRepMax =
                setExercisesWeight.chestEstimatedWeights
                  .standingDeclineCableChestFly;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            //BACK EXERCISES
            case "pull down":
              oneRepMax = setExercisesWeight.backEstimatedWeights.latPulldown;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "dumbbell rows":
              oneRepMax = setExercisesWeight.backEstimatedWeights.dumbbellRows;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "wide grip pull down":
              oneRepMax =
                setExercisesWeight.backEstimatedWeights.wideGripPulldown;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "close grip pull down":
              oneRepMax =
                setExercisesWeight.backEstimatedWeights.closeGripPulldown;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "underhand grip pull down":
              oneRepMax =
                setExercisesWeight.backEstimatedWeights.undergripGripPulldown;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "t-bar rows":
              oneRepMax = setExercisesWeight.backEstimatedWeights.tbarRows;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "cable rows":
              oneRepMax = setExercisesWeight.backEstimatedWeights.cableRows;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "machines rows":
              oneRepMax = setExercisesWeight.backEstimatedWeights.machineRows;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "barbell rows":
              oneRepMax = setExercisesWeight.backEstimatedWeights.barbellRow;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "straight arms cable pulldown":
              oneRepMax =
                setExercisesWeight.backEstimatedWeights
                  .straightArmCablePulldown;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "seated one arm cable pulldown":
              oneRepMax =
                setExercisesWeight.backEstimatedWeights
                  .seatedOneArmCablePulldown;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            //SHOULDERS EXERCISES
            case "military press":
              oneRepMax =
                setExercisesWeight.shoulderEstimatedWeights.militaryPress;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "dumbbell press":
              oneRepMax =
                setExercisesWeight.shoulderEstimatedWeights
                  .standingDumbbellPress;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "seated dumbbell press":
              oneRepMax =
                setExercisesWeight.shoulderEstimatedWeights.seatedDumbbellPress;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "behind the neck press":
              oneRepMax =
                setExercisesWeight.shoulderEstimatedWeights.behindTheNeckPress;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "standing dumbbell upright row":
              oneRepMax =
                setExercisesWeight.shoulderEstimatedWeights
                  .standingDumbbellUpRightRow;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "standing barbell upright row":
              oneRepMax =
                setExercisesWeight.shoulderEstimatedWeights
                  .standingBarbellUprightRow;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "front lateral raises":
              oneRepMax =
                setExercisesWeight.shoulderEstimatedWeights.frontLateralRaises;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "cable front lateral raises":
              oneRepMax =
                setExercisesWeight.shoulderEstimatedWeights
                  .cableFrontLateralRaises;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "side lateral raises":
              oneRepMax =
                setExercisesWeight.shoulderEstimatedWeights.sideLateralRaises;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "cable lateral raises":
              oneRepMax =
                setExercisesWeight.shoulderEstimatedWeights.cableLateralRaises;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "rear deltoid fly":
              oneRepMax =
                setExercisesWeight.shoulderEstimatedWeights.rearDeltoidFly;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "cable rear deltoid fly":
              oneRepMax =
                setExercisesWeight.shoulderEstimatedWeights.cableRearDeltoidFly;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "dumbbell shrugs":
              oneRepMax =
                setExercisesWeight.shoulderEstimatedWeights.dumbbellShrugs;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "face pulls":
              oneRepMax = setExercisesWeight.shoulderEstimatedWeights.facePulls;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            //BICEPS EXERCISES
            case "dumbbell curl":
              oneRepMax = setExercisesWeight.bicepsEstimatedWeights.bicepsCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "barbell curl":
              oneRepMax = setExercisesWeight.bicepsEstimatedWeights.barbellCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "hammer curl":
              oneRepMax = setExercisesWeight.bicepsEstimatedWeights.hammerCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "concentration curl":
              oneRepMax =
                setExercisesWeight.bicepsEstimatedWeights.concentrationCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "ez-bar curl":
              oneRepMax = setExercisesWeight.bicepsEstimatedWeights.ezBarCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "spider curl":
              oneRepMax = setExercisesWeight.bicepsEstimatedWeights.spiderCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "preacher dumbbell curl":
              oneRepMax =
                setExercisesWeight.bicepsEstimatedWeights.preacherDumbbellCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "preacher machine curl":
              oneRepMax =
                setExercisesWeight.bicepsEstimatedWeights.preacherMachineCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "cable curl":
              oneRepMax = setExercisesWeight.bicepsEstimatedWeights.cableCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            //TRICEPS EXERCISES
            case "cable triceps extension":
              oneRepMax =
                setExercisesWeight.tricepsEstimatedWeights
                  .cableTricepsExtension;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "dumbbell triceps extension":
              oneRepMax =
                setExercisesWeight.tricepsEstimatedWeights
                  .dumbbellTricepsExtension;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "lying triceps extension":
              oneRepMax =
                setExercisesWeight.tricepsEstimatedWeights
                  .lyingTricepsExtension;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "triceps push down":
              oneRepMax =
                setExercisesWeight.tricepsEstimatedWeights.tricepsPushdown;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            //LEG EXERCISES
            case "barbell squats":
              oneRepMax = setExercisesWeight.legEstimatedWeights.barbellSquats;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "dumbbell lunges":
              oneRepMax = setExercisesWeight.legEstimatedWeights.dumbbellLunges;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "dumbbell bulgarian squats":
              oneRepMax =
                setExercisesWeight.legEstimatedWeights.dumbbellBulgarianSquats;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "front squats":
              oneRepMax = setExercisesWeight.legEstimatedWeights.frontSquats;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "leg press":
              oneRepMax = setExercisesWeight.legEstimatedWeights.legPress;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "leg extension":
              oneRepMax = setExercisesWeight.legEstimatedWeights.legExtension;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "romanian deadlift":
              oneRepMax =
                setExercisesWeight.legEstimatedWeights.romanianDeadlift;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "deadlift":
              oneRepMax = setExercisesWeight.legEstimatedWeights.deadlift;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "leg curls":
              oneRepMax = setExercisesWeight.legEstimatedWeights.legCurls;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "hip trust":
              oneRepMax = setExercisesWeight.legEstimatedWeights.hipTrust;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "smith machine calf raises":
              oneRepMax =
                setExercisesWeight.legEstimatedWeights.smithMachineCalfRaises;
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

export const getExercisesWeight = async (req, res) => {
  try {
    const {
      benchPress,
      latPulldown,
      barbellRow,
      militaryPress,
      bicepsCurl,
      tricepsPushdown,
      squat,
      romanianDeadlift,
      workoutId,
    } = req.body;

    const calculatedWeights = await setExercisesWeight({
      benchPress,
      latPulldown,
      barbellRow,
      militaryPress,
      bicepsCurl,
      tricepsPushdown,
      squat,
      romanianDeadlift,
      workoutId,
    });
    res.status(StatusCodes.OK).json("Success");
    await updateWorkoutWeights(workoutId, calculatedWeights);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
