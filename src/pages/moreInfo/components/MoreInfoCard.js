import React from "react";
import IconGirl4 from "../../../assets/icons/girl-4.png";
import { Link } from "react-router-dom";
import LineChart from "../../../components/charts/LineChart";
import RadialChart from "../../../components/charts/RadialChart";
import FeatherIcon from "feather-icons-react";

const MoreInfoCard = () => {
  const handleClose = () => window.history.back();
  return (
    <>
      <div>
        <Link to="/children" style={{ textDecoration: "none" }}>
          <FeatherIcon
            icon={"chevron-left"}
            style={{ color: "#E6984E" }}
            size={60}
          />
        </Link>
        <div className="moreInfoIcon">
          <h1>Pamela</h1>
          <h3>(Pamela Snowy)</h3>
          <img src={IconGirl4} alt="iconGirl4" />
        </div>
        <div style={{paddingLeft:"14em"}}>
          <button
            style={{ border: "none", color: "#E6984E"}}
          >
            edit
            <FeatherIcon
              icon={"edit-2"}
              style={{ color: "#E6984E",border:"none" }}
              size={30}
              strokeWidth={1}
            />
          </button>
          <h3 style={{ color: "#707070" }}>Active </h3>
        </div>
        <div style={{ textAlign: "center" }}>
          <FeatherIcon
            icon={"arrow-up"}
            style={{ color: "#E6984E" }}
            size={50}
          />
          <button
            onClick={handleClose}
            style={{
              float: "center",
              border: "none",
              color: "#E6984E",
              textAlign: "center",
            }}
          >
            Close
          </button>
          <div>
            <h3 style={{ textAlign: "center", color: "#96C15B" }}>
              Recent Activity with Pamela
            </h3>
          </div>
          <div className="moreInfoCharts">
            <RadialChart />
            <RadialChart />
            <RadialChart />
            <RadialChart />
            <LineChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreInfoCard;
