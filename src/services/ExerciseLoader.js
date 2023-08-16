import { getBearer } from "./AuthenticationService";

export async function loadExercises() {
  const response = await fetch("http://localhost:8080/auth/exercises", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getBearer(),
    },
  });
  const responseData = await response.json();
  return responseData;
}
