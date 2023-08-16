import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";

import { IoMdResize } from "react-icons/io";
import { BsFillCalendarDateFill } from "react-icons/bs";

import { getBearer } from "../../../services/AuthenticationService";

import "./css/AddMeasurementsForm.css";

const AddMeasurementsForm = () => {
  const navigate = useNavigate();
  const [addMeasurementRequest, setaddMeasurementRequest] = useState({
    neck: 0,
    chest: 0,
    leftBiceps: 0,
    rightBiceps: 0,
    leftForearm: 0,
    rightForearm: 0,
    waist: 0,
    leftThigh: 0,
    rightThigh: 0,
    leftCalf: 0,
    rightCalf: 0,
    date: new Date().toLocaleDateString(),
  });

  const handleChange = (event) => {
    setaddMeasurementRequest({
      ...addMeasurementRequest,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    sendaddMeasurementRequest();
  };

  async function sendaddMeasurementRequest() {
    const response = await fetch(
      "http://localhost:8080/auth/add-new-measurements",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: getBearer(),
        },
        body: JSON.stringify(addMeasurementRequest),
      }
    );
    navigate("/panel/Measurements");
  }

  return (
    <Form method="post" className="add-measurements-form">
      <span className="input-field">
        <IoMdResize className="icon" />
        <p className="add-weight-info">Neck:</p>
        <input
          id="neck"
          type="number"
          name="neck"
          min={0}
          max={500}
          step={0.1}
          required
          value={addMeasurementRequest.neck}
          onChange={handleChange}
        />
      </span>

      <span className="input-field">
        <IoMdResize className="icon" />
        <p className="add-weight-info">Chest:</p>
        <input
          id="chest"
          type="number"
          name="chest"
          min={0}
          max={200}
          step={0.1}
          required
          value={addMeasurementRequest.chest}
          onChange={handleChange}
        />
      </span>

      <span className="input-field">
        <IoMdResize className="icon" />
        <p className="add-weight-info">Left Biceps:</p>
        <input
          id="leftBiceps"
          type="number"
          name="leftBiceps"
          min={0}
          max={200}
          step={0.1}
          required
          value={addMeasurementRequest.leftBiceps}
          onChange={handleChange}
        />
      </span>
      <span className="input-field">
        <IoMdResize className="icon" />
        <p className="add-weight-info">Right Biceps:</p>
        <input
          id="rightBiceps"
          type="number"
          name="rightBiceps"
          min={0}
          max={200}
          step={0.1}
          required
          value={addMeasurementRequest.rightBiceps}
          onChange={handleChange}
        />
      </span>

      <span className="input-field">
        <IoMdResize className="icon" />
        <p className="add-weight-info">Left Forearm:</p>
        <input
          id="leftForearm"
          type="number"
          name="leftForearm"
          min={0}
          max={200}
          step={0.1}
          required
          value={addMeasurementRequest.leftForearm}
          onChange={handleChange}
        />
      </span>

      <span className="input-field">
        <IoMdResize className="icon" />
        <p className="add-weight-info">Right Forearm:</p>
        <input
          id="rightForearm"
          type="number"
          name="rightForearm"
          min={0}
          max={200}
          step={0.1}
          required
          value={addMeasurementRequest.rightForearm}
          onChange={handleChange}
        />
      </span>

      <span className="input-field">
        <IoMdResize className="icon" />
        <p className="add-weight-info">Waist:</p>
        <input
          id="waist"
          type="number"
          name="waist"
          min={0}
          max={200}
          step={0.1}
          required
          value={addMeasurementRequest.waist}
          onChange={handleChange}
        />
      </span>

      <span className="input-field">
        <IoMdResize className="icon" />
        <p className="add-weight-info">Left Thigh:</p>
        <input
          id="leftThigh"
          type="number"
          name="leftThigh"
          min={0}
          max={200}
          step={0.1}
          required
          value={addMeasurementRequest.leftThigh}
          onChange={handleChange}
        />
      </span>

      <span className="input-field">
        <IoMdResize className="icon" />
        <p className="add-weight-info">Right Thigh:</p>
        <input
          id="rightThigh"
          type="number"
          name="rightThigh"
          min={0}
          max={200}
          step={0.1}
          required
          value={addMeasurementRequest.rightThigh}
          onChange={handleChange}
        />
      </span>

      <span className="input-field">
        <IoMdResize className="icon" />
        <p className="add-weight-info">Left Calf:</p>
        <input
          id="leftCalf"
          type="number"
          name="leftCalf"
          min={0}
          max={200}
          step={0.1}
          required
          value={addMeasurementRequest.leftCalf}
          onChange={handleChange}
        />
      </span>

      <span className="input-field">
        <IoMdResize className="icon" />
        <p className="add-weight-info">Right Calf:</p>
        <input
          id="rightCalf"
          type="number"
          name="rightCalf"
          min={0}
          max={200}
          step={0.1}
          required
          value={addMeasurementRequest.rightCalf}
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
          value={addMeasurementRequest.date}
          onChange={handleChange}
        />
      </span>
      <hr />
      <button onClick={handleSubmit}>Add Measurements</button>
    </Form>
  );
};

export default AddMeasurementsForm;
