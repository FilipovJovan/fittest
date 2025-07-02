import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../assets/Wrappers/RegisterAndLoginPage";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { WizardForm } from "../components";

export const action = async () => {
  return null;
};

const Register = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

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
    const finalData = { ...formData, ...data };
    setFormData(finalData);

    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      console.log("Submitting data:", finalData);

      const registerRes = await customFetch.post("/auth/register", finalData, {
        headers: {
          "x-api-key": apiKey,
          "Content-Type": "application/json",
        },
      });
      const userId = registerRes?.data?.user?._id;

      if (!userId) {
        throw new Error("User ID not returned from registration.");
      }

      const workoutGenerationData = {
        difficultyLevel: finalData.userValues?.difficultyLevel || "beginner",
        workoutType: finalData.userValues?.workoutType || "hypertrophy",
        splitPreference: finalData.userValues?.split || "pushPullLegs6x",
        workoutsPerWeek: finalData.workoutLevel,
        equipmentType: finalData.userValues?.equipment || [],
        userId,
        restDays: finalData.userValues?.restDays || [7],
        startDate: new Date().toISOString(),
        label: 1,
      };

      await customFetch.post(
        "/generate-custom/workout",
        workoutGenerationData,
        {
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
        }
      );

      const macrosCalculationData = {
        weight: finalData.userValues?.weight,
        height: finalData.userValues.height,
        age: finalData.age,
        gender: finalData.gender,
        activityLevel: finalData.activityLevel,
        fitnessGoal: finalData.fitnessGoal,
        workoutLevel: finalData.workoutLevel,
      };

      await customFetch.post(
        `calculate-calories-macros/calculate/${userId}`,
        macrosCalculationData,
        {
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(
        "Registration successful! Please check your email to verify your account."
      );
      navigate("/login");
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
            onFinalStep={handleFinalStep}
            initialData={formData}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Register;
