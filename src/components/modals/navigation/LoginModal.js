import React from "react";
import Modal from "react-bootstrap/Modal";
import "./css/LoginModal.css";
import LoginForm from "../../forms/home/LoginForm";

const LoginModal = ({ isShowing, hide }) =>
  isShowing ? (
    <React.Fragment>
      <Modal
        size="lg"
        show={isShowing}
        onHide={hide}
        centered
        className="login-modal"
      >
        <Modal.Header closeVariant="white" closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  ) : null;

export default LoginModal;
