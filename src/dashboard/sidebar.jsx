import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../imgs/logoeazzytransfer.svg';


const Sidebar = ({ showModal, ...props }) => {
    let match = useLocation().pathname.split('/');
    // console.log(match);
    const currentPath = match[match.length - 1];

    return (
        <React.Fragment>
            {/* <div className="row dashboard_row"> */}
            <div className="m-0 w-100">
                <div className="row sidebar_title_container">
                    {/* <img src={logo} alt="" /> */}
                    <img src={logo} alt="" className="img-fluid" width="30px" />
                    <h5 className="sidebar_title m-0">Eazzy Transfer</h5>
                </div>
                <Link to="/send-money" className="text-decoration-none">
                    <div style={{ padding: "10px 20px" }}>
                        <button type="button" className="btn send_cash_btn">Send Money</button>
                    </div>
                </Link>
                <Link to="/convert-currency" className="text-decoration-none">
                    <div style={{ padding: "10px 20px" }}>
                        <button type="button" className="btn send_cash_btn">Convert Currency</button>
                    </div>
                </Link>
                <Link to="accounts" className="text-decoration-none">
                    <div className={`row ${currentPath !== "accounts" ? 'sidebar_btn' : 'sidebar_btn_active'} flex-nowrap`} style={{ display: "flex", alignItems: 'center' }}>
                        <i className="fas fa-calculator sidebar_icon"></i>
                        <div>
                            <h6 className="sidebar_btn_text">Accounts</h6>
                        </div>
                    </div>
                </Link>
                <Link to="transaction-history" className="text-decoration-none">
                    <div className={`row ${currentPath !== "transaction-history" ? 'sidebar_btn' : 'sidebar_btn_active'} flex-nowrap`} style={{ display: "flex", alignItems: 'center' }}>
                        <div className="">
                            <i className="fas fa-chart-pie sidebar_icon"></i>
                        </div>
                        <div className="">
                            <h6 className="sidebar_btn_text">Transaction History</h6>
                        </div>
                    </div>
                </Link>
                <Link to="beneficiaries" className="text-decoration-none">
                    <div className={`row ${currentPath !== "beneficiaries" ? 'sidebar_btn' : 'sidebar_btn_active'} flex-nowrap`} style={{ display: "flex", alignItems: 'center' }}>
                        <i className="fas fa-users sidebar_icon"></i>
                        <h6 className="sidebar_btn_text">Beneficiaries</h6>
                    </div>
                </Link>
                {/* <div className={`row ${true ? 'sidebar_btn': 'sidebar_btn_active'} flex-nowrap`} style={{ display: "flex", alignItems: 'center' }}>
                    <i className="fas fa-exchange-alt sidebar_icon"></i>
                    <h6 className="sidebar_btn_text">Rates Updates</h6>
                </div>
                <button className={`row ${true ? 'sidebar_btn': 'sidebar_btn_active'} flex-nowrap`}dropdown-btn dropdownbtn" style={{ display: "flex", alignItems: 'center' }} >
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
                <Link to="/settings" className="text-decoration-none">
                    <div className={`row ${currentPath !== "settings" ? 'sidebar_btn' : 'sidebar_btn_active'} flex-nowrap`} style={{ display: "flex", alignItems: 'center' }}>
                        <i className="fas fa-user-cog  sidebar_icon"></i>
                        <h6 className="sidebar_btn_text">Settings</h6>
                    </div>
                </Link>
                <Link to="/" className="text-decoration-none">
                    <div style={{ padding: "10px 20px" }}>
                        <button type="button" className="btn btn-block btn-danger">Logout</button>
                    </div>
                </Link>
            </div>
            {/* // </div> */}
        </React.Fragment>
    )
};
export default Sidebar