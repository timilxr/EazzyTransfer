import React from "react";
import avatar from "../../src/imgs/avatar.jpg";
import { useLocation, Link } from 'react-router-dom';
// import logo from '../../frontend/src/imgs/eazzyfinancialsLOGOUPDATE (3).svg';

const DashboardHeader = ({ showModal, header, ...props }) => {
    let match = useLocation().pathname.split('/');
    // console.log(match);
    const currentPath = match[match.length - 1];

    return (
        <React.Fragment>
            <header className="menu_header p-3 pl-md-5 shadow-sm" id="myHeader">
                <nav className="navbar navbar-expand-md navbar-light bg-light nav-header p-0">
                    {/* <div className="container-fluid"> */}
                    <div className="d-flex flex-wrap page_info mr-auto">
                        <h6 className="transaction_history text-capitalize m-0">{header ? header : (currentPath == 'transaction-history' ? 'Transaction History' : currentPath)}</h6>
                        {currentPath === 'beneficiaries' && <button type="button" className="btn btn-primary add_ben_btn py-1 py-md-2" onClick={() => showModal('new beneficiary')}><i className="fa fa-plus mr-1" aria-hidden="true"></i> Add Beneficiary</button>}
                        {/* <img src={logo} alt="logo" className="eazzy_logo" /> */}
                    </div>
                    <button className="navbar-toggler header-btn" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse header_nav" id="navbarNavDropdown">
                        <div className="menu_list d-md-none">
                            <div style={{ padding: "20px" }}>
                                <button type="button" onClick={() => showModal('send money')} className="btn btn-primary send_cash_btn">Send Money</button>
                            </div>
                            <Link to="/dashboard/accounts" className="text-decoration-none">
                                <div className="row sidebar_btn" style={{ display: "flex", alignItems: 'center' }}>
                                    <i className="fas fa-calculator sidebar_icon"></i>
                                    <h6 className="sidebar_btn_text">Accounts</h6>
                                </div>
                            </Link>
                            <Link to="/dashboard/transaction-history" className="text-decoration-none">
                                <div className="row sidebar_btn" style={{ display: "flex", alignItems: 'center' }}>
                                    <i className="fas fa-chart-pie sidebar_icon"></i>
                                    <h6 className="sidebar_btn_text">Transaction History</h6>
                                </div>
                            </Link>
                            <Link to="/dashboard/beneficiaries" className="text-decoration-none">
                                <div className="row sidebar_btn" style={{ display: "flex", alignItems: 'center' }}>
                                    <i className="fas fa-users sidebar_icon"></i>
                                    <h6 className="sidebar_btn_text">Beneficiaries</h6>
                                </div>
                            </Link>
                            <Link to="/settings" className="text-decoration-none">
                                <div className="row sidebar_btn" style={{ display: "flex", alignItems: 'center' }}>
                                    <i className="fas fa-user-cog  sidebar_icon"></i>
                                    <h6 className="sidebar_btn_text">Settings</h6>
                                </div>
                            </Link>
                        </div>
                        <div className="row p-3 pl-4">
                            <div className="col-12 col-md p-0" style={{ display: "flex", alignItems: 'center', paddingLeft: "0px" }}>
                                <div className="dashboard_search">
                                    <input type="text" placeholder="Search.." className="dashboard_search_input" />
                                    <i className="fas fa-search ml-2"></i>
                                </div>
                            </div>
                            <div className="col-md-1 p-0" style={{display: 'flex', alignItems: 'center'}}>
                                <i className="fas fa-bell m-md-0 mx-md-auto"></i>
                            </div>
                            <div className="col-12 col-md-4 col-lg-6" style={{ display: "flex", alignItems: 'center', borderLeft: "1px solid #DFE0EB", paddingLeft: "0px" }}>
                                <h6 className="user_name ml-md-3">FirstName LastName</h6>
                                <Link to="/dashboard/accounts" className="text-decoration-none">
                                    <img src={avatar} alt="" className="user_image" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="sign_input_div">
                        <Link to="/dashboard/sign-in" className="btn sign_in sign_in_btn">Log In</Link>
                        <Link to="/dashboard/sign-up" className="btn sign_in_up sign_up_btn">Join Now</Link>
                    </div> */}
                </nav>
            </header>



            {/* <div className="mainbody container">
                <div className="mainbody_header m-0 bg-danger">
                    <div className="row bg-success">
                        <div className="col-md-6 d-flex align-items-center">
                            <h6 className="transaction_history">Transaction History</h6>
                            <h6 className="transaction_history text-capitalize m-0 mr-2">{currentPath == 'transaction-history' ? 'Transaction History' : currentPath}</h6>
                            {currentPath === 'beneficiaries' && <button type="button" className="btn btn-primary add_ben_btn py-0 py-sm-0" onClick={() => showModal('new beneficiary')}><i className="fa fa-plus m-0 mr-1" aria-hidden="true"></i> Add Beneficiary</button>}
                        </div>
                        <div className="col-md-3" style={{ display: "flex", paddingLeft: "0px" }}>
                            <div className="dashboard_search ml-auto">
                                <input type="text" placeholder="Search.." className="dashboard_search_input" />
                                <i className="fas fa-search mr-0"></i>
                            </div>
                            <i className="fas fa-bell"></i>
                        </div>
                        <div className="col-md-3" style={{ display: "flex", borderLeft: "1px solid #DFE0EB", paddingLeft: "0px" }}>
                            <h6 className="user_name ml-auto">FirstName LastName</h6>
                            <img src={avatar} alt="" className="user_image" />
                        </div>
                    </div>
                </div>
            </div> */}
        </React.Fragment>
    )
};
export default DashboardHeader