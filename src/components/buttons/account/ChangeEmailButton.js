import useModal from "../../hook/useModal";
import ChangeEmailModal from "../../modals/account/ChangeEmailModal";

const ChangeEmailButton = (props) => {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <button className="account-settings-btn" onClick={toggle}>
        Change Email
      </button>
      <ChangeEmailModal isShowing={isShowing} hide={toggle} />
    </>
  );
};

export default ChangeEmailButton;
