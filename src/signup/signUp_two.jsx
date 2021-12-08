import React from "react";
import 'react-phone-number-input/style.css';
import { Link, BrowserRouter } from 'react-router-dom';


const SignupTwo = ({ proceed, ...props }) => {


    return (
        <React.Fragment>
            <div className="row">
                <div className="col-lg-7 sub_col_two">
                    <h1 className="col_two_title">We have sent a token to 9165****35</h1>
                    <h6 className="col_two_subtitle">Please enter here appropriately</h6>
                    <div className="mb-3 mt-5">
                        <div className="row ">
                            <div className="col p-1 p-lg-2">
                                <input type="text" className="form-control token" placeholder="X" style={{ textAlign: "center" }} />
                            </div>
                            <div className="col p-1 p-lg-2">
                                <input type="text" className="form-control token" placeholder="X" style={{ textAlign: "center" }} />
                            </div>
                            <div className="col p-1 p-lg-2">
                                <input type="text" className="form-control token" placeholder="X" style={{ textAlign: "center" }} />
                            </div>
                            <div className="col p-1 p-lg-2">
                                <input type="text" className="form-control token" placeholder="X" style={{ textAlign: "center" }} />
                            </div>
                            <div className="col p-1 p-lg-2">
                                <input type="text" className="form-control token" placeholder="X" style={{ textAlign: "center" }} />
                            </div>
                            <div className="col p-1 p-lg-2">
                                <input type="text" className="form-control token" placeholder="X" style={{ textAlign: "center" }} />
                            </div>
                        </div>
                    </div>
                    <h6 className="col_two_subscript">Didnt get an sms, <Link to="/">resend in 0.12s</Link></h6>
                    <button type="button" onClick={() => proceed()} className="btn btn-lg btn-block proceed_btn m-0 text-white">Verify</button>
                </div>
            </div>
        </React.Fragment>
    )
};
export default SignupTwo