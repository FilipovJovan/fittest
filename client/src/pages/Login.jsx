import React from "react";
import { Link, Form, redirect, useNavigation } from "react-router-dom";
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

    await customFetch.post("/auth/login", data, {
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
    });
    toast.success("Login successful");
    return redirect("/dashboard");
  } catch (error) {
    console.log(error);

    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <div className="background">
        <div className="register-text">
          <h2 className="login-heading">Welcome!</h2>
        </div>
        <Form method="post" className="login-form">
          <p>
            Not a member?
            <Link to="/register" className="member-btn">
              Register
            </Link>
          </p>
          <FormRow type="email" name="email" defaultValue="email@gmail.com" />
          <FormRow type="password" name="password" defaultValue="secret123" />
          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? "submitting" : "submit"}
          </button>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Login;
