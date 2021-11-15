import React from 'react';
import avatar from '../imgs/avatar.jpg';
import aus from '../imgs/Rectangle 190.png';
import MyAccount from './myAccount';
import NewBeneficiary from './new_beneficiary';
import SendMoney from './sendMoney';
import SendMoney2 from './sendMoney2';
import AddAccount from './addAccount';
import AccountDetails from './accountDetails';
import AccountDetails2 from './accountDetails2';
import AccountDetails3 from './accountDetails3';
import AddMoney from './addMoney';

const Modal = () => (<>
<div class="modal-main p-0" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="row p-0 m-0" role="document">
      <div className="col-md-7"></div>
    <div class="modal-content col-md-5">
      {/* <MyAccount /> */}
      {/* <NewBeneficiary /> */}
      {/* <SendMoney /> */}
      {/* <SendMoney2 /> */}
      {/* <AddAccount /> */}
      {/* <AccountDetails /> */}
      {/* <AccountDetails2 /> */}
      {/* <AccountDetails3 /> */}
      <AddMoney />
      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
    </div>
  </div>
</div>
</>);

export default Modal;