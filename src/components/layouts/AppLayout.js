import React from "react";
import SideBar from "../sidebar/SideBar";
import AppHeader from "../header/AppHeader";
import CardLayout from "./CardLayout";

const AppLayout = ({ children, pageTitle }) => {
  return (
    <>
      <div className="wrapper">
        <SideBar />
        <div id="content">
          <AppHeader />
          <CardLayout pageTitle={pageTitle}>{children}</CardLayout>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
