import React from "react";
import { FormRow, SubmitBtn } from "../components";
import Wrapper from "../assets/Wrappers/Profile";
import { useOutletContext } from "react-router-dom";
import { Form } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get("avatar");
  if (file && file.size > 1000000) {
    toast.error("image size too large");
    return null;
  }
  try {
    await customFetch.patch("/users/update-user", formData);
    toast.success("Profile updated successfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};

const Profile = () => {
  const { user } = useOutletContext();
  const { name, lastName, email, date } = user;
  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
        <div className="form-center">
          <h3 className="heading">Update Profile</h3>
          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              Select an image file (max 0.5 MB)
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              className="form-input"
              accept="image/*"
            ></input>
          </div>
          <FormRow type="text" name="name" defaultValue={name} />
          <FormRow
            type="text"
            name="lastName"
            labelText="last name"
            defaultValue={lastName}
          />
          <FormRow type="date" name="date" defaultValue={date} />
          <FormRow type="email" name="email" defaultValue={email} />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
