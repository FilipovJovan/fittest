import React, { useState } from "react";
import { Link, Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/Wrappers/RegisterAndLoginPage";
import customFetch from "../utils/customFetch";
import Logo from "../components/Logo";
import { toast } from "react-toastify";
import { WizardForm } from "../components";

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
  const [isFinalStep, setIsFinalStep] = useState(false); // State to track the final step
  const handleFormDataChange = (data) => {
    console.log("Form Data: ", data);
  };

  const handleFinalStep = (data) => {
    // Trigger form submission only when final step is reached
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
          onFinalStep={handleFinalStep} // Pass the final step handler
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
