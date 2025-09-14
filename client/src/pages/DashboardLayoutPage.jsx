import React, { useState, useEffect } from "react";
import { Row, Col, ProgressBar, Button } from "react-bootstrap";
import Wrapper from "../assets/Wrappers/DashboardLayout";
import { Link } from "react-router-dom";
import { useWorkout } from "../../context/WorkoutContext";
import { useAuth } from "../../context/AuthContext";
import Spinner from "../components/Spinner";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

const DashboardLayoutPage = () => {
  const { user, authChecked } = useAuth();
  const { currentWorkout, fullWorkoutPlan, loading, refreshWorkoutPlan } =
    useWorkout();
  const [showRefresh, setShowRefresh] = useState(false);

  useEffect(() => {
    if (!user?._id) return;

    const today = new Date().toDateString();
    const lastLogin = localStorage.getItem("lastDailyLogin");

    if (lastLogin === today) return;

    const sendDailyLogin = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const { data } = await customFetch.post(
          `/gamification/daily-login/${user._id}`,
          {},
          {
            headers: {
              "x-api-key": apiKey,
              "Content-Type": "application/json",
            },
          }
        );

        if (data.message === "Daily login rewarded") {
          toast.success("You earned 10xp! 🔥");
          localStorage.setItem("lastDailyLogin", today);
        } else {
          toast.info(data.message);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message || "Daily login failed!");
      }
    };

    sendDailyLogin();
  }, [user]);

  useEffect(() => {
    if (!loading) {
      setShowRefresh(false);
      return;
    }
    const timer = setTimeout(() => setShowRefresh(true), 3000);
    return () => clearTimeout(timer);
  }, [loading]);

  if (!authChecked) {
    return (
      <Wrapper>
        <Spinner message="Checking user authentication..." />
      </Wrapper>
    );
  }

  if (!user) {
    window.location.reload();
  }

  if (loading || !fullWorkoutPlan) {
    return (
      <Wrapper>
        <Spinner message="Loading your workout plan..." />
        {showRefresh && (
          <div className="mt-3 text-center">
            <Button variant="secondary" onClick={refreshWorkoutPlan}>
              Refresh
            </Button>
          </div>
        )}
      </Wrapper>
    );
  }

  const calculateProgress = () => {
    if (!fullWorkoutPlan?.workoutProgram?.[0]?.weeks) {
      return {
        totalWorkouts: 0,
        completedWorkouts: 0,
        workoutsLeft: 0,
        percentage: 0,
      };
    }

    const days = fullWorkoutPlan.workoutProgram[0].weeks.flatMap(
      (week) => week.days
    );

    const totalWorkouts = days.filter((day) => day.type === "workout").length;
    const completedWorkouts = days.filter(
      (day) =>
        day.type === "workout" &&
        day.isFinished &&
        day.finishedType === "completed"
    ).length;
    const workoutsLeft = totalWorkouts - completedWorkouts;
    const percentage = totalWorkouts
      ? Math.round((completedWorkouts / totalWorkouts) * 100)
      : 0;

    return { totalWorkouts, completedWorkouts, workoutsLeft, percentage };
  };

  const { workoutsLeft, percentage } = calculateProgress();

  return (
    <Wrapper>
      <Row className="progress-box mb-4">
        <Col xs={12} sm={8} className="progress-box-col">
          <h6 className="progress-title">Workout Plan Progress</h6>
          <ProgressBar
            now={percentage}
            label={`${percentage}%`}
            className="progress-bar-custom"
            animated
          />
          <p className="mt-2">{workoutsLeft} Workouts Left</p>
        </Col>
      </Row>
      <h3>Today's Workout</h3>
      <Row className="image-box">
        <Col className="image-box-col">
          <Link to="/dashboard/workout">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1673453535.jpg"
              alt="Workout Photo"
              className="images"
            />
          </Link>
          {currentWorkout ? (
            <Row className="on-image-text">
              <Col>{currentWorkout.name}</Col>
              <Col>{currentWorkout.workout.length} Exercises</Col>
            </Row>
          ) : (
            <Row className="on-image-text">
              <Col className="text-center">No workout scheduled for today</Col>
            </Row>
          )}
        </Col>
        <Col>
          <Link to="/dashboard/diet/macros">
            <img
              src="https://www.takingcharge.csh.umn.edu/sites/default/files/styles/max_1300x1300/public/healthy%20eating%20plate%20iStock-1433432507.jpg.webp?itok=D8OzVh7u"
              alt="Healthy Food Photo"
              className="images"
            />
          </Link>
          <Row className="on-image-text">
            <Col>Meals</Col>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default DashboardLayoutPage;
