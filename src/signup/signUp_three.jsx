import React from "react";
import 'react-phone-number-input/style.css';
import { Link } from 'react-router-dom';


const SignupThree = () => {


    return (
        <React.Fragment>
            <div className="row">
                <div className="col-lg-7 sub_col_two">
                    <h1 className="col_two_title">Put in a 4 digit passcode</h1>
                    <h6 className="col_two_subtitle">Do well to put a strong passcode for subsequent login</h6>
                    <div className="mb-3 mt-5">
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control p-0" placeholder="" style={{ textAlign: "center", height: '4vw', backgroundColor: 'lightgray' }} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control p-0" placeholder="" style={{ textAlign: "center", height: '4vw', backgroundColor: 'lightgray' }} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control p-0" placeholder="" style={{ textAlign: "center", height: '4vw', backgroundColor: 'lightgray' }} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control p-0" placeholder="" style={{ textAlign: "center", height: '4vw', backgroundColor: 'lightgray' }} />
                            </div>
                        </div>
                    </div>
                    <Link to="/update-profile" className='text-decoration-none' ><button type="button" className="btn btn-lg btn-block proceed_btn">Done</button></Link>
                    <h6 className="col_two_subscript_three mt-3">Do you have an account?  <Link to="/dashboard">Login instead</Link></h6>
                </div>
            </div>
        </React.Fragment>
    )
};
export default SignupThree