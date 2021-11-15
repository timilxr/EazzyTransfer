import React from "react";
import Sidebar from "./sidebar";
import DashboardHeader from "./dashboard_header";
// import DashboardContent from "./dashboard_content";
// import TransactionHistory from "./transaction_history";
import Accounts from "./accounts";
import Modal from '../components/modal';

const DashboardBody = () => {


    return (
        <React.Fragment>
            <div className="row dashboard_row">
                <div className="col-md-2 dashboard_sidebar">
                    <Sidebar />
                </div>
                <div className="col-md-10 dashboard_mainbody">
                    <Modal />
                    <button type="button" class="btn btn-primary" onClick={()=>alert('hi')} data-toggle="modal" data-target="#exampleModal">
                        Launch demo modal
                    </button>
                    <DashboardHeader />
                    {/* <DashboardContent/> */}
                    {/* <TransactionHistory/> */}
                    <Accounts />
                </div>
            </div>
        </React.Fragment>
    )
};
export default DashboardBody