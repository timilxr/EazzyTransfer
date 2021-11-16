import React, {useState} from "react";
import Sidebar from "./sidebar";
import DashboardHeader from "./dashboard_header";
import DashboardContent from "./dashboard_content";
import TransactionHistory from "./transaction_history";
import Accounts from "./accounts";
import Modal from '../components/modal';
import Beneficiaries from "./beneficiaries";

import {Routes, Route} from 'react-router-dom';

const DashboardBody = () => {
    const [showModal, setShowModal] = useState(null);

    return (
        <React.Fragment>
            <div className="row dashboard_row p-0 m-0">
                <div className="col-md-2 dashboard_sidebar border-0 m-0 p-0">
                    <Sidebar showModal={setShowModal} />
                </div>
                <div className="col-md-10 dashboard_mainbody p-0 m-0">
                    <DashboardHeader showModal={setShowModal} />
                    {showModal && <Modal showModal={setShowModal} currentView={showModal} />}
                    {/* <button type="button" class="btn btn-primary" onClick={()=>alert('hi')} data-toggle="modal" data-target="#exampleModal">
                        Launch demo modal
                    </button> */}
                    <Routes>
                        <Route path="" element={<DashboardContent/>} />
                        <Route path="transaction-history" element={<TransactionHistory/>} />
                        <Route path="accounts" element={<Accounts showModal={setShowModal} />} />
                        <Route path="beneficiaries" element={<Beneficiaries showModal={setShowModal} />} />
                    </Routes>
                    
                </div>
            </div>
        </React.Fragment>
    )
};
export default DashboardBody