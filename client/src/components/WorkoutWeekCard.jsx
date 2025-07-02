import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const WorkoutWeekCard = ({
  week,
  weekNumber,
  days = [],
  workoutId,
  status,
  onClick,
}) => {
  const navigate = useNavigate();
  const [hideWeeks, setHideWeeks] = useState(false);

  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  const currentDay = useMemo(() => {
    return days.find((day) => {
      if (!day.date) return false;
      const dayDate = new Date(day.date);
      dayDate.setHours(0, 0, 0, 0);
      return dayDate.getTime() === today.getTime();
    });
  }, [days, today]);

  const completedDays = days.filter(
    (d) => d.finishedType === "completed"
  ).length;
  const totalDays = days.length;

  const handleClick = () => {
    localStorage.setItem("allDays", JSON.stringify(days));
    localStorage.setItem("workoutId", workoutId);
    navigate(`week/${week._id}`, {
      state: { days, workoutId, currentDay },
    });
  };

  // Calculate progress percentage
  const progressPercentage =
    totalDays > 0 ? (completedDays / totalDays) * 100 : 0;

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

export default WorkoutWeekCard;
