import React from "react";
import { Label } from "semantic-ui-react";
// import avatar from '../imgs/avatar.jpg';
import aus from '../imgs/Rectangle 190.png';

const AddMoney2 = ({showModal, ...props}) => {
    return (
        <>
            {/* <div class="m-0 p-0" style={{ borderBottom: '1px solid #DFE0EB' }}> */}
            <div class="m-0 p-0 pl-4">
                {/* <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> */}
                <button type="button" onClick={()=>showModal(null)} class="close mr-4 mt-4" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="d-flex align-items-end mt-4" style={{ height: '70px' }}>
                    <h2 className="modal_header_heading">Add Money</h2>
                </div>
            </div>
            <div class="modal-body w-100 mt-2">
                <form onSubmit={e => console.log(e)} method="">
                    <div className="row justify-content-evenly align-items-evenly">
                        <div class="form-group col-md-8">
                            <label className="modal_input_labels" for="exampleInputEmail1">Amount</label>
                            <input type="number" class="form-control modal_inputs" id="exampleInputEmail1" autoComplete="off" aria-describedby="emailHelp" placeholder="put in amount..." />
                        </div>
                        <div class="form-group col-md-8">
                            <label className="modal_input_labels" for="exampleInputPassword1">Payment receipt (bank teller)</label>
                            <label className="label">
                            <input type="file" class="form-control modal_inputs" id="exampleInputEmail1" autoComplete="off" aria-describedby="emailHelp" placeholder="e.g. 24390" />
                            <span>Upload</span>
                            </label>
                        </div>
                        <div class="col-md-8">
                            <p className="modal_input_labels" style={{fontSize: '13px'}} for="exampleInputEmail1">
                            We only accept bank tellers and not direct transfers for all deposits but Nigeria account. 
                            <a href="#">Get more clarification</a>
                            </p>
                        </div>
                        <div class="col-md-12 px-5">
                            <p className="confirmation_notice mx-5" for="exampleInputEmail1">
                            Confirmation proof takes between 2-3 hours, .
                            </p>
                        </div>
                    </div>

                    {/* <button type="submit" class="btn btn-primary modal_btn">Sign In</button> */}
                    <div className="w-100 text-center mt-0">
                        <button type="submit" className="btn mb-2" style={{ background: '#172755', borderRadius: '2px', color: 'white', fontSize: '14px' }}>Add money</button>
                        {/* <p className="" style={{ color: '#FB4039', fontSize: '12px', fontWeight: '600' }}>
                        <span aria-hidden="true">&times;</span>
                        Delete Beneficiary
                    </p> */}
                    </div>
                </form>

            </div>
        </>)
}

export default AddMoney2;