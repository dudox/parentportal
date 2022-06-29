import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/layouts/AuthLayout";
import {AuthButton, AuthInput} from "../../components/form/AuthField";

const ForgotPassword = () => {
    return (
        <>
            <AuthLayout>
                <div id="auth">
                    <p id="forgot-text">
                        We will send you an email with instructions on how to reset your password.
                    </p>
                    <AuthInput placeholder={"Email"} />
                    <AuthButton text={"Email Me"} />
                    <div className="d-flex justify-content-end">
                        <Link to="#" className="link ml-auto">I don’t remember my email.</Link>
                    </div>
                </div>
            </AuthLayout>
        </>
    )
}

export default ForgotPassword;