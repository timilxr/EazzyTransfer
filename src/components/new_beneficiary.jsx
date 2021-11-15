import React from "react";
// import avatar from '../imgs/avatar.jpg';
import aus from '../imgs/Rectangle 190.png';

const NewBeneficiary = () => {
    return (
        <>
            {/* <div class="m-0 p-0" style={{ borderBottom: '1px solid #DFE0EB' }}> */}
            <div class="m-0 p-0">
                {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                <button type="button" class="close mr-4 mt-4" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="d-flex align-items-center mt-4" style={{ height: '100px' }}>
                    <h2 className="modal_header_heading">New Beneficiary</h2>
                </div>
            </div>
            <div class="modal-body">
                <form onSubmit={e => console.log(e)} method="">
                    <div className="row justify-content-evenly align-items-evenly">
                        <div class="form-group col-md-5 w-50">
                            <label className="modal_input_labels" for="exampleInputEmail1">Currency</label>
                            <div class="dropdown modal_inputs px-2 py-1">
                                <a class="btn dropdown-toggle p-0 px-1 modal_images_dropdown" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={aus} className="modal_input_images" alt="" /> <span className="modal_input_images_descriptions">USD</span>
                                </a>

                                <div class="dropdown-menu modal_dropdown_menu p-0" aria-labelledby="dropdownMenuLink">
                                    <div class="dropdown-item p-1" href="#"><img src={aus} className="modal_input_images" alt="" /> NGN</div>
                                    <div class="dropdown-item p-1" href="#"><img src={aus} className="modal_input_images" alt="" /> GBP</div>
                                    <div class="dropdown-item p-1" href="#"><img src={aus} className="modal_input_images" alt="" /> CAD</div>
                                </div>
                            </div>
                            {/* <input type="email" class="form-control modal_inputs" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" /> */}
                        </div>
                        <div class="form-group col-md-7 w-50">
                            <label className="modal_input_labels" for="exampleInputPassword1">Bank</label>
                            <select class="custom-select">
                                <option selected></option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            {/* <input type="password" class="form-control modal_inputs" id="exampleInputPassword" placeholder="Password" /> */}
                        </div>
                    </div>
                    <div class="form-group">
                        <label className="modal_input_labels" for="exampleInputEmail1">Account Number</label>
                        <input type="email" class="form-control modal_inputs" id="exampleInputEmail1" autoComplete="off" aria-describedby="emailHelp" placeholder="" />
                    </div>
                    <div class="form-group">
                        <label className="modal_input_labels" for="exampleInputPassword1">Full name</label>
                        <input type="text" class="form-control modal_inputs" id="exampleInputPassword" autoComplete="off" placeholder="First, Last, Middle" />
                    </div>

                    {/* <button type="submit" class="btn btn-primary modal_btn">Sign In</button> */}
                    <div className="w-100 text-center mt-5">
                        <button type="submit" className="btn mb-2" style={{ background: '#172755', borderRadius: '2px', color: 'white', fontSize: '14px' }}>Add Beneficiary</button>
                        {/* <p className="" style={{ color: '#FB4039', fontSize: '12px', fontWeight: '600' }}>
                        <span aria-hidden="true">&times;</span>
                        Delete Beneficiary
                    </p> */}
                    </div>
                </form>

            </div>
        </>)
}

export default NewBeneficiary;