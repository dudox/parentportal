import React from "react";
import AppLayout from "../../components/layouts/AppLayout"
import CardLayout from "../../components/layouts/CardLayout";
import EmergencyInfoCard from "./components/EmergencyInfoCard";

const EmergencyContact = () => {
  return (
    <AppLayout>
      <CardLayout pageTitle="Parent Tools">
          <EmergencyInfoCard/>
      </CardLayout>
    </AppLayout>
  );
};

export default EmergencyContact;
