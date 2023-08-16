import React from "react";
import Modal from "react-bootstrap/Modal";
import "./css/AddMeasurementsModal.css";
import AddMeasurementsForm from "../../forms/measurements/AddMeasurementsForm";

const AddMeasurementsModal = ({ isShowing, hide }) =>
  isShowing ? (
    <React.Fragment>
      <Modal
        size="lg"
        show={isShowing}
        onHide={hide}
        centered
        className="add-measurements-modal"
      >
        <Modal.Header closeVariant="white" closeButton>
          <Modal.Title>Add New Measurements Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddMeasurementsForm />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  ) : null;

export default AddMeasurementsModal;
