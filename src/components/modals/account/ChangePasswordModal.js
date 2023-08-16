import React from "react";
import Modal from "react-bootstrap/Modal";
import ChangePasswordForm from "../../forms/account/ChangePasswordForm";

import "./css/ChangePasswordModal.css";

const ChangePasswordModal = ({ isShowing, hide }) =>
  isShowing ? (
    <React.Fragment>
      <Modal
        size="lg"
        show={isShowing}
        onHide={hide}
        centered
        className="change-password-modal"
      >
        <Modal.Header closeVariant="white" closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ChangePasswordForm />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  ) : null;

export default ChangePasswordModal;
