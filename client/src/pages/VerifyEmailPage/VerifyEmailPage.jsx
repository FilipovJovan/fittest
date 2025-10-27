// eslint-disable-next-line no-unused-vars
import React from "react";
import Wrapper from "../assets/Wrappers/VerifyEmailPage";
import {useVerifyEmail, VerificationStatus} from "./VerifyEmailPage.logic.js";

const VerifyEmail = () => {
    const {status, errorMessage, canResend, handleResendVerification, navigate} =
        useVerifyEmail();

    const renderContent = () => {
        switch (status) {
            case VerificationStatus.LOADING:
                return (
                    <div className="container">
                        <h2>Verifying your email...</h2>
                        <div className="spinner"></div>
                    </div>
                );

            case VerificationStatus.SUCCESS:
                return (
                    <div className="container">
                        <h2>Email verified successfully! 🎉</h2>
                        <p>Redirecting you to login...</p>
                        <button onClick={() => navigate("/login")}>Go to Login</button>
                    </div>
                );

            case VerificationStatus.ERROR:
                return (
                    <div className="container">
                        <h2>Verification Failed ❌</h2>
                        <p>{errorMessage}</p>
                        {canResend ? (
                            <button onClick={handleResendVerification}>
                                Resend Verification Email
                            </button>
                        ) : (
                            <button onClick={() => navigate("/resend-verification-email")}>
                                Request New Verification
                            </button>
                        )}
                    </div>
                );

            default:
                return null;
        }
    };

    return <Wrapper>{renderContent()}</Wrapper>;
};

export default VerifyEmail;
