import React, {useState} from "react";
// import SignUpOne from "./signup/signUp_one"
import SignupOne from "./signUp_one";
import SignupTwo from "./signUp_two";
import SignupThree from "./signUp_three";
import SignUpSideBar from "./signup_sidebar";


const Signup  = () => {
    const [currentView, setCurrentView] = useState(1);
    
    return(
            <React.Fragment>
        <div className="sign_up">
            <div className="row sign_up_page">
                <div className="col-md-4 sign_up_col_one p-0">
                    <SignUpSideBar />
                </div>
                <div className="col-md-8 sign_up_col_two">
                <button type="button" class="btn btn-link homepage_link"><i class="fas fa-chevron-left"></i>Back</button>
                {currentView === 1 && <SignupOne proceed={()=>setCurrentView(2)} />}
                {currentView === 2 && <SignupTwo proceed={()=>setCurrentView(3)}/>}
                {currentView === 3 && <SignupThree />}
                </div>
            </div>
        </div>
            </React.Fragment>
    )
};
export default Signup