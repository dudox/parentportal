import React, { useState } from "react";
import { Card, ProgressBar } from "react-bootstrap";
import boyIcon from "../../../assets/icons/boy-5.png";
import girlIcon from "../../../assets/icons/girl-4.png";
import "../../../assets/global.scss";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

const ChildrenCard = () => {
  return (
    <>
      <div className="childrenCardWrapper">
        <div className="childrenCardContainer">
          <Card className="childrenCard shadow">
            <Card.Body>
              <Card.Title>Grant</Card.Title>
              <div className="inactiveIcon">
                <img src={boyIcon} alt="boyIcon" className="inactiveIcon" />
                <p style={{ textAlign: "center", color: "#E6984E" }}>
                  Edit
                  <FeatherIcon
                    icon={"edit-2"}
                    size={15}
                    style={{ color: "E6984E" }}
                  />
                </p>
              </div>
              <h6>Invite Pending</h6>
              <Card.Text>
                <p>School</p>
                <ProgressBar now={0} />
                <p>Family</p>
                <ProgressBar now={0} />
                <p>Social</p>
                <ProgressBar now={0} />
                <p>Other</p>
                <ProgressBar now={0} />
              </Card.Text>
              <Link to="/childinfo" className="btnChildren">
                See More
              </Link>
            </Card.Body>
          </Card>
        </div>
        
        <div className="childrenCardContainer">
          <Card className="childrenCard shadow">
            <Card.Body>
              <Card.Title>Pamela</Card.Title>
              <img src={girlIcon} alt="girlIcon" />
              <p style={{ textAlign: "center", color: "#E6984E" }}>
                Edit
                <FeatherIcon
                  icon={"edit-2"}
                  size={15}
                  style={{ color: "E6984E" }}
                />
              </p>

              <h6>Active</h6>
              <Card.Text>
                <p>School</p>
                <ProgressBar now={60} />
                <p>Family</p>
                <ProgressBar now={0} />
                <p>Social</p>
                <ProgressBar now={0} />
                <p>Other</p>
                <ProgressBar now={0} />
              </Card.Text>
              <Link to="/childinfo" className="btnChildren">
                See More
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ChildrenCard;
