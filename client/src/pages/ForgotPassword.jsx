import React from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/Wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const apiKey = import.meta.env.VITE_API_KEY;
    await customFetch.post("/auth/forgot-password", data, {
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
    });
    toast.success("Reset link sent to your email");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Error sending reset link");
    return null;
  }
};

const ForgotPassword = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

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
