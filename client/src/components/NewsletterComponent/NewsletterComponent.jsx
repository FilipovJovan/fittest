import React from "react";
import "./NewsletterComponent.scss";
import {useNewsletterComponent} from "./NewsletterComponent.logic";
import {animated} from "react-spring";
import {Alert, Button, CardFooter, Col, Container, Form, Row} from "react-bootstrap";
import Wrapper from "../../assets/Wrappers/newsLetter.js";

const NewsletterComponent = (props) => {
    const {
        handleSubscribe,
        handleEmailChange,
        fade,
        hoverAnimation,
        revealAnimation,
        ref,
        setHovered,
        message,
        email,
        error
    } = useNewsletterComponent(props);
    return (
        <Wrapper id="section-newsletter">
            {" "}
            {/* Ensure this ID is present */}
            <animated.div style={revealAnimation} ref={ref}>
                <CardFooter className="text-center text-lg-left mt-4 container">
                    <Container className="p-4">
                        <form onSubmit={handleSubscribe}>
                            <Row className="d-flex justify-content-center">
                                <Col size="auto" className="mb-4 mb-md-0">
                                    <p>
                                        <strong>Sign up and be amongst the first ones!</strong>
                                    </p>
                                </Col>
                                <Col md="5" size="12" className="mb-4 mb-md-0">
                                    <Form.Control
                                        type="email"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={handleEmailChange}
                                        required
                                    />
                                </Col>
                                <Col size="auto" className="mb-4 mb-md-0">
                                    <animated.div style={hoverAnimation}>
                                        <Button
                                            type="submit"
                                            className="button"
                                            onMouseEnter={() => setHovered(true)}
                                            onMouseLeave={() => setHovered(false)}
                                        >
                                            Subscribe
                                        </Button>
                                    </animated.div>
                                </Col>
                            </Row>
                        </form>
                        <animated.div style={fade}>
                            {message && (
                                <Alert variant="success" className="mt-3">
                                    {message}
                                </Alert>
                            )}
                            {error && (
                                <Alert variant="danger" className="mt-3">
                                    {error}
                                </Alert>
                            )}
                        </animated.div>
                    </Container>
                </CardFooter>
            </animated.div>
        </Wrapper>
    );
};

export default NewsletterComponent;
