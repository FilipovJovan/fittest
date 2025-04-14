import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate instead of redirect
import Wrapper from "../assets/Wrappers/RegisterAndLoginPage";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { WizardForm } from "../components";

export const action = async () => {
  return null; // Prevents router from breaking
};

const Register = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate(); // Hook for programmatic navigation

  useEffect(() => {
    console.log("Updated Form Data: ", formData);
  }, [formData]);

  const handleFormDataChange = (data) => {
    setFormData((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  const handleFinalStep = async (data) => {
    const finalData = { ...formData, ...data }; // Merge the latest step's data
    setFormData(finalData);

    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      console.log("Submitting data:", finalData);

      await customFetch.post(
        "http://localhost:5000/api/v1/auth/register",
        finalData,
        {
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Registration Successful");
      navigate("/login"); // Redirect after successful registration
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <Wrapper>
      <div className="background">
        <div className="form">
          <h4>Create your account!</h4>
          <p>
            Already a member?
            <Link to="/login" className="member-btn-register">
              Login
            </Link>
          </p>
          {/* Wizard Form for Registration */}
          <WizardForm
            onFormDataChange={handleFormDataChange}
            onFinalStep={handleFinalStep} // Trigger form submission
            initialData={formData}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;
