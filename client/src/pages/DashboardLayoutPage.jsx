import React from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";
import Wrapper from "../assets/Wrappers/DashboardLayout";
import { Link } from "react-router-dom";
import { useWorkout } from "../../context/WorkoutContext";

const DashboardLayoutPage = () => {
  const { currentWorkout, fullWorkoutPlan } = useWorkout();

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
