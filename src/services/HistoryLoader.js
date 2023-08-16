import { getBearer } from "./AuthenticationService";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export async function loadExercisesData() {
  const plan = cookies.get("historyPlanName")

  const bodyContent = {
    planName: plan,
  };
  const response = await fetch("http://localhost:8080/auth/get-exercise-history", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getBearer(),
    },
    body: JSON.stringify(bodyContent),
  }); 

  const responseData = await response.json()

  return responseData;
}



export async function loadDurationChart() {
  const plan = cookies.get("historyPlanName")

  const bodyContent = {
    planName: plan,
  };
  const response = await fetch(
    "http://localhost:8080/auth/get-full-duration-history",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getBearer(),
      },
      body: JSON.stringify(bodyContent),
    }
  );

  const responseData = await response.json();
  const formattedData = Object.values(responseData.responses).map((key, index) => {
    const dateFromTimestamp = new Date(key.date);
    return {
      ...key,
      date: dateFromTimestamp.toLocaleDateString(),
    };
  });
  return formattedData;
}


export async function loadCaloriesData() {
  const plan = cookies.get("historyPlanName")

  const bodyContent = {
    planName: plan,
  };
  const response = await fetch(
    "http://localhost:8080/auth/get-calories-history",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getBearer(),
      },
      body: JSON.stringify(bodyContent),
    }
  );

  const responseData = await response.json();
  const formattedData = Object.values(responseData.responses).map((key, index) => {
    const dateFromTimestamp = new Date(key.date);
    return {
      ...key,
      date: dateFromTimestamp.toLocaleDateString(),
    };
  });
  return formattedData;
}



export async function loadVolumeHistoryData() {
  const plan = cookies.get("historyPlanName")

  const bodyContent = {
    planName: plan,
  }
    const response = await fetch(
      "http://localhost:8080/auth/get-full-history",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: getBearer(),
        },
        body: JSON.stringify(bodyContent),
      }
    );
  
    const responseData = await response.json();
      const keys = Object.keys(responseData)
    const volumeData = Object.values(responseData).map((key,index) => {
  
      return {
        muscleGroup: keys[index],
        value: key
      }
    })
  
    return volumeData;
  }