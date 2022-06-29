import React from "react";
import AppLayout from "../../components/layouts/AppLayout";
import CardLayout from "../../components/layouts/CardLayout";
import ShowTool from "./components/RenderPage";

const ParentTools = () => {
  return (
    <AppLayout>
      <CardLayout pageTitle={"Parent Tools"}>
        <ShowTool />
      </CardLayout>
    </AppLayout>
  );
};

export default ParentTools;
