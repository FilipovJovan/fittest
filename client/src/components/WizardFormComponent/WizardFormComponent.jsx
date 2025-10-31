import React from "react";
import "./WizardFormComponent.scss";
import {useWizardFormComponent} from "./WizardFormComponent.logic";
import Wrapper from "../../assets/Wrappers/WizardForm.js";
import {Mars, Venus} from "lucide-react";
import DatePicker from "react-datepicker";
import {FaEye, FaEyeSlash} from "react-icons/fa";

const WizardFormComponent = ({onFormDataChange, onFinalStep}) => {
    const {
        step,
        formData,
        setFormData,
        nextStep,
        unit,
        handleUnitChange,
        weightKg,
        setWeightKg,
        heightCm,
        setHeightCm,
        weightLbs,
        setWeightLbs,
        heightFeet,
        setHeightFeet,
        heightInches,
        handleInchesChange,
        prevStep,
        handleFieldChange,
        restDayLimits,
        toggleRestDay,
        toggleMuscleInjury,
        toggleJointInjury,
        handleChange,
        togglePassword,
        showPassword,
        age,
        isSubmitting,
        handleSubmit,
        acceptedTerms,
        setAcceptedTerms
    } = useWizardFormComponent();
    return (
        <Wrapper>
            <div className="wizard-container">
                <div className="progress-bar-container">
                    <div
                        className="progress-bar"
                        style={{width: `${(step / 11) * 100}%`}}
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
                                    onClick={() => setFormData({...formData, gender: "male"})}
                                >
                                    <Mars width={"70px"} height={"80px"}/>
                                    <p>Male</p>
                                </div>

                                <div
                                    className={`gender-icons-female ${
                                        formData.gender === "female" ? "selected" : ""
                                    }`}
                                    onClick={() => setFormData({...formData, gender: "female"})}
                                >
                                    <Venus width={"70px"} height={"80px"}/>
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
                            <div className="unit-switch">
                                {/* Toggle Buttons */}
                                <div className="unit-toggle">
                                    <button
                                        type="button"
                                        className={`toggle-button ${
                                            unit === "metric" ? "active" : ""
                                        }`}
                                        onClick={() => handleUnitChange("metric")}
                                    >
                                        Metric
                                    </button>
                                    <button
                                        type="button"
                                        className={`toggle-button ${
                                            unit === "imperial" ? "active" : ""
                                        }`}
                                        onClick={() => handleUnitChange("imperial")}
                                    >
                                        Imperial
                                    </button>
                                </div>

                                {/* Input Fields */}
                                {unit === "metric" ? (
                                    <div className="metric-inputs">
                                        <label className="input-label">
                                            Weight (kg):
                                            <input
                                                type="number"
                                                className="input-field"
                                                value={weightKg}
                                                onChange={(e) => setWeightKg(e.target.value)}
                                                aria-label="Weight in kilograms"
                                            />
                                        </label>
                                        <label className="input-label">
                                            Height (cm):
                                            <input
                                                type="number"
                                                className="input-field"
                                                value={heightCm}
                                                onChange={(e) => setHeightCm(e.target.value)}
                                                aria-label="Height in centimeters"
                                            />
                                        </label>
                                    </div>
                                ) : (
                                    <div className="imperial-inputs">
                                        <label className="input-label">
                                            Weight (lbs):
                                            <input
                                                type="number"
                                                className="input-field"
                                                value={weightLbs}
                                                onChange={(e) => setWeightLbs(e.target.value)}
                                                aria-label="Weight in pounds"
                                            />
                                        </label>
                                        <label className="input-label">
                                            Height (feet):
                                            <input
                                                type="number"
                                                className="input-field"
                                                value={heightFeet}
                                                onChange={(e) => setHeightFeet(e.target.value)}
                                                aria-label="Height in feet"
                                            />
                                        </label>
                                        <label className="input-label">
                                            Height (inches):
                                            <input
                                                type="number"
                                                className="input-field"
                                                value={heightInches}
                                                onChange={handleInchesChange}
                                                aria-label="Height in inches"
                                            />
                                        </label>
                                    </div>
                                )}
                            </div>

                            <div className="navigation-buttons">
                                <button className="back-button" onClick={prevStep}>
                                    Back
                                </button>
                                <button className="next-button" onClick={nextStep}>
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="slide">
                            <h3>Activity Level</h3>

                            <div className="activity-level-options">
                                <div
                                    className={`activity-level-option ${
                                        formData.activityLevel === "Sedentary" ? "selected" : ""
                                    }`}
                                    onClick={() =>
                                        handleFieldChange("activityLevel", "Sedentary")
                                    }
                                >
                                    Sedentary
                                </div>
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
                                        formData.fitnessGoal === "Muscle Gain" ? "selected" : ""
                                    }`}
                                    onClick={() =>
                                        handleFieldChange("fitnessGoal", "Muscle Gain")
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
                                        formData.fitnessGoal === "Weight Loss" ? "selected" : ""
                                    }`}
                                    onClick={() =>
                                        handleFieldChange("fitnessGoal", "Weight Loss")
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
                                        formData.userValues.split === "broSplit5x" ? "selected" : ""
                                    }`}
                                    onClick={() =>
                                        handleFieldChange("userValues", {
                                            ...formData.userValues,
                                            split: "broSplit5x",
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
                                {[
                                    "none",
                                    "chest",
                                    "back",
                                    "triceps",
                                    "biceps",
                                    "traps",
                                    "shoulders",
                                    "abs",
                                    "quadriceps",
                                    "hamstrings",
                                    "calves",
                                    "forearm",
                                ].map((muscle) => (
                                    <div
                                        key={muscle}
                                        className={`activity-level-option ${
                                            formData.userValues.muscleInjuries?.includes(muscle)
                                                ? "selected"
                                                : ""
                                        }`}
                                        onClick={() => toggleMuscleInjury(muscle)}
                                    >
                                        {muscle === "none"
                                            ? "None"
                                            : muscle.charAt(0).toUpperCase() + muscle.slice(1)}
                                    </div>
                                ))}
                            </div>

                            <div className="navigation-buttons">
                                <button onClick={prevStep}>Back</button>
                                <button
                                    onClick={nextStep}
                                    // Enable Next if user selected at least one injury or "none"
                                    disabled={!formData.userValues.muscleInjuries?.length}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 9 && (
                        <div className="slide">
                            <h3>Have you had any joint injuries recently?</h3>
                            <div className="activity-level-options">
                                {["none", "elbow", "wrist", "knee", "ankle", "lower back"].map(
                                    (joint) => (
                                        <div
                                            key={joint}
                                            className={`activity-level-option ${
                                                formData.userValues.jointInjuries?.includes(joint)
                                                    ? "selected"
                                                    : ""
                                            }`}
                                            onClick={() => toggleJointInjury(joint)}
                                        >
                                            {joint === "none"
                                                ? "None"
                                                : joint.charAt(0).toUpperCase() + joint.slice(1)}
                                        </div>
                                    )
                                )}
                            </div>

                            <div className="navigation-buttons">
                                <button onClick={prevStep}>Back</button>
                                <button
                                    onClick={nextStep}
                                    disabled={!formData.userValues.jointInjuries?.length}
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
                                <DatePicker
                                    selected={formData.date ? new Date(formData.date) : null}
                                    onChange={(date) => setFormData({...formData, date})}
                                    className="form-input"
                                    placeholderText="Birth Date"
                                    dateFormat="yyyy-MM-dd"
                                    showYearDropdown
                                    showMonthDropdown
                                    dropdownMode="select"
                                    maxDate={new Date()}
                                    isClearable
                                />

                                {/*<input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Birth Date"
                  className="form-input"
                />*/}
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="form-input"
                                />
                                <div style={{position: "relative"}}>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                        className="form-input"
                                        style={{paddingRight: "3rem"}}
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePassword}
                                        style={{
                                            position: "absolute",
                                            right: "0.75rem",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            background: "none",
                                            border: "none",
                                            color: "#555",
                                            cursor: "pointer",
                                            fontSize: "0.9rem",
                                        }}
                                    >
                                        {showPassword ? <FaEyeSlash/> : <FaEye/>}
                                    </button>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        fontSize: "0.7rem",
                                        textAlign: "left",
                                    }}
                                >
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        checked={acceptedTerms}
                                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                                    />
                                    <label htmlFor="terms">
                                        I agree to the{" "}
                                        <a
                                            href="/terms-and-conditions"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Terms & Conditions
                                        </a>{" "}
                                        and{" "}
                                        <a
                                            href="/privacy-policy"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Privacy Policy
                                        </a>
                                    </label>
                                </div>
                            </div>
                            <div className="navigation-buttons">
                                <button onClick={prevStep}>Back</button>
                                <button
                                    onClick={nextStep}
                                    disabled={
                                        !formData.email ||
                                        !formData.password ||
                                        !formData.date ||
                                        !formData.name ||
                                        !formData.lastName ||
                                        age < 18 ||
                                        !acceptedTerms
                                    }
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 11 && (
                        <div className="slide">
                            <h3>You are ready to create your workout plan!</h3>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="create-button"
                            >
                                {isSubmitting ? "Creating..." : "Create"}
                            </button>

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

export default WizardFormComponent;
