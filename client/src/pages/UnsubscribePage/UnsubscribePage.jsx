import React from "react";
import "./UnsubscribePage.scss";
import {useUnsubscribePage} from "./UnsubscribePage.logic";
import {Col, Container, Row} from "react-bootstrap";

const UnsubscribePage = (props) => {
    const logic = useUnsubscribePage(props);
    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row className="text-center">
                <Col>
                    <h1>Unsubscribed.</h1>
                    <p>You have successfully unsubscribed from our newsletter.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default UnsubscribePage;
