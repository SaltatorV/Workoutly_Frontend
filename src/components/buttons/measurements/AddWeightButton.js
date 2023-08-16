import useModal from "../../hook/useModal";
import AddWeightModal from "../../modals/measurements/AddWeightModal";

const AddWeightButton = (props) => {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <button className="add-weight-btn" onClick={toggle}>
        Add Weight Button
      </button>
      <AddWeightModal isShowing={isShowing} hide={toggle} />
    </>
  );
};

export default AddWeightButton;
