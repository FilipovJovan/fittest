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
  const { authChecked, user, setUser } = useAuth();
  const { fullWorkoutPlan, loading, workoutPhase } = useWorkout();
  const workoutId = fullWorkoutPlan?.workoutProgram?.[0]?._id;
  const { pathname } = useLocation();
  const apiKey = import.meta.env.VITE_API_KEY;
  const userId = user?._id;
  console.log("User id: " + userId);

  const areWeightsPutted = user?.areWeightsPutted;
  const userKnowsWeight = user?.knowsWeight;
  const testWeekStartDate = user?.testWeekStartDate;

  const [selectedUnit, setSelectedUnit] = useState("");
  const [metricUnit, setMetricUnit] = useState("metric");
  const [practiceWeights, setPracticeWeights] = useState({
    benchPress: null,
    latPulldown: null,
    barbellRow: null,
    militaryPress: null,
    bicepsCurl: null,
    tricepsPushdown: null,
    squat: null,
    romanianDeadlift: null,
  });
  const [showWeightForm, setShowWeightForm] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showEnteredWeights, setShowEnteredWeights] = useState(false);
  const [submitted, setSubmitted] = useState(areWeightsPutted || false);
  const [hasChosenWeightOption, setHasChosenWeightOption] = useState(false);

  const isAtWorkoutRoot = pathname === "/dashboard/workout";

  // Fetch test weights on component mount
  useEffect(() => {
    const fetchWeights = async () => {
      try {
        const response = await customFetch.get(
          `/generate-custom/workout/get-test-weights/${userId}`,
          {
            headers: {
              "x-api-key": apiKey,
              "Content-Type": "application/json",
            },
          }
        );
        const { testWeights } = response.data;
        if (testWeights) {
          setPracticeWeights(testWeights);
        }
      } catch (error) {
        console.error("Error fetching weights:", error);
      }
    };
    if (userId) {
      fetchWeights();
    }
  }, [userId]);

  // Set testWeekStartDate to today if not set and user doesn't know weights
  useEffect(() => {
    if (userKnowsWeight === false && !testWeekStartDate && !areWeightsPutted) {
      const setStartDate = async () => {
        try {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const apiKey = import.meta.env.VITE_API_KEY;
          await customFetch.put(
            `/generate-custom/workout/update-test-weights/${userId}`,
            { testWeekStartDate: today.toISOString() },
            {
              headers: {
                "x-api-key": apiKey,
                "Content-Type": "application/json",
              },
            }
          );
          // Note: Do not mutate user.testWeekStartDate directly; rely on backend update
        } catch (error) {
          console.error("Error setting test week start date:", error);
        }
      };
      setStartDate();
    }
  }, [userKnowsWeight, testWeekStartDate, areWeightsPutted, userId]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const daysSinceStart =
    testWeekStartDate &&
    Math.floor((today - new Date(testWeekStartDate)) / (1000 * 60 * 60 * 24));
  const isSeventhDay = testWeekStartDate && daysSinceStart >= 6;

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
      [name]: value ? Number(value) : null,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await customFetch.put(
        `/generate-custom/workout/update-test-weights/${userId}`,
        { testWeights: { ...practiceWeights } },
        {
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
        }
      );
      setShowWeightForm(false);
    } catch (error) {
      console.error("Error saving weights:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allWeightsFilled = Object.values(practiceWeights).every(
      (weight) => weight !== null && !isNaN(weight)
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
          value ? +(value / 2.20462).toFixed(1) : null,
        ])
      );
    }

    try {
      const payload = {
        finalWeights: convertedWeights,
        areWeightsPutted: true,
        testWeights: null, // Clear test weights
      };

      const res = await customFetch.put(
        `/generate-custom/workout/update-test-weights/${userId}`,
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
    } catch (error) {
      console.error("Error submitting weights:", error);
    }
  };

  const setUserKnowsWeight = async (user, weightValue, optionValue) => {
    try {
      await customFetch.put(
        `/generate-custom/workout/update-test-weights/${userId}`,
        { knowsWeight: weightValue, hasChosenWeightOption: optionValue },
        {
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
        }
      );

      setUser((prevUser) => ({
        ...prevUser,
        knowsWeight: weightValue,
        hasChosenWeightOption: optionValue,
      }));
      setHasChosenWeightOption(true);
    } catch (error) {
      console.error("Error updating knowsWeight:", error);
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

  const shouldShowForm = userKnowsWeight && !submitted;
  console.log("Should show form: " + shouldShowForm);

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
              .slice(user?.knowsWeight === false || areWeightsPutted ? 1 : 0)
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

  // Check if all weights are filled
  const allWeightsFilled = Object.values(practiceWeights).every(
    (weight) => weight !== null && !isNaN(weight)
  );

  console.log("Knows weight: " + userKnowsWeight);
  console.log("Should show form: " + shouldShowForm);
  console.log("Is submitted: " + submitted);

  return (
    <Wrapper>
      {!user?.hasChosenWeightOption && user?.knowsWeight === false ? (
        <div className="weight-knowledge-check">
          <h3>Do You Know Your Starting Weights?</h3>
          <p className="weight-info-text">
            Knowing your starting weights helps us create a plan tailored to
            your current fitness level. Please enter the weight you can lift for{" "}
            <span className="bolder-text">10 repetitions</span> of each
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
            changed later. If you're unsure about your weights, we recommend
            selecting "No" and going through the guided test week.
          </p>
        </div>
      ) : !user?.hasChosenWeightOption ? (
        renderWeightForm()
      ) : user?.knowsWeight === false && !submitted ? (
        <>
          {isAtWorkoutRoot && renderPracticeWeek()}
          <Outlet />
        </>
      ) : user?.areWeightsPutted ? (
        <div>
          {isAtWorkoutRoot && renderWeeks()}
          <Outlet />
        </div>
      ) : (
        <div></div>
      )}
    </Wrapper>
  );
};

export default WorkoutPage;
