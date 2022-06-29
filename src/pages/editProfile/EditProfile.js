import React from "react";
import AppLayout from "../../components/layouts/AppLayout";
import profileIcon from "../../assets/icons/profileIcon.png";
import InputArea from "./components/InputArea";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const handleCancel = () => window.history.back();
  return (
    <AppLayout pageTitle="My Profile">
      <div className="updateInfoContainer">
        <img src={profileIcon} alt="profileIcon" />
        <h5 style={{ color: "#E99A4E",paddingBottom:"10px" }}>Change Photo</h5>
        <InputArea />
        <button
          onClick={handleCancel}
          style={{ border: "none", color: "#7B7B7B", backgroundColor: "transparent" }}
        >
          Cancel
        </button>
        <Link
          to="/myprofile"
          style={{ textDecoration: "none",color:"#E99A4E",float:"right",marginRight:"60%" }}
        >
          Save
        </Link>
      </div>
    </AppLayout>
  );
};

export default EditProfile;
