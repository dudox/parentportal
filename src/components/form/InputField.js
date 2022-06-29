/** @format */

import React from "react";
import FeatherIcon from "feather-icons-react";

const SelectField = ({ placeholder, children, label, ...props }) => {
    return (
        <>
            <div className="form-group">
                <select>
                    <option>{placeholder}</option>
                </select>
            </div>
            {children}
        </>
    );
};

const GroupSearchField = ({ placeholder, children, ...props }) => {
    return (
        <>

            <div className="col px-0 ">
                <div class="form-group has-search">
                    <input type="text" class="form-input-control" placeholder={placeholder} />
                    <FeatherIcon icon={"search"} className="form-control-feedback" size={24} />
                </div>
            </div>
        </>
    );
};


const GroupInputField = ({ placeholder, children, label, ...props }) => {
    return (
        <>
            <div className="form-group">
                <label>{label}</label>
                <input type="text" placeholder={placeholder} className="" />
                {children}
            </div>

        </>
    );
};

const GroupSelectField = ({ placeholder, children, label, ...props }) => {
    return (
        <>
            <div className="form-group">
                <label>{label}</label>
                <select>
                    <option>{placeholder}</option>
                </select>
            </div>
            {children}
        </>
    );
};

const GroupFileUpload = ({ placeholder, children, label, ...props }) => {
    return (
        <>
            <div className="form-group ">
                <label>{label}</label>
                <button className="upload btn-default"><FeatherIcon icon={"paperclip"} size={13} /> {placeholder}</button>
            </div>
            {children}
        </>
    );
};



export { GroupSearchField, GroupInputField, GroupSelectField, GroupFileUpload, SelectField };
