import React from "react";
import { Row, Col } from "react-bootstrap";
import Wrapper from "../assets/Wrappers/DashboardLayout";
import { Link } from "react-router-dom";

const DashboardLayoutPage = () => {
  return (
    <Wrapper>
      <Row className="progress-box">
        <Col className="progress-box-col">
          <h6>Workout Plan Progress</h6>
          <p>{30} Workouts Left</p>
        </Col>
        <Col className="progress-box-col">
          <p className="percentage">{0}%</p>
        </Col>
      </Row>
      <h3>Today's Workout</h3>
      <Row className="image-box">
        <Col className="image-box-col">
          <Link to="/dashboard/workout">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1673453535.jpg"
              alt="Workout Photo"
              className="images"
            />
          </Link>
          <Row className="on-image-text">
            <Col>{"Pull Day"}</Col>
            <Col>{8} Exercises</Col>
          </Row>
        </Col>
        <Col>
          <Link to="/dashboard/diet">
            <img
              src="https://www.takingcharge.csh.umn.edu/sites/default/files/styles/max_1300x1300/public/healthy%20eating%20plate%20iStock-1433432507.jpg.webp?itok=D8OzVh7u"
              alt="Healthy Food Photo"
              className="images"
            />
          </Link>
          <Row className="on-image-text">
            <Col>Meals</Col>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default DashboardLayoutPage;
