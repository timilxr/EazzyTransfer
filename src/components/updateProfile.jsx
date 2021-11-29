import React, {useState} from 'react';
import DashboardHeader from '../dashboard/dashboard_header';
import VerifyIdentity from './verifyIdentity';
import PreferredDocument from './preferredDocument';
import UploadPhoto from './uploadPhoto';
import UploadPassportPhoto from './uploadPassportPhoto';
import CameraAccessDenied1 from './cameraAccessDenied1';
import SelfieCamera from './selfieCamera';
import BusinessIndividualInfo from './businessIndividualInfo';
import Appreciation from './appreciation';

import passport from '../imgs/passport.svg';
import identityCard from '../imgs/identity-card.png';
import driversLicense from '../imgs/drivers-license.png';

const UpdateProfile = () => {
    const SupportedDocuments = [
        {
            img: passport, type: 'Passport', supported: 'Photo page'
        },
        {
            img: driversLicense, type: "Driver's license", supported: 'Front and back'
        },
        {
            img: identityCard, type: 'Identity Card', supported: 'Front and back'
        },
    ];
    const [currentView, setCurrentView] = useState(0);
    const [selectedDocument, setSelectedDocument] = useState(null);

    const proceed = (page) => setCurrentView(page ? page : currentView+1);
    return(
        <>
        <div className="container-fluid p-0" style={{background: '#F7F8FC', minHeight: '100vh'}}>
            <div className="w-100 bg-white">
                <DashboardHeader header="Verification" />
            </div>
            <div className="update_profile_body p-5">
                {!currentView && <VerifyIdentity proceed={proceed} />}
                {currentView == 1 && <PreferredDocument proceed={proceed} SupportedDocuments={SupportedDocuments} setSelectedDocument={setSelectedDocument} selectedDocument={selectedDocument} />}
                {currentView == 2 && <UploadPhoto proceed={proceed} selectedDocument={selectedDocument} />}
                {currentView == 3 && <UploadPassportPhoto proceed={proceed} selectedDocument={selectedDocument} />}
                {currentView == 'cam access denied 1' && <CameraAccessDenied1 proceed={proceed} />}
                {currentView == 'selfie camera' && <SelfieCamera proceed={proceed} />}
                {currentView == 'business or individual info' && <BusinessIndividualInfo proceed={proceed} />}
                {currentView == 'appreciation' && <Appreciation proceed={proceed} />}
            </div>
        </div>
        </>
    )
}

export default UpdateProfile;