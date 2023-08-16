import React from "react";
import Modal from "react-bootstrap/Modal";
import "./css/ExerciseModal.css";
import LoginForm from "../../forms/home/LoginForm";
import AddExerciseForm from "../../forms/routines/ExercisesForm";

const ExerciseModal = ({
  addExercise,
  removeExercise,
  exercises,
  isShowing,
  hide,
}) =>
  isShowing ? (
    <React.Fragment>
      <Modal
        size="lg"
        show={isShowing}
        onHide={hide}
        centered
        className="exercise-modal"
      >
        <Modal.Header closeVariant="white" closeButton>
          <Modal.Title>Add Exercises To Your Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddExerciseForm
            addExercise={addExercise}
            removeExercise={removeExercise}
            exercises={exercises}
          />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  ) : null;

export default ExerciseModal;
