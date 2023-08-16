import { getBearer } from "./AuthenticationService";
export async function loadCurrentMeasurements() {
  const response = await fetch(
    "http://localhost:8080/auth/get-current-measurements",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getBearer(),
      },
    }
  );

  return await response.json();
}

export async function loadWeightData() {
  const response = await fetch("http://localhost:8080/auth/get-weight-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getBearer(),
    },
  });

  const responseData = await response.json();

  const formattedData = responseData.map((key, index) => {
    const dateFromTimestamp = new Date(key.date);
    return {
      ...key,
      date: dateFromTimestamp.toLocaleDateString(),
    };
  });

  return formattedData;
}

export async function loadMeasurementsData() {
  const response = await fetch(
    "http://localhost:8080/auth/get-measurement-data",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getBearer(),
      },
    }
  );

  const responseData = await response.json();

  const formattedData = responseData.map((key, index) => {
    const dateFromTimestamp = new Date(key.date);
    return {
      ...key,
      date: dateFromTimestamp.toLocaleDateString(),
    };
  });

  return formattedData;
}
