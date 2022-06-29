import React from "react";
import AppLayout from "../../components/layouts/AppLayout";
import ChildrenPageHeader from "../../components/header/ChildrenPageHeader";
import MoreInfoCard from "./components/MoreInfoCard";

const MoreInfo = () =>{
    return(
        <AppLayout>
            <ChildrenPageHeader/>
            <MoreInfoCard/>
        </AppLayout>
    )
}

export default MoreInfo;