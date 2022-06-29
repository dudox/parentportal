import React from "react";
import { Modal, Button, ModalTitle } from "react-bootstrap";
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
      <Modal.Title>
        <img src={Checkmark} alt="checkmark" className="checkMark" />
      </Modal.Title>

      <Modal.Body>
        <ul>
          <li>
            Please enter the mobile number for your child(ren) to add your
            child(ren) to your account.
          </li>
          <li>
            Please note that in some instances a child may not have entered
            their mobile number into K'Bro.
          </li>
          <li>
            Simply ask them to enter their mobile phone number in their K'Bro
            profile, and you agree to provide access to their "Am I OK?"
            results.
          </li>
          <li>
            In some cases, children may no longer be actively using K'Bro and
            have deleted K'bro from their mobile phone or tablet.
          </li>
        </ul>
        <input className="doNotShowAgain" type="checkbox" />
        <label>Don't show this again</label>
      </Modal.Body>

      <Link
        to="/createprofile"
        style={{
          color: "orange",
          backgroundColor: "white",
          borderColor: "transparent",
          textAlign: "center",
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
          position: "absolute",
          right: 0,
          fontSize: "41px",
        }}
        onClick={() => setModalShow(true)}
      >
        <FeatherIcon icon={"plus"} style={{ color: "#E6984E" }} size={50}/>
        Invite a child
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Popup;
