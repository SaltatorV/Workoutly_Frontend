import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";

import { AiFillLock } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

import "./css/ChangeEmailForm.css";
import { getBearer } from "../../../services/AuthenticationService";

const ChangeEmailForm = () => {
  const navigate = useNavigate();
  const [changeEmailRequest, setChangeEmailRequest] = useState({
    emailAddress: "",
    password: "",
  });

  const handleChange = (event) => {
    setChangeEmailRequest({
      ...changeEmailRequest,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    sendChangeEmailRequest();
    navigate("/");
  };

  async function sendChangeEmailRequest() {
    const response = await fetch("http://localhost:8080/auth/change-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getBearer(),
      },
      body: JSON.stringify(changeEmailRequest),
    });
  }

  return (
    <Form method="post" className="change-email-form">
      <span className="input-field">
        <AiOutlineMail className="icon" />
        <input
          id="emailAddress"
          type="text"
          name="emailAddress"
          required
          placeholder="Enter New Email Address"
          value={changeEmailRequest.emailAddress}
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
          placeholder="Enter Password"
          value={changeEmailRequest.password}
          onChange={handleChange}
        />
      </span>
      <hr />
      <button onClick={handleSubmit}>Change Email</button>
    </Form>
  );
};

export default ChangeEmailForm;
