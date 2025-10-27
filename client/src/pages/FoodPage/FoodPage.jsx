// eslint-disable-next-line no-unused-vars
import React from "react";
import Wrapper from "../assets/Wrappers/FoodItems";
import { Row, Col } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { FoodPageContext, useFoodPage } from "./FoodPage.logic";

// eslint-disable-next-line react/prop-types
const FoodPage = ({ proteins, carbs, fat, calories }) => {
    const { data, user, searchValues, userMacros, userCalories } = useFoodPage(
        { protein: proteins, carbs, fat },
        calories
    );

    return (
        <Wrapper>
            <FoodPageContext.Provider value={{ data, user, searchValues, userMacros, userCalories }}>
                <h2>Your Diet</h2>
                <Row className="link-row">
                    <Col className="link-col">
                        <Link to="macros">
                            <p>Your Macros</p>
                        </Link>
                    </Col>
                    <Col className="link-col">
                        <Link to="all-meals">
                            <p>All Meals</p>
                        </Link>
                    </Col>
                </Row>
                <Outlet />
            </FoodPageContext.Provider>
        </Wrapper>
    );
};

export default FoodPage;
