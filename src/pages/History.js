import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import GeneralFooter from "../components/footers/GeneralFooter";
import "./css/History.css";
import { measurementsHeaders } from "../utils/MeasurementsHeaders";
import { loadUserProfile } from "../services/ProfileLoader";
import {
  loadCurrentMeasurements,
  loadMeasurementsData,
  loadWeightData,
} from "../services/MeasurementsLoader";
import HistoryLineChart from "../components/charts/history/HistoryLineChart";
import {
  loadCaloriesData,
  loadDurationChart,
  loadExercisesData,
  loadVolumeHistoryData,
} from "../services/HistoryLoader";
import HistoryVolumeRadar from "../components/charts/history/HistoryVolumeRadar";
import ExerciseLineChart from "../components/charts/history/ExerciseLineChart";

const HistoryPage = () => {
  const { userProfile } = useLoaderData();
  const { exerciseHistory } = useLoaderData();
  const { caloriesHistory } = useLoaderData();
  const { volumeHistory } = useLoaderData();
  const { timeDurtaion } = useLoaderData();

  const [searchParams] = useSearchParams();
  const plan = { name: searchParams.get("planName") };
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={userProfile}>
        {(userProfile) => (
          <>
            <Container fluid md={12} className="history-container">
              <Row className="my-4 mx-3">
                <h2>Plan: {plan.name}</h2>
                <hr />
              </Row>
              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <Await resolve={exerciseHistory}>
                  {(exerciseHistory) =>
                    Object.values(exerciseHistory).map((key, index) => {
                      return (
                       <Row className="my-4 mx-3 history-chart-container">
                         <ExerciseLineChart
                          title="AVG Weight Value For Exercise"
                          color="#45b6fb"
                          name={key.exerciseName}
                          data={key.history}
                          profile={userProfile}
                          isLengthChart={false}
                          dataKey="avg"
                        />
                       </Row>
                      );
                    })
                  }
                </Await>
              </Suspense>


              <Row className="my-4 mx-3 history-chart-container">
                <Suspense
                  fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
                >
                  <Await resolve={timeDurtaion}>
                    {(timeDurtaion) => (
                      <HistoryLineChart
                        title="Training Duration"
                        color="#45b6fb"
                        profile={userProfile}
                        isLengthChart={true}
                        data={timeDurtaion}
                        dataKey="duration"
                      />
                    )}
                  </Await>
                </Suspense>
              </Row>
              <Row className="my-4 mx-3 history-chart-container">
                <Suspense
                  fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
                >
                  <Await resolve={caloriesHistory}>
                    {(caloriesHistory) => (
                      <HistoryLineChart
                        title="Burned Calories"
                        color="#45b6fb"
                        profile={userProfile}
                        isLengthChart={true}
                        data={caloriesHistory}
                        dataKey="calories"
                      />
                    )}
                  </Await>
                </Suspense>
              </Row>
              <Row className="my-4 mx-3 history-chart-container">
                <Suspense
                  fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
                >
                  <Await resolve={volumeHistory}>
                    {(volumeHistory) => (
                      <HistoryVolumeRadar
                        title="Training Volume"
                        data={volumeHistory}
                        color="#45b6fb"
                      />
                    )}
                  </Await>
                </Suspense>
              </Row>
            </Container>
            <GeneralFooter />
          </>
        )}
      </Await>
    </Suspense>
  );
};

export default HistoryPage;

export function historyLoader() {
  return defer({
    userProfile: loadUserProfile(),
    exerciseHistory: loadExercisesData(),
    timeDurtaion: loadDurationChart(),
    caloriesHistory: loadCaloriesData(),
    volumeHistory: loadVolumeHistoryData(),
  });
}
