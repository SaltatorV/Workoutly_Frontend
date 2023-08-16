import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";

import { FaWeight } from "react-icons/fa";
import { BiBody } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";

import { getBearer } from "../../../services/AuthenticationService";

import "./css/AddWeightForm.css";

const AddWeightForm = () => {
  const navigate = useNavigate();
  const [addWeightRequest, setAddWeightRequest] = useState({
    weight: 0,
    bodyFat: 0,
    date: new Date().toLocaleDateString(),
  });

  const [invalidRequest, setInvalidRequest] = useState(false);

  const handleChange = (event) => {
    setAddWeightRequest({
      ...addWeightRequest,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    sendAddWeightRequest();
  };

  async function sendAddWeightRequest() {
    const response = await fetch("http://localhost:8080/auth/add-new-weight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getBearer(),
      },
      body: JSON.stringify(addWeightRequest),
    });
    navigate("/panel/Measurements");
  }

  return (
    <Form method="post" className="add-weight-form">
      <span className="input-field">
        <FaWeight className="icon" />
        <p className="add-weight-info">Weight:</p>
        <input
          id="weight"
          type="number"
          name="weight"
          min={0}
          max={500}
          step={0.1}
          required
          placeholder="Enter Weight"
          value={addWeightRequest.weight}
          onChange={handleChange}
        />
      </span>

      <span className="input-field">
        <BiBody className="icon" />
        <p className="add-weight-info">Body Fat:</p>
        <input
          id="bodyFat"
          type="number"
          name="bodyFat"
          min={0}
          max={70}
          step={0.1}
          required
          placeholder="Enter Body Fat in %"
          value={addWeightRequest.bodyFat}
          onChange={handleChange}
        />
      </span>

      <span className="input-field">
        <BsFillCalendarDateFill className="icon" />
        <p className="add-weight-info">Date:</p>
        <input
          id="date"
          type="date"
          name="date"
          required
          value={addWeightRequest.date}
          onChange={handleChange}
        />
      </span>
      <hr />
      <button onClick={handleSubmit}>Add Weight</button>
    </Form>
  );
};

export default AddWeightForm;
