import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TickBlue from '../imgs/tickblue.svg';
import BusinessDetails from '../views/business_details';

const Appreciation = ({ proceed, plain, ...props }) => {
    const [summary, setSummary] = useState(plain ? false : true);
    return (
        <>
        { summary ?  <BusinessDetails summary={summary} proceed={()=>setSummary(false)} />
        :
            <div className="verify_container mx-auto bg-white rounded px-md-5 pb-5 pt-5">
                {/* <p className="current_step">Step 2/6</p> */}
                {/* <p className="verify_subheading">To continue, please check requirement</p> */}
                <div className="verify_body text-center mt-5 px-3 w-100">
                <img src={TickBlue} className="img-fluid mb-3 rounded" alt="Thank you" />
                <h3 className="verify_heading mt-3">Thank you</h3>
                {!plain && <p className="image-instruction">Thats all we need to verify your identity</p>}
                    <div className="d-flex justify-content-center mt-5 pt-md-5 w-100">
                    {/* <button onClick={() => setImage(null)} className="btn btn-lg" style={{ border: '1px solid #0898A0', borderRadius: '2px', color: '#0898A0', width: '40%', fontSize: '14px' }}>Redo</button> */}
                    <Link to='/dashboard' className="btn btn-lg" style={{ background: '#0898A0', borderRadius: '2px', color: 'white', width: '40%', fontSize: '14px' }}>Proceed to dashboard</Link>
                    {/* <button className="btn btn-lg" style={{ background: '#0898A0', borderRadius: '2px', color: 'white', width: '40%', fontSize: '14px' }}>Upload</button> */}
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default Appreciation;