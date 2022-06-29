import React from "react";
import RadialChart from "../../../components/charts/RadialChart";
import IconGirl4 from "../../../assets/icons/girl-4.png";
import { Link } from "react-router-dom";
import Card from "../../../components/card/Card";
import FeatherIcon from "feather-icons-react";

const ChildInfoCard = () => {
  const goBack = () => window.history.back();
  return (
    <>
      <div className="infoContainer">
        <div>
          <button onClick={goBack} style={{ border: "none" }}>
            <FeatherIcon
              icon={"chevron-left"}
              style={{ color: "#E6984E" }}
              size={60}
              strokeWidth={2}
            />
          </button>
        </div>
        <div className="iconContainer">
          <h1>Pamela</h1>
          <h3>(Pamela Snowy)</h3>
          <img src={IconGirl4} alt="IconGirl4" />
          <div>
            <button style={{ border: "none", color: "#E6984E" }}>
              edit
              <FeatherIcon
                icon={"edit-2"}
                style={{ color: "#E6984E" }}
                size={30}
                strokeWidth={1}
              />
            </button>
          </div>
          <h3 style={{ color: "#707070" }}>Active </h3>
        </div>
        <div className="chartArea">
          <h3 style={{ color: "#96C15B" }}>Recent Activity with Pamela</h3>
          <div className="chartContainer">
            <RadialChart />
            <RadialChart />
            <RadialChart />
            <RadialChart />
          </div>
          <div style={{ alignItems: "center" }}>
            <Link
              to="/moreInfo"
              style={{ color: "#E6984E", textDecoration: "none" }}
            >
              Expand
            </Link>
          </div>
          <FeatherIcon
            icon={"arrow-down"}
            style={{ color: "E6984E" }}
            size={50}
            strokeWidth={2}
          />
        </div>
      </div>
    </>
  );
};

export default ChildInfoCard;
