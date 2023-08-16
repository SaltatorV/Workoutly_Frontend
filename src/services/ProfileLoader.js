import { getBearer } from "./AuthenticationService";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export async function loadUserProfile() {
  const response = await fetch("http://localhost:8080/auth/user-profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getBearer(),
    },
  });

  const userProfile = await response.json();
  cookies.remove("userProfile");
  cookies.set("userProfile", userProfile);
  return userProfile;
}

export function updateUserProfile(userProfile) {
  let profile = cookies.get("userProfile");
  cookies.remove("userProfile");
  profile = { ...profile, userProfile };
  cookies.set("userProfile", profile);
}

export function getUserProfile() {
  return cookies.get("userProfile");
}
