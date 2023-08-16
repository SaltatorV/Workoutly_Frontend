import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import MeasurementBox from "../components/box/measurements/MeasurementBox";
import GeneralFooter from "../components/footers/GeneralFooter";
import "./css/Measurements.css";
import { measurementsHeaders } from "../utils/MeasurementsHeaders";
import { loadUserProfile } from "../services/ProfileLoader";
import {
  loadCurrentMeasurements,
  loadMeasurementsData,
  loadWeightData,
} from "../services/MeasurementsLoader";
import WeightChart from "../components/charts/measurements/WeightChart";
import LegsChart from "../components/charts/measurements/LegsChart";
import ArmsChart from "../components/charts/measurements/ArmsChart";
import BodyChart from "../components/charts/measurements/BodyChart";
import AddMeasurementsButton from "../components/buttons/measurements/AddMeasurementsButton";
import AddWeightButton from "../components/buttons/measurements/AddWeightButton";

const legsData = (data) => {
  const legsData = [];
  data.map((key) => {
    legsData.push({
      leftCalf: key.leftCalf,
      rightCalf: key.rightCalf,
      leftThigh: key.leftThigh,
      rightThigh: key.rightThigh,
      date: key.date,
    });
  });
  return legsData;
};

const armsData = (data) => {
  const armsData = [];
  data.map((key) => {
    armsData.push({
      leftForearm: key.leftForearm,
      rightForearm: key.rightForearm,
      leftBiceps: key.leftBiceps,
      rightBiceps: key.rightBiceps,
      date: key.date,
    });
  });
  return armsData;
};

const bodyData = (data) => {
  const bodyData = [];
  data.map((key) => {
    bodyData.push({
      neck: key.neck,
      chest: key.chest,
      waist: key.waist,
      date: key.date,
    });
  });
  return bodyData;
};

const MeasurementsPage = () => {
  const { userProfile } = useLoaderData();
  const { weightData } = useLoaderData();
  const { measurementsData } = useLoaderData();
  const { currentMeasurementsData } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={userProfile}>
        {(userProfile) => (
          <>
            <Container md={12} fluid className="measurements-container">
              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <Await resolve={currentMeasurementsData}>
                  {(currentMeasurementsData) => (
                    <Row className="measurements-data-container">
                      <h2>Current Body Measurements</h2>
                      {Object.values(currentMeasurementsData).map(
                        (key, index) => (
                          <MeasurementBox
                            header={measurementsHeaders()[index]}
                            content={key}
                            index={index}
                            profile={userProfile}
                          />
                        )
                      )}
                    </Row>
                  )}
                </Await>
              </Suspense>
              <Row className="measurement-page-btn">
                <span>
                  <AddWeightButton />
                  <AddMeasurementsButton />
                </span>
              </Row>
              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <Await resolve={weightData}>
                  {(weightData) => (
                    <Row className="my-4 mx-3">
                      <WeightChart profile={userProfile} data={weightData} />
                    </Row>
                  )}
                </Await>
              </Suspense>

              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <Await resolve={measurementsData}>
                  {(measurementsData) => (
                    <Row className="my-4 mx-3">
                      <LegsChart
                        profile={userProfile}
                        data={legsData(measurementsData)}
                      />
                    </Row>
                  )}
                </Await>
              </Suspense>

              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <Await resolve={measurementsData}>
                  {(measurementsData) => (
                    <Row className="my-4 mx-3">
                      <ArmsChart
                        profile={userProfile}
                        data={armsData(measurementsData)}
                      />
                    </Row>
                  )}
                </Await>
              </Suspense>

              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <Await resolve={measurementsData}>
                  {(measurementsData) => (
                    <Row className="my-4 mx-3">
                      <BodyChart
                        profile={userProfile}
                        data={bodyData(measurementsData)}
                      />
                    </Row>
                  )}
                </Await>
              </Suspense>
            </Container>
            <GeneralFooter />
          </>
        )}
      </Await>
    </Suspense>
  );
};

export default MeasurementsPage;

export function measurementsLoader() {
  return defer({
    userProfile: loadUserProfile(),
    currentMeasurementsData: loadCurrentMeasurements(),
    weightData: loadWeightData(),
    measurementsData: loadMeasurementsData(),
  });
}
