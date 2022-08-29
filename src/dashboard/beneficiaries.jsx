import React, {useState} from "react";
import avatar from "../imgs/avatar.jpg";
// import avatar from '../imgs/avatar.jpg';
import aus from '../imgs/Rectangle 190.png';
// import transaction_img from "../imgs/undraw_Annotation_re_h774 1.png"
// import currencyFlag from "../imgs/Rectangle 196.png";
import rightCaret from '../imgs/rightcaret.svg';


const Beneficiaries = ({ showModal, ...props }) => {
    const [selectedAccount, setSelectedAccount] = useState(null);
    const Accounts = [
        {
            name: 'Damilola Bamse',
            accountType: 'GBP Account',
            flag: aus
        },
        {
            name: 'Taiwo Cresent',
            accountType: 'CAD Account',
            flag: aus
        },
        {
            name: 'Damilola Bamse',
            accountType: 'USD Account',
            flag: aus
        },
        {
            name: 'Taiwo Cresent',
            accountType: 'Primary GBP Account',
            flag: aus
        },
        {
            name: 'Damilola Bamse',
            accountType: 'NGN Account',
            flag: aus
        },
        {
            name: 'Taiwo Cresent',
            accountType: 'CAD Account',
            flag: aus
        }
    ]

    return (
        <React.Fragment>
            <div className="dashboard_body" style={{ paddingTop: "20px" }}>
                <div style={{ paddingLeft: "40px", paddingRight: "20px" }}>
                    <h6 className="accounts_title">My accounts</h6>
                    <div className="d-flex align-items-center justify-content-between bg-white px-3 border" style={{ height: '100px' }}>
                        <div className="d-flex align-items-center" style={{ height: '100px' }}>
                            <img src={avatar} className="img-fluid user_image m-0" alt="" />
                            <div className="ml-3">
                                <p className="m-0" style={{ fontWeight: '600', fontSize: '14px' }}>Abisayo Omobada</p>
                                <div className="d-flex align-items-center">
                                    <img src={aus} className="img-fluid" width="23px" height="16px" alt="" />
                                    <span className="ml-2" style={{ fontSize: '12px' }}>Primary GBP Account</span>
                                </div>
                            </div>
                        </div>
                        {/* <img src={rightCaret} className="mr-4" alt="" /> */}
                    </div>
                    <div className="p-2 mt-5">
                        <h3 id='other-beneficiary'>Other Beneficiary</h3>
                        <ul className="list-group">
                  {
                      Accounts.map((account, index) => 
                    <li key={index} onClick={() => {setSelectedAccount(account); showModal('beneficiary')}} className={`list-group-item my-1 ${selectedAccount === account ? "question-active" : "question"}`}>
                      <div className="d-flex align-items-center ml-2" style={{ height: '70px' }}>
                            {/* <img src={avatar} className="img-fluid user_image m-0" alt="" /> */}
                            <div className="">
                                <p className="m-0" style={{ fontWeight: '600', fontSize: '14px' }}>{account.name}</p>
                                <div className="d-flex align-items-center">
                                    <img src={account.flag} className="img-fluid" width="20px" height="16px" alt="" />
                                    <span className="ml-2" style={{ fontSize: '12px' }}>{account.accountType}</span>
                                </div>
                            </div>
                        </div>
                        <img src={rightCaret} className="mr-4" alt="" />
                    </li>
                    )
                  }
                </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Beneficiaries;