import React from "react";
import "./SearchContainerComponent.scss";
import {useSearchContainerComponent} from "./SearchContainerComponent.logic";
import {Col, Row} from "react-bootstrap";
import {Form, Link} from "react-router-dom";
import {FormRowSelect} from "../index.js";
import {CATEGORY_BY_GOAL, CATEGORY_BY_TIME} from "../../../../utils/constants.js";
import Wrapper from "../../assets/Wrappers/SearchContainer.js";

const SearchContainerComponent = () => {
    const {
        submit,
        categoryValue,
        setCategoryValue,
        setCategoryMealValue,
        categoryMealValue,
    } = useSearchContainerComponent();
    return (
        <>
            <Row className="row">
                <Col>
                    <Form className="form">
                        <h5 className="form-title">Search form</h5>
                        <div className="form-center">
                            {/*<FormRow
            type="search"
            name="search"
            className="input"
            defaultValue={search}
            onChange={debounce((form) => {
              submit(form);
            })}
          />*/}
                            <FormRowSelect
                                labelText="Meal type"
                                name="categoryMeal"
                                className="input"
                                list={["all", ...Object.values(CATEGORY_BY_TIME)]}
                                value={categoryMealValue}
                                onChange={(e) => {
                                    setCategoryMealValue(e.target.value);
                                    submit(e.currentTarget.form);
                                }}
                            />
                            <FormRowSelect
                                labelText="Your goal"
                                name="category"
                                className="input"
                                list={["all", ...Object.values(CATEGORY_BY_GOAL)]}
                                value={categoryValue}
                                onChange={(e) => {
                                    setCategoryValue(e.target.value);
                                    submit(e.currentTarget.form);
                                }}
                            />
                            <Link
                                to="/dashboard/diet/all-meals"
                                className="btn form-btn delete-btn"
                                onClick={() => {
                                    setCategoryMealValue("all");
                                    setCategoryValue("all");
                                }}
                            >
                                Reset Search Values
                            </Link>
                        </div>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </>
    );
};

export default SearchContainerComponent;
