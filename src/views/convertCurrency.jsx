import React, { useState } from 'react';
import SelectCurrency from '../components/selectCurrency';
import DashboardHeader from '../dashboard/dashboard_header';
import Appreciation from '../components/appreciation';

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

const ConvertCurrency = () => {
    const [view, setView] = useState('Convert Currency');
    const [myCurrency, setMyCurrency] = useState({
        img: aus,
        value: "America (United States) Dollars - USD",
        text: 'USD'
    });
    const [newCurrency, setNewCurrency] = useState(null);

    return (
        <>
            <div className="container-fluid p-0" style={{ background: '#F7F8FC', minHeight: '100vh' }}>
                <div className="w-100 bg-white">
                    <DashboardHeader header="Convert Currency" />
                </div>
                <div className="update_profile_body py-5">
                    <div className="send-money-container bg-white mx-3 mx-sm-auto rounded px-3 px-md-5 pb-5 pt-3">
                        {/* <p className="current_step">Step 0/6</p> */}
                        <h3 className="verify_heading mt-5">{view == 'Thanks' ? 'Your request is being processed' : view}</h3>
                        {view == 'OTP' && <p className="verify_subheading">An Otp was sent to 0816554***4, enter to authorize payment.</p>}
                        <div className="verify_body text-center mt-5 position-relative">
                            {view == 'Convert Currency' &&
                                <>
                                    <span className="currency-conversion">1 USD = 567 NGN</span>
                                    <div className="d-flex justify-content-between py-3 px-2 px-lg-5">
                                        <div className="" href="#"><img src={myCurrency.img} className="modal_input_images" alt="" /> {myCurrency.text}</div>
                                        <div className="text-right">
                                            {/* <SelectCurrency options={CurrencyOptions} name="send" /> */}
                                            <p className="convert-currency-amount m-0 text-right">$ 3224</p>
                                            <span className="m-0 send-money-currency-label text-right">Your Balance</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between py-3 px-2 px-lg-5 rounded" style={{ background: '#F7F8FC' }}>
                                        <div className="bg-white p-2">
                                            <SelectCurrency options={CurrencyOptions} name="recieve" />
                                        </div>
                                        <div className="text-right">
                                            <p className="convert-currency-amount m-0 text-right">N 3224</p>
                                            <span className="m-0 send-money-currency-label text-right">Your wallet adds up</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 px-xl-5 w-75 mx-auto text-center">
                                        <p className="convert-currency-desc">Your USD wallet will be topped up with + <span className="convert-currency-value">$3266</span> to make a balance of <span className="convert-currency-value">$8754</span></p>
                                    </div>
                                    <div className="w-100 text-center mt-5">
                                        <button onClick={() => setView('OTP')} className="btn mb-2 btn-lg" style={{ background: '#0898A0', borderRadius: '2px', color: 'white', fontSize: '14px' }}>Convert Currency</button>
                                    </div>
                                </>
                            }
                            {view == 'OTP' &&
                                <>
                                    <div className="d-flex justify-content-between align-items-center py-lg-3 px-4 px-lg-5 rounded" style={{ background: '#F7F8FC' }}>
                                        <div className="my-3 p-0">
                                            <div className="row p-0">
                                                <div className="col col-md-2 px-1 px-lg-2">
                                                    <input type="tel" className="form-control shadow-sm rounded border-0" maxLength={1} placeholder="3" autoFocus style={{ textAlign: "center", minHeight: '6vw' }} />
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
                                                    <input type="tel" className="form-control shadow-sm rounded border-0" maxLength={1} placeholder="9" style={{ textAlign: "center", minHeight: '6vw' }} />
                                                </div>
                                                <div className="col col-md-2 px-1 px-lg-2">
                                                    <input type="tel" className="form-control shadow-sm rounded border-0" maxLength={1} placeholder="0" style={{ textAlign: "center", minHeight: '6vw' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-100 text-center mt-5">
                                        <button onClick={() => setView('Thanks')} className="btn mb-2 btn-lg px-md-5" style={{ background: '#0898A0', borderRadius: '2px', color: 'white', fontSize: '14px' }}>Authorize</button>
                                    </div>
                                </>
                            }
                        </div>
                        {view == 'Thanks' && <Appreciation plain />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConvertCurrency;