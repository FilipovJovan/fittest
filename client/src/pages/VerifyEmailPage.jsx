import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/Wrappers/VerifyEmailPage";

const VerificationStatus = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};
const VerifyEmail = () => {
  const { verificationToken } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState(VerificationStatus.LOADING);
  const [errorMessage, setErrorMessage] = useState("");
  const [canResend, setCanResend] = useState(false);

  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  useEffect(() => {
    if (!verificationToken || !email) {
      //setStatus(VerificationStatus.ERROR);
      setErrorMessage("Invalid or missing token or email.");
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const verifyAndCheckStatus = async () => {
      setStatus(VerificationStatus.LOADING);

      // Step 1: Attempt to verify the email
      try {
        // console.log(
        //   "Sending verification request for token:",
        //   verificationToken
        // );
        const verifyResponse = await customFetch.get(
          `/auth/verify-email/${verificationToken}`,
          {
            headers: { "x-api-key": import.meta.env.VITE_API_KEY },
            signal,
          }
        );
        // console.log("Verification response:", verifyResponse);
      } catch (error) {
        if (error.name === "AbortError") {
          // console.log("Verification request aborted.");
          return;
        }
        console.warn(
          "Initial verification failed, will still check status:",
          error
        );
        // Do not setStatus here!
      }

      // Step 2: Check verification status
      try {
        const statusResponse = await customFetch.get(
          `/auth/check-verification-status?email=${email}`,
          {
            headers: { "x-api-key": import.meta.env.VITE_API_KEY },
            signal,
          }
        );

        const isVerified = statusResponse.data?.isVerified;

        if (isVerified) {
          setStatus(VerificationStatus.SUCCESS);
          localStorage.setItem("emailVerified", "true");
          window.history.replaceState(null, "", "/");
          setTimeout(() => {
            navigate("/login", { replace: true });
          }, 3000);
        } else {
          //setStatus(VerificationStatus.ERROR);
          setErrorMessage("Your email is not verified yet.");
          setCanResend(true);
        }
      } catch (error) {
        if (error.name === "AbortError") {
          // console.log("Status check aborted.");
          return;
        }

        console.error("Verification status error:", error);

        const serverMessage =
          error.response?.data?.msg || "Something went wrong.";

        if (!serverMessage.toLowerCase().includes("timeout")) {
          setStatus(VerificationStatus.ERROR);
        }

        setErrorMessage(serverMessage);

        if (serverMessage.toLowerCase().includes("expired")) {
          setCanResend(true);
        }
      }
    };

    verifyAndCheckStatus();

    return () => controller.abort();
  }, [verificationToken, email, navigate]);

  const handleResendVerification = async () => {
    if (!email) {
      alert("Email is missing. Please provide a valid email.");
      return;
    }

    try {
      await customFetch.post(
        "/auth/resend-verification-email",
        { email },
        {
          headers: { "x-api-key": import.meta.env.VITE_API_KEY },
        }
      );
      alert("Verification email resent successfully!");
    } catch (err) {
      console.error("Resend verification error:", err);
      alert("Failed to resend verification email.");
    }
  };

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
