import React from "react";
import { Link, Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/Wrappers/RegisterAndLoginPage";
import customFetch from "../utils/customFetch";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration Successful");
    return redirect("/login");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Register = () => {
  return (
    <Wrapper>
      <div className="register-text">
        <h2>Start your journey</h2>
        <p>Create your account and start feeling better</p>
      </div>
      <Form method="post" className="form">
        <Logo />
        <h4>Create new account</h4>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
        <FormRow type="text" name="name" defaultValue="Jovan" />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          defaultValue="Filipov"
        />
        <FormRow type="date" name="date" defaultValue="2005/03/05" />
        <FormRow type="email" name="email" defaultValue="jovan@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <button type="submit" className="btn">
          Submit
        </button>
      </Form>
    </Wrapper>
  );
};

export default Register;
