// eslint-disable-next-line no-unused-vars
import React from "react";
import "./MacrosPage.scss";
import {useMacrosPage} from "./MacrosPage.logic";
import Spinner from "../../components/Spinner.jsx";
import {Col, Form, Row} from "react-bootstrap";
import MealContainer from "../../components/MealContainer.jsx";

const MacrosPage = () => {
    const {
        userMacros,
        userCalories,
        mealType,
        setMealType,
        handleSuggestFoods,
        handleSuggestDailyPlan,
        suggestedMeals,
        loading,
        mealsRef
    } = useMacrosPage();
    if (!userMacros || !userCalories) {
        return (
            <>
                <Spinner message="Loading your macros and meals..."/>
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
                    <MealContainer meals={suggestedMeals}/>
                </div>
            )}
        </>
    );
};

export default MacrosPage;
