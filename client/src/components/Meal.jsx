import React, { useState } from "react";
import Wrapper from "../assets/Wrappers/Meal";
import { Col, Row, Modal, Button } from "react-bootstrap";

const Meal = ({
  _id,
  name,
  categoryMeal,
  category,
  calories,
  protein,
  carbs,
  fats,
  ingredients,
  recipe,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Convert comma-separated ingredients string to array
  const ingredientsList =
    ingredients?.split(",").map((item) => item.trim()) || [];

  // Convert recipe string to steps (split by new lines or numbers)
  const recipeSteps = recipe?.split(/\n|\d+\.\s/).filter(Boolean) || [];

  return (
    <Wrapper>
      <div className="meal-card">
        <h3>
          {name}
          <span className="calories"> ({calories} cal)</span>
        </h3>
        <p className="meal-type">{categoryMeal}</p>
        <div className="macros">
          <div className="macro-item protein">
            <p>{protein}g</p>
            <span>P</span>
          </div>
          <div className="macro-item carbs">
            <p>{carbs}g</p>
            <span>C</span>
          </div>
          <div className="macro-item fats">
            <p>{fats}g</p>
            <span>F</span>
          </div>
        </div>
        <Row className="bottom-card align-items-center">
          <Col>
            <p className="goal">{category}</p>
          </Col>
          <Col>
            <button className="see-more" onClick={handleShow}>
              See More
            </button>
          </Col>
        </Row>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Calories: {calories} kcal</h5>
          <p>Protein: {protein}g</p>
          <p>Carbs: {carbs}g</p>
          <p>Fats: {fats}g</p>

          <hr />
          <h6>Ingredients:</h6>
          {ingredientsList.length > 0 ? (
            <ul>
              {ingredientsList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>No ingredient info available.</p>
          )}

          <hr />
          <h6>Recipe:</h6>
          {recipeSteps.length > 0 ? (
            <ol>
              {recipeSteps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          ) : (
            <p>No recipe info available.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Wrapper>
  );
};

export default Meal;
