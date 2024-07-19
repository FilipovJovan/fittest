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
    await customFetch.post("/auth/login", data);
    toast.success("Login successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <div className="register-text">
        <h2>Welcome!</h2>
      </div>
      <Form method="post" className="form">
        <Logo />
        <h4>Create new account</h4>
        <p>
          Already a member?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
        <FormRow type="email" name="email" defaultValue="jovan@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "submitting" : "submit"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default Login;
