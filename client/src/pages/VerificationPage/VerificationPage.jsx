import React from "react";
import "./VerificationPage.scss";
import {useVerificationPage} from "./VerificationPage.logic";
import {Button, Col, Container, Row} from "react-bootstrap";
import {animated} from "@react-spring/web";

const VerificationPage = () => {
    const {props} = useVerificationPage();
    return (
        <>
            <animated.div style={props}>
                <Container className="text-center mt-5">
                    <Row className="justify-content-center">
                        <Col md="8">
                            <h1 className="mb-4">Email Verified!</h1>
                            <p className="lead">
                                Thank you for verifying your email. You are now subscribed to
                                our newsletter!
                            </p>
                            <Button variant="primary" href="/">
                                Go to Homepage
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </animated.div>
        </>
    );
};

export default VerificationPage;
