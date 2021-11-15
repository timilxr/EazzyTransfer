import React from "react";
import 'react-phone-number-input/style.css';
import {Link, BrowserRouter} from 'react-router-dom';


const SignupThree  = () => {
    
    
    return(
            <React.Fragment>
               <div className="row">
                   <div className="col-md-7 sub_col_two">
                       <h1 className="col_two_title">Put in a 4 digit passcode</h1>
                       <h6 className="col_two_subtitle">Do well to put a strong passcode for subsequent login</h6>
                       <div className="mb-3 mt-5">
                        <div class="row ">
                        <div class="col-md-2">
                        <input type="text" class="form-control" placeholder="X" style={{textAlign:"center"}}/>
                        </div>
                        <div class="col-md-2">
                        <input type="text" class="form-control" placeholder="X" style={{textAlign:"center"}}/>
                        </div>
                        <div class="col-md-2">
                        <input type="text" class="form-control" placeholder="X" style={{textAlign:"center"}}/>
                        </div>
                        <div class="col-md-2">
                        <input type="text" class="form-control" placeholder="X" style={{textAlign:"center"}}/>
                        </div>
                        </div>
                        </div>
                        <button type="button" class="btn btn-primary btn-lg btn-block proceed_btn">Done</button>
                        <h6 className="col_two_subscript_three">Do you have an account?  <Link>Login instead</Link></h6>
                   </div>
               </div>
            </React.Fragment>
    )
};
export default SignupThree