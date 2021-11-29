import React, {useState} from 'react';


const UploadPhoto = ({ proceed, selectedDocument, ...props }) => {
    const [image, setImage] = useState(null);

    return (
        <>
            <div className="verify_container mx-auto bg-white rounded px-3 px-md-5 pb-5 pt-3">
                {!image ? 
                <>
                <p className="current_step">Step 2/6</p>
                <h3 className="verify_heading mt-5">Upload passport photo</h3>
                <p className="verify_subheading">To continue, please check requirement</p>
                <div className="verify_body mt-5 px-md-3 px-lg-5">
                    <form action="" enctype="multipart/form-data">
                        <fieldset className="border rounded p-3">
                            <legend className="ml-2 mb-0"><span className="photo-requirements">Requirement</span></legend>
                            <ul className="list-group">
                                <li className="list-group-item border-0 p-1">
                                    1. File format accepted PNG, JPEG, PDF
                                </li>
                                <li className="list-group-item border-0 p-1">
                                    2.  Maximum file size 25MB
                                </li>
                                <li className="list-group-item border-0 p-1">
                                    3.  Image should not be blurry in very detailed part
                                </li>
                            </ul>
                        </fieldset>
                        <div className="form-group text-center px-lg-5 py-3">
                            <label className="label2 border-0 text-center">
                            <input type="file" onChange={e => setImage(e.target.files[0])} className="form-control modal_inputs" id="photo" autoComplete="off" aria-describedby="emailHelp" placeholder="e.g. 24390" />
                            <span>Click to upload</span>
                            </label>
                        </div>
                    </form>
                </div>
                </> 
                :
                <>
                {/* <p className="current_step">Step 2/6</p> */}
                <h3 className="verify_heading mt-3">Confirm your image</h3>
                {/* <p className="verify_subheading">To continue, please check requirement</p> */}
                <div className="verify_body text-center mt-5 px-md-3 mr-lg-5 pr-md-5">
                {image && <img src={URL.createObjectURL(image)} className="img-fluid mb-3 rounded" width="100%" alt="means of identification" />}
                <p className="image-instruction">Make sure your details are clear and unobstructed</p>
                    <div className="d-flex justify-content-between">
                    <button onClick={() => setImage(null)} className="btn btn-lg" style={{ border: '1px solid #0898A0', borderRadius: '2px', color: '#0898A0', width: '40%', fontSize: '14px' }}>Redo</button>
                    <button onClick={() => proceed(3)} className="btn btn-lg" style={{ background: '#0898A0', borderRadius: '2px', color: 'white', width: '40%', fontSize: '14px' }}>Upload</button>
                    </div>
                </div>
                </>}
            </div>
        </>
    )
}

export default UploadPhoto;