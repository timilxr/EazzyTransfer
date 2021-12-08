import React, { useState } from 'react';
import Tick from '../imgs/tick.png';

const BusinessIndividualInfo = ({ proceed, initAcctType, initPage, ...props }) => {
    const [page, setPage] = useState(initPage || 4);
    const [acctType, setAcctType] = useState(initAcctType);

    return (
        <>
            <div className="verify_container bg-white mx-auto rounded px-3 px-md-5 pb-5 pt-3">
                {page != 6 ? <>
                    <p className="current_step mt-3">Step {page}/6</p>
                    <h3 className="verify_heading mt-3">{page == 4 ? 'Business/ Individual Information' : 'Registered Address'}</h3>
                    <p className="verify_subheading">Please put in your information</p>
                    {page == 4 &&
                        <>
                            <div className="d-flex flex-wrap justify-content-between mt-5">
                                <div onClick={() => setAcctType('business')} className="d-flex align-items-center mb-2" style={{ cursor: 'pointer' }}>
                                    <div className={`check-box d-flex align-items-center ${acctType == 'business' ? 'border-0' : ''}`}>
                                        {acctType == 'business' && <img src={Tick} className="img-fluid" width="100%" alt="business" />}
                                    </div>
                                    <p className="image-instruction m-0 ml-2" style={{ fontSize: '14px' }}>Registering as a business</p>
                                </div>
                                <div onClick={() => setAcctType('individual')} className="d-flex align-items-center mb-2" style={{ cursor: 'pointer' }}>
                                    <div className={`check-box d-flex align-items-center ${acctType == 'individual' ? 'border-0' : ''}`}>
                                        {acctType == 'individual' && <img src={Tick} className="img-fluid" width="100%" alt="individual" />}
                                    </div>
                                    <p className="image-instruction m-0 ml-2" style={{ fontSize: '14px' }}>Registering as an individual</p>
                                </div>
                            </div>
                            {acctType &&
                                <form className="mt-3">
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <label for="companyName">Registered company name</label>
                                            <input type="text" class="form-control" id="companyName" placeholder="" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Company type</label>
                                            <input type="text" class="form-control" id="inputPassword4" placeholder="" />
                                        </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputAddress">EIN number</label>
                                        <input type="text" class="form-control" id="inputAddress" placeholder="" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="inputAddress2">category</label>
                                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                                    </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputCity">&nbsp;</label>
                                            <input type="text" class="form-control" id="inputCity" />
                                        </div>
                                    </div>
                                    <div className="w-100 text-center mt-5">
                                        <button type="submit" onClick={e => {e.preventDefault(); setPage(5)}} className="btn mb-2 btn-lg" style={{ background: '#0898A0', borderRadius: '2px', color: 'white', fontSize: '14px' }}>Next</button>
                                    </div>
                                </form>}
                        </>
                    }
                    {page == 5 &&
                        <form className="mt-3">
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="inputEmail4">Street</label>
                                    <input type="text" class="form-control" id="inputEmail4" placeholder="" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputPassword4">City</label>
                                    <input type="text" class="form-control" id="inputPassword4" placeholder="" />
                                </div>
                            <div class="form-group col-md-6">
                                <label for="inputAddress">State</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputAddress2">Country</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="" />
                            </div>
                                <div class="form-group col-md-6">
                                    <label for="inputCity">Zip code</label>
                                    <input type="text" class="form-control" id="inputCity" />
                                </div>
                            </div>
                            {/* <button type="submit" class="btn btn-primary">Sign in</button> */}
                            <div className="w-100 text-center mt-5">
                                <button type="submit" onClick={e => {e.preventDefault(); setPage(6)}} className="btn mb-2 btn-lg" style={{ background: '#0898A0', borderRadius: '2px', color: 'white', fontSize: '14px' }}>Continue</button>
                            </div>
                        </form>
                    }
                </>
                    :
                    <>
                        <p className="current_step">Step {page}/6</p>
                        <h3 className="verify_heading mt-5 text-center">One final step</h3>
                        <p className="verify_subheading text-center">The pin to authorize all transactions</p>
                        <form onSubmit={e=>e.preventDefault()}>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="inputEmail4">Input Pin</label>
                                    <input type="text" class="form-control" id="inputEmail4" placeholder="" />
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="inputPassword4">Confirm Pin</label>
                                    <input type="text" class="form-control" id="inputPassword4" placeholder="Password" />
                                </div>
                            </div>
                            <div className="w-100 text-center mt-5">
                                <button onClick={() => proceed('appreciation')} className="btn btn-lg" style={{ background: '#0898A0', borderRadius: '2px', color: 'white', width: '40%', fontSize: '14px' }}>Done</button>
                            </div>
                        </form>
                    </>}
            </div>
        </>
    )
}

export default BusinessIndividualInfo;