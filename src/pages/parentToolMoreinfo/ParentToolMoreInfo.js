import React from "react";
import AppLayout from "../../components/layouts/AppLayout";
import CardLayout from "../../components/layouts/CardLayout";
import ToolTip from "../parentTools/components/ToolTip";

const ParentToolMoreInfo = () => {
  return (
    <AppLayout>
      <CardLayout pageTitle={"Parent Tools"}>
        <ToolTip />
      </CardLayout>
    </AppLayout>
  );
};

export default ParentToolMoreInfo;
