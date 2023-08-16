import { getBearer } from "./AuthenticationService";
import Cookies from "universal-cookie";
export async function loadSummaryWorkoutPlans() {
  const cookies = new Cookies();
  const response = await fetch("http://localhost:8080/auth/get-workout-plans", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getBearer(),
    },
  });
  const plans = await response.json();
  Object.values(plans).map((key, index) => {
    const exercises = Object.values(key.exercises).map((key) => {
      return {
        name: key.name,
        type: key.type,
      };
    });
    cookies.set(key.name, exercises, { path: "/" });
  });

  return plans;
}
