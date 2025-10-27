import React from "react";
import { Form } from "react-router-dom";
import Wrapper from "../assets/Wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import { useForgotPassword, action } from "./ForgotPassword.logic";

export { action };

const ForgotPassword = () => {
    const { isSubmitting } = useForgotPassword();

    return (
        <Wrapper>
            <div className="login-background">
                <h2 className="login-heading">Forgot Password</h2>
                <Form method="post" className="login-form">
                    <FormRow type="email" name="email" labelText="Enter your email" />
                    <button type="submit" className="btn" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Reset Link"}
                    </button>
                </Form>
            </div>
        </Wrapper>
    );
};

export default ForgotPassword;
