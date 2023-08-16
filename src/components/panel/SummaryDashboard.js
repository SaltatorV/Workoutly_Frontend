import { Col, Container, Row } from "react-bootstrap";
import "./css/SummaryDashboard.css";
import SummaryMeasurementsChart from "../charts/panel/SummaryMeasurementsChart";
import SummaryVolumeRadar from "../charts/panel/SummaryVolumeRadar";
import SummaryLineChart from "../charts/panel/SummaryLineChart";
import {
  measurementsDescriptionTestData,
  measurementSummaryData,
  volumeDescriptionTestData,
  volumeSummaryData,
  weightDescriptionTestData,
  weightSummaryData,
  workoutTimeDescriptionTestData,
} from "./TemporaryData";
import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import {
  loadSummaryDurationChart,
  loadSummaryMeasurementsChart,
  loadSummaryVolumeChart,
  loadSummaryWeightChart,
} from "../../services/SummaryDashboardLoader";
import { loadUserProfile } from "../../services/ProfileLoader";
import { loadSummaryWorkoutPlans } from "../../services/CarouselLoader";

const SummaryDashboard = () => {
  const { userProfile } = useLoaderData();
  const { summaryWeightData } = useLoaderData();
  const { summaryMeasurementsData } = useLoaderData();
  const { summaryVolumeData } = useLoaderData();
  const { summaryDurationData } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={userProfile}>
        {(userProfile) => (
          <Container className="summary-dashboard-container py-5">
            <h2 className="mx-5 dashboard-title">Summary Dashboard</h2>
            <Row>
              <Col md={5} className="mx-5 py-5">
                <Suspense
                  fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
                >
                  <Await resolve={summaryWeightData}>
                    {(summaryWeightData) => (
                      <SummaryLineChart
                        description={weightDescriptionTestData}
                        title="Weight Summary"
                        color="#24a0ed"
                        data={summaryWeightData}
                        isLengthChart={false}
                        profile={userProfile}
                        dataKey="weight"
                      />
                    )}
                  </Await>
                </Suspense>
              </Col>
              <Col md={5} className="mx-5 py-5">
              <Suspense
                  fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
                >
                  <Await resolve={summaryVolumeData}>
                    {(summaryVolumeData) => (
                <SummaryVolumeRadar
                  description={volumeDescriptionTestData}
                  title="Volume Summary"
                  color="green"
                  data={summaryVolumeData}
                />
                )}
                </Await>
              </Suspense>
              </Col>
            </Row>
            <Row>
              <Col md={5} className="mx-5 py-5">
                <Suspense
                  fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
                >
                  <Await resolve={summaryDurationData}>
                    {(summaryDurationData) => (
                      <SummaryLineChart
                        description={workoutTimeDescriptionTestData}
                        title="Workout Time Length"
                        color="orange"
                        data={summaryDurationData}
                        isLengthChart={true}
                        profile={userProfile}
                        dataKey="duration"
                      />
                    )}
                  </Await>
                </Suspense>
              </Col>
              <Col md={5} className="mx-5 py-5">
                <Suspense
                  fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
                >
                  <Await resolve={summaryMeasurementsData}>
                    {(summaryMeasurementsData) => (
                      <SummaryMeasurementsChart
                        description={measurementsDescriptionTestData}
                        title="Measurements Summary"
                        data={summaryMeasurementsData}
                        profile={userProfile}
                      />
                    )}
                  </Await>
                </Suspense>
              </Col>
            </Row>
          </Container>
        )}
      </Await>
    </Suspense>
  );
};

export default SummaryDashboard;

export function loaderSummaryWeightChart() {
  return defer({
    userProfile: loadUserProfile(),
    summaryWeightData: loadSummaryWeightChart(),
    summaryMeasurementsData: loadSummaryMeasurementsChart(),
    workoutPlans: loadSummaryWorkoutPlans(),
    summaryVolumeData: loadSummaryVolumeChart(),
    summaryDurationData: loadSummaryDurationChart(),
  });
}
