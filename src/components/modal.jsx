import React from 'react';
import avatar from '../imgs/avatar.jpg';
import aus from '../imgs/Rectangle 190.png';
import MyAccount from './myAccount';
import NewBeneficiary from './new_beneficiary';
import Beneficiary from './beneficiary';
import SendMoney from './sendMoney';
import AddAccount from './addAccount';
import AccountDetails from './accountDetails';
import AccountDetails2 from './accountDetails2';
import AccountDetails3 from './accountDetails3';
import AddMoney from './addMoney';
import AddMoney2 from './addMoney2';

const Modal = ({ currentView, showModal, ...props }) => (<>
  <div className="modal-main container-fluid p-0" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="row p-0 m-0" role="document">
      <div className="col-sm-6 col-md-7"></div>
      <div className="modal-content col-sm-6 col-md-5">
        { currentView === 'my account' && <MyAccount showModal={showModal} />}
        { currentView === 'new beneficiary' && <NewBeneficiary showModal={showModal} />}
        { currentView === 'beneficiary' && <Beneficiary showModal={showModal} />}
        { currentView === 'send money' && <SendMoney showModal={showModal} />}
        { currentView === 'add account' && <AddAccount showModal={showModal} />}
        { currentView === 'account details' && <AccountDetails showModal={showModal} />}
        { currentView === 'account details 2' && <AccountDetails2 showModal={showModal} />}
        { currentView === 'account details 3' && <AccountDetails3 showModal={showModal} />}
        { currentView === 'add money' && <AddMoney showModal={showModal} />}
        { currentView === 'add money 2' && <AddMoney2 showModal={showModal} />}
        {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
      </div>
    </div>
  </div>
</>);

export default Modal;