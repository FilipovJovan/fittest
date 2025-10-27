import React from "react";
import "./ProfilePage.scss";
import {useProfilePage} from "./ProfilePage.logic";
import {Form} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import {FormRow, SubmitBtn} from "../../components/index.js";
import {FaEye, FaEyeSlash} from "react-icons/fa";

const ProfilePage = () => {
    const {
        lastName,
        name,
        loading,
        workout,
        user,
        email,
        showPassword,
        togglePassword,
        muscleInjuryOptions,
        jointInjuryOptions
    } = useProfilePage();
    return (
        <>
            <div className="user-values">
                <h2>{name + " " + lastName}</h2>
                <hr/>
                <h5>Total plans completed: 0</h5>
                <hr/>
                <h5>
                    Current plan ends on:{" "}
                    {!loading && workout?.[0]?.endDate
                        ? new Date(workout[0].endDate).toLocaleDateString()
                        : "No active plan"}
                </h5>
            </div>
            <Form method="post" className="form" encType="multipart/form-data">
                <input type="hidden" name="userId" value={user._id}/>
                <div className="form-center">
                    <h3 className="heading">Update Profile</h3>
                    <Row className="row">
                        <Col>
                            <FormRow type="text" name="name" defaultValue={name}/>
                            <FormRow
                                type="text"
                                name="lastName"
                                labelText="last name"
                                defaultValue={lastName}
                            />
                            <FormRow type="email" name="email" defaultValue={email}/>
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
                                        {showPassword ? <FaEyeSlash/> : <FaEye/>}
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
                    <SubmitBtn formBtn className="button"/>
                </div>
            </Form>
        </>
    );
};

export default ProfilePage;
