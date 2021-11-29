import React from 'react';
import selfie from '../imgs/selfie-picto.svg';
import glasses from '../imgs/glasses-picto.svg';

const UploadPassportPhoto = ({ proceed, ...props }) => {
    return (
        <>
            <div className="verify_container bg-white mx-auto shadow rounded px-3 px-md-5 pb-5 pt-3">
                <p className="current_step">Step 3/6</p>
                <h3 className="verify_heading mt-5">Take a selfie</h3>
                <p className="verify_subheading">We We’ll compare this with your document</p>
                <div className="verify_body mt-5 px-md-3 px-lg-5">
                    <ul className="list-group p-0">
                        <li className="list-group-item border-0 p-0">
                            <div className="d-flex align-items-center p-0 m-0">
                                <img src={selfie} className="img-fluid mr-2" alt="" />
                                <p className="image-instruction m-0 text-left" style={{ lineHeight: '18px' }}>Face forward and make sure your eyes are clearly visible</p>
                            </div>
                        </li>
                        <li className="list-group-item border-0 p-0">
                            <div className="" style={{height: '20px', borderLeft: '2px solid black', marginLeft: '25px'}}></div>
                        </li>
                        <li className="list-group-item border-0 p-0">
                            <div className="d-flex align-items-center p-0 m-0">
                                <img src={glasses} className="img-fluid mr-2" alt="" />
                                <p className="image-instruction m-0 text-left" style={{ lineHeight: '18px' }}>Remove your glasses, if necessary</p>
                            </div>
                        </li>
                    </ul>
                    <div className="w-100 text-center mt-5">
                        <button onClick={() => proceed('cam access denied 1')} className="btn mb-2 btn-lg" style={{ background: '#0898A0', borderRadius: '2px', color: 'white', fontSize: '14px' }}>Take selfie</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadPassportPhoto;