import React from "react";
import aus from '../imgs/Rectangle 190.png';

const AddAccount = ({showModal, ...props}) => {
    return (
        <>
            {/* <div className="m-0 p-0" style={{ borderBottom: '1px solid #DFE0EB' }}> */}
            <div className="m-0 p-0 px-2">
                {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                <button type="button" onClick={()=>showModal(null)} className="close mr-4 mt-4" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="d-flex align-items-center mt-4 ml-2" style={{ height: '100px' }}>
                    <h2 className="modal_header_heading">Add Account</h2>
                </div>
            </div>
            <div className="modal-body">
                <form onSubmit={e => console.log(e)} method="">
                    <div className="row justify-content-evenly align-items-evenly">
                        <div className="form-group col-md-8">
                            <label className="modal_input_labels" htmlFor="exampleInputEmail1">Currency</label>
                            <div className="dropdown modal_inputs px-2 py-1">
                                <a className="btn dropdown-toggle p-0 px-1 d-flex justify-content-between align-items-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="text-secondary">Choose a currency</span>
                                </a>

                                <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuLink">
                                    <div className="dropdown-item p-1" onClick={()=>showModal('account details')} href="#"><img src={aus} className="modal_input_images" alt="" /> NGN</div>
                                    <div className="dropdown-item p-1" onClick={()=>showModal('account details')} href="#"><img src={aus} className="modal_input_images" alt="" /> GBP</div>
                                    <div className="dropdown-item p-1" onClick={()=>showModal('account details')} href="#"><img src={aus} className="modal_input_images" alt="" /> CAD</div>
                                </div>
                            </div>
                            {/* <input type="email" className="form-control modal_inputs" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" /> */}
                        </div>
                    </div>

                </form>

            </div>
        </>)
}

export default AddAccount;