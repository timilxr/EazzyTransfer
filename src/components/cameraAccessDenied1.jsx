import React, { useState } from 'react';
import camPermission from '../imgs/cam-permissions.svg'

const CameraAccessDenied1 = ({ proceed, ...props }) => {
    const [allow, setAllow] = useState(false);
    return (
        <>
            <div className="verify_container bg-white mx-auto shadow rounded px-3 px-md-5 pb-5 pt-3">
                <h3 className="verify_heading mt-3">Camera access denied</h3>
                {!allow ?
                    <>
                        <p className="verify_subheading">When prompted, you must enable camera access to continue</p>
                        <div className="verify_body text-center mt-5 px-md-5">
                            <img src={camPermission} className="img-fluid mb-3 rounded" alt="Camera Access Denied" />
                            <div className="text-center mt-5">
                                <p className="image-instruction mb-1" style={{ fontSize: '14px', lineHeight: '20px' }}>We can’t verify you without your camera</p>
                                <button onClick={() => setAllow(true)} className="btn btn-lg" style={{ background: '#0898A0', borderRadius: '2px', color: 'white', width: '40%', fontSize: '14px' }}>Enable camera</button>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <p className="verify_subheading">We cant verify you without access to your camera</p>
                        <div className="verify_body mt-5 px-md-5">
                            <div className="text-center mt-5">
                                <fieldset className="text-left border rounded p-3">
                                    <legend className="ml-2 mb-0"><span className="photo-requirements">To continue</span></legend>
                                    <ul className="list-group">
                                        <p className="my-1">You must recover camera access</p>
                                        <li className="list-group-item border-0 p-1">
                                            1. Go to your browser settings and allow camera access
                                        </li>
                                        <li className="list-group-item border-0 p-1">
                                            2.  Refresh the page to restart your identity verification
                                        </li>
                                    </ul>
                                </fieldset>
                                <button onClick={() => proceed('selfie camera')} className="btn btn-lg mt-5" style={{ background: '#0898A0', borderRadius: '2px', color: 'white', width: '40%', fontSize: '14px' }}>Refresh</button>
                            </div>
                        </div>
                    </>}
            </div>
        </>
    )
}

export default CameraAccessDenied1;