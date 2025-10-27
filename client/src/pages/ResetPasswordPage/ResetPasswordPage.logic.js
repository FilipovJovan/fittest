// Logic for ResetPasswordPage
import {useNavigate, useSearchParams} from "react-router-dom";
import {useState} from "react";
import {toast} from "react-toastify";
import customFetch from "../../utils/customFetch.js";

export const useResetPasswordPage = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            toast.error("Invalid or missing token.");
            return;
        }
        // console.log(password);
        // console.log(confirmPassword);

        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        try {
            const apiKey = import.meta.env.VITE_API_KEY;
            await customFetch.post(
                "/auth/reset-password",
                {token, password},
                {
                    headers: {
                        "x-api-key": apiKey,
                        "Content-Type": "application/json",
                    },
                }
            );
            // console.log(password, token);

            toast.success("Password reset successful! You can now log in.");
            navigate("/login");
        } catch (error) {
            // console.log(error);
            toast.error(error?.response?.data?.msg || "Reset failed.");
        }
    };
    return {handleSubmit, password, setPassword, confirmPassword, setConfirmPassword};
};
