import React from "react";
import { Label } from "semantic-ui-react";
// import avatar from '../imgs/avatar.jpg';
import aus from '../imgs/Rectangle 190.png';

const AccountDetails2 = () => {
    return (
        <>
            {/* <div class="m-0 p-0" style={{ borderBottom: '1px solid #DFE0EB' }}> */}
            <div class="m-0 p-0 pl-4">
                {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                <button type="button" class="close mr-4 mt-4" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="d-flex align-items-end mt-4" style={{ height: '70px' }}>
                    <h2 className="modal_header_heading">Account details</h2>
                </div>
            </div>
            <div class="modal-body">
                <form onSubmit={e => console.log(e)} method="">
                    <div className="row justify-content-evenly align-items-evenly">
                        <div class="form-group col-md-7">
                            <label className="modal_input_labels" for="exampleInputEmail1">Sort code</label>
                            <input type="email" class="form-control modal_inputs" id="exampleInputEmail1" autoComplete="off" aria-describedby="emailHelp" placeholder="e.g. 24390" />
                        </div>
                        <div class="form-group col-md-7">
                            <label className="modal_input_labels" for="exampleInputPassword1">Means of identification</label>
                            <select class="custom-select">
                                <option value="International Passport" style={{ color: 'rgba(75, 80, 109, 0.4) !important' }} className="" selected disabled>International Passport</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            {/* <input type="password" class="form-control modal_inputs" id="exampleInputPassword" placeholder="Password" /> */}
                        </div>
                        <div class="form-group col-md-7">
                            <label className="modal_input_labels" for="exampleInputPassword1">Means of identification</label>
                            <label className="label">
                            <input type="file" class="form-control modal_inputs" id="exampleInputEmail1" autoComplete="off" aria-describedby="emailHelp" placeholder="e.g. 24390" />
                            <span>Upload</span>
                            </label>
                        </div>
                    </div>

                    {/* <button type="submit" class="btn btn-primary modal_btn">Sign In</button> */}
                    <div className="w-50 text-center mt-5">
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

export default AccountDetails2;