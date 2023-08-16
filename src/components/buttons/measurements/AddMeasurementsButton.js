import useModal from "../../hook/useModal";
import AddMeasurementsModal from "../../modals/measurements/AddMeasurementsModal";

const AddMeasurementsButton = (props) => {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <button className="add-measurements-btn" onClick={toggle}>
        Add Measurements
      </button>
      <AddMeasurementsModal isShowing={isShowing} hide={toggle} />
    </>
  );
};

export default AddMeasurementsButton;
