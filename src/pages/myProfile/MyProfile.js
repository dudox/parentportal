import React from "react";
import AppLayout from "../../components/layouts/AppLayout";
import CardLayout from "../../components/layouts/CardLayout";
import Profiles from "./components/Profiles";

const MyProfile = () => {
  return (
    <AppLayout>
      <CardLayout pageTitle="My Profile">
        <Profiles />
      </CardLayout>
    </AppLayout>
  );
};

export default MyProfile;
