import React from "react";
import avatar from "../../src/imgs/avatar.jpg"
// import transaction_img from "../imgs/undraw_Annotation_re_h774 1.png"
import currencyFlag from "../../src/imgs/Rectangle 196.png"


const Accounts  = () => {
    
    
    return(
            <React.Fragment>
                <div className="dashboard_body" style={{paddingTop: "20px"}}>
                <div style={{paddingLeft: "40px", paddingRight:"20px"}}>
                     <h6 className="accounts_title">My accounts</h6>
                     <div class="card-deck" style={{paddingTop: "20px"}}>
                    <div class="card account_card">
                        <div class="card-body account_card_body">
                        <div className="row account_card_row">
                            <div className="col-md-8 account_card_col">
                                <img src={currencyFlag} alt="" className="currency_flag" />
                                <h6 className="currency_and_state">American Dollars </h6>
                            </div>
                            <div className="col-md-4 account_card_col">
                                <h6 className="currency">USD</h6>
                                <h6 className="account_value">0.00</h6>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="card account_card">
                    <div class="card-body account_card_body">
                        <div className="row account_card_row">
                            <div className="col-md-8 account_card_col">
                                <img src={currencyFlag} alt="" className="currency_flag" />
                                <h6 className="currency_and_state">Nigerian Naira </h6>
                            </div>
                            <div className="col-md-4 account_card_col">
                                <h6 className="currency">NGN</h6>
                                <h6 className="account_value">0.00</h6>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="card account_card">
                    <div class="card-body account_card_body">
                        <div className="row account_card_row">
                            <div className="col-md-8 account_card_col">
                                <img src={currencyFlag} alt="" className="currency_flag" />
                                <h6 className="currency_and_state">Canadian Dollars </h6>
                            </div>
                            <div className="col-md-4 account_card_col">
                                <h6 className="currency">CAD</h6>
                                <h6 className="account_value">0.00</h6>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="card account_card">
                    <div class="card-body account_card_body">
                        <div className="row account_card_row">
                            <div className="col-md-8 account_card_col">
                                <img src={currencyFlag} alt="" className="currency_flag" />
                                <h6 className="currency_and_state">Great British Pounds </h6>
                            </div>
                            <div className="col-md-4 account_card_col">
                                <h6 className="currency">GPB</h6>
                                <h6 className="account_value">0.00</h6>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="card account_card">
                    <div class="card-body account_card_body">
                        <div className="row account_card_row">
                            <div className="col-md-12">
                            <i class="fas fa-plus-circle fa-2x"></i>
                            <h6 style={{textAlign: "center"}}>Add Account</h6>
                            </div>
                        </div>
                        </div>
                    </div>
                        <button type="button" class="btn btn-link see_all_btn">
                            <span>see all</span> 
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                    <div class="card account_opening_card">
                    <div class="card-body" style={{display: "flex"}}>
                    <div>
                     <div className="account_opening_title">Get an account number in over 20 countries
                     <button type="button" class="btn btn-link acc_opening_btn">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                     </div>
                     <p className="account_opening_subtitle">Receive money from bank transfers </p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </React.Fragment>
    )
};
export default Accounts