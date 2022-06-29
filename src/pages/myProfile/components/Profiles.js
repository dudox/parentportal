import React from "react";
import profileIcon from "../../../assets/icons/profileIcon.png";
import InfoList from "../components/ListGroup";
import { ListGroup } from "react-bootstrap";
import Confirm from "./Confirm";
import { Link } from "react-router-dom";

const Profiles = () => {
  return (
    <>
      <div className="myProfileContainer">
        <div>
          <img src={profileIcon} alt="ProfileIcon" />
        </div>
        <Link
          to="/editprofile"
          style={{ textDecoration: "none", color: "#E6984E", marginLeft:"30%" }}
        >
          Edit Info
        </Link>
        <div className="profileContainer">
          <ListGroup
            variant="flush"
            style={{ borderBottom: "0 none" }}
          >
            <ListGroup.Item>Phone Number</ListGroup.Item>
            <ListGroup.Item>Email</ListGroup.Item>
            <ListGroup.Item>Full Name</ListGroup.Item>
            <ListGroup.Item>Password</ListGroup.Item>
          </ListGroup>
          <InfoList />
        </div>
        <div style={{ marginRight: "auto", marginLeft: "auto" }}>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <div className="emailNotification">
            <h3>Email Notifications</h3>
            <p>
              Turning off email notifications will disable general email
              updates, but emergency emails will stay enabled.
            </p>
          </div>
        </div>
        <div>
          <Confirm />
        </div>
      </div>
    </>
  );
};

export default Profiles;
