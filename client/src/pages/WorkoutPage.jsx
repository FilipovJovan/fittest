import React, { useState, useEffect } from "react";
import { Form, useLocation, useNavigate, Outlet } from "react-router-dom";
import { useWorkout } from "../../context/WorkoutContext";
import { useAuth } from "../../context/AuthContext";
import WorkoutWeekCard from "../components/WorkoutWeekCard";
import Wrapper from "../assets/Wrappers/Workout";
import FormRow from "../components/FormRow";
import { Row, Col } from "react-bootstrap";
import customFetch from "../utils/customFetch";

const WorkoutPage = () => {
  const navigate = useNavigate();
  const { user, authChecked } = useAuth();
  const { fullWorkoutPlan, loading, workoutPhase } = useWorkout();
  const workoutId = fullWorkoutPlan?.workoutProgram?.[0]?._id;
  const { pathname } = useLocation();

  // Load state from localStorage
  const savedKnowsWeight = localStorage.getItem("knowsWeight");
  const savedSubmitted = localStorage.getItem("submitted");
  const savedPracticeWeights = localStorage.getItem("practiceWeights");
  const savedStartDate = localStorage.getItem("practiceStartDate");
  const savedAllDays = localStorage.getItem("allDays");

  const [selectedUnit, setSelectedUnit] = useState("");
  const [metricUnit, setMetricUnit] = useState("metric");
  const [knowsWeight, setKnowsWeight] = useState(
    savedKnowsWeight ? JSON.parse(savedKnowsWeight) : null
  );
  console.log(knowsWeight);

  const [submitted, setSubmitted] = useState(
    savedSubmitted ? JSON.parse(savedSubmitted) : false
  );
  const [practiceWeights, setPracticeWeights] = useState(
    savedPracticeWeights
      ? JSON.parse(savedPracticeWeights)
      : {
          benchPress: "",
          latPulldown: "",
          barbellRow: "",
          militaryPress: "",
          bicepsCurl: "",
          tricepsPushdown: "",
          squat: "",
          romanianDeadlift: "",
        }
  );
  const [showWeightForm, setShowWeightForm] = useState(false);
  const [practiceStartDate, setPracticeStartDate] = useState(
    savedStartDate ? new Date(JSON.parse(savedStartDate)) : null
  );
  const [allDays, setAllDays] = useState(
    savedAllDays ? JSON.parse(savedAllDays) : []
  );
  const [showInstructions, setShowInstructions] = useState(false);
  const [showEnteredWeights, setShowEnteredWeights] = useState(false);

  const areWeightsPutted = user?.areWeightsPutted;
  const isAtWorkoutRoot = pathname === "/dashboard/workout";

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("knowsWeight", JSON.stringify(knowsWeight));
    localStorage.setItem("submitted", JSON.stringify(submitted));
    localStorage.setItem("practiceWeights", JSON.stringify(practiceWeights));
    if (practiceStartDate) {
      localStorage.setItem(
        "practiceStartDate",
        JSON.stringify(practiceStartDate.toISOString())
      );
    }
    if (allDays.length > 0) {
      localStorage.setItem("allDays", JSON.stringify(allDays));
    }
  }, [knowsWeight, submitted, practiceWeights, practiceStartDate, allDays]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const daysSinceStart =
    practiceStartDate &&
    Math.floor((today - new Date(practiceStartDate)) / (1000 * 60 * 60 * 24));
  const isSeventhDay = practiceStartDate && daysSinceStart >= 6;

  useEffect(() => {
    if (knowsWeight === false && !practiceStartDate && !submitted) {
      const startDate = new Date();
      startDate.setHours(0, 0, 0, 0);
      setPracticeStartDate(startDate);

      if (!savedAllDays || JSON.parse(savedAllDays).length === 0) {
        const newDays = Array.from({ length: 7 }, (_, index) => {
          const dayDate = new Date(startDate);
          dayDate.setDate(startDate.getDate() + index);
          return { date: dayDate.toISOString(), weights: {} };
        });
        setAllDays(newDays);
      }
    }
  }, [knowsWeight, practiceStartDate, submitted, savedAllDays]);

  if (!authChecked) return <div>Loading...</div>;
  if (loading || workoutPhase === "loading")
    return (
      <Wrapper>
        <p className="loading-message">Loading...</p>
      </Wrapper>
    );
  if (workoutPhase === "test")
    return (
      <Wrapper>
        <p className="loading-message">
          You're currently in the test phase. Your full workout plan will be
          generated once you've completed the test week.
        </p>
      </Wrapper>
    );

  const workoutProgram = fullWorkoutPlan?.workoutProgram ?? [];
  if (workoutProgram.length === 0)
    return (
      <Wrapper>
        <p className="loading-message">No workout program found.</p>
      </Wrapper>
    );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPracticeWeights((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (
      daysSinceStart !== undefined &&
      daysSinceStart >= 0 &&
      daysSinceStart < 7
    ) {
      const updatedAllDays = [...allDays];
      updatedAllDays[daysSinceStart] = {
        ...updatedAllDays[daysSinceStart],
        weights: { ...practiceWeights },
      };
      setAllDays(updatedAllDays);
    }
    setShowWeightForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allWeightsFilled = Object.values(practiceWeights).every(
      (weight) => weight !== "" && weight !== null && !isNaN(weight)
    );
    if (!allWeightsFilled) {
      alert("Please enter weights for all 8 exercises before submitting.");
      return;
    }

    let convertedWeights = { ...practiceWeights };
    if (metricUnit === "imperial") {
      convertedWeights = Object.fromEntries(
        Object.entries(practiceWeights).map(([key, value]) => [
          key,
          +(value / 2.20462).toFixed(1),
        ])
      );
    }

    user.areWeightsPutted == true;
    await user.save;
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const payload = {
        ...convertedWeights,
        workoutId,
      };

      const res = await customFetch.post(
        "/generate-custom/workout/weight-exercises",
        payload,
        {
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Successfully submitted:", res.data);
      setSubmitted(true);
      setShowWeightForm(false);
      localStorage.removeItem("knowsWeight");
      localStorage.removeItem("submitted");
      localStorage.removeItem("practiceWeights");
      localStorage.removeItem("practiceStartDate");
      localStorage.removeItem("allDays");
    } catch (error) {
      console.error("Error submitting weights:", error);
    }
  };

  const getWeekStatus = (week) => {
    if (!week?.days?.length) return "not-started";

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dayDates = week.days
      .map((day) => new Date(day.date).setHours(0, 0, 0, 0))
      .filter((date) => !isNaN(date));

    const minDate = Math.min(...dayDates);
    const maxDate = Math.max(...dayDates);

    if (dayDates.every((date) => date < today)) return "finished";
    if (minDate <= today && today <= maxDate) return "current";

    return "not-started";
  };
  console.log(knowsWeight);

  const shouldShowForm = knowsWeight === true && !submitted;
  console.log(shouldShowForm);

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
              value={practiceWeights.benchPress}
              onChange={handleChange}
            />
            <FormRow
              type="number"
              name="latPulldown"
              labelText="Lat Pull Down"
              value={practiceWeights.latPulldown}
              onChange={handleChange}
            />
            <FormRow
              type="number"
              name="barbellRow"
              labelText="Barbell Row"
              value={practiceWeights.barbellRow}
              onChange={handleChange}
            />
            <FormRow
              type="number"
              name="militaryPress"
              labelText="Military Press"
              value={practiceWeights.militaryPress}
              onChange={handleChange}
            />
          </Col>
          <Col className="weight-form-col">
            <FormRow
              type="number"
              name="bicepsCurl"
              labelText="Biceps Curl"
              value={practiceWeights.bicepsCurl}
              onChange={handleChange}
            />
            <FormRow
              type="number"
              name="tricepsPushdown"
              labelText="Triceps Push Down"
              value={practiceWeights.tricepsPushdown}
              onChange={handleChange}
            />
            <FormRow
              type="number"
              name="squat"
              labelText="Squat"
              value={practiceWeights.squat}
              onChange={handleChange}
            />
            <FormRow
              type="number"
              name="romanianDeadlift"
              labelText="Romanian Deadlift"
              value={practiceWeights.romanianDeadlift}
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
          <div className="mb-2 text-sm bg-gray-100 p-2 rounded">
            <p className="instruction-text">
              Welcome to your test week! Please complete this phase by using
              weights that feel comfortable to you, testing all 8 exercises
              (input the weight you can lift for 10 reps of each exercise), and
              ensuring you enter all weights by the 7th day so we can accurately
              adjust your personalized workout plan. Below, click 'Enter
              Weights' to open the form.
            </p>
          </div>
        )}

        {workoutProgram.map((program) =>
          program.weeks
            .slice(0, 1)
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
                        value={practiceWeights.benchPress}
                        onChange={handleChange}
                      />
                      <FormRow
                        type="number"
                        name="latPulldown"
                        labelText="Lat Pull Down"
                        value={practiceWeights.latPulldown}
                        onChange={handleChange}
                      />
                      <FormRow
                        type="number"
                        name="barbellRow"
                        labelText="Barbell Row"
                        value={practiceWeights.barbellRow}
                        onChange={handleChange}
                      />
                      <FormRow
                        type="number"
                        name="militaryPress"
                        labelText="Military Press"
                        value={practiceWeights.militaryPress}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col className="weight-form-col">
                      <FormRow
                        type="number"
                        name="bicepsCurl"
                        labelText="Biceps Curl"
                        value={practiceWeights.bicepsCurl}
                        onChange={handleChange}
                      />
                      <FormRow
                        type="number"
                        name="tricepsPushdown"
                        labelText="Triceps Push Down"
                        value={practiceWeights.tricepsPushdown}
                        onChange={handleChange}
                      />
                      <FormRow
                        type="number"
                        name="squat"
                        labelText="Squat"
                        value={practiceWeights.squat}
                        onChange={handleChange}
                      />
                      <FormRow
                        type="number"
                        name="romanianDeadlift"
                        labelText="Romanian Deadlift"
                        value={practiceWeights.romanianDeadlift}
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
            {/* Weight Summary */}
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
  areWeightsPutted == true;
  console.log("Are weights putted: " + areWeightsPutted);
  const renderWeeks = () => {
    return (
      <>
        <h3 className="plan-title">Your Workout Plan</h3>
        <div className="workout-page">
          {workoutProgram.map((program) =>
            program.weeks
              .slice(
                knowsWeight === false ? 1 : areWeightsPutted == true ? 1 : 0
              )
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
  console.log("Are weights putted: " + areWeightsPutted);

  // Check if all weights are filled
  const allWeightsFilled = Object.values(practiceWeights).every(
    (weight) => weight !== "" && weight !== null && !isNaN(weight)
  );

  console.log("Knows weight: " + knowsWeight);
  console.log("Should show form: " + shouldShowForm);
  console.log("Is submitted: " + submitted);

  return (
    <Wrapper>
      {knowsWeight === false ? (
        <div class="weight-knowledge-check">
          <h3>Do You Know Your Starting Weights?</h3>
          <p class="weight-info-text">
            Knowing your starting weights helps us create a plan tailored to
            your current fitness level. Please enter the weight you can lift for{" "}
            <span className="bolder-text">10 repetitions</span> of each
            exercise. If you're unsure, we'll guide you through a simple test
            week to help you estimate your weights safely.
          </p>

          <div class="button-group">
            <button
              class="set-knows-weight"
              onClick={() => setKnowsWeight(true)}
            >
              Yes, I Know My Weights
            </button>
            <button
              class="set-knows-weight"
              onClick={() => setKnowsWeight(false)}
            >
              No, I Want to Estimate Them
            </button>
          </div>

          <div class="info-box">
            <h4>Why This Matters</h4>
            <ul>
              <li>🚀 Personalized training intensity</li>
              <li>📈 Track progress more accurately</li>
              <li>🛡️ Reduce risk of injury from lifting too heavy</li>
            </ul>
          </div>

          <p class="weight-note">
            ⚠️ Please choose carefully: Once you select an option, it cannot be
            changed later. If you're unsure about your weights, we recommend
            selecting "No" and going through the guided test week.
          </p>
        </div>
      ) : shouldShowForm ? (
        renderWeightForm()
      ) : knowsWeight === false && !submitted ? (
        <>
          {isAtWorkoutRoot && renderPracticeWeek()}
          <Outlet />
        </>
      ) : (
        <div>
          {isAtWorkoutRoot && renderWeeks()}
          <Outlet />
        </div>
      )}
    </Wrapper>
  );
};

export default WorkoutPage;
