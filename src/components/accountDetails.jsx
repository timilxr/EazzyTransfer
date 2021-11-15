import React from "react";
import aus from '../imgs/Rectangle 190.png';

const AccountDetails = () => {
    return (
        <>
            {/* <div class="m-0 p-0" style={{ borderBottom: '1px solid #DFE0EB' }}> */}
            <div class="m-0 p-0 px-2">
                {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                <button type="button" class="close mr-4 mt-4" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="d-flex align-items-center mt-4 ml-2" style={{ height: '100px' }}>
                    <h2 className="modal_header_heading">Add Account</h2>
                </div>
            </div>
            <div class="modal-body">
                <form onSubmit={e => console.log(e)} method="">
                    <div className="row justify-content-evenly align-items-evenly">
                        <div class="form-group col-md-8">
                            <label className="modal_input_labels" for="exampleInputEmail1">Currency</label>
                            <div class="dropdown modal_inputs px-2 py-1">
                                <a class="btn dropdown-toggle p-0 px-1 d-flex justify-content-between align-items-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div class="" href="#"><img src={aus} className="modal_input_images" alt="" /> Canadian Dollar</div>
                                </a>

                                <div class="dropdown-menu p-0" aria-labelledby="dropdownMenuLink">
                                    <div class="dropdown-item p-1" href="#"><img src={aus} className="modal_input_images" alt="" /> GBP</div>
                                    <div class="dropdown-item p-1" href="#"><img src={aus} className="modal_input_images" alt="" /> CAD</div>
                                </div>
                            </div>
                            {/* <input type="email" class="form-control modal_inputs" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" /> */}
                        </div>
                    </div>

                    <div className="w-100 mt-3">
                        <h3 style={{fontWeight: '600', fontSize: '14px', fontFamily: 'Mulish', color: '#6C63FF', lineHeight: '17px'}}>3 STEPS INVOLVED</h3>
                        <ul className="px-4 py-2 account_details_list">
                            <li>Submit your pwan document </li>
                            <li>Submit your pwan document </li>
                            <li>Submit your pwan document </li>
                        </ul>
                    </div>

                    {/* <button type="submit" class="btn btn-primary modal_btn">Sign In</button> */}
                    <div className="w-100 text-center mt-5">
                        <button type="submit" className="btn mb-2" style={{ background: '#172755', borderRadius: '2px', color: 'white', fontSize: '14px' }}>Open Account</button>
                        {/* <p className="" style={{ color: '#FB4039', fontSize: '12px', fontWeight: '600' }}>
                        <span aria-hidden="true">&times;</span>
                        Delete Beneficiary
                    </p> */}
                    </div>
                </form>

            </div>
        </>)
}

export default AccountDetails;