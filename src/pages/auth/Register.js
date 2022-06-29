import React from "react";
import {AuthButton, AuthInput} from "../../components/form/AuthField";
import FeatherIcon from "feather-icons-react";
import {Form} from "react-bootstrap";
import Acorn from "../../assets/img/acorn.png";

const Register = () => {
    const onHandleBack = () => window.history.back();
    return (
        <>
            <div className="container " id="authL">
                <div>
                    <button
                        onClick={onHandleBack}
                        className="btn d-flex align-items-center"
                        style={{color: '#E6984E'}}
                    >
                        <FeatherIcon
                            icon={"chevron-left"}
                            strokeWidth={2}
                            size={25}
                        />
                        Back to Login
                    </button>
                </div>
                <div className="row vh-100 align-items-center">
                    <div className="col-md-6">
                        <div className="d-flex">
                            <div style={{marginRight: '1vw', fontSize: '2vh', color: '#585858'}}>I am a</div>
                            <div>
                                <Form style={{marginBottom: '2vh'}}>
                                    <Form.Group controlId="exampleForm.SelectCustomSizeSm" className="custom-select">
                                        <Form.Control as="select" size="sm" custom>
                                            <option>Select One</option>
                                            <option>Mother</option>
                                            <option>Father</option>
                                            <option>Guardian</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                                <AuthInput placeholder={"Full Name"} />
                                <AuthInput placeholder={"Email"} />
                                <AuthInput placeholder={"Password"} />
                                <AuthInput placeholder={"Confirm Password"} />
                                <AuthInput placeholder={"Phone Number"} />
                                <AuthButton text={"Sign Up"} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 divider d-none d-md-block" style={{borderLeft: "1px solid #E6984E",
                        height: "400px"}}/>
                    <div className="col-md-5">
                        <div className="d-flex">
                            <div style={{marginRight:'0.5vw'}}>
                                <img src={Acorn} alt={"Logo"} />
                            </div>
                            <div style={{color: '#E6984E', height: '5vh', fontSize: '5vh', marginRight: '0.5vw'}}>K'BRO</div>
                            <div style={{color: '#E6984E', height: '3vh', fontSize: '3vh', marginTop: '2vh'}}>Parent Portal</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;