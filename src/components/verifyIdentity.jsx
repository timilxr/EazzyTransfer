import React from 'react';

const VerifyIdentity = ({ proceed, ...props }) => {
    return (
        <>
            <div className="verify_container bg-white mx-auto shadow rounded px-3 px-md-5 pb-5 pt-3">
                <p className="current_step">Step 0/6</p>
                <h3 className="verify_heading mt-5">Verify your identity</h3>
                <p className="verify_subheading">It should take a few minutes</p>
                <div className="verify_body text-center mt-5">
                    <h3 className="verify_identity_heading">Basic steps to complete your registration</h3>
                    <ul className="list-group">
                        <li className="list-group-item border-0 p-1">
                            1. Upload preferred Valid ID
                        </li>
                        <li className="list-group-item border-0 p-1">
                            2. Take a Selfie
                        </li>
                        <li className="list-group-item border-0 p-1">
                            3. Business/ Individual Information
                        </li>
                        <li className="list-group-item border-0 p-1">
                            4. Registered Address
                        </li>
                        <li className="list-group-item border-0 p-1">
                            5. Set a unique pin
                        </li>
                    </ul>
                    <div className="w-100 text-center mt-5">
                        <button onClick={() => proceed(1)} className="btn mb-2 btn-lg" style={{ background: '#0898A0', borderRadius: '2px', color: 'white', fontSize: '14px' }}>Proceed</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerifyIdentity;