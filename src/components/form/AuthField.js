import React from "react";
import swal from 'sweetalert';
const AuthInput = ({ placeholder }) => {
    return (
        <>
            <div className="form-group">
                <input type="text" id="form-input" placeholder={placeholder} />
            </div>
        </>
    )
}

const AuthButton = ({ text }) => {
    const thing = () => {
        swal("Thank you for registering with K'Bro", "We have sent you an activation link", "success"
        )
    }
    return (
        <>
            <div className="form-group mt-3">
                <button className="btn" id="form-button" onClick={thing}>{text}</button>
            </div>
        </>
    )
}

export {
    AuthButton,
    AuthInput
}