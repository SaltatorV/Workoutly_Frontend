import RegisterModal from "../../modals/navigation/RegisterModal";
import useModal from "../../hook/useModal";

import "./css/RegisterButton.css";

const RegisterButton = (props) => {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <button className="registerBtn" onClick={toggle}>
        Register
      </button>
      <RegisterModal isShowing={isShowing} hide={toggle} />
    </>
  );
};

export default RegisterButton;
