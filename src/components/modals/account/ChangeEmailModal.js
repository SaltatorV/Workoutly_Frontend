import React from "react";
import Modal from "react-bootstrap/Modal";
import "./css/ChangeEmailModal.css";
import ChangeEmailForm from "../../forms/account/ChangeEmailForm";

const ChangeEmailModal = ({ isShowing, hide }) =>
  isShowing ? (
    <React.Fragment>
      <Modal
        size="lg"
        show={isShowing}
        onHide={hide}
        centered
        className="change-email-modal"
      >
        <Modal.Header closeVariant="white" closeButton>
          <Modal.Title>Change Email Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChangeEmailForm />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  ) : null;

export default ChangeEmailModal;
