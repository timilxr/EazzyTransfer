import React, { useState } from 'react';
import photo from '../imgs/photo preview.svg';
import cam from '../imgs/overlayimage.svg';

const SelfieCamera = ({ proceed, ...props }) => {
    const [image, setImage] = useState(null);
    return (
        <>
            {!image ?
                <div className="verify_container mx-auto rounded pb-5 position-relative">
                    {/* <div className="mx-auto"> */}
                        <img src={cam} alt="" className="img-fluid d-block mx-auto"></img>
                    {/* </div> */}
                    <div className="text-center position-absolute" style={{top: '470px', left: '36%'}}>
                        <p className="image-instruction mb-3 text-white" style={{ fontSize: '14px', lineHeight: '20px' }}>Keep your face within the oval</p>
                        <button onClick={() => setImage(photo)} className="btn btn-lg w-100" style={{ background: '#0898A0', borderRadius: '2px', color: 'white', width: '40%', fontSize: '14px' }}>Take selfie</button>
                    </div>
                </div>
                :
                <div className="verify_container mx-auto bg-white rounded px-3 px-md-5 pb-5 pt-3">
                    <h3 className="verify_heading mt-3">Check your selfie</h3>
                    <p className="verify_subheading">Make sure your entire face is visible</p>
                    <div className="verify_body text-center mt-4 px-md-3 pr-md-5 mr-lg-5">
                        {image && <img src={image} className="img-fluid mb-3 rounded" width="100%" alt="selfie photo" />}
                        <p className="image-instruction">Make sure your details are clear and unobstructed</p>
                        <div className="d-flex justify-content-between">
                            <button onClick={() => setImage(null)} className="btn btn-lg" style={{ border: '1px solid #0898A0', borderRadius: '2px', color: '#0898A0', width: '40%', fontSize: '14px' }}>Retake</button>
                            <button onClick={() => proceed('business or individual info')} className="btn btn-lg" style={{ background: '#0898A0', borderRadius: '2px', color: 'white', width: '40%', fontSize: '14px' }}>Upload</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SelfieCamera;