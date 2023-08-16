import { getBearer } from "./AuthenticationService";
export async function loadSummaryWeightChart() {
  const response = await fetch(
    "http://localhost:8080/auth/get-summary-weight-dashboard",
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

export async function loadSummaryMeasurementsChart() {
  const response = await fetch(
    "http://localhost:8080/auth/get-summary-measurement-dashboard",
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

export async function loadSummaryVolumeChart() {

  const workoutPlans = await fetch("http://localhost:8080/auth/get-workout-plans", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getBearer(),
    },
  });
  const plans = Object.values(await workoutPlans.json());

  if(plans.length === 0) {
    return {
      arms: 0,
      legs: 0,
      back: 0,
      calves: 0,
      chest: 0,
      shoulders: 0
    }
  }

  const body = {
    planName: plans[0].name
  }
  const response = await fetch(
    "http://localhost:8080/auth/get-volume-history",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getBearer(),
      },
      body: JSON.stringify(body),
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


export async function loadSummaryDurationChart() {
  const response = await fetch(
    "http://localhost:8080/auth/get-duration-history",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getBearer(),
      },
    }
  )

  if(response.status === 400) {
    return {
      date: 0,
      duration: 0
    }
  }


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