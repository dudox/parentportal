import React from "react";
import AppLayout from "../../components/layouts/AppLayout";
import CardLayout from "../../components/layouts/CardLayout";
import Tabs from "./components/Tabs";

const EmailUpdateHistory = () => {
 
  return (
    <>
      <AppLayout>
        <CardLayout pageTitle="Reports">
            <Tabs/>
        </CardLayout>
      </AppLayout>
    </>
  );
};

export default EmailUpdateHistory;
