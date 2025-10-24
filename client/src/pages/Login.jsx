import { React, useState } from "react";
import { Link, Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/Wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const apiKey = import.meta.env.VITE_API_KEY;

    const res = await customFetch.post("/auth/login", data, {
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
    });
    const events = res.data.events || [];

    toast.success("Login successful");

    events.forEach((event) => {
      switch (event.type) {
        case "xpEarned":
          toast.success(`+${event.amount} XP!`);
          break;
        case "badgeUnlocked":
          toast.success(`🏅 New badge: ${event.name}`);
          break;
        case "rewardUnlocked":
          toast.info(`🎁 Reward unlocked: ${event.name}`);
          break;
      }
    });
    return redirect("/dashboard");
  } catch (error) {
    // console.log(error);

    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "Submitting";
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <Wrapper>
      <div className="login-background">
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
          <FormRow type="email" name="email" placeholder="example@gmail.com" />
          <FormRow
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="secret123"
            extraElement={
              <button
                type="button"
                onClick={togglePassword}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  margin: 0,
                  color: "#555",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            }
          />
          <p style={{ marginTop: "0.5rem" }}>
            <Link to="/forgot-password" className="forgot-password-link">
              Forgot your password?
            </Link>
          </p>

          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Login;
