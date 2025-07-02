import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import customFetch from "../utils/customFetch";
import ModalStyles from "../assets/Wrappers/WorkoutFeedbackModel";

const WorkoutFeedbackModal = ({
  show,
  handleClose,
  workoutId,
  currentDayId,
}) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [feedback, setFeedback] = useState({
    mindMuscle: "",
    soreness: "",
    pump: "",
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await customFetch.post(
        "generate-custom/workout/progress",
        {
          questionOne: feedback.mindMuscle,
          questionTwo: feedback.soreness,
          questionThree: feedback.pump,
          workoutId,
          currentDayId,
        },

        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      );
      console.log("success");
      handleClose();
    } catch (err) {
      console.error("Error submitting feedback:", err);
    }
  };

  return (
    <>
      <ModalStyles />
      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Congratulations! 🎯</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-container">
          <p>You have completed your workout.</p>
          <p>Help us adjust the next workout:</p>

          <Form>
            <Form.Group>
              <Form.Label>How good was the mind-muscle connection?</Form.Label>
              <div className="d-flex justify-content-between">
                <Form.Check
                  type="radio"
                  label="No connection"
                  name="mindMuscle"
                  value="no connection"
                  onChange={handleChange}
                />
                <Form.Check
                  type="radio"
                  label="Some connection"
                  name="mindMuscle"
                  value="some connection"
                  onChange={handleChange}
                />
                <Form.Check
                  type="radio"
                  label="High connection"
                  name="mindMuscle"
                  value="high connection"
                  onChange={handleChange}
                />
              </div>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>How sore the muscles were?</Form.Label>
              <div className="d-flex justify-content-between">
                <Form.Check
                  type="radio"
                  label="No soreness"
                  name="soreness"
                  value="no soreness"
                  onChange={handleChange}
                />
                <Form.Check
                  type="radio"
                  label="Some soreness"
                  name="soreness"
                  value="some soreness"
                  onChange={handleChange}
                />
                <Form.Check
                  type="radio"
                  label="High soreness"
                  name="soreness"
                  value="high soreness"
                  onChange={handleChange}
                />
              </div>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>How was the muscle pump?</Form.Label>
              <div className="d-flex justify-content-between">
                <Form.Check
                  type="radio"
                  label="No pump"
                  name="pump"
                  value="no muscle pump"
                  onChange={handleChange}
                />
                <Form.Check
                  type="radio"
                  label="Some pump"
                  name="pump"
                  value="some muscle pump"
                  onChange={handleChange}
                />
                <Form.Check
                  type="radio"
                  label="Huge pump"
                  name="pump"
                  value="high muscle pump"
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WorkoutFeedbackModal;
