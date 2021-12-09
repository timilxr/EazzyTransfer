import React, { useState } from "react";
import DashboardHeader from "../dashboard/dashboard_header";
// import transaction_img from "../imgs/undraw_Annotation_re_h774 1.png"
import envelope from '../imgs/envelope.svg';

const Settings = ({ showModal, ...props }) => {
    const SettingsList = [
        {
            main: 'Personal details',
            sub: 'View and edit your infotmation',
            img: envelope
        },
        {
            main: 'Email Settings',
            sub: 'abisayo@gmail.com',
            img: envelope
        },
        {
            main: 'Notifications',
            sub: 'Choose what to get in touch about',
            img: envelope
        },
        {
            main: 'Language Settings',
            sub: 'English (UK)',
            img: envelope
        },
        {
            main: 'Change Password',
            sub: '*****',
            img: envelope
        },
        {
            main: '2-step Login',
            sub: 'Status on Sms or Voice call',
            img: envelope
        },
        {
            main: 'Api tokens',
            sub: "You don't have any active Api tokens",
            img: envelope
        },
        {
            main: 'Webhooks',
            sub: "You don't have any active webhooks",
            img: envelope
        }
    ]
    return (
        <React.Fragment>
            <div className="container-fluid p-0" style={{ background: '#F7F8FC', minHeight: '100vh' }}>
                <div className="w-100 bg-white">
                    <DashboardHeader header="Settings" />
                </div>
                <div className="p-3 mt-5 bg-white mx-3 mx-md-4">
                    <ul className="list-group">
                        {
                            SettingsList.map((setting, index) =>
                                <li key={index} className={`list-group-item my-1`} style={{ border: '0', borderBottom: '0.5px solid #DFE0EB' }}>
                                    <div className="d-flex align-items-center ml-sm-2" style={{ height: '70px' }}>
                                        <img src={setting.img} className="img-fluid user_image m-0" alt="" />
                                        <div className="ml-3">
                                            <p className="m-0" style={{ fontWeight: '600', fontSize: '14px' }}>{setting.main}</p>
                                            <div className="d-flex align-items-center">
                                                {/* <img src={setting.img} className="img-fluid" width="20px" height="16px" alt="" /> */}
                                                <span className="" style={{ fontSize: '12px' }}>{setting.sub}</span>
                                                {/* <span className="ml-sm-2" style={{ fontSize: '12px' }}>{setting.currenyCode}</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
                {/* </div> */}
            </div>
        </React.Fragment>
    )
};
export default Settings