import React from "react";
import "../../assets/global.scss";
import AppLayout from "../../components/layouts/AppLayout";
import CardLayout from "../../components/card/Card";
import Avatars from "./components/Avatar";

const CreateChildProfile = () => {
  return (
    <>
      <AppLayout>
        <Avatars />
      </AppLayout>
    </>
  );
};

export default CreateChildProfile;
