import React from "react";
import Modal from "react-bootstrap/Modal";
import "./css/RegisterModal.css";
import RegisterForm from "../../forms/home/RegisterForm";

const RegisterModal = ({ isShowing, hide }) =>
  isShowing ? (
    <React.Fragment>
      <Modal
        size="lg"
        show={isShowing}
        onHide={hide}
        centered
        className="register-modal"
      >
        <Modal.Header closeVariant="white" closeButton>
          <Modal.Title tyle={{ fontSize: 30 }}>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterForm hide={hide} />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  ) : null;

export default RegisterModal;
