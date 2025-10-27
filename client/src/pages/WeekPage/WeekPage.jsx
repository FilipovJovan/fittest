// eslint-disable-next-line no-unused-vars
import React from "react";
import "./WeekPage.scss";
import {useWeekPage} from "./WeekPage.logic";

const WeekPage = () => {
    const {days, handleBackToWeeks, handleDayClick, getDayStatusText} = useWeekPage();
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
