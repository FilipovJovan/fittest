import React, { useEffect, useState } from "react";
import { FormRow, SubmitBtn } from "../components";
import Wrapper from "../assets/Wrappers/Profile";
import { useOutletContext } from "react-router-dom";
import { Form } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { Row, Col } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const action = async ({ request }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());

  // If any of the fields like injuries can have multiple values (like checkboxes)
  // make sure they are arrays:
  data.muscleInjuries = formData.getAll("muscleInjuries");
  data.jointInjuries = formData.getAll("jointInjuries");

  console.log("Final data to send:", data);

  try {
    const response = await customFetch.patch(
      "/generate-custom/workout/user-values",
      data,
      {
        headers: {
          "x-api-key": apiKey,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Response:", response.data);
    toast.success("Profile updated successfully");
  } catch (error) {
    console.error("Error:", error);
    toast.error(error?.response?.data?.message || "Failed to update profile");
  }

  return null;
};

const Profile = () => {
  const [workout, setWorkout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  useEffect(() => {
    const fetchWorkout = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      try {
        const response = await customFetch.get(
          "/generate-custom/workout/get-workout",
          { headers: { "x-api-key": apiKey } }
        );
        setWorkout(response.data.workoutProgram);
      } catch (error) {
        console.error("Failed to fetch workout:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkout();
  }, []);
  const muscleInjuryOptions = [
    "chest",
    "back",
    "triceps",
    "biceps",
    "traps",
    "shoulders",
    "abs",
    "quadriceps",
    "hamstrings",
    "calves",
    "forearm",
    "none",
  ];

  const jointInjuryOptions = [
    "elbow",
    "wrist",
    "knee",
    "ankle",
    "lower back",
    "none",
  ];

  const { user } = useOutletContext();
  const {
    name,
    lastName,
    email,
    password,
    date,
    weight,
    height,
    muscleInjuries,
    jointInjuries,
    split,
    utcOffset,
  } = user;
  return (
    <Wrapper>
      <div className="user-values">
        <h2>{name + " " + lastName}</h2>
        <hr />
        <h5>Total plans completed: 0</h5>
        <hr />
        <h5>
          Current plan ends on:{" "}
          {!loading && workout?.[0]?.endDate
            ? new Date(workout[0].endDate).toLocaleDateString()
            : "No active plan"}
        </h5>
      </div>
      <Form method="post" className="form" encType="multipart/form-data">
        <input type="hidden" name="userId" value={user._id} />
        <div className="form-center">
          <h3 className="heading">Update Profile</h3>
          <Row className="row">
            <Col>
              <FormRow type="text" name="name" defaultValue={name} />
              <FormRow
                type="text"
                name="lastName"
                labelText="last name"
                defaultValue={lastName}
              />
              <FormRow type="email" name="email" defaultValue={email} />
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
              <FormRow
                type="number"
                name="weight"
                defaultValue={user.userValues.weight}
              />
              <FormRow
                type="number"
                name="height"
                defaultValue={user.userValues.height}
              />
            </Col>
            <Col>
              <div className="form-row">
                <label className="form-label">Muscle Injuries</label>
                <div className="checkbox-group">
                  {muscleInjuryOptions.map((option) => (
                    <label key={option} className="checkbox-label">
                      <input
                        type="checkbox"
                        name="muscleInjuries"
                        value={option}
                        defaultChecked={user.userValues.muscleInjuries?.includes(
                          option
                        )}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-row">
                <label className="form-label">Joint Injuries</label>
                <div className="checkbox-group">
                  {jointInjuryOptions.map((option) => (
                    <label key={option} className="checkbox-label">
                      <input
                        type="checkbox"
                        name="jointInjuries"
                        value={option}
                        defaultChecked={user.userValues.jointInjuries?.includes(
                          option
                        )}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
          <SubmitBtn formBtn className="button" />
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
