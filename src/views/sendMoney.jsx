import React, { useState } from 'react';
import SelectCurrency from '../components/selectCurrency';
import DashboardHeader from '../dashboard/dashboard_header';

import aus from '../imgs/Rectangle 190.png';
import usd from '../imgs/united-states.png';
const CurrencyOptions = [
    {
        img: aus,
        value: "Nigeria Naira - NGN",
        text: 'NGN'
    },
    {
        img: aus,
        value: "America (United States) Dollars - USD",
        text: 'USD'
    },
    {
        img: aus,
        value: "Afghanistan Afghanis - AFN",
        text: 'GBP'
    },
    {
        img: aus,
        value: "Albania Leke - ALL",
        text: 'CAD'
    },
    {
        img: aus,
        value: "Algeria Dinars - DZD",
        text: 'ZAR'
    },
    {
        img: aus,
        value: "Argentina Pesos - ARS",
        text: 'EUR'
    },
    {
        img: aus,
        value: "Austria Schillings - ATS",
        text: 'KES'
    },
];

const SendMoney = () => {
    const [view, setView] = useState('Send Money');
    const [sendCurrency, setSendCurrency] = useState(null);
    const [receiveCurrency, setReceiveCurrency] = useState(null);

    return (
        <>
            <div className="container-fluid p-0" style={{ background: '#F7F8FC', minHeight: '100vh' }}>
                <div className="w-100 bg-white">
                    <DashboardHeader header="Send Money" />
                </div>
                <div className="update_profile_body py-5 px-md-5">
                    <div className="send-money-container bg-white mx-3 mx-sm-auto rounded px-3 px-md-5 pb-5 pt-3">
                        {/* <p className="current_step">Step 0/6</p> */}
                        <h3 className="verify_heading mt-5">{view}</h3>
                        {view == 'OTP' && <p className="verify_subheading">An Otp was sent to 0816554***4, enter to authorize payment.</p>}
                        <div className="verify_body text-center mt-5 position-relative">
                        {view == 'Send Money' ? 
                        <>
                        <span className="conversion">1 EUR = 0.8797 GBP</span>
                            <div className="d-flex justify-content-between align-items-center py-3 px-2 px-lg-5">
                                <div>
                                    <SelectCurrency options={CurrencyOptions} name="send" />
                                    <span className="m-0 send-money-currency-label">You send</span>
                                </div>
                                <p className="convert-currency-amount">$ 3224</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center py-3 px-2 px-lg-5 rounded" style={{ background: '#F7F8FC' }}>
                                <div>
                                    <SelectCurrency options={CurrencyOptions} name="recieve" />
                                    <span className="m-0 send-money-currency-label">Receiver gets</span>
                                </div>
                                <p className="convert-currency-amount">$ 3224</p>
                            </div>
                            <div className="w-100 text-center mt-5">
                                <button onClick={() => setView('OTP')} className="btn mb-2 btn-lg" style={{ background: '#0898A0', borderRadius: '2px', color: 'white', fontSize: '14px' }}>Send Money</button>
                            </div>
                        </>
                        :
                        <>
                            <div className="d-flex justify-content-between align-items-center py-lg-3 px-4 px-lg-5 rounded" style={{ background: '#F7F8FC' }}>
                            <div className="my-3 p-0">
                                <div className="row p-0">
                                    <div className="col col-md-2 px-1 px-lg-2">
                                        <input type="tel" className="form-control shadow-sm rounded border-0" maxLength={1} placeholder="8" autoFocus style={{ textAlign: "center", minHeight: '6vw' }} />
                                    </div>
                                    <div className="col col-md-2 px-1 px-lg-2">
                                        <input type="tel" className="form-control shadow-sm rounded border-0" maxLength={1} placeholder="4" style={{ textAlign: "center", minHeight: '6vw' }} />
                                    </div>
                                    <div className="col col-md-2 px-1 px-lg-2">
                                        <input type="tel" className="form-control shadow-sm rounded border-0" maxLength={1} placeholder="6" style={{ textAlign: "center", minHeight: '6vw' }} />
                                    </div>
                                    <div className="col col-md-2 px-1 px-lg-2">
                                        <input type="tel" className="form-control shadow-sm rounded border-0" maxLength={1} placeholder="1" style={{ textAlign: "center", minHeight: '6vw' }} />
                                    </div>
                                    <div className="col col-md-2 px-1 px-lg-2">
                                        <input type="tel" className="form-control shadow-sm rounded border-0" maxLength={1} placeholder="7" style={{ textAlign: "center", minHeight: '6vw' }} />
                                    </div>
                                    <div className="col col-md-2 px-1 px-lg-2">
                                        <input type="tel" className="form-control shadow-sm rounded border-0" maxLength={1} placeholder="5" style={{ textAlign: "center", minHeight: '6vw' }} />
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="w-100 text-center mt-5">
                                <button onClick={() => setView('Send Money')} className="btn mb-2 btn-lg px-md-5" style={{ background: '#0898A0', borderRadius: '2px', color: 'white', fontSize: '14px' }}>Authorize</button>
                            </div>
                        </>
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SendMoney;