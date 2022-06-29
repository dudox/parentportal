import React from "react";
import "../../assets/global.scss";
import Popup from "../../pages/firstTimeLogin/components/Modal";
import { Navbar } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";

const ChildrenPageHeader = () => {
  return (
    <>
        <Navbar>
            <h3 className="childrenPageTitle">My Children</h3>
            <Popup/>
        </Navbar>
    </>
  );
};

export default ChildrenPageHeader;
