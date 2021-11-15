import React from "react";
import avatar from "../../src/imgs/avatar.jpg"
// import logo from '../../frontend/src/imgs/eazzyfinancialsLOGOUPDATE (3).svg';

const DashboardHeader  = () => {
    
    
    return(
            <React.Fragment> 
                    <div className="mainbody">
                        <div className="mainbody_header">
                            <div className="row">
                                <div className="col-md-3">
                                    <h6 className="transaction_history">Transaction History</h6>
                                </div>
                                <div className="col-md-6" style={{display: "flex", paddingLeft: "280px"}}>
                                <div className="dashboard_search">
                                <input type="text" placeholder="Search.." className="dashboard_search_input"/>
                                <i class="fas fa-search mr-4"></i>
                                </div>
                                <i class="fas fa-bell"></i>
                                </div>
                                <div className="col-md-3" style={{display: "flex",  borderLeft: "1px solid #DFE0EB", paddingLeft: "67px"}}>
                                <h6 className="user_name">FirstName LastName</h6>
                                <img src={avatar} alt="" className="user_image" />
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
    )
};
export default DashboardHeader