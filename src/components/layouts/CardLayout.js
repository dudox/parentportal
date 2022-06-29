import React from "react";
import "../../assets/global.scss";
const CardLayout = ({ children, pageTitle }) => {
  return (
    <>
      <div className="cardLayout">
        <div>
          <h3 className="pageTitle" style={{marginLeft: '8vw'}}>{pageTitle}</h3>
          {children}
        </div>
      </div>
    </>
  );
};

export default CardLayout;
