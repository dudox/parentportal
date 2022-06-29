import React from "react";
import { Modal, Button } from "react-bootstrap";
import Checkmark from "../../../assets/icons/icons8-checkmark-96.png";
import Deactivated from "./Deactivated";
import FeatherIcon from "feather-icons-react";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Title className="deactivateAlert">
        <FeatherIcon icon={"alert-circle"} size={30} />
      </Modal.Title>

      <Modal.Body>
        <p>
          Once you deactivate your account, you will be able to get it back by
          logging in within 14 days. After that, your account will be deleted.
          Your current subscriptions will be canceled upon deactivation. Confirm
          deactivation of your account"?
        </p>
      </Modal.Body>

      <Deactivated />
    </Modal>
  );
}

const Confirm = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        style={{
          color: "#E35353",
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

export default Confirm;
