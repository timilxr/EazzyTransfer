import React from "react";
import { Link } from "react-router-dom";


const Sidebar = ({ showModal, ...props }) => {

    return (
        <React.Fragment>
            {/* <div className="row dashboard_row"> */}
            <div className="sidebar m-0">
                <div className="row " style={{ padding: "37px" }}>
                    {/* <img src={logo} alt="" /> */}
                    <h5 className="sidebar_title">Eazzy Transfer</h5>
                </div>
                <div style={{ padding: "20px" }}>
                    <button type="button" onClick={() => showModal('send money')} className="btn btn-primary send_cash_btn">Send Money</button>
                </div>
                <Link to="accounts">
                    <div className="row sidebar_btn" style={{ display: "flex" }}>
                        <i className="fas fa-calculator sidebar_icon"></i>
                        <h6 className="sidebar_btn_text">Accounts</h6>
                    </div>
                </Link>
                <Link to="transaction-history">
                    <div className="row sidebar_btn" style={{ display: "flex" }}>
                        <i className="fas fa-chart-pie sidebar_icon"></i>
                        <h6 className="sidebar_btn_text">Transaction History</h6>
                    </div>
                </Link>
                <Link to="beneficiaries">
                    <div className="row sidebar_btn" style={{ display: "flex" }}>
                        <i className="fas fa-users sidebar_icon"></i>
                        <h6 className="sidebar_btn_text">Beneficiaries</h6>
                    </div>
                </Link>
                {/* <div className="row sidebar_btn" style={{ display: "flex" }}>
                    <i className="fas fa-exchange-alt sidebar_icon"></i>
                    <h6 className="sidebar_btn_text">Rates Updates</h6>
                </div>
                <button className="row sidebar_btn dropdown-btn dropdownbtn" style={{ display: "flex" }} >
                    <i className="fas fa-exchange-alt sidebar_icon"></i>
                    <h6 className="sidebar_btn_text">Dropdown</h6>
                    <i className="fas fa-caret-down" style={{ color: "#fff", marginLeft: "30px" }}></i>
                </button>
                <div className="dropdown-container">
                    <div href="#">Link 1</div>
                    <div href="#">Link 2</div>
                    <div href="#">Link 3</div>
                </div>
                <hr className="sidebar_hr" /> */}
                <Link to="settings">
                    <div className="row sidebar_btn" style={{ display: "flex" }}>
                        <i className="fas fa-user-cog  sidebar_icon"></i>
                        <h6 className="sidebar_btn_text">Settings</h6>
                    </div>
                </Link>
            </div>
            {/* // </div> */}
        </React.Fragment>
    )
};
export default Sidebar