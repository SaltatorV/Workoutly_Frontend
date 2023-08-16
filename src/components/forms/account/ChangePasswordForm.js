import { Link } from "react-router-dom";
import { Form } from "react-router-dom";
import { useState } from "react";
import { AiFillLock } from "react-icons/ai";

import "./css/ChangePasswordForm.css";
import { getBearer } from "../../../services/AuthenticationService";

const ChangePasswordForm = () => {
  const [changePasswordRequest, setChangePasswordRequest] = useState({
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });

  const [invalidRequest, setInvalidRequest] = useState(false);

  const handleChange = (event) => {
    setChangePasswordRequest({
      ...changePasswordRequest,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    sendChangePasswordRequest();
  };

  async function sendChangePasswordRequest() {
    const response = await fetch("http://localhost:8080/auth/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getBearer(),
      },
      body: JSON.stringify(changePasswordRequest),
    });

    if (response.status === 403 || response.status === 400) {
      setInvalidRequest(true);
    } else {
      const responseData = await response.json();
    }
  }

  return (
    <Form method="post" className="change-password-form">
      <p className={!invalidRequest ? "invalid-field-hidden" : "invalid-field"}>
        Invalid new or current password
      </p>

      <span className="input-field">
        <AiFillLock className="icon" />
        <input
          id="currentPassword"
          type="password"
          name="currentPassword"
          required
          placeholder="Enter Current Password"
          value={changePasswordRequest.currentPassword}
          onChange={handleChange}
        />
      </span>

      <span className="input-field">
        <AiFillLock className="icon" />
        <input
          id="password"
          type="password"
          name="password"
          required
          placeholder="Enter New Password"
          value={changePasswordRequest.password}
          onChange={handleChange}
        />
      </span>

      <span className="input-field">
        <AiFillLock className="icon" />
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          required
          placeholder="Confirm New Password"
          value={changePasswordRequest.confirmPassword}
          onChange={handleChange}
        />
      </span>
      <hr />
      <Link to="/panel">
        <button onClick={handleSubmit}>Change Password</button>
      </Link>
    </Form>
  );
};

export default ChangePasswordForm;
