import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import TextBox from "../components/box/general/TextBox";
import GeneralFooter from "../components/footers/GeneralFooter";
import ChangeEmailButton from "../components/buttons/account/ChangeEmailButton";
import ChangePasswordButton from "../components/buttons/account/ChangePasswordButton";
import { MeasurementUnit, WeightUnit } from "../components/units/WeightUnit";
import MeasurementUnitSwitch from "../components/switch/account/MeasurementUnitSwitch";

import "./css/AccountSettings.css";
import {
  convertCmToIn,
  convertInToCm,
  convertKgToLbs,
  convertLbsToKg,
} from "../utils/UnitConverter";
import { getBearer } from "../services/AuthenticationService";
import { getUserProfile, loadUserProfile } from "../services/ProfileLoader";
import NumberBox from "../components/box/general/NumberBox";

const weightUnits = WeightUnit;
const measurementUnits = MeasurementUnit;

const AccountSettingsPage = () => {
  const { userProfile } = useLoaderData();
  const [profile, setProfile] = useState(getUserProfile());
  const [userProfileSaved, setUserProfileSaved] = useState(false);
  const isWeightChecked = () => {
    return profile.weightUnit === weightUnits.LBS;
  };

  const switchWeightUnit = () => {
    profile.weightUnit === weightUnits.KG
      ? setProfile({
          ...profile,
          weight: convertKgToLbs(profile.weight),
          weightUnit: weightUnits.LBS,
        })
      : setProfile({
          ...profile,
          weight: convertLbsToKg(profile.weight),
          weightUnit: weightUnits.KG,
        });
  };

  const isMeasurementsChecked = () => {
    return profile.measurementUnit === measurementUnits.IN;
  };

  const switchMeasurementUnit = () => {
    profile.measurementUnit === measurementUnits.CM
      ? setProfile({
          ...profile,
          height: convertCmToIn(profile.height),
          measurementUnit: measurementUnits.IN,
        })
      : setProfile({
          ...profile,
          height: convertInToCm(profile.height),
          measurementUnit: measurementUnits.CM,
        });
  };

  const handleWeightChange = (event) => {
    setProfile({
      ...profile,
      height: event.target.value,
    });
  };

  async function saveProfile() {
    const requestBody = {
      height: profile.height,
      weight: profile.weight,
      weightUnit: profile.weightUnit,
      measurementUnit: profile.measurementUnit,
    };

    const response = await fetch("http://localhost:8080/auth/update-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getBearer(),
      },
      body: JSON.stringify(requestBody),
    });
    setUserProfileSaved(true);
    setProfile(...profile, requestBody);
  }

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={userProfile}>
        {(userProfile) => (
          <>
            <Container fluid className="account-container">
              <Row className="general-settings my-5">
                {userProfileSaved && (
                  <p className="updated-profile">
                    Successfully updated your profile
                  </p>
                )}

                <h3>General Information</h3>
                <hr />
                <TextBox title="Username:" text={profile.username} />
                <TextBox title="Email Address:" text={profile.emailAddress} />
                <span>
                  <ChangePasswordButton />
                  <ChangeEmailButton />
                </span>
              </Row>

              <Row className="routine-settings my-5">
                <h3>Routine Settings</h3>
                <hr />
                <h4 className="my-4">Personal Data</h4>
                <NumberBox
                  title="Height:"
                  step={0.1}
                  min={10}
                  max={300}
                  initValue={profile.height}
                  text={profile.measurementUnit}
                  onChange={handleWeightChange}
                />
                <TextBox
                  title="Weight:"
                  text={profile.weight + " " + profile.weightUnit}
                />
                <TextBox title="BMI:" text={profile.bmi} />
                <hr />
                <h4>Units</h4>
                <MeasurementUnitSwitch
                  unit_a={weightUnits.KG}
                  unit_b={weightUnits.LBS}
                  isChecked={isWeightChecked()}
                  toggle={switchWeightUnit}
                />
                <MeasurementUnitSwitch
                  unit_a={measurementUnits.CM}
                  unit_b={measurementUnits.IN}
                  isChecked={isMeasurementsChecked()}
                  toggle={switchMeasurementUnit}
                />
                <button className="my-5 save-profile-btn" onClick={saveProfile}>
                  Save
                </button>
              </Row>
            </Container>
            <GeneralFooter />
          </>
        )}
      </Await>
    </Suspense>
  );
};

export default AccountSettingsPage;

export function userProfileLoader() {
  return defer({
    userProfile: loadUserProfile(),
  });
}
