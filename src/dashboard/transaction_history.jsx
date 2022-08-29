import React, { useState } from "react";
import avatar from "../../src/imgs/avatar.jpg";
import sortImg from '../imgs/sort.svg';
import filterImg from '../imgs/filter.svg';
// import transaction_img from "../imgs/undraw_Annotation_re_h774 1.png"

const TransactionHistory = () => {
    const [transactionType, setTransactionType] = useState('converted');

    return (
        <React.Fragment>
            <div className="dashboard_body">
                <div className="transaction_tab row">
                    <div className="col-md-12">
                        <div className="row transaction_tab_nav">
                            <div className="col-md-9 col-lg-9 p-0">
                                <ul className="nav flex-nowrap">
                                    <li className="nav-item">
                                        <a onClick={() => setTransactionType('added')} className={`nav-link transaction_nav_link ${transactionType === 'added' ? 'transaction_nav_link_active' : ''}`} href="#">Added</a>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={() => setTransactionType('converted')} className={`nav-link transaction_nav_link ${transactionType === 'converted' ? 'transaction_nav_link_active' : ''}`} href="#">Converted</a>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={() => setTransactionType('transferred')} className={`nav-link transaction_nav_link ${transactionType === 'transferred' ? 'transaction_nav_link_active' : ''}`} href="#">Transferred</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-lg-3 transaction_tab_nav_right my-2">
                                <ul className="nav">
                                    <li className="nav-item mr-2" style={{ display: "flex", alignItems: 'center' }}>
                                        {/* <i className="fas fa-sort-amount-up mr-2"></i> */}
                                        <img src={sortImg} alt="" className='d-block' />
                                        <h6 className="sort mt-2 ml-1">Sort</h6>
                                    </li>
                                    <li className="nav-item" style={{ display: "flex" }}>
                                        {/* <i className="fas fa-filter ml-2"></i> */}
                                        <img src={filterImg} alt="" className='d-block' />
                                        <h6 className="filter mt-2 ml-1">Filter</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="table-responsive mt-5">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="table_row" style={{ width: "500px", paddingLeft: "37px" }}>Account Status</th>
                                        <th scope="col" className="table_row">Customer Name</th>
                                        <th scope="col" className="table_row">Date</th>
                                        <th scope="col" className="table_row" style={{ paddingLeft: "87px" }}>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <div style={{ display: "flex" }}>
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
                                            <div style={{ display: "flex", float: "right" }}>
                                                <button type="button" className="btn btn-primary approved_transaction_btn">Successful</button>
                                                <button type="button" className="btn btn-link see_more_btn">
                                                    <i className="fas fa-ellipsis-v"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div style={{ display: "flex" }}>
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
                                            <div style={{ display: "flex", float: "right" }}>
                                                <button type="button" className="btn btn-primary pending_transaction_btn">Pending</button>
                                                <button type="button" className="btn btn-link see_more_btn">
                                                    <i className="fas fa-ellipsis-v"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <div style={{ display: "flex" }}>
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
                                            <div style={{ display: "flex", float: "right" }}>
                                                <button type="button" className="btn btn-primary declined_transaction_btn">Declined</button>
                                                <button type="button" className="btn btn-link see_more_btn">
                                                    <i className="fas fa-ellipsis-v"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default TransactionHistory