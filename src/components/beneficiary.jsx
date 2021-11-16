import React from "react";
import avatar from '../imgs/avatar.jpg';
import aus from '../imgs/Rectangle 190.png';
import mastercard from '../imgs/mastercard.svg';

const Beneficiary = ({showModal, ...props}) => {
  return (
    <>
      <div class="m-0 p-0" style={{ borderBottom: '1px solid #DFE0EB' }}>
        {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
        <button type="button" onClick={()=>showModal(null)} class="close mr-4 mt-4" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="row p-0 m-0 mt-5">
          <div className="col-md-7 p-0 m-0">
            <div className="d-flex align-items-center" style={{ height: '100px' }}>
              <img src={avatar} className="img-fluid user_image" alt="" />
              <div className="ml-3">
                <p className="m-0" style={{ fontWeight: '600', fontSize: '14px' }}>Abisayo Omobada</p>
                <div className="d-flex align-items-center">
                  <img src={aus} className="img-fluid" width="23px" height="16px" alt="" />
                  <span className="ml-2" style={{ fontSize: '12px' }}>Primary GBP Account</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-md-5 align-items-center d-flex p-0">
            <span className="myaccount_amount">$345,875</span>
          </div> */}
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
        <div className="w-100 text-center mt-5">
          <button className="btn mb-2" style={{ background: '#172755', borderRadius: '2px', color: 'white', fontSize: '14px' }}>Send Money</button>
          <p className="" style={{ color: '#FB4039', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>
            <span aria-hidden="true" className="mr-1">&times;</span>
            Delete Beneficiary
          </p>
        </div>
      </div>
    </>)
}

export default Beneficiary;