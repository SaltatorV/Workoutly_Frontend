import { redirect } from "react-router-dom";
import { removeToken } from "../services/AuthenticationService";

export async function action() {
  removeToken();
  return redirect("http://localhost:3000/");
}
