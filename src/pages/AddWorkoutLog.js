import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import GeneralFooter from "../components/footers/GeneralFooter";
import ParagraphBox from "../components/box/general/ParagraphBox";
import { useNavigate } from "react-router-dom";
import "./css/AddNewWorkout.css";
import { useState } from "react";
import { loadSummaryWorkoutPlans } from "../services/CarouselLoader";
import { getBearer } from "../services/AuthenticationService";
import Cookies from "universal-cookie";
const AddWorkoutLog = () => {
  const { workoutPlans } = useLoaderData();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const idToSend = { id: searchParams.get("id") };
  const planName = { planName: searchParams.get("planName") };
  const planNameToSend = { planName: searchParams.get("planName") };
  const cookies = new Cookies();
  const [index, setIndex] = useState(0);
  let exercises = [];
  const findExercise = () => {
    exercises = cookies.get(planName.planName);
    if (index > exercises.length) {
      navigate("/panel");
      return exercises[0];
    }
    return exercises[index];
  };

  const [addWorkoutLog, setAddWorkoutLog] = useState({
    weight: 0,
    reps: 0,
    set: 1,
    exerciseName: findExercise().name,
    planName: planNameToSend.planName,
    id: idToSend.id,
  });

  const handleChange = (event) => {
    setAddWorkoutLog({
      ...addWorkoutLog,
      [event.target.name]: event.target.value,
    });
  };

  async function saveWorkoutLogData() {
    const request = {
      weight: addWorkoutLog.weight,
      reps: addWorkoutLog.reps,
      set: addWorkoutLog.set,
      exerciseName: findExercise().name,
      planName: planNameToSend.planName,
      id: idToSend.id,
    };
    const response = await fetch(
      "http://localhost:8080/auth/add-workout-log-data",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: getBearer(),
        },
        body: JSON.stringify(request),
      }
    );
    const set = addWorkoutLog.set;
    setAddWorkoutLog({
      weight: 0,
      reps: 0,
      set: set + 1,
      exerciseName: exercises[index].name,
      planName: planNameToSend.planName,
    });
  }

  async function nextExercise() {
    const idx = index + 1;
    if (idx == exercises.length) {
      navigate("/panel");
    }
    setIndex(idx);
    setAddWorkoutLog({
      weight: 0,
      reps: 0,
      set: 1,
      exerciseName: exercises[idx],
      planName: planNameToSend.planName,
    });
  }

  const printSet = () => {
    return <h4 className="add-new-workout-header">Set: {addWorkoutLog.set}</h4>;
  };

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={workoutPlans}>
        {(workoutPlans) => (
          <>
            <Container fluid className="add-new-workout-container">
              <Row className="my-4">
                <h3 className="add-new-workout-header">
                  Exercise: {findExercise().name}
                </h3>
                <h4 className="add-new-workout-header">
                  Type: {findExercise().type}
                </h4>
                {printSet()}
              </Row>
              <Row>
                <Col>
                  <hr />
                  <form method="post" className="add-new-workout-form">
                    <hr />
                    <span className="input-field-form">
                      <p>Enter Weight</p>
                      <input
                        id="weight"
                        type="number"
                        name="weight"
                        required
                        value={addWorkoutLog.weight}
                        onChange={handleChange}
                      />
                    </span>

                    <span className="input-field-form">
                      <p>Enter Reps</p>
                      <input
                        id="reps"
                        type="number"
                        name="reps"
                        required
                        value={addWorkoutLog.reps}
                        onChange={handleChange}
                      />
                    </span>
                  </form>
                  <button onClick={saveWorkoutLogData} className="new-workout">
                    Next Set
                  </button>
                  <button onClick={nextExercise} className="mx-4 new-workout">
                    Next Exercise
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

export default AddWorkoutLog;

export function workoutPlansLoader() {
  return defer({
    workoutPlans: loadSummaryWorkoutPlans(),
  });
}
