import React from "react";
import avatar from "../../src/imgs/avatar.jpg"
// import transaction_img from "../imgs/undraw_Annotation_re_h774 1.png"


const TransactionHistory  = () => {
    
    
    return(
            <React.Fragment>
               <div className="dashboard_body">
                   <div className="transaction_tab row">
                       <div className="col-md-12">
                        <div className="row  transaction_tab_nav">
                        <div className="col-md-10">
                        <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link transaction_nav_link" href="#">Added</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  transaction_nav_link" href="#">Converted</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  transaction_nav_link" href="#">Transferred</a>
                        </li>
                        </ul>
                        </div>
                        <div className="col-md-2 transaction_tab_nav_right">
                        <ul className="nav">
                        <li class="nav-item mr-2"  style={{display: "flex"}}>
                        <i class="fas fa-sort-amount-up mr-2"></i>
                          <h6 className="sort">Sort</h6>
                        </li>
                        <li class="nav-item" style={{display: "flex"}}>
                        <i class="fas fa-filter ml-2"></i>
                        <h6 className="filter">Filter</h6>
                        </li>
                        </ul>
                        </div>
                        </div>
                        <table class="table mt-5">
                        <thead>
                            <tr >
                            <th scope="col" className="table_row" style={{width: "500px"}}>Status</th>
                            <th scope="col" className="table_row">Customer Name</th>
                            <th scope="col" className="table_row">Date</th>
                            <th scope="col" className="table_row" style={{paddingLeft: "87px"}}>Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">
                            <div style={{display: "flex"}}>
                            <img src={avatar} alt="" className="user_image" />
                            <div>
                            <h6 className="status">Contact Email not Linked</h6>
                            <p className="status_sub">Updated 1 day ago</p>
                            </div>
                            </div>
                            </th>
                            <td>
                                <div>
                                    <h6 className="customer_name">Tom Cruise</h6>
                                    <p className="date">on 24.05.2019</p>
                                </div>
                            </td>
                            <td>
                            <div>
                                    <h6 className="transaction_date">May 26, 2019</h6>
                                    <p className="time">6:30 PM</p>
                                </div>
                            </td>
                            <td>
                                <div style={{display: "flex", float: "right"}}>
                                <button type="button" class="btn btn-primary approved_transaction_btn">Successful</button>
                                <button type="button" class="btn btn-link see_more_btn">
                                <i class="fas fa-ellipsis-v"></i>
                                </button>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">
                            <div style={{display: "flex"}}>
                            <img src={avatar} alt="" className="user_image" />
                            <div>
                            <h6 className="status">Contact Email not Linked</h6>
                            <p className="status_sub">Updated 1 day ago</p>
                            </div>
                            </div>
                            </th>
                            <td>
                                <div>
                         <h6 className="customer_name">Tom Cruise</h6>
                                    <p className="date">on 24.05.2019</p>
                                </div>
                            </td>
                            <td>
                            <div>
                                    <h6 className="transaction_date">May 26, 2019</h6>
                                    <p className="time">6:30 PM</p>
                                </div>
                            </td>
                            <td>
                                <div style={{display: "flex", float: "right"}}>
                                <button type="button" class="btn btn-primary pending_transaction_btn">Successful</button>
                                <button type="button" class="btn btn-link see_more_btn">
                                <i class="fas fa-ellipsis-v"></i>
                                </button>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">
                            <div style={{display: "flex"}}>
                            <img src={avatar} alt="" className="user_image" />
                            <div>
                            <h6 className="status">Contact Email not Linked</h6>
                            <p className="status_sub">Updated 1 day ago</p>
                            </div>
                            </div>
                            </th>
                            <td>
                                <div>
                                    <h6 className="customer_name">Tom Cruise</h6>
                                    <p className="date">on 24.05.2019</p>
                                </div>
                            </td>
                            <td>
                            <div>
                                    <h6 className="transaction_date">May 26, 2019</h6>
                                    <p className="time">6:30 PM</p>
                                </div>
                            </td>
                            <td>
                                <div style={{display: "flex", float: "right"}}>
                                <button type="button" class="btn btn-primary declined_transaction_btn">Successful</button>
                                <button type="button" class="btn btn-link see_more_btn">
                                <i class="fas fa-ellipsis-v"></i>
                                </button>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                       </div>
                </div>
               </div>
            </React.Fragment>
    )
};
export default TransactionHistory