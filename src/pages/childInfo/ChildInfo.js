import React from "react";
import ChildrenPageHeader from "../../components/header/ChildrenPageHeader";
import AppLayout from "../../components/layouts/AppLayout";
import ChildInfoCard from "./components/ChildInfoCard";

const ChildInfo = () => {
    return(
        <AppLayout>
            <ChildrenPageHeader/>
            <ChildInfoCard/>
        </AppLayout>
    )
}

export default ChildInfo;