import React from "react";
import "./ChallengeComponent.scss";
import {Button, Modal, ProgressBar} from "react-bootstrap";
import {useChallengeComponent} from "./ChallengeComponent.logic";

const ChallengeComponent = ({
                                _id,
                                name,
                                type,
                                metric,
                                target,
                                startDate,
                                endDate,
                                reward,
                                enrolled,
                                completed,
                                progress,
                            }) => {
    const {
        showModal,
        setShowModal,
        formatDate,
        currentProgress,
        challengeProgress,
        handleEnrollClick,
        confirmEnroll,
    } = useChallengeComponent(_id, target, progress);

    return (
        <>
            <div
                className={`challenge-card ${
                    completed ? "completed" : enrolled ? "enrolled" : "not-enrolled"
                }`}
            >
                <div className="challenge-icon">{completed ? "🏆" : "⚔️"}</div>

                <h3 className="challenge-name">{name}</h3>
                <p className="challenge-type">
                    {/* eslint-disable-next-line react/prop-types */}
                    {type.charAt(0).toUpperCase() + type.slice(1)} Challenge
                </p>

                <p className="challenge-goal">
                    Goal: <strong>{target}</strong> {metric}
                </p>
                <p className="challenge-dates">
                    {formatDate(startDate)} – {formatDate(endDate)}
                </p>

                <div className="challenge-reward">
                    {reward?.xp && <span>⭐ {reward.xp} XP</span>}
                    {reward?.currency && <span>💰 {reward.currency}</span>}
                </div>

                {completed ? (
                    <div className="completed-badge">🎉 Challenge Completed!</div>
                ) : enrolled ? (
                    <ProgressBar
                        now={challengeProgress}
                        label={`${currentProgress}/${target}`}
                        className="progress-bar-custom"
                        animated
                    />
                ) : (
                    <button className="primary-button" onClick={handleEnrollClick}>
                        Enroll
                    </button>
                )}

                <p
                    className={`challenge-status ${
                        completed
                            ? "status-completed"
                            : enrolled
                                ? "status-enrolled"
                                : "status-not-enrolled"
                    }`}
                >
                    {completed
                        ? "Completed 🏆"
                        : enrolled
                            ? "Enrolled ✅"
                            : "Not Enrolled 🔒"}
                </p>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Enrollment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Do you want to enroll in <strong>{name}</strong>? <br/>
                        Goal: {target} {metric}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={confirmEnroll}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ChallengeComponent;
