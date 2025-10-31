import React from "react";
import "./WorkoutWeekCardComponent.scss";
import {useWorkoutWeekCardComponent} from "./WorkoutWeekCardComponent.logic";
import {Col, Row} from "react-bootstrap";

const WorkoutWeekCardComponent = ({
                                      week,
                                      weekNumber,
                                      days = [],
                                      workoutId,
                                      status,
                                      onClick,
                                  }) => {
    const {
        handleClick,
        progressPercentage,
        hideWeeks,
        completedDays,
        totalDays,
        currentDay
    } = useWorkoutWeekCardComponent();
    return (
        <div
            className={`workout-week-card week-${weekNumber} ${
                hideWeeks ? "hidden" : ""
            }`}
            onClick={onClick || handleClick}
        >
            <h3>{`Week ${weekNumber}`}</h3>

            <Row className="align-items-center">
                <Col xs="auto">
                    <p className={`status-pill ${status}`}>
                        {status === "finished"
                            ? "Finished"
                            : status === "current"
                                ? "Current"
                                : "Not Started"}
                    </p>
                </Col>
                <Col xs="auto">
                    <div className={`circle ${status}`}></div>
                </Col>
            </Row>

            <div className="days-completed">
                {`${completedDays}/${totalDays} Days Completed`}
            </div>

            {/* Progress Bar */}
            <div className="progress-bar-week">
                <div
                    className="progress-fill-week"
                    style={{
                        width: `${progressPercentage}%`,
                    }}
                ></div>
            </div>

            {currentDay ? (
                <div className="current-day-badge">
                    <strong>Current Day:</strong> {currentDay.name}
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default WorkoutWeekCardComponent;
