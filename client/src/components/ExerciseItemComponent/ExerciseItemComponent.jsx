import React from "react";
import "./ExerciseItemComponent.scss";
import {useExerciseItemComponent} from "./ExerciseItemComponent.logic";
import {Col, Modal, Row} from "react-bootstrap";
import Wrapper from "../../assets/Wrappers/Workout.js";

const ExerciseItemComponent = ({
                                   dayIndex,
                                   exercise,
                                   sets,
                                   isLast,
                                   workoutId,
                                   weekId,
                                   day,
                                   weekNumber,
                                   dayNumber,
                               }
) => {
    const {
        handleChange,
        progress,
        circleProgress,
        formatTime,
        handleSetDone,
        showChangeExerciseForm,
        handleClose,
        completedSets,
        setShowInstructions,
        showInstructions,
        handleStartStop,
        timeLeft
    } = useExerciseItemComponent();
    return (
        <>
            <div className="exercise-item">
                <Row className="exercise-header align-items-center mb-5">
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <h3 className="text-xl font-bold">{exercise.name}</h3>
                    </Col>
                    <Col
                        lg={6}
                        md={6}
                        sm={6}
                        xs={6}
                        className="d-flex justify-content-end"
                    >
                        <button
                            onClick={() =>
                                handleChange({
                                    workoutId,
                                    exerciseId: exercise._id,
                                    newExerciseId,
                                    week: weekNumber + 1,
                                    day: dayIndex + 1,
                                    sets: sets.length,
                                    reps: sets[0].reps,
                                    rest: sets[0].rest,
                                    exerciseType: exercise.type,
                                })
                            }
                        >
                            <p>Change Exercise</p>
                        </button>
                        {/* <Modal show={showChangeExerciseForm} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>Change exercise</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {loading ? (
                  <Spinner
                    message="Changing your exercise..."
                    icon="💪"
                    className="feedback-spinner"
                  />
                ) : (
                  <>
                    <h6>Select a replacement exercise:</h6>
                    <select
                      className="form-select mb-3"
                      onChange={(e) => setSelectedExerciseId(e.target.value)}
                      value={selectedExerciseId || ""}
                    >
                      <option value="" className="option">
                        Select Exercise
                      </option>
                      {availableExercises.map((ex) => (
                        <option key={ex._id} value={ex._id}>
                          {ex.name}
                        </option>
                      ))}
                    </select>
                    <h6>Apply the change to the whole workout plan?</h6>
                    <Row>
                      <Col>
                        <Button onClick={() => setApplyToWholePlan(true)}>
                          Yes
                        </Button>
                      </Col>
                      <Col>
                        <Button onClick={() => setApplyToWholePlan(false)}>
                          No
                        </Button>
                      </Col>
                    </Row>
                  </>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="success"
                  onClick={confirmExerciseChange}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Confirm"}
                </Button>
              </Modal.Footer>
            </Modal> */}
                        <Modal show={showChangeExerciseForm} onHide={handleClose} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Change Exercise</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h6>This feature is coming soon!</h6>
                                <p>
                                    The ability to swap exercises will let you personalize your
                                    workouts even more. You’ll be able to choose alternatives that
                                    fit your preferences, equipment, or injury needs.
                                </p>
                                <p className="text-muted">
                                    Want this feature sooner? Let us know — your feedback helps
                                    shape what's next.
                                </p>
                            </Modal.Body>
                        </Modal>
                    </Col>
                </Row>

                {/* <h5>Exercise no. {dayIndex}</h5> */}

                {exercise.image && (
                    <img
                        src={exercise.image}
                        alt={exercise.name}
                        className="rounded mb-3"
                    />
                )}

                <table className="w-full mb-4 text-center">
                    <thead>
                    <tr>
                        <th>Weight</th>
                        <th>Reps</th>
                        <th>Rest</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {sets.map((set, index) => (
                        <tr key={index}>
                            <td>{set.weight} kg</td>
                            <td>{set.reps} reps</td>
                            <td>{set.rest} min</td>
                            <td className="td-button">
                                <button
                                    className={`table-button px-3 py-1 ${
                                        completedSets.includes(index)
                                            ? "bg-gray-300"
                                            : "bg-blue-500 text-white"
                                    }`}
                                    onClick={() => handleSetDone(index)}
                                    disabled={completedSets.includes(index)}
                                >
                                    {completedSets.includes(index) ? "Done" : "Set done"}
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <div className="progress-bar">
                    <div className="progress-fill" style={{width: `${progress}%`}}/>
                </div>

                <Row className="row-timer-instruction">
                    <Col lg={6} md={6} sm={6}>
                        <button
                            className="border border-blue-500 text-blue-500 px-4 py-2 rounded m-auto"
                            onClick={() => setShowInstructions(!showInstructions)}
                        >
                            Instructions
                        </button>
                        {showInstructions && (
                            <div className="instruction-text-container">
                                {exercise.instructions || "No instructions provided."}
                            </div>
                        )}
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <div className="relative flex justify-center items-center">
                            <button className="clock-button" onClick={handleStartStop}>
                                <svg
                                    className="w-5 h-5"
                                    viewBox="0 0 120 120"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50px"
                                >
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r="55"
                                        stroke="gray"
                                        strokeWidth="8"
                                        fill="none"
                                        strokeDasharray="346"
                                        strokeDashoffset={346 - (346 * circleProgress) / 100}
                                        style={{
                                            transition: "stroke-dashoffset 1s linear",
                                        }}
                                    />
                                    <text
                                        x="50%"
                                        y="50%"
                                        textAnchor="middle"
                                        dy="0.3em"
                                        fontSize="32"
                                        fontWeight="bold"
                                        fill="black"
                                    >
                                        {formatTime(timeLeft)}
                                    </text>
                                </svg>
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default ExerciseItemComponent;
