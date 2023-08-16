import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import GeneralFooter from "../components/footers/GeneralFooter";
import ParagraphBox from "../components/box/general/ParagraphBox";
import { useNavigate } from "react-router-dom";
import "./css/NewWorkout.css";
import { useState } from "react";
import { loadSummaryWorkoutPlans } from "../services/CarouselLoader";
import { getBearer } from "../services/AuthenticationService";

const NewWorkout = () => {
  const { workoutPlans } = useLoaderData();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const planName = { planName: searchParams.get("planName") };
  const planNameToSend = { planName: searchParams.get("planName") };
  const [addWorkout, setAddWorkout] = useState({
    date: "",
    calories: 0,
    duration: 0,
    planName: planNameToSend.planName,
  });

  const handleChange = (event) => {
    setAddWorkout({
      ...addWorkout,
      [event.target.name]: event.target.value,
    });
  };

  async function saveWorkoutData() {
    const response = await fetch(
      "http://localhost:8080/auth/add-workout-data",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: getBearer(),
        },
        body: JSON.stringify(addWorkout),
      }
    );
    const workoutId = await response.json();

    navigate(
      "/panel/add-workout-log?id=" +
        workoutId.routineId +
        "&planName=" +
        addWorkout.planName
    );
  }

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={workoutPlans}>
        {(workoutPlans) => (
          <>
            <Container fluid className="new-workout-container">
              <Row>
                <Col>
                  <h3 className="new-workout-header">
                    Workout Plan Name: {planName.planName}
                  </h3>
                  <hr />
                  <form method="post" className="add-new-workout-form">
                    <hr />

                    <span className="input-field-form">
                      <p>Enter Workout Date</p>
                      <input
                        id="date"
                        type="date"
                        name="date"
                        required
                        value={addWorkout.date}
                        onChange={handleChange}
                      />
                    </span>
                    <hr />
                    <span className="input-field-form">
                      <p>Enter Burned Calories</p>
                      <input
                        type="number"
                        id="calories"
                        min={1}
                        max={600}
                        name="calories"
                        required
                        value={addWorkout.calories}
                        onChange={handleChange}
                      />
                    </span>

                    <span className="input-field-form">
                      <p>Enter Duration Time (In Mins)</p>
                      <input
                        type="number"
                        id="duration"
                        min={1}
                        max={600}
                        name="duration"
                        required
                        value={addWorkout.duration}
                        onChange={handleChange}
                      />
                    </span>
                  </form>
                  <button onClick={saveWorkoutData} className="new-workout">
                    Submit General Data
                  </button>
                </Col>
              </Row>
            </Container>
            <GeneralFooter />
          </>
        )}
      </Await>
    </Suspense>
  );
};

export default NewWorkout;

export function NewWorkoutLoader() {
  return defer({
    workoutPlans: loadSummaryWorkoutPlans(),
  });
}
