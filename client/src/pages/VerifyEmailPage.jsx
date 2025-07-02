import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/Wrappers/VerifyEmailPage";

// Verification status enums
const VerificationStatus = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

const VerifyEmail = () => {
  const { verificationToken } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState(VerificationStatus.IDLE);
  const [errorMessage, setErrorMessage] = useState("");
  const [canResend, setCanResend] = useState(false); // for auto-resend possibility
  const isVerifiedRef = useRef(false);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const hasVerified = localStorage.getItem("emailVerified");

    /*if (hasVerified) {
      setStatus(VerificationStatus.SUCCESS);
      return;
    }*/

    if (!verificationToken) {
      setStatus(VerificationStatus.ERROR);
      setErrorMessage("Invalid or missing token.");
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    console.log("Before Verify Email");

    const verifyEmail = async () => {
      setStatus(VerificationStatus.LOADING);
      try {
        console.log("before");

        const response = await customFetch.get(
          `/auth/verify-email/${verificationToken}`,
          {
            headers: { "x-api-key": apiKey },
            signal,
          }
        );
        console.log("after");

        if (response.status >= 200 && response.status < 300) {
          setStatus(VerificationStatus.SUCCESS);
          isVerifiedRef.current = true;
          localStorage.setItem("emailVerified", "true");
        } else {
          setStatus(VerificationStatus.ERROR);
          setErrorMessage(response.data?.msg || "Verification failed.");
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request aborted.");
          return;
        }

        console.error("Verification error:", error);
        setStatus(VerificationStatus.ERROR);

        const serverMessage =
          error.response?.data?.msg || "Something went wrong.";
        setErrorMessage(serverMessage);

        // If token expired, allow resending
        if (serverMessage.toLowerCase().includes("expired")) {
          setCanResend(true);
        }
      }
    };

    verifyEmail();

    return () => {
      controller.abort();
    };
  }, [verificationToken]);

  useEffect(() => {
    if (status === VerificationStatus.SUCCESS) {
      window.history.replaceState(null, "", "/");

      const timer = setTimeout(() => {
        navigate("/login", { replace: true });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status, navigate]);

  const handleResendVerification = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const response = await customFetch.post(
        "/auth/resend-verification-email",
        { token: verificationToken }, // or user email depending on your API
        {
          headers: { "x-api-key": apiKey },
        }
      );
      alert("Verification email resent successfully!");
    } catch (err) {
      console.error("Resend failed:", err);
      alert("Failed to resend verification email. Please try again later.");
    }
  };

  const renderContent = () => {
    switch (status) {
      case VerificationStatus.LOADING:
      case VerificationStatus.IDLE:
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
