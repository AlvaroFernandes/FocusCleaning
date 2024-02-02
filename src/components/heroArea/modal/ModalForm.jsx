import { Modal } from "react-bootstrap";
import ModalFormQuote from "./ModalFormQuote";
import { useState } from "react";

const ModalForm = ({ show, close, type }) => {
  const [title, setTitle] = useState();
  if (type === "quote") {
    setTitle("Get an aproximated quote for your service");
  } else if (type === "available") {
    setTitle("Check our availability");
  }
  return (
    <>
      <Modal show={show} onHide={() => close}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
};

export default ModalForm;
