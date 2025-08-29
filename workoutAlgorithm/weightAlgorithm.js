import Workout from "../models/WorkoutSchema.js";
import User from "../models/UserModel.js";
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
    dips: Math.round(benchPress1RM * 0.9),
    pecDeckMachine: Math.round(benchPress1RM * 0.58),
    reverseGripBenchPress: Math.round(benchPress1RM * 0.75),
    declineCableFlyes: Math.round(benchPress1RM * 0.42),
    singleArmDumbbellPress: Math.round(benchPress1RM * 0.4),
    cableChestPress: Math.round(benchPress1RM * 0.6),
    landmineChestPress: Math.round(benchPress1RM * 0.5),
    chestDip: Math.round(benchPress1RM * 0.88),
    machineInclinePress: Math.round(benchPress1RM * 0.7),
  };
  const backEstimatedWeights = {
    latPulldown: latPulldown1RM,
    barbellRow: barbellRow1RM,
    tBarRows: Math.round((latPulldown1RM * 0.85 + barbellRow1RM * 0.95) / 2),
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
    assistedSissySquats: Math.round(squat1RM * 0.5),
    sissySquats: Math.round(squat1RM * 0.65),
    bodyweightLegExtension: Math.round(squat1RM * 0.4),
    bodyweightBulgarianSquats: Math.round(squat1RM * 1.25),
    backpackBulgarianSquats: Math.round(squat1RM * 0.75),
    calfRaises: Math.round(squat1RM * 0.5),
    weightedCalfRaises: Math.round(squat1RM * 0.8),
    seatedCalfRaises: Math.round(squat1RM * 1.1),
    calfExtension: Math.round(squat1RM * 1.0),
  };
  const shoulderEstimatedWeights = {
    militaryPress: militaryPress1RM,
    standingDumbbellPress: Math.round(militaryPress1RM * 0.92),
    seatedDumbbellPress: Math.round(militaryPress1RM * 0.88),
    behindTheNeckPress: Math.round(militaryPress1RM * 0.65),
    standingDumbbellUprightRow: Math.round(militaryPress1RM * 0.6),
    standingBarbellUprightRow: Math.round(militaryPress1RM * 0.55),
    frontRaise: Math.round(militaryPress1RM * 0.36),
    sideRaise: Math.round(militaryPress1RM * 0.36),
    cableFrontRaise: Math.round(militaryPress1RM * 0.28),
    cableSideRaise: Math.round(militaryPress1RM * 0.13),
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
    zottmanCurl: Math.round(bicepsCurl1RM * 0.65),
    cableHammerCurl: Math.round(bicepsCurl1RM * 0.65),
    alternatingDumbbellCurl: Math.round(bicepsCurl1RM * 0.7),
    preacherHammerCurl: Math.round(bicepsCurl1RM * 0.6),
    singleArmCableCurl: Math.round(bicepsCurl1RM * 0.65),
    dragCurl: Math.round(bicepsCurl1RM * 0.7),
    standingCableCurl: Math.round(bicepsCurl1RM * 0.75),
  };
  const tricepsEstimatedWeights = {
    tricepsPushdown: tricepsPushdown1RM,
    cableTricepsExtension: Math.round(tricepsPushdown1RM * 0.9),
    dumbbellTricepsExtension: Math.round(tricepsPushdown1RM * 0.45),
    lyingTricepsExtension: Math.round(tricepsPushdown1RM * 0.75),
    skullCrushers: Math.round(tricepsPushdown1RM * 0.65),
    dumbbellSkullCrushers: Math.round(tricepsPushdown1RM * 0.6),
    overheadTricepsExtensionWithSingleDumbbell: Math.round(
      tricepsPushdown1RM * 0.55
    ),
    tricepsKickbacks: Math.round(tricepsPushdown1RM * 0.5),
    diamondPushUps: Math.round(tricepsPushdown1RM * 0.4),
    dumbbellKickbackWithNeutralGrip: Math.round(tricepsPushdown1RM * 0.5),
    reverseGripTricepsPushdown: Math.round(tricepsPushdown1RM * 0.55),
    bodyweightTricepsExtension: Math.round(tricepsPushdown1RM * 0.4),
    tricepsDips: Math.round(tricepsPushdown1RM * 0.6),
    chairTricepsDips: Math.round(tricepsPushdown1RM * 0.5),
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
    let weight = Math.round((oneRepMax / (1 + currentReps / 30)) * 0.6);
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
    const user = User;

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

          switch (exerciseName) {
            //CHEST EXERCISES
            case "Declined Bench Press":
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
            case "Inclined Dumbbells Bench Press":
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
            case "Bench Press":
              oneRepMax = setExercisesWeight.chestEstimatedWeights.benchPress;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Inclined Bench Press":
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
            case "Dumbbells Bench Press":
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
            case "Inclined Dumbbells Bench Press":
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
            case "Declined Dumbbells Bench Press":
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
            case "Machine Chest Fly":
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
            case "Dumbbell Fly":
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
            case "Standing Cable Chest Fly":
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
            case "Standing Incline Cable Chest Fly":
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
            case "Standing Decline Cable Chest Fly":
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
            case "Dips":
              oneRepMax = setExercisesWeight.chestEstimatedWeights.dips;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Pec Deck Machine":
              oneRepMax =
                setExercisesWeight.chestEstimatedWeights.pecDeckMachine;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Reverse Grip Bench Press":
              oneRepMax =
                setExercisesWeight.chestEstimatedWeights.reverseGripBenchPress;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Decline Cable Flyes":
              oneRepMax =
                setExercisesWeight.chestEstimatedWeights.declineCableFlyes;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Single-Arm Dumbbell Press":
              oneRepMax =
                setExercisesWeight.chestEstimatedWeights.singleArmDumbbellPress;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Cable Chest Press":
              oneRepMax =
                setExercisesWeight.chestEstimatedWeights.cableChestPress;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Landmine Chest Press":
              oneRepMax =
                setExercisesWeight.chestEstimatedWeights.landmineChestPress;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Machine Incline Press":
              oneRepMax =
                setExercisesWeight.chestEstimatedWeights.machineInclinePress;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            //BACK EXERCISES
            case "Pull Down":
              oneRepMax = setExercisesWeight.backEstimatedWeights.latPulldown;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Dumbbell Rows":
              oneRepMax = setExercisesWeight.backEstimatedWeights.dumbbellRows;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Wide Grip Pull Down":
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
            case "Close Grip Pull Down":
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
            case "Underhand Grip Pull Down":
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
            case "T-Bar Rows":
              oneRepMax = setExercisesWeight.backEstimatedWeights.tBarRows;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Cable Rows":
              oneRepMax = setExercisesWeight.backEstimatedWeights.cableRows;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Machine Rows":
              oneRepMax = setExercisesWeight.backEstimatedWeights.machineRows;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Barbell Rows":
              oneRepMax = setExercisesWeight.backEstimatedWeights.barbellRow;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Straight Arms Cable Pulldown":
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
            case "Seated One Arm Cable Pulldown":
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
            case "Military Press":
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
            case "Dumbbell Shoulder Press":
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
            case "Seated Dumbbell Press":
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
            case "Behind the Neck Press":
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
            case "Standing Dumbbell Upright Row":
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
            case "Standing Barbell Upright Row":
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
            case "Front Lateral Raises":
              oneRepMax =
                setExercisesWeight.shoulderEstimatedWeights.frontRaise;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Cable Front Lateral Raises":
              oneRepMax =
                setExercisesWeight.shoulderEstimatedWeights.cableFrontRaise;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Side Lateral Raises":
              oneRepMax = setExercisesWeight.shoulderEstimatedWeights.sideRaise;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Rear Deltoid Fly":
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
            case "Cable Rear Deltoid Fly":
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
            case "Dumbbell Shrugs":
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
            case "Face Pulls":
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
            case "Dumbbell Curl":
              oneRepMax = setExercisesWeight.bicepsEstimatedWeights.bicepsCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Barbell Curl":
              oneRepMax = setExercisesWeight.bicepsEstimatedWeights.barbellCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Hammer Curl":
              oneRepMax = setExercisesWeight.bicepsEstimatedWeights.hammerCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Concentration Curl":
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
            case "EZ-Bar Curl":
              oneRepMax = setExercisesWeight.bicepsEstimatedWeights.ezBarCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Spider Curl":
              oneRepMax = setExercisesWeight.bicepsEstimatedWeights.spiderCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Preacher Dumbbell Curl":
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
            case "Preacher Machine Curl":
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
            case "Cable Curl":
              oneRepMax = setExercisesWeight.bicepsEstimatedWeights.cableCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Zottman Curl":
              oneRepMax = setExercisesWeight.bicepsEstimatedWeights.zottmanCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Cable Hammer Curl":
              oneRepMax =
                setExercisesWeight.bicepsEstimatedWeights.cableHammerCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Alternating Dumbbell Curl":
              oneRepMax =
                setExercisesWeight.bicepsEstimatedWeights
                  .alternatingDumbbellCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Preacher Hammer Curl":
              oneRepMax =
                setExercisesWeight.bicepsEstimatedWeights.preacherHammerCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Single Arm Cable Curl":
              oneRepMax =
                setExercisesWeight.bicepsEstimatedWeights.singleArmCableCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Drag Curl":
              oneRepMax = setExercisesWeight.bicepsEstimatedWeights.dragCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Standing Cable Curl":
              oneRepMax =
                setExercisesWeight.bicepsEstimatedWeights.standingCableCurl;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            //TRICEPS EXERCISES
            case "Cable Triceps Extension":
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
            case "Dumbbell Triceps Extension":
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
            case "Lying Triceps Extension":
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
            case "Triceps Pushdown":
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
            case "Skull Crushers":
              oneRepMax =
                setExercisesWeight.tricepsEstimatedWeights.skullCrushers;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Dumbbell Skull Crushers":
              oneRepMax =
                setExercisesWeight.tricepsEstimatedWeights
                  .dumbbellSkullCrushers;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Overhead Triceps Extension With Single Dumbbell":
              oneRepMax =
                setExercisesWeight.tricepsEstimatedWeights
                  .overheadTricepsExtensionWithSingleDumbbell;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Triceps Kickbacks":
              oneRepMax =
                setExercisesWeight.tricepsEstimatedWeights.tricepsKickbacks;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Triceps Rope Pushdown":
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
            case "Dumbbell Kickback With Neutral Grip":
              oneRepMax =
                setExercisesWeight.tricepsEstimatedWeights
                  .dumbbellKickbackWithNeutralGrip;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Reverse Grip Triceps Pushdown":
              oneRepMax =
                setExercisesWeight.tricepsEstimatedWeights
                  .reverseGripTricepsPushdown;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Triceps Pushdown":
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
            case "Bodyweight Triceps Extension":
              oneRepMax =
                setExercisesWeight.tricepsEstimatedWeights
                  .bodyweightTricepsExtension;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Triceps Dips":
              oneRepMax =
                setExercisesWeight.tricepsEstimatedWeights.tricepsDips;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            //LEG EXERCISES
            case "Barbell Squats":
              oneRepMax = setExercisesWeight.legEstimatedWeights.barbellSquats;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Dumbbell Lunges":
              oneRepMax = setExercisesWeight.legEstimatedWeights.dumbbellLunges;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Dumbbell Bulgarian Squats":
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
            case "Front Squats":
              oneRepMax = setExercisesWeight.legEstimatedWeights.frontSquats;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Leg Press":
              oneRepMax = setExercisesWeight.legEstimatedWeights.legPress;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Leg Extension":
              oneRepMax = setExercisesWeight.legEstimatedWeights.legExtension;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Romanian Deadlift":
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
            case "Deadlift":
              oneRepMax = setExercisesWeight.legEstimatedWeights.deadlift;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Leg Curls":
              oneRepMax = setExercisesWeight.legEstimatedWeights.legCurls;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Hip Thrust":
              oneRepMax = setExercisesWeight.legEstimatedWeights.hipTrust;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Smith Machine Calf Raises":
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
            case "Calf Raises":
              oneRepMax = setExercisesWeight.legEstimatedWeights.calfRaises;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Weighted Calf Raises":
              oneRepMax =
                setExercisesWeight.legEstimatedWeights.weightedCalfRaises;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Seated Calf Raises":
              oneRepMax =
                setExercisesWeight.legEstimatedWeights.seatedCalfRaises;
              updatedValues = calculateWeightsAndReps(
                oneRepMax,
                currentReps,
                weekIndex
              );
              exerciseRef.weight = updatedValues.weight;
              exerciseRef.reps = updatedValues.reps;
              break;
            case "Calf Extension":
              oneRepMax = setExercisesWeight.legEstimatedWeights.calfExtension;
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
    user.areWeightsPutted = true;
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

    await updateWorkoutWeights(workoutId, calculatedWeights);
    res.status(StatusCodes.OK).json("Success");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export default setExercisesWeight;
