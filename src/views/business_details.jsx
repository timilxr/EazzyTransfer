import React, { useState } from "react";
import DashboardHeader from "../dashboard/dashboard_header";
import photo from '../../src/imgs/avatar.jpg';

const BusinessDetails = ({ proceed, summary, ...props }) => {
    const [image, setImage] = useState(null);


    return (
        <React.Fragment>
            <div className="container-fluid p-0 m-0" style={{minHeight: '100vh'}}>
                <div className="dashboard_mainbody">
                    {!summary && <DashboardHeader />}
                    <div className="" style={{ backgroundColor: '#F7F8FC', padding: !summary ? "8vw" : '0' }}>
                        <div className="card card-container">
                            <div className="card-body">
                                <div style={{ display: "flex" }}>
                                    <img src={photo} className="img-fluid mr-md-2" alt="" style={{ height: "80px", width: "80px", borderRadius: "50%" }} />
                                    <form method="POST" style={{ margin: "25px" }}>
                                        <input type="file" style={{ position: "absolute", margin: "0", padding: "0", outline: "none", opacity: "0" }} />
                                        <p style={{ color: "#0961F7" }}>Add profile photo</p>
                                    </form>
                                </div>
                                <div className="mt-5" style={{ display: "flex", borderBottom: "1px solid #e5e5e5" }}>
                                    <h5>Registered Address</h5>
                                    {!summary && <button type="button" class="btn ml-auto" style={{ border: "1px solid #0961f7", color: "#0961f7", width: "66px", marginBottom: ".5rem" }}>Edit</button>}
                                </div>
                                <div className="row mt-5">
                                    <div className="col-6">
                                        <h6 className="business_details_title">Address</h6>
                                        <h6 className="business_details_subtitle">12 Allen Avenue</h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="business_details_title">Country</h6>
                                        <h6 className="business_details_subtitle">Nigeria</h6>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-6">
                                        <h6 className="business_details_title">City</h6>
                                        <h6 className="business_details_subtitle">Ikeja</h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="business_details_title">Zip</h6>
                                        <h6 className="business_details_subtitle">23401</h6>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-6">
                                        <h6 className="business_details_title">State</h6>
                                        <h6 className="business_details_subtitle">Lagos</h6>
                                    </div>
                                </div>
                                <div className="mt-5" style={{ display: "flex", flexWrap: 'wrap', borderBottom: "1px solid #e5e5e5" }}>
                                    <h5>Business Information</h5>
                                    {/* <div type="button" class="btn ml-auto" style={{border: "1px solid #0961f7", color: "#0961f7", width: "66px", marginBottom: ".5rem"}}>Edit</div> */}
                                </div>
                                <div className="row mt-3 mt-md-5">
                                    <div className="col-md-6 mb-3 mb-sm-0">
                                        <h6 className="business_details_title">Registered Company Name</h6>
                                        <h6 className="business_details_subtitle">Havoc Ltd</h6>
                                    </div>
                                    <div className="col-md-6">
                                        <h6 className="business_details_title">Company Type</h6>
                                        <h6 className="business_details_subtitle">Limited Liability Compnay(LTD)</h6>
                                    </div>
                                </div>
                                <div className="row mt-3 mt-md-4">
                                    <div className="col-md-6 mb-3 mb-sm-0">
                                        <h6 className="business_details_title">EIN Number</h6>
                                        <h6 className="business_details_subtitle">09877654321</h6>
                                    </div>
                                    <div className="col-md-6">
                                        <h6 className="business_details_title">Subcategory</h6>
                                        <h6 className="business_details_subtitle">Telecommunications</h6>
                                    </div>
                                </div>
                                <div className="row mt-3 mt-md-4">
                                    <div className="col-md-6">
                                        <h6 className="business_details_title">Category</h6>
                                        <h6 className="business_details_subtitle">IT</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card card-container">
                            <div className="card-body">
                                <div className="mt-5" style={{ display: "flex", flexWrap: 'wrap', borderBottom: "1px solid #e5e5e5" }}>
                                    <h5>Trading address</h5>
                                    {!summary && <div type="button" class="btn ml-auto" style={{ border: "1px solid #0961f7", color: "#0961f7", width: "66px", marginBottom: ".5rem" }}>Edit</div>}
                                </div>
                                <div className="row mt-5">
                                    <div className="col-6">
                                        <h6 className="business_details_title">Address</h6>
                                        <h6 className="business_details_subtitle">12 Allen Avenue</h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="business_details_title">Country</h6>
                                        <h6 className="business_details_subtitle">Nigeria</h6>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-6">
                                        <h6 className="business_details_title">City</h6>
                                        <h6 className="business_details_subtitle">Ikeja</h6>
                                    </div>
                                    <div className="col-6">
                                        <h6 className="business_details_title">Zip</h6>
                                        <h6 className="business_details_subtitle">23401</h6>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-6">
                                        <h6 className="business_details_title">State</h6>
                                        <h6 className="business_details_subtitle">Lagos</h6>
                                    </div>
                                </div>
                            </div>
                                {summary && <button type="button" class="btn mx-auto mt-4" style={{ background: '#0898A0', borderRadius: '2px', color: 'white', fontSize: '14px', marginBottom: ".5rem" }} onClick={()=>proceed()}>Proceed</button>}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default BusinessDetails