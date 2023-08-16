import LoginModal from "../../modals/navigation/LoginModal";
import useModal from "../../hook/useModal";

import "./css/LoginButton.css";

const LoginButton = (props) => {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <button className="login-btn" onClick={toggle}>
        Login
      </button>
      <LoginModal isShowing={isShowing} hide={toggle} />
    </>
  );
};

export default LoginButton;
