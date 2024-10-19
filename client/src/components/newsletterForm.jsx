import React, { useState } from "react";
import {
  Container,
  Button,
  CardFooter,
  Row,
  Col,
  Form,
  Alert,
} from "react-bootstrap";
import axios from "axios";
import Wrapper from "../assets/Wrappers/newsLetter";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [hovered, setHovered] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const fade = useSpring({
    opacity: message || error ? 1 : 0,
    transform: message || error ? "translateY(0)" : "translateY(10px)",
    config: { tension: 170, friction: 26 },
  });

  const hoverAnimation = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",
    config: { tension: 300, friction: 10 },
  });

  // Apply reveal animation to the whole container
  const revealAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { tension: 170, friction: 20 },
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      const response = await axios.post("/signup", { email });
      setMessage(response.data);
      setEmail("");
    } catch (err) {
      console.error("Error response:", err.response);
      setError(
        err.response && err.response.data
          ? err.response.data
          : "An error occurred"
      );
    }
  };

  return (
    <Wrapper>
      {/* Animated container */}
      <animated.div style={revealAnimation} ref={ref}>
        <CardFooter className="text-center text-lg-left mt-4 container">
          <Container className="p-4">
            <form onSubmit={handleSubscribe}>
              <Row className="d-flex justify-content-center">
                <Col size="auto" className="mb-4 mb-md-0">
                  <p>
                    <strong>Sign up to claim your discount!</strong>
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

export default Newsletter;
