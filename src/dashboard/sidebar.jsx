import React from "react";


const Sidebar  = () => {
    
    return(
            <React.Fragment>
                {/* <div className="row dashboard_row"> */}
                    <div className="sidebar">
                        <div className="row " style={{padding: "37px"}}>
                            {/* <img src={logo} alt="" /> */}
                            <h5 className="sidebar_title">Eazzy Transfer</h5>
                        </div>
                        <div style={{padding: "20px"}}>
                        <button type="button" class="btn btn-primary send_cash_btn">Send Money</button>
                        </div>
                        <div className="row sidebar_btn" style={{display: "flex"}}>
                        <i class="fas fa-calculator sidebar_icon"></i>
                            <h6 className="sidebar_btn_text">Accounts</h6>
                        </div>
                        <div className="row sidebar_btn" style={{display: "flex"}}>
                        <i class="fas fa-chart-pie sidebar_icon"></i>
                            <h6 className="sidebar_btn_text">Transaction History</h6>
                        </div>
                        <div className="row sidebar_btn" style={{display: "flex"}}>
                        <i class="fas fa-users sidebar_icon"></i>
                            <h6 className="sidebar_btn_text">Beneficiaries</h6>
                        </div>
                        <div className="row sidebar_btn" style={{display: "flex"}}>
                        <i class="fas fa-exchange-alt sidebar_icon"></i>
                            <h6 className="sidebar_btn_text">Rates Updates</h6>
                        </div>
                        <button className="row sidebar_btn dropdown-btn dropdownbtn" style={{display: "flex"}} >
                        <i class="fas fa-exchange-alt sidebar_icon"></i>
                            <h6 className="sidebar_btn_text">Dropdown</h6>
                            <i class="fas fa-caret-down" style={{color: "#fff", marginLeft: "30px"}}></i>
                        </button>
                        <div class="dropdown-container">
                        <div href="#">Link 1</div>
                        <div href="#">Link 2</div>
                        <div href="#">Link 3</div>
                    </div>
                        <hr className="sidebar_hr" />
                        <div className="row sidebar_btn" style={{display: "flex"}}>
                        <i class="fas fa-user-cog  sidebar_icon"></i>
                            <h6 className="sidebar_btn_text">Settings</h6>
                        </div>
                    </div>
                {/* // </div> */}
            </React.Fragment>
    )
};
export default Sidebar