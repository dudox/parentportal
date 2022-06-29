import React from "react";
import AppLayout from "../../components/layouts/AppLayout";
import CardLayout from "../../components/layouts/CardLayout";
import ChildrenCard from "./components/ChildrenCard";
import ChildrenPageHeader from "../../components/header/ChildrenPageHeader";
const ChildAccount = () => {
  return (
    <>
      <AppLayout>
        <ChildrenPageHeader />
        <ChildrenCard />
      </AppLayout>
    </>
  );
};

export default ChildAccount;
