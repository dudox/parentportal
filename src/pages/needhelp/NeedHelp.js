import React from "react";
import AppLayout from "../../components/layouts/AppLayout";
import CardLayout from "../../components/layouts/CardLayout";
import HelpComponent from "./components/HelpComponent";

const NeedHelp = () => {
  return (
    <AppLayout>
      <CardLayout pageTitle={"Need Help?"}>
          <div style={{marginTop: '6vh', marginLeft: '8vw', display: 'inline-block', width:'80%'}}>
              <HelpComponent/>
          </div>
      </CardLayout>
    </AppLayout>
    
  );
};

export default NeedHelp;