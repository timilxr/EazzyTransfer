import React from "react";
import { Label } from "semantic-ui-react";
// import avatar from '../imgs/avatar.jpg';
import aus from '../imgs/Rectangle 190.png';

const AccountDetails3 = ({showModal, ...props}) => {
    return (
        <>
            {/* <div className="m-0 p-0" style={{ borderBottom: '1px solid #DFE0EB' }}> */}
            <div className="m-0 p-0 pl-4">
                {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                <button type="button" onClick={()=>showModal(null)} className="close mr-4 mt-4" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="d-flex align-items-end mt-4" style={{ height: '70px' }}>
                    <h2 className="modal_header_heading">Account details</h2>
                </div>
            </div>
            <div className="modal-body w-100 mt-2">
                <form onSubmit={e => console.log(e)} method="">
                    <div className="row justify-content-evenly align-items-evenly">
                        <div className="form-group col-md-8">
                            <p className="modal_input_labels" style={{fontSize: '14px'}} htmlFor="exampleInputEmail1">
                                A 6 digits verication code has been sent to +23481656***35 kindly enter correctly
                            </p>
                            <div className="mb-3 mt-5">
                                <div className="row ">
                                    <div className="col col-md-2 px-1 px-md-2">
                                        <input type="text" className="form-control token p-0" placeholder="" style={{ textAlign: "center" }} />
                                    </div>
                                    <div className="col col-md-2 px-1 px-md-2">
                                        <input type="text" className="form-control token" placeholder="" style={{ textAlign: "center" }} />
                                    </div>
                                    <div className="col col-md-2 px-1 px-md-2">
                                        <input type="text" className="form-control token" placeholder="" style={{ textAlign: "center" }} />
                                    </div>
                                    <div className="col col-md-2 px-1 px-md-2">
                                        <input type="text" className="form-control token" placeholder="" style={{ textAlign: "center" }} />
                                    </div>
                                    <div className="col col-md-2 px-1 px-md-2">
                                        <input type="text" className="form-control token" placeholder="" style={{ textAlign: "center" }} />
                                    </div>
                                    <div className="col col-md-2 px-1 px-md-2">
                                        <input type="text" className="form-control token" placeholder="" style={{ textAlign: "center" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <button type="submit" className="btn btn-primary modal_btn">Sign In</button> */}
                    <div className="w-50 text-center mt-5">
                        <button type="" onClick={()=>showModal('add money')} className="btn mb-2" style={{ background: '#172755', borderRadius: '2px', color: 'white', fontSize: '14px' }}>Verify</button>
                        {/* <p className="" style={{ color: '#FB4039', fontSize: '12px', fontWeight: '600' }}>
                        <span aria-hidden="true">&times;</span>
                        Delete Beneficiary
                    </p> */}
                    </div>
                </form>

            </div>
        </>)
}

export default AccountDetails3;