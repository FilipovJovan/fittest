import React from "react";
import { FormRow, FormRowSelect, SubmitBtn } from ".";
import Wrapper from "../assets/wrappers/SearchContainer";
import { Form, useSubmit, Link, useLocation } from "react-router-dom";
import { CATEGORY_BY_GOAL, CATEGORY_BY_TIME } from "../../../utils/constants";
import { useFoodPageContext } from "../pages/FoodPage";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

const SearchContainer = () => {
  const { searchValues } = useFoodPageContext();
  const { search, categoryMeal, category, sort } = searchValues;
  const submit = useSubmit();
  const [categoryMealValue, setCategoryMealValue] = useState(categoryMeal);
  const [categoryValue, setCategoryValue] = useState(category);
  // console.log(categoryMealValue);
  // console.log(categoryValue);

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 1000);
    };
  };
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default SearchContainer;
