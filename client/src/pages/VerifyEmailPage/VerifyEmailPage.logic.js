import {useState, useEffect} from "react";
import {useNavigate, useParams, useLocation} from "react-router-dom";
import customFetch from "../../utils/customFetch.js";

export const VerificationStatus = {
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error",
};

export const useVerifyEmail = () => {
    const {verificationToken} = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [status, setStatus] = useState(VerificationStatus.LOADING);
    const [errorMessage, setErrorMessage] = useState("");
    const [canResend, setCanResend] = useState(false);

    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get("email");

    useEffect(() => {
        if (!verificationToken || !email) {
            setErrorMessage("Invalid or missing token or email.");
            setStatus(VerificationStatus.ERROR);
            return;
        }

        const controller = new AbortController();
        const signal = controller.signal;

        const verifyAndCheckStatus = async () => {
            setStatus(VerificationStatus.LOADING);

            try {
                await customFetch.get(`/auth/verify-email/${verificationToken}`, {
                    headers: {"x-api-key": import.meta.env.VITE_API_KEY},
                    signal,
                });
            } catch (error) {
                if (error.name === "AbortError") return;
            }

            try {
                const statusResponse = await customFetch.get(
                    `/auth/check-verification-status?email=${email}`,
                    {headers: {"x-api-key": import.meta.env.VITE_API_KEY}, signal}
                );

                const isVerified = statusResponse.data?.isVerified;

                if (isVerified) {
                    setStatus(VerificationStatus.SUCCESS);
                    localStorage.setItem("emailVerified", "true");
                    window.history.replaceState(null, "", "/");
                    setTimeout(() => navigate("/login", {replace: true}), 3000);
                } else {
                    setStatus(VerificationStatus.ERROR);
                    setErrorMessage("Your email is not verified yet.");
                    setCanResend(true);
                }
            } catch (error) {
                if (error.name === "AbortError") return;

                const serverMessage = error.response?.data?.msg || "Something went wrong.";
                setErrorMessage(serverMessage);

                if (!serverMessage.toLowerCase().includes("timeout")) {
                    setStatus(VerificationStatus.ERROR);
                }
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
                {email},
                {headers: {"x-api-key": import.meta.env.VITE_API_KEY}}
            );
            alert("Verification email resent successfully!");
        } catch (err) {
            console.error("Resend verification error:", err);
            alert("Failed to resend verification email.");
        }
    };

    return {status, errorMessage, canResend, handleResendVerification, navigate};
};
