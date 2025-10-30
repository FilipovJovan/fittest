import React from "react";
import "./DayPage.scss";
import {useDayPage} from "./DayPage.logic";
import ExerciseItem from "../../components/ExerciseItem.jsx";
import WorkoutFeedbackModal from "../../components/WorkoutFeedbackModel.jsx";
import {Modal} from "react-bootstrap";

const DayPage = () => {

    const {
        handleBackNavigation,
        isRestDay,
        dayNumber,
        currentExercise,
        isLast,
        workoutId,
        weekNumber,
        weekId,
        day,
        days,
        isFirst,
        handleBackExercise,
        handleNext,
        handleFinish,
        handleModalClose,
        showModal,
        showStartModal,
        handleStartWorkout,
        navigate,
        showResumeModal,
        setShowResumeModal,
        handleResumingWorkout,
        showExitModal,
        handleExitCancel,
        handleExitConfirm
    } = useDayPage();

    // console.log("Day: " + day + " Week id: " + weekId);
    if (!day || !weekId) return <p>Data missing</p>;
    return (
        <>
            <button onClick={handleBackNavigation} className="go-back-button">
                ← Back to Days
            </button>

            <div className="day-page">
                {/* If it's a rest day, display a message */}
                {isRestDay ? (
                    <div className="rest-day-container">
                        <h2>Rest Day</h2>
                        <p>Take some time to recover and relax. You’ve earned it!</p>
                        <button onClick={handleFinish} className="btn btn-success mt-4">
                            Mark Rest Day as Finished ✅
                        </button>
                    </div>
                ) : (
                    <>
                        <ExerciseItem
                            dayNumber={dayNumber}
                            exercise={currentExercise.exercise}
                            sets={Array.from({length: currentExercise.sets}, () => ({
                                reps: currentExercise.reps,
                                rest: currentExercise.rest,
                                weight: currentExercise.weight,
                            }))}
                            isLast={isLast}
                            workoutId={workoutId}
                            weekNumber={weekNumber}
                            day={day}
                            weekId={weekId}
                        />
                        <div className="exercise-navigation mt-4 flex gap-4">
                            {!isFirst && (
                                <button
                                    onClick={handleBackExercise}
                                    className="btn btn-secondary back-button"
                                >
                                    ← Back Exercise
                                </button>
                            )}
                            {!isLast ? (
                                <button onClick={handleNext} className="btn btn-primary">
                                    Next Exercise →
                                </button>
                            ) : (
                                <button onClick={handleFinish} className="btn btn-success">
                                    Finish Workout ✅
                                </button>
                            )}
                        </div>
                    </>
                )}
            </div>

            {showModal && !isRestDay && (
                <WorkoutFeedbackModal
                    show={showModal}
                    handleClose={handleModalClose}
                    workoutId={workoutId}
                    currentDayId={day._id}
                />
            )}

            {showStartModal && !(day.finishedType === "started") && !isRestDay && (
                <Modal show={showStartModal} centered>
                    <Modal.Header>
                        <Modal.Title>Start Workout</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you ready to start today’s workout?</p>
                        <div className="button-row">
                            <button onClick={handleStartWorkout} className="btn btn-primary">
                                Start
                            </button>
                            <button
                                onClick={() => navigate(-1)}
                                className="btn btn-secondary"
                            >
                                Cancel
                            </button>
                        </div>
                    </Modal.Body>
                </Modal>
            )}

            {day.finishedType === "started" && !isRestDay && (
                <Modal
                    show={showResumeModal}
                    onHide={() => setShowResumeModal(false)}
                    centered
                >
                    <Modal.Header>
                        <Modal.Title>Continue with your workout</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Do you want to continue with your workout?</p>
                        <div className="button-row">
                            <button
                                onClick={() => {
                                    handleResumingWorkout();
                                    setShowResumeModal(false);
                                }}
                                className="btn btn-primary"
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => {
                                    navigate(
                                        `/dashboard/workout/week/${weekId}/day/${dayNumber}/exercise/${day.workout[0]._id}`,
                                        {
                                            state: {
                                                workoutId,
                                                day,
                                                days,
                                                weekId,
                                                weekNumber,
                                                dayNumber,
                                            },
                                        }
                                    );
                                    setShowResumeModal(false);
                                }}
                                className="btn btn-secondary"
                            >
                                No
                            </button>
                        </div>
                    </Modal.Body>
                </Modal>
            )}

            {showExitModal && (
                <Modal show={showExitModal} centered>
                    <Modal.Header>
                        <Modal.Title>Workout Paused</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Are you sure you want to quit the workout?</p>
                        <div className="button-row">
                            <button onClick={handleExitConfirm} className="btn btn-primary">
                                Yes
                            </button>
                            <button onClick={handleExitCancel} className="btn btn-secondary">
                                No
                            </button>
                        </div>
                    </Modal.Body>
                </Modal>
            )}

            {isRestDay && (day.finishedType !== "completed") && (
                <Modal show={showExitModal} centered>
                    <Modal.Header>
                        <Modal.Title>Rest Day Not Confirmed</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{day.finishedType}</p>
                        <p>Do you want to leave without marking today as your rest day?
                            Confirming helps us track your progress accurately.</p>
                        <div className="button-row">
                            <button onClick={handleFinish} className="btn btn-primary">
                                Confirm rest day
                            </button>
                            <button onClick={() => navigate(-1)} className="btn btn-secondary">
                                Leave without confirming
                            </button>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </>
    );
};

export default DayPage;
