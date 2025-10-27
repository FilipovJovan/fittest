// eslint-disable-next-line no-unused-vars
import React from "react";
import "./WorkoutPage.scss";
import {useWorkoutPage} from "./WorkoutPage.logic";
import {Form, Outlet} from "react-router-dom";
import {Col, Row, Spinner} from "react-bootstrap";
import FormRow from "../../components/FormRow.jsx";
import WorkoutWeekCard from "../../components/WorkoutWeekCard.jsx";

const WorkoutPage = () => {
    const {
        selectedUnit,
        setMetricUnit,
        setSelectedUnit,
        handleSubmit,
        practiceWeights,
        handleChange,
        setShowInstructions,
        showInstructions,
        workoutProgram,
        getWeekStatus,
        submitted,
        setShowWeightForm,
        showWeightForm,
        isSeventhDay,
        handleSave,
        allWeightsFilled,
        setShowEnteredWeights,
        showEnteredWeights,
        user,
        setUserKnowsWeight,
        isAtWorkoutRoot,
        authChecked,
        loading,
        workoutPhase
    } = useWorkoutPage();

    if (!authChecked) {
        return (
            <>
                <Spinner message="Loading..."/>
            </>
        );
    }
    if (loading || workoutPhase === "loading")
        return (
            <>
                <Spinner message="Loading..."/>
            </>
        );
    if (workoutPhase === "test")
        return (
            <>
                <p className="loading-message">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    You're currently in the test phase. Your full workout plan will be
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    generated once you've completed the test week.
                </p>
            </>
        );

    if (workoutProgram.length === 0)
        return (
            <>
                <p className="loading-message">No workout program found.</p>
            </>
        );

    const renderWeightForm = () => (
        <div className="weight-form">
            <h3>Enter Your Starting Weights</h3>
            <h5>Select your weight metric unit!</h5>
            <div className="button-group-weight">
                <button
                    className={`set-knows-weight ${selectedUnit === "metric" ? "selected" : ""}`}
                    onClick={() => {
                        setMetricUnit("metric");
                        setSelectedUnit("metric");
                    }}
                >
                    KG
                </button>
                <button
                    className={`set-knows-weight ${selectedUnit === "imperial" ? "selected" : ""}`}
                    onClick={() => {
                        setMetricUnit("imperial");
                        setSelectedUnit("imperial");
                    }}
                >
                    LBS
                </button>
            </div>
            <Form onSubmit={handleSubmit} className="form-weight">
                <Row>
                    <Col className="weight-form-col">
                        <FormRow
                            type="number"
                            name="benchPress"
                            labelText="Bench Press"
                            value={practiceWeights.benchPress || ""}
                            onChange={handleChange}
                        />
                        <FormRow
                            type="number"
                            name="latPulldown"
                            labelText="Lat Pull Down"
                            value={practiceWeights.latPulldown || ""}
                            onChange={handleChange}
                        />
                        <FormRow
                            type="number"
                            name="barbellRow"
                            labelText="Barbell Row"
                            value={practiceWeights.barbellRow || ""}
                            onChange={handleChange}
                        />
                        <FormRow
                            type="number"
                            name="militaryPress"
                            labelText="Military Press"
                            value={practiceWeights.militaryPress || ""}
                            onChange={handleChange}
                        />
                    </Col>
                    <Col className="weight-form-col">
                        <FormRow
                            type="number"
                            name="bicepsCurl"
                            labelText="Biceps Curl"
                            value={practiceWeights.bicepsCurl || ""}
                            onChange={handleChange}
                        />
                        <FormRow
                            type="number"
                            name="tricepsPushdown"
                            labelText="Triceps Push Down"
                            value={practiceWeights.tricepsPushdown || ""}
                            onChange={handleChange}
                        />
                        <FormRow
                            type="number"
                            name="squat"
                            labelText="Squat"
                            value={practiceWeights.squat || ""}
                            onChange={handleChange}
                        />
                        <FormRow
                            type="number"
                            name="romanianDeadlift"
                            labelText="Romanian Deadlift"
                            value={practiceWeights.romanianDeadlift || ""}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>
                <button type="submit">Save</button>
            </Form>
        </div>
    );

    const renderPracticeWeek = () => {
        return (
            <div className="practice-week-section">
                <h3>7-Day Practice Week</h3>
                <button
                    className="instruction-button"
                    onClick={() => setShowInstructions(!showInstructions)}
                >
                    Instructions
                </button>
                {showInstructions && (
                    <div className="instruction-text-container">
                        <p className="instruction-text">
                            Welcome to your test week! Please complete this phase by using
                            weights that feel comfortable to you, testing all 8 exercises
                            (input the weight you can lift for 10 reps of each exercise), and
                            ensuring you enter all weights by the 7th day so we can accurately
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            adjust your personalized workout plan. Below, click 'Enter
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Weights' to open the form.
                        </p>
                    </div>
                )}

                {workoutProgram.map((program) =>
                    program.weeks.slice(5, 6).map((week) => (
                        <WorkoutWeekCard
                            key={week._id}
                            workoutId={program._id}
                            week={week}
                            weekNumber={6} // <- explicitly set to 6
                            days={week.days}
                            status={getWeekStatus(week)}
                        />
                    ))
                )}
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <button
                            onClick={() => setShowWeightForm(true)}
                            className="enter-weights-button"
                            disabled={submitted}
                        >
                            Enter Weights
                        </button>
                        {showWeightForm && (
                            <div className="weight-entry-form">
                                <h4>Enter Weights for Practice Week</h4>
                                <h5>Select your weight metric unit!</h5>
                                <div className="button-group">
                                    <button
                                        className={`set-knows-weight ${selectedUnit === "metric" ? "selected" : ""}`}
                                        onClick={() => {
                                            setMetricUnit("metric");
                                            setSelectedUnit("metric");
                                        }}
                                    >
                                        KG
                                    </button>
                                    <button
                                        className={`set-knows-weight ${selectedUnit === "imperial" ? "selected" : ""}`}
                                        onClick={() => {
                                            setMetricUnit("imperial");
                                            setSelectedUnit("imperial");
                                        }}
                                    >
                                        LBS
                                    </button>
                                </div>
                                <Form
                                    onSubmit={isSeventhDay ? handleSubmit : handleSave}
                                    className="form-weight"
                                >
                                    <Row>
                                        <Col className="weight-form-col">
                                            <FormRow
                                                type="number"
                                                name="benchPress"
                                                labelText="Bench Press"
                                                value={practiceWeights.benchPress || ""}
                                                onChange={handleChange}
                                            />
                                            <FormRow
                                                type="number"
                                                name="latPulldown"
                                                labelText="Lat Pull Down"
                                                value={practiceWeights.latPulldown || ""}
                                                onChange={handleChange}
                                            />
                                            <FormRow
                                                type="number"
                                                name="barbellRow"
                                                labelText="Barbell Row"
                                                value={practiceWeights.barbellRow || ""}
                                                onChange={handleChange}
                                            />
                                            <FormRow
                                                type="number"
                                                name="militaryPress"
                                                labelText="Military Press"
                                                value={practiceWeights.militaryPress || ""}
                                                onChange={handleChange}
                                            />
                                        </Col>
                                        <Col className="weight-form-col">
                                            <FormRow
                                                type="number"
                                                name="bicepsCurl"
                                                labelText="Biceps Curl"
                                                value={practiceWeights.bicepsCurl || ""}
                                                onChange={handleChange}
                                            />
                                            <FormRow
                                                type="number"
                                                name="tricepsPushdown"
                                                labelText="Triceps Push Down"
                                                value={practiceWeights.tricepsPushdown || ""}
                                                onChange={handleChange}
                                            />
                                            <FormRow
                                                type="number"
                                                name="squat"
                                                labelText="Squat"
                                                value={practiceWeights.squat || ""}
                                                onChange={handleChange}
                                            />
                                            <FormRow
                                                type="number"
                                                name="romanianDeadlift"
                                                labelText="Romanian Deadlift"
                                                value={practiceWeights.romanianDeadlift || ""}
                                                onChange={handleChange}
                                            />
                                        </Col>
                                    </Row>
                                    <button
                                        type="submit"
                                        disabled={isSeventhDay && !allWeightsFilled}
                                    >
                                        {isSeventhDay ? "Submit Weights" : "Save"}
                                    </button>
                                    <button onClick={() => setShowWeightForm(false)}>
                                        Close
                                    </button>
                                </Form>
                                {isSeventhDay && !allWeightsFilled && (
                                    <p className="text-red-500 text-sm mt-2">
                                        Please enter weights for all 8 exercises before submitting.
                                    </p>
                                )}
                            </div>
                        )}
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className="weight-summary">
                            <button
                                className="instruction-button"
                                onClick={() => setShowEnteredWeights(!showEnteredWeights)}
                            >
                                Current Entered Weights
                            </button>
                            {showEnteredWeights && (
                                <ul>
                                    <li>
                                        Bench Press:{" "}
                                        <span
                                            className={
                                                practiceWeights.benchPress
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                            }
                                        >
                      {practiceWeights.benchPress || "Not entered"}
                    </span>
                                    </li>
                                    <li>
                                        Lat Pulldown:{" "}
                                        <span
                                            className={
                                                practiceWeights.latPulldown
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                            }
                                        >
                      {practiceWeights.latPulldown || "Not entered"}
                    </span>
                                    </li>
                                    <li>
                                        Barbell Row:{" "}
                                        <span
                                            className={
                                                practiceWeights.barbellRow
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                            }
                                        >
                      {practiceWeights.barbellRow || "Not entered"}
                    </span>
                                    </li>
                                    <li>
                                        Military Press:{" "}
                                        <span
                                            className={
                                                practiceWeights.militaryPress
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                            }
                                        >
                      {practiceWeights.militaryPress || "Not entered"}
                    </span>
                                    </li>
                                    <li>
                                        Biceps Curl:{" "}
                                        <span
                                            className={
                                                practiceWeights.bicepsCurl
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                            }
                                        >
                      {practiceWeights.bicepsCurl || "Not entered"}
                    </span>
                                    </li>
                                    <li>
                                        Triceps Pushdown:{" "}
                                        <span
                                            className={
                                                practiceWeights.tricepsPushdown
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                            }
                                        >
                      {practiceWeights.tricepsPushdown || "Not entered"}
                    </span>
                                    </li>
                                    <li>
                                        Squat:{" "}
                                        <span
                                            className={
                                                practiceWeights.squat
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                            }
                                        >
                      {practiceWeights.squat || "Not entered"}
                    </span>
                                    </li>
                                    <li>
                                        Romanian Deadlift:{" "}
                                        <span
                                            className={
                                                practiceWeights.romanianDeadlift
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                            }
                                        >
                      {practiceWeights.romanianDeadlift || "Not entered"}
                    </span>
                                    </li>
                                </ul>
                            )}

                            {isSeventhDay && !allWeightsFilled && (
                                <p className="text-red-500 text-sm mt-2">
                                    All weights must be entered by the 7th day to submit.
                                </p>
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    };

    const renderWeeks = () => {
        return (
            <>
                <h3 className="plan-title">Your Workout Plan</h3>
                <div className="workout-page">
                    {workoutProgram.map((program) =>
                        program.weeks
                            .slice(0, 5)
                            .map((week, index) => (
                                <WorkoutWeekCard
                                    key={week._id}
                                    workoutId={program._id}
                                    week={week}
                                    weekNumber={index + 1}
                                    days={week.days}
                                    status={getWeekStatus(week)}
                                />
                            ))
                    )}
                </div>
            </>
        );
    };
    return (
        <>
            {/* 1. If user hasn't chosen weight option yet */}
            {!user?.hasChosenWeightOption ? (
                <div className="weight-knowledge-check">
                    <h3>Do You Know Your Starting Weights?</h3>
                    <p className="weight-info-text">
                        Knowing your starting weights helps us create a plan tailored to
                        your current fitness level. Please enter the weight you can lift for{" "}
                        <span className="bolder-text">10 repetitions</span> of each
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        exercise. If you're unsure, we'll guide you through a simple test
                        week to help you estimate your weights safely.
                    </p>

                    <div className="button-group">
                        <button
                            className="set-knows-weight"
                            onClick={() => setUserKnowsWeight(user, true, true)}
                        >
                            Yes, I Know My Weights
                        </button>
                        <button
                            className="set-knows-weight"
                            onClick={() => setUserKnowsWeight(user, false, true)}
                        >
                            No, I Want to Estimate Them
                        </button>
                    </div>

                    <div className="info-box">
                        <h4>Why This Matters</h4>
                        <ul>
                            <li>🚀 Personalized training intensity</li>
                            <li>📈 Track progress more accurately</li>
                            <li>🛡️ Reduce risk of injury from lifting too heavy</li>
                        </ul>
                    </div>

                    <p className="weight-note">
                        ⚠️ Please choose carefully: Once you select an option, it cannot be
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        changed later. If you're unsure about your weights, we recommend
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        selecting "No" and going through the guided test week.
                    </p>
                </div>
            ) : user?.areWeightsPutted ? (
                // 2. User has submitted weights — show full workout
                <>
                    {isAtWorkoutRoot && renderWeeks()}
                    <Outlet/>
                </>
            ) : user?.knowsWeight === true ? (
                // 3. User knows weights but hasn't submitted — show weight input form
                renderWeightForm()
            ) : (
                // 4. User doesn’t know weights and hasn't finished test week — show practice week
                <>
                    {isAtWorkoutRoot && renderPracticeWeek()}
                    <Outlet/>
                </>
            )}
        </>
    );
};

export default WorkoutPage;
