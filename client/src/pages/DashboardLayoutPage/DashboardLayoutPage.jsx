import React from "react";
import "./DashboardLayoutPage.scss";
import {useDashboardLayoutPage} from "./DashboardLayoutPage.logic";
import {Button, Col, ProgressBar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Wrapper from "../../assets/Wrappers/DashboardLayout.js";
import Spinner from "../../components/Spinner.jsx";

const DashboardLayoutPage = () => {
    const {
        percentage,
        workoutsLeft,
        currentWorkout,
        loading,
        fullWorkoutPlan,
        refreshWorkoutPlan,
        showRefresh,
        authChecked,
        user
    } = useDashboardLayoutPage();

    if (!authChecked) {
        return (
            <>
                <Spinner message="Checking user authentication..."/>
            </>
        );
    }

    if (!user) {
        window.location.reload();
    }

    if (loading || !fullWorkoutPlan) {
        return (
            <>
                <Spinner message="Loading your workout plan..."/>
                {showRefresh && (
                    <div className="mt-3 text-center">
                        <Button variant="secondary" onClick={refreshWorkoutPlan}>
                            Refresh
                        </Button>
                    </div>
                )}
            </>
        );
    }
    return (
        <>
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
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h3>Today's Workout</h3>
            <Row className="image-box">
                <Col className="image-box-col">
                    <Link to="/dashboard/workout">
                        <img
                            src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1673453535.jpg?auto=webp&width=600"
                            alt="Person doing workout"
                            className="images"
                            width="600"
                            height="400"
                            loading="eager"
                            {/* eslint-disable-next-line react/no-unknown-property */}
                            fetchpriority="high"
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
                            alt="Healthy balanced meal plate"
                            className="images"
                            width="600"
                            height="400"
                            loading="lazy"
                        />
                    </Link>
                    <Row className="on-image-text">
                        <Col>Meals</Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default DashboardLayoutPage;
