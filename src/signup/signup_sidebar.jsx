import React from 'react';
import logo from '../imgs/logo.svg'

const SignUpSideBar = () => {
    return(
        <>
        <div className="container-fluid signup_sidebar_container">
            <div className="signup_sidebar">
            <div className="container-fluid bubbles">
                <div className="logo_container">
                    <img src={logo} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default SignUpSideBar;