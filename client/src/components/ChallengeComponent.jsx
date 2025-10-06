import React, { useState } from "react";
import Wrapper from "../assets/Wrappers/ChallengeComponentWrapper";
import { ProgressBar, Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { useAuth } from "../../context/AuthContext";

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
  const [showModal, setShowModal] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;
  const { user } = useAuth();

  console.log(completed);

  const formatDate = (date) =>
    date ? new Date(date).toLocaleDateString() : "N/A";

  const currentProgress = progress || 0;
  const challengeProgress =
    target > 0 ? Math.min((currentProgress / target) * 100, 100) : 0;

  const handleEnrollClick = () => {
    setShowModal(true);
  };

  const confirmEnroll = async () => {
    try {
      await customFetch.post(
        `/gamification/challenge/enroll`,
        { challengeId: _id, userId: user._id },
        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      );
      toast.success("You have enrolled in the challenge! ⚔️");
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        error?.response?.data?.message || "Cannot enroll in the challenge!"
      );
    } finally {
      setShowModal(false);
    }
  };

  return (
    <Wrapper>
      <div
        className={`challenge-card ${
          completed ? "completed" : enrolled ? "enrolled" : "not-enrolled"
        }`}
      >
        <div className="challenge-icon">{completed ? "🏆" : "⚔️"}</div>

        <h3 className="challenge-name">{name}</h3>
        <p className="challenge-type">
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
            Do you want to enroll in <strong>{name}</strong>? <br />
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
    </Wrapper>
  );
};

export default ChallengeComponent;
