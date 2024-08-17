import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { Container, Button, Row, Col } from "react-bootstrap";
import Wrapper from "../assets/Wrappers/Verification";

const VerificationPage = () => {
  const props = useSpring({
    from: { opacity: 0, transform: "translateY(100px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 220, friction: 120 },
  });

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default VerificationPage;
