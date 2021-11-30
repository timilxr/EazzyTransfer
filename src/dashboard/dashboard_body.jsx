import React, { useState } from "react";
import Sidebar from "./sidebar";
import DashboardHeader from "./dashboard_header";
import DashboardContent from "./dashboard_content";
import TransactionHistory from "./transaction_history";
import Accounts from "./accounts";
import Modal from '../components/modal';
import Beneficiaries from "./beneficiaries";
// import Settings from "./settings";

import { Routes, Route } from 'react-router-dom';

const DashboardBody = () => {
    const [showModal, setShowModal] = useState(null);

    return (
        <React.Fragment>
            <div className="row dashboard_row p-0" style={{backgroundColor: '#F7F8FC', minHeight: '100vh'}}>
                <div className="sidebar col-sm-3 col-md-2 border-0 m-0 p-0">
                    <Sidebar showModal={setShowModal} />
                </div>
                <div className="col-12 col-sm-9 col-md-10 p-0 m-0">
                    {showModal && <Modal showModal={setShowModal} currentView={showModal} />}
                    <div className="w-100 bg-white mb-2">
                        <DashboardHeader showModal={setShowModal} />
                    </div>
                    {/* <button type="button" class="btn btn-primary" onClick={()=>alert('hi')} data-toggle="modal" data-target="#exampleModal">
                        Launch demo modal
                    </button> */}
                    <Routes>
                        <Route path="" element={<DashboardContent />} />
                        <Route path="transaction-history" element={<TransactionHistory />} />
                        <Route path="accounts" element={<Accounts showModal={setShowModal} />} />
                        <Route path="beneficiaries" element={<Beneficiaries showModal={setShowModal} />} />
                        {/* <Route path="settings" element={<Settings />} /> */}
                    </Routes>

                </div>
            </div>
        </React.Fragment>
    )
};
export default DashboardBody