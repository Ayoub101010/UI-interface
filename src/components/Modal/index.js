import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../Modal/Modal.css";

function ErrorModal({ show, onHide, errorMessages }) {
  return (
    <Modal className="model" show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: "brown" }}>Error !</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errorMessages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function ConfirmationModal({ show, onHide, onConfirm }) {
  return (
    <Modal className="model" show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body> Please Confirm Policy Creation </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button
          name="ok"
          variant="primary"
          className="confirmbutton"
          onClick={onConfirm}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function ModalComponent({ show, onHide, errorMessages = [], onConfirm }) {
  if (errorMessages.length > 0) {
    return <ErrorModal show={show} onHide={onHide} errorMessages={errorMessages} />;
  } else {
    return (
      <ConfirmationModal show={show} onHide={onHide} onConfirm={onConfirm} />
    );
  }
}

export default ModalComponent;
