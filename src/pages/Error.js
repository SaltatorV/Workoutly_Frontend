import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  navigate("/", { replace: true });
};

export default ErrorPage;
