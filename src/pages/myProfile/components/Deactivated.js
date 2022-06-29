import React from "react";
import { Modal, Button } from "react-bootstrap";
import Checkmark from "../../../assets/icons/icons8-checkmark-96.png";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Title  className= "deactivateAlert">
        <FeatherIcon icon={"alert-circle"}/>
        Deactivation Successful
      </Modal.Title>

      <Modal.Body>
        <p>
         Sorry to see you go! If you change your mind, you can log back in within 14days before your account becomes deleted.
        </p>
      </Modal.Body>

      <Link
        to="/children"
        style={{
          color: "orange",
          backgroundColor: "white",
          borderColor: "transparent",
          textAlign: "center",
        }}
      >
        Log Out
      </Link>
    </Modal>
  );
}

const Deactivated = () => {
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
        Deactivate Account
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Deactivated;