import { useState, useEffect } from "react";
import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "./css/NewWorkoutPlan.css";
import { loadExercises } from "../services/ExerciseLoader";
import ExerciseButtons from "../components/buttons/routines/ExerciseButtons";
import { getBearer } from "../services/AuthenticationService";
const NewWorkoutPlan = () => {
  const { exercises } = useLoaderData();

  const [addWorkoutPlan, setAddWorkoutPlan] = useState({
    workoutPlanName: "",
    description: "",
    exercises: [],
  });

  const handleChange = (event) => {
    setAddWorkoutPlan({
      ...addWorkoutPlan,
      [event.target.name]: event.target.value,
    });
  };

  async function sendRequest() {
    const response = await fetch(
      "http://localhost:8080/auth/add-workout-plan",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: getBearer(),
        },
        body: JSON.stringify(addWorkoutPlan),
      }
    );
  }

  const addExercise = (name) => {
    const newExercises = addWorkoutPlan.exercises;
    newExercises.push(name);
    setAddWorkoutPlan({
      ...addWorkoutPlan,
      exercises: newExercises,
    });
  };

  const removeExercise = (name) => {
    const newExercises = addWorkoutPlan.exercises;
    const index = newExercises.indexOf(name);
    if (index !== -1) {
      newExercises.splice(index, 1);
    }
    setAddWorkoutPlan({
      ...addWorkoutPlan,
      exercises: newExercises,
    });
  };

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={exercises}>
        {(exercises) => (
          <Container
            md={12}
            fluid
            className="mx-0 my-0 add-workout-plan-container"
          >
            <Row>
              {" "}
              <Col md={5}>
                <form method="post" className="add-new-workout-form">
                  <h3 className="add-workout-header">
                    Add Workout Plan Information
                  </h3>
                  <hr />
                  <span className="input-field-form">
                    <input
                      id="workoutPlanName"
                      type="text"
                      name="workoutPlanName"
                      required
                      placeholder="Enter Workout Plan Name"
                      value={addWorkoutPlan.workoutPlanName}
                      onChange={handleChange}
                    />
                  </span>
                  <hr />
                  <span className="input-field-form">
                    <textarea
                      id="description"
                      rows={4}
                      cols={50}
                      name="description"
                      required
                      placeholder="Enter Workout Plan Description"
                      value={addWorkoutPlan.description}
                      onChange={handleChange}
                    />
                  </span>
                </form>
              </Col>
              <Col md={2}></Col>
              <Col md={5}>
                <h3 className="add-workout-header">Choose Exercises</h3>
                <hr />
                <ExerciseButtons
                  addExercise={addExercise}
                  removeExercise={removeExercise}
                  exercises={exercises}
                />
              </Col>
            </Row>
            <Row>
              <button className="add-workout-plan-btn" onClick={sendRequest}>
                Add Workout Plan
              </button>
            </Row>
          </Container>
        )}
      </Await>
    </Suspense>
  );
};

export default NewWorkoutPlan;

export function exerciseLoader() {
  return defer({
    exercises: loadExercises(),
  });
}
