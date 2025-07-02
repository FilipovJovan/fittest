import React, { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const WeekPage = () => {
  console.log("reached");

  const { weekId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  // Get workoutId from state or localStorage
  const workoutId = state?.workoutId || localStorage.getItem("workoutId");
  console.log(workoutId);

  // Retrieve days from state or localStorage
  const allDays = useMemo(() => {
    if (state?.days) {
      localStorage.setItem("allDays", JSON.stringify(state.days));
      return state.days;
    }

    const stored = localStorage.getItem("allDays");
    return stored ? JSON.parse(stored) : [];
  }, [state]);

  // Filter days by weekId
  const days = useMemo(() => {
    if (!allDays.length) return [];

    if (allDays[0]?.weekId) {
      return allDays.filter((day) => String(day.weekId) === String(weekId));
    }

    return allDays;
  }, [allDays, weekId]);

  const getDayStatusText = (finishedType) => {
    switch (finishedType) {
      case "completed":
        return "Finished";
      case "skipped":
        return "Skipped";
      default:
        return "Not Started";
    }
  };

  const handleDayClick = (day, index) => {
    navigate(`day/${index + 1}`, {
      state: { workoutId, day, days, weekId },
    });
  };

  const handleBackToWeeks = () => {
    navigate("/dashboard/workout");
  };

  if (!days.length) {
    return (
      <div className="week-page">
        <button onClick={handleBackToWeeks} className="go-back-button">
          ← Back to Weeks
        </button>
        <p>No days found for this week.</p>
      </div>
    );
  }

  return (
    <>
      <button onClick={handleBackToWeeks} className="go-back-button">
        ← Back to Weeks
      </button>
      <div className="week-page">
        {days.map((day, index) => {
          const statusClass = `status-text ${day.finishedType || ""}`;

          const today = new Date();
          today.setHours(0, 0, 0, 0);

          const dayDate = day.date ? new Date(day.date) : null;
          if (dayDate) dayDate.setHours(0, 0, 0, 0);

          const isToday = dayDate && today.getTime() === dayDate.getTime();

          return (
            <div
              key={index}
              className={`day-card enhanced-day-card ${
                isToday ? "current-day" : ""
              }`}
              onClick={() => handleDayClick(day, index)}
            >
              {/* Day Name + (current) */}
              <div className="day-name-container">
                <h4 className="day-name">{day.name}</h4>
                {isToday && <p className="current-label">(current)</p>}
              </div>

              {/* Status and Circle */}
              <div className="status-container">
                <p className={statusClass}>
                  {getDayStatusText(day.finishedType)}
                </p>
                <div className={`circle ${day.finishedType}`}></div>
              </div>

              {/* Day Date */}
              {day.date && (
                <p className="day-date">
                  {new Date(day.date).toLocaleDateString()}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WeekPage;
