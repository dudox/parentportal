import React from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/layouts/AuthLayout";

import { AuthButton, AuthInput } from "../../components/form/AuthField";


const Login = () => {
    const SubmitForm = (e) => {
        e.preventDefault();
        //redirect to children page
        window.location.href = "/children";

    }
    return (
        <>
            <AuthLayout display={"d-none"}>
                <div id="auth">
                    <form onSubmit={SubmitForm}>
                        <AuthInput placeholder={"Email"} />
                        <AuthInput placeholder={"Password"} />
                        <div className="d-flex justify-content-end">
                            <div className="ml-auto">
                                <Link to="/forgot" className="link">Forgot your Password?</Link>
                            </div>
                        </div>
                        <AuthButton text={"Login"} />
                        <div className="d-flex justify-content-end">
                            <div className="ml-auto">
                                <span id="muted">Don't have an account?</span> <Link to="/register" className="link">Create your account.</Link>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <div className="ml-auto">
                                <span id="muted">Locked out?</span> <Link to="/" className="link">Unlock account.</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </AuthLayout>
        </>
    )
}

export default Login;