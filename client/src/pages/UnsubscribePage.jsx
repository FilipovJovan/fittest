import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Wrapper from "../assets/Wrappers/Unsubscribe";
const UnsubscribePage = () => {
  return (
    <Wrapper>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="text-center">
          <Col>
            <h1>Unsubscribed.</h1>
            <p>You have successfully unsubscribed from our newsletter.</p>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default UnsubscribePage;
