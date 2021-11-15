import React from "react";
// import SignUpOne from "./signup/signUp_one"
// import SignupOne from "./signUp_one";
// import SignupTwo from "./signUp_two";
import SignupThree from "./signUp_three";


const Signup  = () => {
    
    
    return(
            <React.Fragment>
        <div className="sign_up">
            <div className="row sign_up_page">
                <div className="col-md-4 sign_up_col_one"></div>
                <div className="col-md-8 sign_up_col_two">
                <button type="button" class="btn btn-link homepage_link"><i class="fas fa-chevron-left"></i>Back</button>
                <SignupThree/>
                </div>
            </div>
        </div>
            </React.Fragment>
    )
};
export default Signup