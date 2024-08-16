import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { Container, Row, Col } from "react-bootstrap";

const VerificationSuccess = () => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="text-center">
        <Col>
          <animated.div style={animationProps}>
            <div style={{ height: "200px", width: "200px", margin: "0 auto" }}>
              <svg
                width="60%"
                height="60%"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM19.5354 34.4646L8.63604 23.5653L12.1213 20.08L19.5354 27.4941L35.8787 11.1507L39.364 14.636L19.5354 34.4646Z"
                  fill="#4CAF50"
                />
              </svg>
            </div>
            <h1>Email Verified!</h1>
            <p>
              Thank you for verifying your email. Your subscription to our
              newsletter is now active.
            </p>
          </animated.div>
        </Col>
      </Row>
    </Container>
  );
};

export default VerificationSuccess;
