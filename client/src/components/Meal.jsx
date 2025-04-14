import React from "react";
import Wrapper from "../assets/Wrappers/Meal";
import { Col, Row } from "react-bootstrap";

const Meal = () => {
  return (
    <Wrapper>
      <div className="meal-card">
        <h3>
          Greek Yogurt With Berries And Honey{" "}
          <span className="calories">(760 cal)</span>
        </h3>
        <p className="meal-type">Breakfast</p>
        <div className="macros">
          <div className="macro-item protein">
            <p>23g</p>
            <span>P</span>
          </div>
          <div className="macro-item carbs">
            <p>23g</p>
            <span>C</span>
          </div>
          <div className="macro-item fats">
            <p>23g</p>
            <span>F</span>
          </div>
        </div>
        <Row className="bottom-card align-items-center">
          <Col>
            <p className="goal">Muscle gain</p>
          </Col>
          <Col>
            <button className="see-more">See More</button>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default Meal;
