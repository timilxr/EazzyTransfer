import React, { useState } from "react";
import avatar from "../../src/imgs/avatar.jpg"
// import transaction_img from "../imgs/undraw_Annotation_re_h774 1.png"
import currencyFlag from "../../src/imgs/Rectangle 196.png"
import aus from '../imgs/Rectangle 190.png';
import rightCaret from '../imgs/rightcaret.svg';

const Accounts = ({ showModal, ...props }) => {
    const [showAll, setShowAll] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState(null);
    const Accounts = [
        {
            balance: '0',
            currency: 'Japan Jeden',
            currenyCode: '(JPN)',
            flag: aus
        },
        {
            balance: '0',
            currency: 'Nigeria Naira',
            currenyCode: '(NGN)',
            flag: aus
        },
    ]
    return (
        <React.Fragment>
            <div className="dashboard_body" style={{ paddingTop: "20px" }}>
                <div style={{ paddingLeft: "40px", paddingRight: "20px" }}>
                    <h6 className="accounts_title">My accounts</h6>
                    <div className="card-deck" style={{ paddingTop: "20px" }}>
                        <div onClick={()=>showModal('my account')} className="card account_card">
                            <div className="card-body account_card_body">
                                <div className="row account_card_row">
                                    <div className="col-md-8 account_card_col">
                                        <img src={currencyFlag} alt="" className="currency_flag" />
                                        <h6 className="account_value mt-4 mb-1">0.00</h6>
                                        <h6 className="currency_and_state mt-0">American Dollars </h6>
                                    </div>
                                    <div className="col-md-4 account_card_col">
                                        <h6 className="currency">USD</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={()=>showModal('my account')} className="card account_card">
                            <div className="card-body account_card_body">
                                <div className="row account_card_row">
                                    <div className="col-md-8 account_card_col">
                                        <img src={currencyFlag} alt="" className="currency_flag" />
                                        <h6 className="account_value mt-4 mb-1">0.00</h6>
                                        <h6 className="currency_and_state">Nigerian Naira </h6>
                                    </div>
                                    <div className="col-md-4 account_card_col">
                                        <h6 className="currency">NGN</h6>
                                        {/* <h6 className="account_value">0.00</h6> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={()=>showModal('my account')} className="card account_card">
                            <div className="card-body account_card_body">
                                <div className="row account_card_row">
                                    <div className="col-md-8 account_card_col">
                                        <img src={currencyFlag} alt="" className="currency_flag" />
                                        <h6 className="account_value mt-4 mb-1">0.00</h6>
                                        <h6 className="currency_and_state">Canadian Dollars </h6>
                                    </div>
                                    <div className="col-md-4 account_card_col">
                                        <h6 className="currency">CAD</h6>
                                        {/* <h6 className="account_value">0.00</h6> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={()=>showModal('my account')} className="card account_card">
                            <div className="card-body account_card_body">
                                <div className="row account_card_row">
                                    <div className="col-md-8 account_card_col">
                                        <img src={currencyFlag} alt="" className="currency_flag" />
                                        <h6 className="account_value mt-4 mb-1">0.00</h6>
                                        <h6 className="currency_and_state">Great British Pounds </h6>
                                    </div>
                                    <div className="col-md-4 account_card_col">
                                        <h6 className="currency">GPB</h6>
                                        {/* <h6 className="account_value">0.00</h6> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => showModal('add account')} className="card account_card">
                            <div className="card-body account_card_body">
                                <div className="row account_card_row">
                                    <div className="col-md-12">
                                        <i className="fas fa-plus-circle fa-2x"></i>
                                        <h6 style={{ textAlign: "center" }}>Add Account</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" onClick={() => setShowAll(true)} className="btn btn-link see_all_btn">
                            <span>see all</span>
                            {/* <i className="fas fa-chevron-right"></i> */}
                        </button>
                    </div>
                    {showAll &&
                        <div className="p-2 mt-5">
                            <h3 id='other-beneficiary'>Others</h3>
                            <ul className="list-group">
                                {
                                    Accounts.map((account, index) =>
                                        <li key={index} onClick={() => { setSelectedAccount(account); showModal('my account') }} className={`list-group-item my-1 ${selectedAccount === account ? "question-active" : "question"}`}>
                                            <div className="d-flex align-items-center ml-2" style={{ height: '70px' }}>
                                                <img src={account.flag} className="img-fluid user_image m-0" alt="" />
                                                <div className="ml-3">
                                                    <p className="m-0" style={{ fontWeight: '600', fontSize: '14px' }}>{account.balance}</p>
                                                    <div className="d-flex align-items-center">
                                                        {/* <img src={account.flag} className="img-fluid" width="20px" height="16px" alt="" /> */}
                                                        <span className="" style={{ fontSize: '12px' }}>{account.currency}</span>
                                                        <span className="ml-2" style={{ fontSize: '12px' }}>{account.currenyCode}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <img src={rightCaret} className="mr-4" alt="" />
                                        </li>
                                    )
                                }
                            </ul>
                        </div>}
                    <div className="card account_opening_card">
                        <div className="card-body" style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                            <div>
                                <h2 className="account_opening_title">Get an account number in over 20 countries
                                </h2>
                                <p className="account_opening_subtitle">Receive money from bank transfers </p>
                            </div>
                                    <button type="button" className="btn btn-link acc_opening_btn">
                                        <i className="fas fa-chevron-right"></i>
                                    </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Accounts