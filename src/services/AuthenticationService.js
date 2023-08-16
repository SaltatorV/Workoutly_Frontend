import { redirect } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export function setNewAuthenticationToken(token) {
  cookies.set("token", token, { path: "/" });
}

export function getAuthenticationToken() {
  const token = cookies.get("token");

  if (!token) {
    return null;
  }

  return token;
}

export function tokenLoader() {
  const token = getAuthenticationToken();
  return token;
}

export function isAuthenticatedLoader() {
  const token = getAuthenticationToken();

  if (!token && token !== undefined) {
    return redirect("/");
  }

  return token;
}

export function isLogged() {
  const token = getAuthenticationToken();

  if (token) {
    return redirect("/panel");
  }

  return null;
}

export function removeToken() {
  cookies.remove("token");
}

export function getBearer() {
  return "Bearer " + getAuthenticationToken();
}
