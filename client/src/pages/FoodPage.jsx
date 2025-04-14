import React from "react";
//import food from "../utils/FoodData";
import FoodItems from "../components/FoodItems";
import Wrapper from "../assets/Wrappers/FoodItems";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MealContainer from "../components/MealContainer";

function createEntry(foodItem) {
  return (
    <FoodItems
      key={foodItem.id}
      img={foodItem.imgUrl}
      name={foodItem.name}
      ingredients={foodItem.ingredients}
    />
  );
}

const FoodPage = () => {
  return (
    <Wrapper>
      <h2>Your Diet</h2>
      <Row>
        <Col>
          <div className="macros-box">
            <h3>Macros</h3>
            <Row className="macros-circles">
              <Col className="circle protein">{211}g Proteins</Col>
              <Col className="circle carbs">{381}g Carbs</Col>
              <Col className="circle fats">{113}g Fats</Col>
            </Row>
            <h4>Calories: {3382}</h4>
          </div>
        </Col>
        <Col>
          <Row className="choice-buttons">
            <div className="choice-buttons-div one">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
              </button>
              <p>Breakfast</p>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </button>
            </div>
            <div className="choice-buttons-div two">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
              </button>
              <p>Weight Gain</p>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </button>
            </div>
            {/*<button className="search-button">Search Meals</button>*/}
          </Row>
          <Row>
            <div></div>
          </Row>
        </Col>
      </Row>
      <MealContainer />
    </Wrapper>
  );
  return <Wrapper className="food-card">{food.map(createEntry)}</Wrapper>;
};

export default FoodPage;
