import React from "react";
import "./RegisterPage.scss";
import {useRegisterPage} from "./RegisterPage.logic";
import Spinner from "../../components/Spinner.jsx";
import {Link} from "react-router-dom";
import {WizardForm} from "../../components/index.js";

const RegisterPage = () => {
    const {isSubmitting, currentMessage, dotCount, handleFormDataChange, handleFinalStep, formData} = useRegisterPage();
    return (
        <>
            <div className="background">
                {isSubmitting ? (
                    <div className="spinner">
                        <Spinner
                            message={
                                currentMessage
                                    ? `${currentMessage.text}${".".repeat(dotCount)}`
                                    : "Processing..."
                            }
                            icon={currentMessage?.icon}
                            className="spinner-wrapper"
                            circleClassName="spinner-circle"
                        />
                    </div>
                ) : (
                    <div className="form">
                        <h4>Create your account!</h4>
                        <p>
                            Already a member?
                            <Link to="/login" className="member-btn-register">
                                Login
                            </Link>
                        </p>
                        <WizardForm
                            onFormDataChange={handleFormDataChange}
                            onFinalStep={handleFinalStep}
                            initialData={formData}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default RegisterPage;
