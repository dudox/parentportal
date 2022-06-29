import React from "react";
import FeatherIcon from "feather-icons-react";
import Acorn from "../../assets/img/acorn.png";

const AuthLayout = ({ children, display }) => {

    const onHandleBack = () => window.history.back();

    return (
        <>
            <div className="container " id="authL">
                <div className={`back ${display}`}>
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
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-md-5">
                        <div className="d-flex">
                            <div style={{marginRight:'0.5vw'}}>
                                <img src={Acorn} alt={"Logo"} />
                            </div>
                            <div style={{color: '#E6984E', height: '5vh', fontSize: '5vh', marginRight: '0.5vw'}}>K'BRO</div>
                            <div style={{color: '#E6984E', height: '3vh', fontSize: '3vh', marginTop: '2vh'}}>Parent Portal</div>
                        </div>
                    </div>
                    <div className="col-md-1 divider d-none d-md-block" style={{borderLeft: "1px solid #E6984E",
                        height: "400px"}}/>
                    <div className="col-md-6" style={{width: '27vw'}}>
                        {children}
                    </div>

                </div>
            </div>

        </>
    )
}

export default AuthLayout;