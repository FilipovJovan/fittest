import React, { useState } from "react";
import { useSearchParams, useNavigate, Form } from "react-router-dom";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/Wrappers/RegisterAndLoginPage";
import { toast } from "react-toastify";
import FormRow from "../components/FormRow";

const ResetPassword = () => {
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
    console.log(password);
    console.log(confirmPassword);

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      await customFetch.post(
        "/auth/reset-password",
        { token, password },
        {
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(password, token);

      toast.success("Password reset successful! You can now log in.");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg || "Reset failed.");
    }
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default ResetPassword;
