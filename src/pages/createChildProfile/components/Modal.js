import React from "react";
import { Modal, Button } from "react-bootstrap";
import Checkmark from "../../../assets/icons/icons8-checkmark-96.png";
import { Link } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Title>
        <img src={Checkmark} alt="checkmark" className="checkMark" />
      </Modal.Title>

      <Modal.Body>
        <p>
          We have sent a confirmation request to your child's account. Your
          child's status will remain pending until your child confirms you are a
          parent or guardian and opts you in.
        </p>
      </Modal.Body>

      <Link
        to="/children"
        style={{
          color: "orange",
          backgroundColor: "white",
          borderColor: "transparent",
          textAlign:"center"
        }}
      >
        Continue
      </Link>
    </Modal>
  );
}

const Popup = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        style={{
          color: "orange",
          backgroundColor: "white",
          borderColor: "transparent",
        }}
        onClick={() => setModalShow(true)}
      >
        Continue
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Popup;
