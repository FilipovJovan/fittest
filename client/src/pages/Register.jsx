import React, { useState } from "react";
import { Link, Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/Wrappers/RegisterAndLoginPage";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { WizardForm } from "../components";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    const apiKey = import.meta.env.VITE_API_KEY;
    await customFetch.post("http://localhost:5000/api/v1/auth/register", data, {
      headers: {
        "x-api-key": apiKey, // Use Bearer token format if required
        "Content-Type": "application/json", // Ensure JSON content type
      },
    });

    toast.success("Registration Successful");
    return redirect("/login");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  const [isFinalStep, setIsFinalStep] = useState(false);
  const handleFormDataChange = (data) => {
    console.log("Form Data: ", data);
  };

  const handleFinalStep = (data) => {
    setIsFinalStep(true);
    handleFormDataChange(data);
  };

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4>Create your account!</h4>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
        {/* Wizard Form for Registration */}
        <WizardForm
          onFormDataChange={handleFormDataChange}
          onFinalStep={handleFinalStep}
        />
        {isFinalStep && (
          <button type="submit" className="submit-btn">
            Submit Registration
          </button>
        )}
      </Form>
    </Wrapper>
  );
};

export default Register;
