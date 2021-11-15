import React from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';


const SignupOne  = () => {
    
    
    return(
            <React.Fragment>
               <div className="row">
                   <div className="col-md-7 sub_col_two">
                       <h1 className="col_two_title">Please type in your phone number</h1>
                       <h6 className="col_two_subtitle">For the purpose of security regulation</h6>
                       <div className="mb-3 mt-5">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"/>
                        </div>
                        <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                        <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">+234</button>
                            <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
                        </div>
                        </div>
                        <button type="button"  class="btn btn-primary btn-lg btn-block proceed_btn">Proceed</button>
                   </div>
                   </div>
            </React.Fragment>
    )
};
export default SignupOne