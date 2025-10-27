// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/Wrappers/Error";
import img from "../assets/images/not-found.svg";

const Error = () => {
    const error = useRouteError();
    if (error.status === 404) {
        return (
            <Wrapper>
                <div>
                    <img src={img} alt="not found" />
                    <h3>Page not Found</h3>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>can't find the page</p>
                    <Link to="/">back home</Link>
                </div>
            </Wrapper>
        );
    }
    return (
        <Wrapper>
            <div>
                <h3>Something went wrong</h3>
            </div>
        </Wrapper>
    );
};

export default Error;
