import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import customFetch from "../utils/customFetch";
import ModalStyles from "../assets/Wrappers/WorkoutFeedbackModel";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

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

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { mindMuscle, soreness, pump } = feedback;

    if (!mindMuscle || !soreness || !pump) {
      toast.warning("Please answer all questions before submitting.");
      return;
    }

    setLoading(true);
    try {
      await customFetch.post(
        "generate-custom/workout/progress",
        {
          questionOne: mindMuscle,
          questionTwo: soreness,
          questionThree: pump,
          workoutId,
          currentDayId,
        },
        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      );

      toast.success("Feedback submitted! Great job 💪");
      handleClose();
    } catch (err) {
      console.error("Error submitting feedback:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ModalStyles />
      <Modal
        show={show}
        onHide={() => {}}
        centered
        backdrop="static"
        dialogClassName="custom-modal"
        keyboard={false}
      >
        <Modal.Header closeButton={!loading}>
          <Modal.Title>Congratulations! 🎯</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-container">
          {loading ? (
            <Spinner
              message="Submitting your feedback..."
              icon="💪"
              className="feedback-spinner"
            />
          ) : (
            <>
              <p>You have completed your workout.</p>
              <p>Help us adjust the next workout:</p>

              <Form>
                <Form.Group>
                  <Form.Label>
                    How good was the mind-muscle connection?
                  </Form.Label>
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
                  <Form.Label>How sore were the muscles?</Form.Label>
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
            </>
          )}
        </Modal.Body>

        {!loading && (
          <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};

export default WorkoutFeedbackModal;
