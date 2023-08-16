import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";

import { AiFillLock } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

import { setNewAuthenticationToken } from "../../../services/AuthenticationService";

import "./css/LoginForm.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginRequest, setLoginRequest] = useState({
    username: "",
    password: "",
  });

  const [invalidRequest, setInvalidRequest] = useState(false);

  const handleChange = (event) => {
    setLoginRequest({
      ...loginRequest,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    sendLoginRequest();
  };

  async function sendLoginRequest() {
    const response = await fetch("http://localhost:8080/auth/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    });

    if (response.status === 403 || response.status === 400) {
      setInvalidRequest(true);
    } else {
      const responseData = await response.json();
      const token = responseData.token;
      setNewAuthenticationToken(token);
      navigate("/panel", { replace: true });
    }
  }

  return (
    <Form method="post" className="login-form">
      <p className={!invalidRequest ? "invalid-field-hidden" : "invalid-field"}>
        Invalid username or password
      </p>

      <span className="input-field">
        <AiOutlineUser className="icon" />
        <input
          id="username"
          type="text"
          name="username"
          required
          placeholder="Enter Username"
          value={loginRequest.username}
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
          value={loginRequest.password}
          onChange={handleChange}
        />
      </span>
      <hr />
      <Link to="/panel">
        <button onClick={handleSubmit}>Login</button>
      </Link>
    </Form>
  );
};

export default LoginForm;
