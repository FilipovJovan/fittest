import React, { useState } from "react";
import NumberPicker from "./NumberPicker";
import Wrapper from "../assets/Wrappers/WizardForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarsStroke, faVenus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import FormRow from "./FormRow";

const WizardForm = ({ onFormDataChange, onFinalStep }) => {
  const totalTabs = 11;
  const [currentTab, setCurrentTab] = useState(0);

  const [unitSystem, setUnitSystem] = useState("metric");

  const [valueGroups, setValueGroups] = useState({
    weight: 70,
    heightCm: 170,
    heightFeet: 5,
    heightInches: 7,
  });

  const [selectedOptions, setSelectedOptions] = useState({
    gender: null,
    goal: null,
    activity: null,
    split: null,
    restDays: [],
    training: null,
  });

  const [registrationData, setRegistrationData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    date: "",
  });

  const updateParentData = () => {
    onFormDataChange({
      ...selectedOptions,
      ...valueGroups,
      ...registrationData,
    });
  };

  const progressPercentage = ((currentTab + 1) / totalTabs) * 100;

  const handleSubmit = () => {
    console.log("Submitting form data:", {
      ...selectedOptions,
      ...valueGroups,
      ...registrationData,
    });
  };

  const nextStep = () => {
    if (currentTab === 1) {
      const selectedValues = getSelectedValues();
      console.log(selectedValues);
    }
    if (currentTab < totalTabs - 1) {
      setCurrentTab(currentTab + 1);
    } else {
      onFinalStep(formData);
    }
  };

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if birthday hasn't occurred yet this year
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  // Example usage:
  const age = calculateAge("1995-08-15"); // Replace with any birthdate
  console.log(age);

  const [formData, setFormData] = useState({
    name: registrationData.firstName,
    lastName: registrationData.lastName,
    date: registrationData.date,
    email: registrationData.email,
    password: registrationData.password,
    age: calculateAge(registrationData.date), // or use the age provided
    gender: selectedOptions.gender,
    activityLevel: selectedOptions.activity,
    fitnessGoal: selectedOptions.goal,
    userValues: {
      weight: valueGroups.weight,
      height: valueGroups.heightCm, // or heightFeet/heightInches depending on the unit system
      utcOffset: "+02:00", // You can adjust this based on user location
      muscleInjuries: "none", // Adjust this based on the user's input
      jointInjuries: "none", // Adjust this based on the user's input
      split: selectedOptions.split,
      goal: selectedOptions.goal,
      difficultyLevel: selectedOptions.training, // Adjust this based on the user's input
      restDays: selectedOptions.restDays,
      equipment: ["barbells", "machines"], // Adjust based on user input
      workoutType: "hypertrophy", // Adjust based on user input
    },
  });
  console.log("Submitting form data:", formData);

  const prevStep = () => {
    if (currentTab > 0) {
      setCurrentTab(currentTab - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    onFormDataChange(formData);
  };

  const handleOptionClick = (key, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
    updateParentData();
  };

  const handleRestDayClick = (day) => {
    const maxRestDays = 7 - (selectedOptions.split || 0);

    setSelectedOptions((prev) => {
      const updatedRestDays = prev.restDays.includes(day)
        ? prev.restDays.filter((d) => d !== day)
        : [...prev.restDays, day];

      return {
        ...prev,
        restDays: updatedRestDays.slice(0, maxRestDays),
      };
    });
  };

  const convertValues = () => {
    if (unitSystem === "metric") {
      const weightLbs = Math.round(valueGroups.weight * 2.20462);

      const totalInches = Math.round(valueGroups.heightCm / 2.54);
      const heightFeet = Math.floor(totalInches / 12);
      const heightInches = totalInches % 12;

      setValueGroups((prev) => ({
        ...prev,
        weight: weightLbs,
        heightFeet,
        heightInches,
      }));
    } else {
      const weightKg = Math.round(valueGroups.weight / 2.20462);

      const totalCm = Math.round(
        (valueGroups.heightFeet * 12 + valueGroups.heightInches) * 2.54
      );

      setValueGroups((prev) => ({
        ...prev,
        weight: weightKg,
        heightCm: totalCm,
      }));
    }
  };

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUnitSwitch = (system) => {
    if (unitSystem === system) return;

    if (system === "metric") {
      const convertedWeight = Math.round(valueGroups.weight / 2.20462);
      const totalInches =
        valueGroups.heightFeet * 12 + valueGroups.heightInches;
      const convertedHeight = Math.round(totalInches * 2.54);

      setValueGroups((prev) => ({
        ...prev,
        weight: convertedWeight,
        heightCm: convertedHeight,
      }));
    } else {
      const convertedWeight = Math.round(valueGroups.weight * 2.20462);
      const totalInches = Math.round(valueGroups.heightCm / 2.54);
      const convertedFeet = Math.floor(totalInches / 12);
      const convertedInches = totalInches % 12;

      setValueGroups((prev) => ({
        ...prev,
        weight: convertedWeight,
        heightFeet: convertedFeet,
        heightInches: convertedInches,
      }));
    }

    setUnitSystem(system);
  };

  const getSelectedValues = () => {
    if (unitSystem === "metric") {
      return {
        unitSystem,
        weight: `${valueGroups.weight} kg`,
        height: `${valueGroups.heightCm} cm`,
      };
    } else {
      return {
        unitSystem,
        weight: `${valueGroups.weight} lbs`,
        height: `${valueGroups.heightFeet} ft ${valueGroups.heightInches} in`,
      };
    }
  };

  return (
    <Wrapper>
      <div className="wizard-container">
        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* Slide Content */}
        <div className="slide-container">
          {currentTab === 0 && (
            <div className="slide">
              <h3>Tell us about yourself!</h3>
              <p className="gender-paragraph">Please choose your gender.</p>
              <div className="gender-icons">
                <div onClick={() => handleOptionClick("gender", "male")}>
                  <FontAwesomeIcon
                    icon={faMarsStroke}
                    size="3x"
                    className={`gender-icons-male ${
                      selectedOptions.gender === "male" ? "selected" : ""
                    }`}
                  />
                  <p>Male</p>
                </div>
                <div
                  className={`gender-icons-female ${
                    selectedOptions.gender === "female" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick("gender", "female")}
                >
                  <FontAwesomeIcon icon={faVenus} size="3x" />
                  <p>Female</p>
                </div>
              </div>
              <div className="navigation-buttons">
                <button onClick={prevStep} className="prev-button">
                  Prev
                </button>
                <button onClick={nextStep} className="next-button">
                  Next
                </button>
              </div>
            </div>
          )}

          {currentTab === 1 && (
            <div className="slide">
              <h3>What’s your weight and height?</h3>
              <NumberPicker
                unitSystem={unitSystem}
                valueGroups={valueGroups}
                setValueGroups={setValueGroups}
                setUnitSystem={setUnitSystem}
                handleUnitSwitch={handleUnitSwitch}
              />
              <div className="navigation-buttons">
                <button onClick={prevStep} className="prev-button">
                  Prev
                </button>
                <button
                  onClick={nextStep}
                  className="next-button"
                  disabled={!valueGroups.weight || !valueGroups.heightCm}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentTab === 2 && (
            <div className="slide">
              <h3>What’s your workout goal?</h3>
              <p>Please select your fitness goal!</p>
              <div className="goals">
                {["weight loss", "maintenance", "muscle gain"].map((goal) => (
                  <button
                    key={goal}
                    className={`goal-button ${
                      selectedOptions.goal === goal ? "selected" : ""
                    }`}
                    onClick={() => handleOptionClick("goal", goal)}
                  >
                    {goal}
                  </button>
                ))}
              </div>
              <div className="navigation-buttons">
                <button onClick={prevStep} className="prev-button">
                  Prev
                </button>
                <button
                  onClick={nextStep}
                  className="next-button"
                  disabled={!selectedOptions.goal}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentTab === 3 && (
            <div className="slide">
              <h3>What’s your activity level?</h3>
              <p>Please select your activity level!</p>
              <div className="goals">
                {[
                  "Sedentary",
                  "Lightly active",
                  "Moderately active",
                  "Very active",
                  "Extra active",
                ].map((activity) => (
                  <button
                    key={activity}
                    className={`goal-button ${
                      selectedOptions.activity === activity ? "selected" : ""
                    }`}
                    onClick={() => handleOptionClick("activity", activity)}
                  >
                    {activity}
                  </button>
                ))}
              </div>
              <div className="navigation-buttons">
                <button onClick={prevStep} className="prev-button">
                  Prev
                </button>
                <button
                  onClick={nextStep}
                  className="next-button"
                  disabled={!selectedOptions.activity}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentTab === 4 && (
            <div className="slide">
              <h3>What’s your training level?</h3>
              <p>Please select your training level!</p>
              <div className="goals">
                {["Beginner", "Intermediate", "Advanced"].map((training) => (
                  <button
                    key={training}
                    className={`goal-button ${
                      selectedOptions.training === training ? "selected" : ""
                    }`}
                    onClick={() =>
                      handleOptionClick("difficultyLevel", training)
                    }
                  >
                    {training}
                  </button>
                ))}
              </div>
              <div className="navigation-buttons">
                <button onClick={prevStep} className="prev-button">
                  Prev
                </button>
                <button
                  onClick={nextStep}
                  className="next-button"
                  disabled={!selectedOptions.training}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentTab === 5 && (
            <div className="slide">
              <h3>Select a workout split</h3>
              <p>Choose what best suits you!</p>
              <div className="goals">
                {[
                  { label: "Full Body 2x", days: 2 },
                  { label: "Full Body 3x", days: 3 },
                  { label: "Full Body 4x", days: 4 },
                  { label: "Upper Lower 2x", days: 2 },
                  { label: "Upper Lower 3x", days: 3 },
                  { label: "Upper Lower 4x", days: 4 },
                  { label: "Upper Lower PPL 5x", days: 5 },
                  { label: "Bro Split 5x", days: 5 },
                  { label: "Push Pull Legs 3x", days: 3 },
                  { label: "Push Pull Legs 6x", days: 6 },
                ].map((split) => (
                  <button
                    key={split.label}
                    className={`goal-button ${
                      selectedOptions.split === split.days ? "selected" : ""
                    }`}
                    onClick={() => handleOptionClick("split", split.days)}
                  >
                    {split.label}
                  </button>
                ))}
              </div>
              <div className="navigation-buttons">
                <button onClick={prevStep} className="prev-button">
                  Prev
                </button>
                <button
                  onClick={nextStep}
                  className="next-button"
                  disabled={!selectedOptions.split}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentTab === 6 && (
            <div className="slide">
              <h3>Choose your rest days</h3>
              <p>Max: {7 - (selectedOptions.split || 0)} days</p>
              <div className="goals">
                {[
                  "First",
                  "Second",
                  "Third",
                  "Fourth",
                  "Fifth",
                  "Sixth",
                  "Seventh",
                ].map((day, index) => (
                  <button
                    key={index}
                    className={`goal-button ${
                      selectedOptions.restDays.includes(day) ? "selected" : ""
                    }`}
                    onClick={() => handleRestDayClick(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
              <div className="navigation-buttons">
                <button onClick={prevStep} className="prev-button">
                  Prev
                </button>
                <button
                  onClick={nextStep}
                  className="next-button"
                  disabled={selectedOptions.restDays.length === 0}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentTab === 7 && (
            <div className="slide">
              <h3>Select your equipment type</h3>
              <div className="goals">
                {["machines", "dumbbells", "barbell"].map((equipment) => (
                  <button
                    key={equipment}
                    className={`goal-button ${
                      selectedOptions.equipment === equipment ? "selected" : ""
                    }`}
                    onClick={() => handleOptionClick("equipment", equipment)}
                  >
                    {equipment}
                  </button>
                ))}
              </div>
              <div className="navigation-buttons">
                <button onClick={prevStep} className="prev-button">
                  Prev
                </button>
                <button
                  onClick={nextStep}
                  className="next-button"
                  disabled={!selectedOptions.equipment}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentTab === 8 && (
            <div className="slide">
              <h3>Have you had any joint injuries?</h3>
              <p>Please select your answer!</p>
              <div className="goals">
                {["Yes", "No"].map((injury) => (
                  <button
                    key={injury}
                    className={`goal-button ${
                      selectedOptions.jointInjury === injury ? "selected" : ""
                    }`}
                    onClick={() => handleOptionClick("jointInjury", injury)}
                  >
                    {injury}
                  </button>
                ))}
              </div>
              <div className="navigation-buttons">
                <button onClick={prevStep} className="prev-button">
                  Prev
                </button>
                <button
                  onClick={nextStep}
                  className="next-button"
                  disabled={!selectedOptions.jointInjury}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {currentTab === 9 && (
            <div className="slide">
              <h3>Your Preferences</h3>
              <p>Complete your setup!</p>
              <div className="navigation-buttons">
                <button onClick={prevStep} className="prev-button">
                  Prev
                </button>
                <button
                  onClick={handleSubmitClick}
                  className="submit-button"
                  disabled={!selectedOptions.equipment}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default WizardForm;
