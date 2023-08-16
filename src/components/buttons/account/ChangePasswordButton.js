import useModal from "../../hook/useModal";
import ChangePasswordModal from "../../modals/account/ChangePasswordModal";

const ChangePasswordButton = (props) => {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <button className="account-settings-btn" onClick={toggle}>
        Change Password
      </button>
      <ChangePasswordModal isShowing={isShowing} hide={toggle} />
    </>
  );
};

export default ChangePasswordButton;
