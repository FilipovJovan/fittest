// eslint-disable-next-line no-unused-vars
import React, { useContext, useState, useRef } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { FoodPageContext } from "./FoodPage";
import MealContainer from "../components/MealContainer";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const MacrosPage = () => {
  const mealsRef = useRef(null);
  const { user } = useContext(FoodPageContext);
  const [suggestedMeals, setSuggestedMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mealType, setMealType] = useState("Breakfast"); // default selection

  const apiKey = import.meta.env.VITE_API_KEY;

  const handleSuggestFoods = async () => {
    setLoading(true);
    // console.log("reached");

    try {
      const response = await customFetch.post(
        "/calculate-calories-macros/suggestFoods",
        {
          userId: user._id,
          mealType,
        },
        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      );

      const mealsArray = Array.isArray(response.data)
        ? response.data
        : response.data.meals || [];

      setSuggestedMeals(mealsArray);

      setTimeout(() => {
        mealsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      toast.error("Failed to fetch food suggestions");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestDailyPlan = async () => {
    setLoading(true);
    try {
      const response = await customFetch.post(
        "/calculate-calories-macros/suggestDailyPlan",
        {
          userId: user._id,
        },
        {
          headers: {
            "x-api-key": apiKey,
          },
        }
      );

      const flattened = Object.values(response.data).flat();
      setSuggestedMeals(flattened);

      setTimeout(() => {
        mealsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      toast.error("Failed to fetch daily plan");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const userMacros = user?.macros;
  const userCalories = user?.currentCalories;

  if (!userMacros || !userCalories) {
    return (
      <>
        <Spinner message="Loading your macros and meals..." />
      </>
    );
  }

  return (
    <>
      <Row className="macros-row">
        <Col xs={12} md={6} className="macros-col">
          <div className="macros-box">
            <h3>Macros</h3>
            <Row className="macros-circles">
              <Col className="circle protein">
                {`${userMacros.protein}`}g Proteins
              </Col>
              <Col className="circle carbs">{`${userMacros.carbs}`}g Carbs</Col>
              <Col className="circle fats">{`${userMacros.fat}`}g Fats</Col>
            </Row>
            <h4>Calories: {`${userCalories}`}</h4>
          </div>
        </Col>

        <Col
          xs={12}
          md={6}
          className="macros-col d-flex flex-column justify-content-center align-items-center"
        >
          <div className="suggest-food-div">
            <div className="meal-type-dropdown position-relative">
              <Form.Select
                value={mealType}
                className="suggest-food-select"
                onChange={(e) => setMealType(e.target.value)}
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
              </Form.Select>
              <span className="dropdown-arrow">⌄</span>
            </div>

            <button
              className="suggestion-button one"
              onClick={handleSuggestFoods}
              disabled={loading}
            >
              Suggest Foods
            </button>
          </div>

          <button
            className="suggestion-button two"
            onClick={handleSuggestDailyPlan}
            disabled={loading}
          >
            Suggest Daily Plan
          </button>
        </Col>
      </Row>

      {suggestedMeals.length > 0 && (
        <div className="mt-4" ref={mealsRef}>
          <MealContainer meals={suggestedMeals} />
        </div>
      )}
    </>
  );
};

export default MacrosPage;
