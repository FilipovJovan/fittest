import React, { useState } from "react";
import Wrapper from "../assets/Wrappers/WizardForm";

const WizardForm = ({ onFormDataChange, onFinalStep }) => {
  const [step, setStep] = useState(1);
  const [unit, setUnit] = useState("metric");
  const [weightKg, setWeightKg] = useState(70);
  const [heightCm, setHeightCm] = useState(175);
  const [weightLbs, setWeightLbs] = useState((70 * 2.20462).toFixed(2));
  const [heightFeet, setHeightFeet] = useState(5);
  const [heightInches, setHeightInches] = useState(9);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    date: "",
    email: "",
    password: "",
    age: 19,
    gender: "",
    activityLevel: "",
    fitnessGoal: "",
    workoutLevel: 5,
    userValues: {
      weight: 70,
      height: 175,
      muscleInjuries: "",
      jointInjuries: "",
      split: "",
      goal: "none",
      difficultyLevel: "",
      restDays: [],
      equipment: ["barbells", "machines", "dumbbells"],
      workoutType: "hypertrophy",
    },
  });

  const restDayLimits = {
    broSplit: 2, // 5 workout days, 2 rest days
    fullBody2x: 5, // 2 workout days, 5 rest days
    fullBody3x: 4,
    fullBody4x: 3,
    pushPullLegs3x: 4,
    pushPullLegs6x: 1,
    pushPullLegsUpperLower5x: 2,
    upperLower2x: 5,
    upperLower3x: 4,
    upperLower4x: 3,
  };

  const workoutLevels = {
    broSplit: 5,
    fullBody2x: 2,
    fullBody3x: 3,
    fullBody4x: 4,
    pushPullLegs3x: 3,
    pushPullLegs6x: 6,
    pushPullLegsUpperLower5x: 5,
    upperLower2x: 2,
    upperLower3x: 3,
    upperLower4x: 4,
  };

  const toggleRestDay = (day) => {
    setFormData((prevFormData) => {
      const currentRestDays = prevFormData.userValues.restDays || [];
      const maxRestDays = restDayLimits[prevFormData.userValues.split] || 7;

      let updatedRestDays;
      if (currentRestDays.includes(day)) {
        // Remove day if it's already selected
        updatedRestDays = currentRestDays.filter((d) => d !== day);
      } else {
        // Add only if the limit is not exceeded
        if (currentRestDays.length < maxRestDays) {
          updatedRestDays = [...currentRestDays, day];
        } else {
          return prevFormData; // Do nothing if limit reached
        }
      }

      return {
        ...prevFormData,
        userValues: {
          ...prevFormData.userValues,
          restDays: updatedRestDays,
        },
      };
    });
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    onFormDataChange({ [e.target.name]: e.target.value });
  };

  const handleFieldChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  /*handleFieldChange(
    "workoutLevel",
    workoutLevels[formData.userValues.split] || 0
  );*/
  formData.workoutLevel = workoutLevels[formData.userValues.split] || 0;
  // Handle userValues input change
  const handleUserValuesChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      userValues: {
        ...prevData.userValues,
        [name]: value,
      },
    }));
  };

  const calculateAge = (birthDateString) => {
    // Split the string into day, month, and year
    const [day, month, year] = birthDateString.split(".").map(Number);

    // Create a Date object (JS months are 0-based, so subtract 1)
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // If the birthday hasn't occurred yet this year, subtract 1
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  };

  // Move to the next step
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  // Move to the previous step
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    //const age = calculateAge(formData.date);
    const finalData = { ...formData }; // Add calculated age to form data
    onFinalStep(finalData); // Pass final form data to Register component
  };
  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);

    if (newUnit === "imperial") {
      setWeightLbs((weightKg * 2.20462).toFixed(1));
      const inches = heightCm / 2.54;
      setHeightFeet(Math.floor(inches / 12));
      setHeightInches(Math.round(inches % 12));
    } else {
      setWeightKg((weightLbs / 2.20462).toFixed(1));
      const totalInches = heightFeet * 12 + heightInches;
      setHeightCm(Math.floor(totalInches * 2.54));
    }
  };

  const handleInchesChange = (e) => {
    let inches = parseInt(e.target.value, 10);

    if (isNaN(inches) || inches < 0) {
      setHeightInches(0);
      return;
    }

    if (inches >= 12) {
      setHeightFeet((prevFeet) => prevFeet + Math.floor(inches / 12));
      inches = inches % 12;
    }

    setHeightInches(inches);
  };

  return (
    <Wrapper>
      <div className="wizard-container">
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${(step / 11) * 100}%` }}
          ></div>
        </div>
        <div className="slide-container">
          {step === 1 && (
            <div className="slide">
              <h3>Gender</h3>
              <div className="gender-icons">
                <div
                  className={`gender-icons-male ${
                    formData.gender === "male" ? "selected" : ""
                  }`}
                  onClick={() => setFormData({ ...formData, gender: "male" })}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="gender-icons-svg"
                  >
                    <path d="M376 0c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l33.4 33.4L370.3 96.4 345 71c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l25.4 25.4L307.8 159c-28.4-19.5-62.7-31-99.8-31c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176c0-37-11.4-71.4-31-99.8l28.6-28.6L407 201c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-25.4-25.4 22.1-22.1L471 153c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2l0-112c0-13.3-10.7-24-24-24L376 0zm88 48s0 0 0 0s0 0 0 0s0 0 0 0zM96 304a112 112 0 1 1 224 0A112 112 0 1 1 96 304z" />
                  </svg>
                  <p>Male</p>
                </div>

                <div
                  className={`gender-icons-female ${
                    formData.gender === "female" ? "selected" : ""
                  }`}
                  onClick={() => setFormData({ ...formData, gender: "female" })}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="gender-icons-svg"
                  >
                    <path d="M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1l0 34.9-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-34.9z" />
                  </svg>
                  <p>Female</p>
                </div>
              </div>
              <div className="navigation-buttons">
                <button onClick={nextStep} disabled={!formData.gender}>
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="slide">
              <h3>Height and Weight</h3>
              {/*<div className="weight-height-picker">
                <label className="picker-label">Weight</label>
                <input
                  type="number"
                  className="picker-input"
                  name="weight"
                  value={formData.userValues.weight}
                  onChange={handleChange}
                />
                <label className="picker-label">Height</label>
                <input
                  type="number"
                  className="picker-input"
                  name="height"
                  value={formData.userValues.height}
                  onChange={handleChange}
                />
              </div>*/}

              <div className="unit-switch">
                {/* Toggle Buttons (Now Above Inputs) */}
                <div className="unit-toggle">
                  <button
                    type="button"
                    className={unit === "metric" ? "active" : ""}
                    onClick={() => handleUnitChange("metric")}
                  >
                    Metric
                  </button>
                  <button
                    type="button"
                    className={unit === "imperial" ? "active" : ""}
                    onClick={() => handleUnitChange("imperial")}
                  >
                    Imperial
                  </button>
                </div>

                {/* Input Fields Below */}
                {unit === "metric" ? (
                  <div className="metric-inputs">
                    <label value={formData.userValues.weight}>
                      Weight (kg):
                      <input
                        type="number"
                        value={weightKg}
                        onChange={(e) => setWeightKg(e.target.value)}
                      />
                    </label>
                    <label value={formData.userValues.height}>
                      Height (cm):
                      <input
                        type="number"
                        value={heightCm}
                        onChange={(e) => setHeightCm(e.target.value)}
                      />
                    </label>
                  </div>
                ) : (
                  <div className="imperial-inputs">
                    <label>
                      Weight (lbs):
                      <input
                        type="number"
                        value={weightLbs}
                        onChange={(e) => setWeightLbs(e.target.value)}
                      />
                    </label>
                    <label>
                      Height (feet):
                      <input
                        type="number"
                        value={heightFeet}
                        onChange={(e) => setHeightFeet(e.target.value)}
                      />
                    </label>
                    <label>
                      Height (inches):
                      <input
                        type="number"
                        value={heightInches}
                        onChange={handleInchesChange}
                      />
                    </label>
                  </div>
                )}
              </div>

              <div className="navigation-buttons">
                <button onClick={prevStep}>Back</button>
                <button onClick={nextStep}>Next</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="slide">
              <h3>Activity Level</h3>

              <div className="activity-level-options">
                <div
                  className={`activity-level-option ${
                    formData.activityLevel === "Lightly active"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("activityLevel", "Lightly active")
                  }
                >
                  Lightly active
                </div>
                <div
                  className={`activity-level-option ${
                    formData.activityLevel === "Moderately active"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("activityLevel", "Moderately active")
                  }
                >
                  Moderately active
                </div>
                <div
                  className={`activity-level-option ${
                    formData.activityLevel === "Very active" ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("activityLevel", "Very active")
                  }
                >
                  Very active
                </div>
                <div
                  className={`activity-level-option ${
                    formData.activityLevel === "Extra active" ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("activityLevel", "Extra active")
                  }
                >
                  Extra active
                </div>
              </div>

              <div className="navigation-buttons">
                <button onClick={prevStep}>Back</button>
                <button onClick={nextStep} disabled={!formData.activityLevel}>
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="slide">
              <h3>Tell us your fitness goals!</h3>
              <div className="activity-level-options">
                <div
                  className={`activity-level-option ${
                    formData.fitnessGoal === "Muscle gain" ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("fitnessGoal", "Muscle gain")
                  }
                >
                  Muscle gain
                </div>
                <div
                  className={`activity-level-option ${
                    formData.fitnessGoal === "Maintenance" ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("fitnessGoal", "Maintenance")
                  }
                >
                  Maintenance
                </div>
                <div
                  className={`activity-level-option ${
                    formData.fitnessGoal === "Weight loss" ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("fitnessGoal", "Weight loss")
                  }
                >
                  Weight loss
                </div>
              </div>
              <div className="navigation-buttons">
                <button onClick={prevStep}>Back</button>
                <button onClick={nextStep} disabled={!formData.fitnessGoal}>
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="slide">
              <h3>Difficulty Level</h3>
              <div className="activity-level-options">
                <div
                  className={`activity-level-option ${
                    formData.userValues.difficultyLevel === "Beginner"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      difficultyLevel: "Beginner",
                    })
                  }
                >
                  Beginner
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.difficultyLevel === "Intermediate"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      difficultyLevel: "Intermediate",
                    })
                  }
                >
                  Intermediate
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.difficultyLevel === "Advanced"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      difficultyLevel: "Advanced",
                    })
                  }
                >
                  Advanced
                </div>
              </div>
              <div className="navigation-buttons">
                <button onClick={prevStep}>Back</button>
                <button
                  onClick={nextStep}
                  disabled={!formData.userValues.difficultyLevel}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="slide">
              <h3>Choose your workout split!</h3>
              <div className="activity-level-options">
                <div
                  className={`activity-level-option ${
                    formData.userValues.split === "broSplit" ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      split: "broSplit",
                    })
                  }
                >
                  Bro Split 5x/week
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.split === "fullBody2x" ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      split: "fullBody2x",
                    })
                  }
                >
                  Full Body 2x/week
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.split === "fullBody3x" ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      split: "fullBody3x",
                    })
                  }
                >
                  Full Body 3x/week
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.split === "fullBody4x" ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      split: "fullBody4x",
                    })
                  }
                >
                  Full Body 4x/week
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.split === "pushPullLegs3x"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      split: "pushPullLegs3x",
                    })
                  }
                >
                  Push Pull Legs 3x/week
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.split === "pushPullLegs6x"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      split: "pushPullLegs6x",
                    })
                  }
                >
                  Push Pull Legs 6x/week
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.split === "pushPullLegsUpperLower5x"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      split: "pushPullLegsUpperLower5x",
                    })
                  }
                >
                  PPL Upper Lower 5x/week
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.split === "upperLower2x"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      split: "upperLower2x",
                    })
                  }
                >
                  Upper Lower 2x/week
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.split === "upperLower3x"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      split: "upperLower3x",
                    })
                  }
                >
                  Upper Lower 3x/week
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.split === "upperLower4x"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      split: "upperLower4x",
                    })
                  }
                >
                  Upper Lower 4x/week
                </div>
              </div>
              <div className="navigation-buttons">
                <button onClick={prevStep}>Back</button>
                <button
                  onClick={nextStep}
                  disabled={!formData.userValues.split}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 7 && (
            <div className="slide">
              <h3>Choose your rest days!</h3>
              <div className="activity-level-options">
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <div
                    key={day}
                    className={`activity-level-option ${
                      formData.userValues.restDays?.includes(day)
                        ? "selected"
                        : ""
                    } ${
                      formData.userValues.restDays?.length >=
                        restDayLimits[formData.userValues.split] &&
                      !formData.userValues.restDays.includes(day)
                        ? "disabled"
                        : ""
                    }`}
                    onClick={() => toggleRestDay(day)}
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="navigation-buttons">
                <button onClick={prevStep}>Back</button>
                <button
                  onClick={nextStep}
                  disabled={
                    formData.userValues.restDays?.length !==
                    restDayLimits[formData.userValues.split]
                  }
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 8 && (
            <div className="slide">
              <h3>Have you had any muscle injuries recently?</h3>
              <div className="activity-level-options">
                <div
                  className={`activity-level-option ${
                    formData.userValues.muscleInjuries === "none"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      muscleInjuries: "none",
                    })
                  }
                >
                  None
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.muscleInjuries === "chest"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      muscleInjuries: "chest",
                    })
                  }
                >
                  Chest
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.muscleInjuries === "back"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      muscleInjuries: "back",
                    })
                  }
                >
                  Back
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.muscleInjuries === "triceps"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      muscleInjuries: "triceps",
                    })
                  }
                >
                  Triceps
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.muscleInjuries === "biceps"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      muscleInjuries: "biceps",
                    })
                  }
                >
                  Biceps
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.muscleInjuries === "deltoids"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      muscleInjuries: "deltoids",
                    })
                  }
                >
                  Shoulders
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.muscleInjuries === "quadriceps"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      muscleInjuries: "quadriceps",
                    })
                  }
                >
                  Quadriceps
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.muscleInjuries === "hamstrings"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      muscleInjuries: "hamstrings",
                    })
                  }
                >
                  Hamstrings
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.muscleInjuries === "calves"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      muscleInjuries: "calves",
                    })
                  }
                >
                  Calves
                </div>
              </div>

              <div className="navigation-buttons">
                <button onClick={prevStep}>Back</button>
                <button
                  onClick={nextStep}
                  disabled={!formData.userValues.difficultyLevel}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 9 && (
            <div className="slide">
              <h3>Have you had any muscle injuries recently?</h3>
              <div className="activity-level-options">
                <div
                  className={`activity-level-option ${
                    formData.userValues.jointInjuries === "none"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      jointInjuries: "none",
                    })
                  }
                >
                  None
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.jointInjuries === "shoulders"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      jointInjuries: "shoulders",
                    })
                  }
                >
                  Shoulders
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.jointInjuries === "elbow"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      jointInjuries: "elbow",
                    })
                  }
                >
                  Elbow
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.jointInjuries === "wrist"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      jointInjuries: "wrist",
                    })
                  }
                >
                  Wrists
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.jointInjuries === "hip"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      jointInjuries: "hip",
                    })
                  }
                >
                  Hip
                </div>
                <div
                  className={`activity-level-option ${
                    formData.userValues.jointInjuries === "knee"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleFieldChange("userValues", {
                      ...formData.userValues,
                      jointInjuries: "knee",
                    })
                  }
                >
                  Knees
                </div>
              </div>

              <div className="navigation-buttons">
                <button onClick={prevStep}>Back</button>
                <button
                  onClick={nextStep}
                  disabled={!formData.userValues.jointInjuries}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 10 && (
            <div className="slide">
              <h3>Personal information</h3>
              <div className="registration-form">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="form-input"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="form-input"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Birth Date"
                  className="form-input"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="form-input"
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="form-input"
                />
              </div>
              <div className="navigation-buttons">
                <button onClick={prevStep}>Back</button>
                <button onClick={nextStep}>Next</button>
              </div>
            </div>
          )}

          {step === 11 && (
            <div className="slide">
              <h3>You are ready to create your workout plan!</h3>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <button onClick={handleSubmit}>Create</button>
              <div className="navigation-buttons">
                <button onClick={prevStep}>Back</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default WizardForm;
