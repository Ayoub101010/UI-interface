import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../DeletionModal/DeletionModal.css";

function ConfirmationDeletionModal({ show, onHide, onConfirm }) {
  return (
    <Modal className="model" show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body> Are you sure </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          No
        </Button>
        <Button
          name="ok"
          variant="primary"
          className="confirmbutton"
          onClick={onConfirm}
        >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationDeletionModal;
