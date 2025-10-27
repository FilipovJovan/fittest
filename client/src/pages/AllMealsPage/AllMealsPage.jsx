// eslint-disable-next-line no-unused-vars
import React from "react";
import SearchContainer from "../components/SearchContainer";
import MealContainer from "../components/MealContainer";
import { Row } from "react-bootstrap";

const AllMealsPage = () => {
    return (
        <>
            <Row>
                <SearchContainer />
            </Row>
            <MealContainer />
        </>
    );
};

export default AllMealsPage;
