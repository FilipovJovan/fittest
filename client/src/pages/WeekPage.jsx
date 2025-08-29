import { isToday } from "date-fns";
import React, { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const WeekPage = () => {
  // console.log("reached");

  const { weekId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { workoutId, weekNumber } = state || {};

  const allDays = useMemo(() => {
    if (state?.days) {
      localStorage.setItem("allDays", JSON.stringify(state.days));
      return state.days;
    }

    const stored = localStorage.getItem("allDays");
    return stored ? JSON.parse(stored) : [];
  }, [state]);

  // console.log(workoutId);

  // console.log(weekNumber);

  // Filter days by weekId
  const days = useMemo(() => {
    if (!allDays.length) return [];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const filteredDays = allDays[0]?.weekId
      ? allDays.filter((day) => String(day.weekId) === String(weekId))
      : allDays;

    return filteredDays.map((day) => {
      const dayDate = day.date ? new Date(day.date) : null;
      if (dayDate) dayDate.setHours(0, 0, 0, 0);

      const isToday = dayDate && today.getTime() === dayDate.getTime();
      return { ...day, isToday };
    });
  }, [allDays, weekId]);

  const getDayStatusText = (finishedType) => {
    switch (finishedType) {
      case "completed":
        return "Finished";
      case "started":
        return "Started";
      case "skipped":
        return "Skipped";
      default:
        return "Not Started";
    }
  };

  const handleDayClick = (day, index) => {
    const firstExerciseId = day.workout?.[0]?._id;
    navigate(`day/${index + 1}/exercise/${firstExerciseId}`, {
      state: {
        workoutId,
        day,
        days,
        weekId,
        weekNumber,
        dayNumber: index + 1,
        isToday: day.isToday,
      },
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
              className={`day-card enhanced-day-card ${day.isToday ? "current-day" : ""}`}
              onClick={() => handleDayClick(day, index)}
            >
              {/* Day Name + (current) */}
              <div className="day-name-container">
                <h4 className="day-name">{day.name}</h4>
                {day.isToday && <p className="current-label">(current)</p>}
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
