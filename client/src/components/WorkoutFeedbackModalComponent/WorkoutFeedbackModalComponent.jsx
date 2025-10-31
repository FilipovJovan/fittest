import React from "react";
import "./WorkoutFeedbackModalComponent.scss";
import {useWorkoutFeedbackModalComponent} from "./WorkoutFeedbackModalComponent.logic";
import ModalStyles from "../../assets/Wrappers/WorkoutFeedbackModel.js";
import {Button, Form, Modal} from "react-bootstrap";
import Spinner from "../Spinner.jsx";

const WorkoutFeedbackModalComponent = ({
                                           show
                                       }) => {
    const {loading, handleChange, handleSubmit} = useWorkoutFeedbackModalComponent();
    return (
        <>
            <ModalStyles/>
            <Modal
                show={show}
                onHide={() => {
                }}
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

export default WorkoutFeedbackModalComponent;
