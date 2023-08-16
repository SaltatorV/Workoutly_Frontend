import { Form } from "react-router-dom";
import { useState } from "react";

import { AiFillLock } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

import "./css/RegisterForm.css";
import ExclamationMark from "../../marks/ExclamationMark";

const RegisterForm = (hide) => {
  const [registerRequest, setRegisterRequest] = useState({
    username: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
  });

  const [registerSuccessfully, setRegisterSuccessfully] = useState();
  const [registerFailure, setRegisterFailure] = useState({ message: "" });
  const [constraintViolations, setConstraintViolations] = useState({
    general: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setRegisterRequest({
      ...registerRequest,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    sendRegisterRequest();
  };

  async function sendRegisterRequest() {
    const response = await fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerRequest),
    });

    if (response.status === 400) {
      setRegisterSuccessfully(undefined);
      const data = await response.json();
      const constraintViolationsData = data.constraintViolations;
      setRegisterFailure({ message: data.message });
      mapConstraintViolations(constraintViolationsData);
    } else {
      const responseData = await response.json();
      setRegisterFailure({ message: "" });
      setConstraintViolations({
        general: "",
        username: "",
        email: "",
        password: "",
      });
      setRegisterSuccessfully(responseData.message);
      setRegisterRequest({
        username: "",
        emailAddress: "",
        password: "",
        confirmPassword: "",
      });
    }
  }

  const mapConstraintViolations = (constraintViolations) => {
    if (constraintViolations !== undefined) {
      setConstraintViolations({
        general:
          constraintViolations["createUser.registerUserRequest"] !==
            undefined && constraintViolations
            ? constraintViolations["createUser.registerUserRequest"]
            : "",
        username:
          constraintViolations["createUser.registerUserRequest.username"] !==
          undefined
            ? constraintViolations["createUser.registerUserRequest.username"]
            : "",
        email:
          constraintViolations[
            "createUser.registerUserRequest.emailAddress"
          ] !== undefined
            ? constraintViolations[
                "createUser.registerUserRequest.emailAddress"
              ]
            : "",
        password:
          constraintViolations["createUser.registerUserRequest.password"] !==
          undefined
            ? constraintViolations["createUser.registerUserRequest.password"]
            : "",
      });
    } else {
      setConstraintViolations({
        general: "",
        username: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <Form method="post" className="register-form">
      <span>
        <p className={registerSuccessfully ? "ok-field" : "ok-field-hidden"}>
          {registerSuccessfully}
        </p>
        {registerFailure.message !== "" && (
          <p className="invalid-field">{registerFailure.message}</p>
        )}
      </span>
      <span className="input-field">
        <AiOutlineUser className="icon" />
        <input
          id="username"
          type="text"
          name="username"
          required
          placeholder="Enter Username"
          value={registerRequest.username}
          onChange={handleChange}
        />
        {constraintViolations.username !== "" && (
          <ExclamationMark
            textData={JSON.stringify(constraintViolations.username)}
          />
        )}
      </span>

      <span className="input-field">
        <AiOutlineMail className="icon" />
        <input
          id="emailAddress"
          type="text"
          name="emailAddress"
          required
          placeholder="Enter Email Address"
          value={registerRequest.emailAddress}
          onChange={handleChange}
        />
        {constraintViolations.email !== "" && (
          <ExclamationMark
            textData={JSON.stringify(constraintViolations.email)}
          />
        )}
      </span>

      <span className="input-field">
        <AiFillLock className="icon" />
        <input
          id="password"
          type="password"
          name="password"
          required
          placeholder="Enter Password"
          value={registerRequest.password}
          onChange={handleChange}
        />
        {constraintViolations.password !== "" && (
          <ExclamationMark
            textData={JSON.stringify(constraintViolations.password)}
          />
        )}
      </span>

      <span className="input-field">
        <AiFillLock className="icon" />
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          required
          placeholder="Confirm Password"
          value={registerRequest.confirmPassword}
          onChange={handleChange}
        />
        {constraintViolations.general !== "" && (
          <ExclamationMark
            textData={JSON.stringify(constraintViolations.general)}
          />
        )}
      </span>
      <hr />
      <button onClick={handleSubmit}>Register</button>
    </Form>
  );
};

export default RegisterForm;
