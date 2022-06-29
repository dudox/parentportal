import React, { useEffect, useState } from "react";
import ToolTip from "./ToolTip";
import { Card } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import CardLayout from "../../../components/layouts/CardLayout";

const ShowTool = () => {
  const [showTool, setShowTool] = useState(false);
  const onClick = () => setShowTool(true);

  return (
    <>
      <CardLayout>
        <div>
          <div className="toolTipContainer">
            <div className="toolTip">
              <h4>
                Conversation Starter Tips
                <Link
                  to="/toolmoreinfo"
                  style={{
                    textDecoration: "none",
                    color: "#E6984E",
                    float: "right",
                  }}
                >
                  <FeatherIcon icon={"chevron-right"} size={40} />
                </Link>
              </h4>
              <h6>
                Some tips on how to strike up a conversation with your child
              </h6>
            </div>
          </div>
          {showTool ? <ToolTip /> : null}
          <div className="toolTipContainer">
            <div className="toolTip">
              <h4>
                Emergency Contact Information
                <Link
                  to="/emergencyInfo"
                  style={{
                    textDecoration: "none",
                    color: "#E6984E",
                    float: "right",
                  }}
                >
                  <FeatherIcon icon={"chevron-right"} size={40} />
                </Link>
              </h4>
              <h6>List of Contacts and hotlines used for emergencies.</h6>
            </div>
          </div>
        </div>
      </CardLayout>
    </>
  );
};
export default ShowTool;
