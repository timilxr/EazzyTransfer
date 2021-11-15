import React from "react";
import avatar from '../imgs/avatar.jpg';
import aus from '../imgs/Rectangle 190.png';
import rightCarret from '../imgs/rightcaret.svg';
import mastercard from '../imgs/mastercard.svg';

const SendMoney2 = () => {
    return (
        <>
            <div class="m-0 p-0" style={{ borderBottom: '1px solid #DFE0EB' }}>
                {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                <button type="button" class="close mr-4 mt-4" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="row p-0 m-0 mt-5">
                    <div className="col-md-6 p-0 m-0">
                        <div className="d-flex align-items-center" style={{ height: '100px' }}>
                            <img src={avatar} className="img-fluid user_image" alt="" />
                            <div className="ml-3">
                                <p className="m-0" style={{ fontWeight: '600', fontSize: '14px' }}>Abisayo Omobada</p>
                                <div className="d-flex align-items-center">
                                    <img src={aus} className="img-fluid" width="23px" height="16px" alt="" />
                                    <span className="ml-2 text-secondary" style={{ fontSize: '12px' }}>Primary GBP Account</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 align-items-center d-flex p-0">
                        <div class="form-group d-flex align-items-center mt-3">
                            {/* <label className="modal_input_labels" for="exampleInputEmail1">Sort code</label> */}
                            <input type="radio" class="form-control m-0 p-0" id="exampleInputEmail1" style={{ fontSize: '12px', width: '15px', height: '15px' }} aria-describedby="emailHelp" />
                            <span className="myaccount_amount text-secondary ml-2" style={{ fontSize: '12px' }}>Save account as beneficiary</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-body">
                <div className="d-flex flex-wrap justify-content-evenly align-items-evenly">
                    <div className="w-50 pl-4 mb-3">
                        <p className="m-0" style={{ fontWeight: '600', fontSize: '14px' }}>Account number</p>
                        <span className="text-secondary" style={{ fontWeight: '600', fontSize: '12px' }}>0123897334</span>
                    </div>
                    <div className="w-50 pl-4 mb-3">
                        <p className="m-0" style={{ fontWeight: '600', fontSize: '14px' }}>Card type</p>
                        <div className="d-flex align-items-center">
                            <img src={mastercard} className="modal_input_images" alt="" />
                            <span className="text-secondary ml-1" style={{ fontWeight: '600', fontSize: '12px' }}>Visa card 0043</span>
                        </div>
                    </div>
                    <div className="w-50 pl-4 mb-3">
                        <p className="m-0" style={{ fontWeight: '600', fontSize: '14px' }}>Beneficiary bank</p>
                        <span className="text-secondary" style={{ fontWeight: '600', fontSize: '12px' }}>Guaranty Trust Bank</span>
                    </div>
                </div>
                <div className="w-100 d-flex justify-content-between align-items-center py-2 rounded px-3 border">
                    <p className="m-0" style={{ color: '#252733', fontSize: '14px' }}>Check bank statement</p>
                    <img src={rightCarret} className="img-fluid" alt="" />
                </div>
                <div className="w-100 text-center mt-5">
                    <button className="btn mb-2" style={{ background: '#172755', borderRadius: '2px', color: 'white', fontSize: '14px' }}>Add Money</button>
                    {/* <p className="" style={{ color: '#FB4039', fontSize: '12px', fontWeight: '600' }}>
            <span aria-hidden="true" className="mr-1">&times;</span>
            Delete Beneficiary
          </p> */}
                </div>
            </div>
        </>)
}

export default SendMoney2;