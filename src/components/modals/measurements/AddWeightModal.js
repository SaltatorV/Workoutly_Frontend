import React from "react";
import Modal from "react-bootstrap/Modal";
import "./css/AddWeightModal.css";
import AddWeightForm from "../../forms/measurements/AddWeightForm";

const AddWeightModal = ({ isShowing, hide }) =>
  isShowing ? (
    <React.Fragment>
      <Modal
        size="lg"
        show={isShowing}
        onHide={hide}
        centered
        className="add-weight-modal"
      >
        <Modal.Header closeVariant="white" closeButton>
          <Modal.Title>Add New Weight Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddWeightForm />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  ) : null;

export default AddWeightModal;
