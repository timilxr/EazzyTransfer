import React from "react";
import avatar from "../../src/imgs/avatar.jpg";
import {useLocation} from 'react-router-dom';
// import logo from '../../frontend/src/imgs/eazzyfinancialsLOGOUPDATE (3).svg';

const DashboardHeader = ({showModal, ...props}) => {
    let match = useLocation().pathname.split('/');
    // console.log(match);
    const currentPath = match[match.length - 1];

    return (
        <React.Fragment>
            <div className="mainbody">
                <div className="mainbody_header">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            {/* <h6 className="transaction_history">Transaction History</h6> */}
                            <h6 className="transaction_history text-capitalize m-0 mr-2">{currentPath == 'transaction-history' ? 'Transaction History': currentPath}</h6>
                            {currentPath === 'beneficiaries' && <button type="button" className="btn btn-primary add_ben_btn py-2" onClick={()=>showModal('new beneficiary')}><i class="fa fa-plus mr-1" aria-hidden="true"></i> Add Beneficiary</button>}
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
            </div>
        </React.Fragment>
    )
};
export default DashboardHeader