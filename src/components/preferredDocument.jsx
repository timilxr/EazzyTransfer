import React from 'react';
import rightCaret from '../imgs/rightcaret.svg';


const PreferredDocument = ({ proceed, SupportedDocuments, setSelectedDocument, selectedDocument, ...props }) => {

    return (
        <>
            <div className="verify_container mx-auto bg-white rounded px-3 px-md-5 pb-5 pt-3">
                <p className="current_step">Step 1/6</p>
                <h3 className="verify_heading mt-5">Choose preferred document</h3>
                <p className="verify_subheading">Must be an official photo ID</p>
                <div className="verify_body text-center mt-5 px-md-5">
                    <ul className="list-group mx-md-3">
                        {
                            SupportedDocuments.map((doc, index) =>
                                <li key={index} onClick={() => { setSelectedDocument(doc); proceed() }} className={`list-group-item my-1 ${selectedDocument === doc ? "question-active" : "question"} preferred-document rounded`}>
                                    <div className="d-flex align-items-center ml-sm-2" style={{ height: '70px' }}>
                                        <img src={doc.img} className="img-fluid user_image m-0" alt="" />
                                        <div className="ml-3">
                                            <p className="m-0" style={{ fontWeight: '600', fontSize: '14px' }}>{doc.type}</p>
                                            <div className="d-flex align-items-center">
                                                {/* <img src={account.flag} className="img-fluid" width="20px" height="16px" alt="" /> */}
                                                {/* <span className="" style={{ fontSize: '12px' }}>{doc.type}</span> */}
                                                <span className="" style={{ fontSize: '12px' }}>{doc.supported}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <img src={rightCaret} className="mr-sm-4" alt="" />
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default PreferredDocument;