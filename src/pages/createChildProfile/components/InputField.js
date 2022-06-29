import React from "react";

const InputField = ({ children, placeholder, label, ...props }) => {
  return (
    <>
      <div className="inputFieldContainer" >
        <label>{label}</label>
        <input type="text" placeholder={placeholder} className="inputField" />
        {children}
      </div>
    </>
  );
};

export default InputField;
