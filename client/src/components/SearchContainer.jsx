import React from "react";
import { FormRow, FormRowSelect, SubmitBtn } from ".";
import Wrapper from "../assets/wrappers/SearchContainer";
import { Form, useSubmit, Link } from "react-router-dom";
import { CATEGORY_BY_GOAL, CATEGORY_BY_TIME } from "../../../utils/constants";
import { useFoodPageContext } from "../pages/FoodPage";
import { Row, Col } from "react-bootstrap";

const SearchContainer = () => {
  const { searchValues } = useFoodPageContext();
  const { search, categoryMeal, category, sort } = searchValues;
  const submit = useSubmit();

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
                defaultValue={categoryMeal}
                onChange={(e) => {
                  submit(e.currentTarget.form);
                }}
              />
              <FormRowSelect
                labelText="Your goal"
                name="category"
                className="input"
                list={["all", ...Object.values(CATEGORY_BY_GOAL)]}
                defaultValue={category}
                onChange={(e) => {
                  submit(e.currentTarget.form);
                }}
              />
              <Link to="/dashboard/diet" className="btn form-btn delete-btn">
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
