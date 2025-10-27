import React from "react";
import "./LoginPage.scss";
import {useLoginPage, action} from "./LoginPage.logic";
import {Form, Link} from "react-router-dom";
import FormRow from "../../components/FormRow.jsx";
import {FaEye, FaEyeSlash} from "react-icons/fa";

export {action};

const LoginPage = () => {
    const {isSubmitting, showPassword, togglePassword} = useLoginPage();
    return (
        <>
            <div className="login-background">
                <div className="register-text">
                    <h2 className="login-heading">Welcome!</h2>
                </div>
                <Form method="post" className="login-form">
                    <p>
                        Not a member?
                        <Link to="/register" className="member-btn">
                            Register
                        </Link>
                    </p>
                    <FormRow type="email" name="email" placeholder="example@gmail.com"/>
                    <FormRow
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="secret123"
                        extraElement={
                            <button
                                type="button"
                                onClick={togglePassword}
                                style={{
                                    background: "none",
                                    border: "none",
                                    padding: 0,
                                    margin: 0,
                                    color: "#555",
                                }}
                            >
                                {showPassword ? <FaEyeSlash/> : <FaEye/>}
                            </button>
                        }
                    />
                    <p style={{marginTop: "0.5rem"}}>
                        <Link to="/forgot-password" className="forgot-password-link">
                            Forgot your password?
                        </Link>
                    </p>

                    <button type="submit" className="btn" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting" : "Submit"}
                    </button>
                </Form>
            </div>
        </>
    );
};

export default LoginPage;
