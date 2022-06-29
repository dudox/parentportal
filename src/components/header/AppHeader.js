import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../../assets/icons/KbroLogo.png";

const AppHeader = () => {
  return (
    <>
      <Navbar className="justify-content-end">
        <img src={logo} alt={"logo"} />
      </Navbar>
    </>
  );
};
export default AppHeader;
