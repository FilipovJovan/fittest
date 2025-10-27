import React from "react";
import "./ResetPasswordPage.scss";
import {useResetPasswordPage} from "./ResetPasswordPage.logic";
import {Form} from "react-router-dom";
import FormRow from "../../components/FormRow.jsx";

const ResetPasswordPage = () => {
    const {handleSubmit, password, setPassword, confirmPassword, setConfirmPassword} = useResetPasswordPage();
    return (
        <>
            <div className="background">
                <div className="register-text">
                    <h2 className="login-heading"></h2>
                </div>
                <Form className="login-form" onSubmit={handleSubmit}>
                    <h2>Reset Your Password</h2>
                    <FormRow
                        type="password"
                        name="password"
                        value={password} // This binds the state to the input
                        onChange={(e) => setPassword(e.target.value)} // This updates the state
                    />

                    <FormRow
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword} // This binds the state to the input
                        onChange={(e) => setConfirmPassword(e.target.value)} // This updates the state
                    />
                    <button type="submit" className="btn">
                        Reset Password
                    </button>
                </Form>
            </div>
        </>
    );
};

export default ResetPasswordPage;
