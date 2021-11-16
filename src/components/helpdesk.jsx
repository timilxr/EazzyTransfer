import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "semantic-ui-react";
import logo from '../imgs/eazzyfinancialsLOGOUPDATE (3).svg';
import helpdesk_img from '../imgs/image 20.svg';


const HelpDesk = () => {


  return (
    <React.Fragment>
      <header className="menu_header p-3" id="myHeader">
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-header">
          <div className="image_logo">
            <img src={logo} alt="logo" className="eazzy_logo" />
          </div>
          <button className="navbar-toggler header-btn " type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse header_nav" id="navbarNavDropdown">
            <div className="menu_list">
              <ul className="navbar-nav header_ul ">
                <li className="nav-item">
                  <Link className="nav-link" to="/product">Product</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/currency">Currency</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/support">Support</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link small_screen_sign" to="/support">Sign In</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="sign_input_div">
            <Link to="/sign-in" className="btn sign_in sign_in_btn">Log In</Link>
            <Link to="/sign-up" className="btn sign_in_up sign_up_btn">Join Now</Link>
          </div>
        </nav>
      </header>

      <div className="row helpdesk_row">
        <div className="col-md-12">
          <h1 className="helpdesk_title">Advice and Answers</h1>
        </div>
        <div class="form-group" style={{ width: "75%" }}>
          <input type="search" class="form-control" id="search" placeholder="Search for answers" />
        </div>
        <img src={helpdesk_img} alt="" style={{ width: "100%" }} />
        <div className="row helprow">
          <div className="col-md-6 helpcol">
            <div class="card helpcard">
              <div class="card-body" style={{ display: "flex" }}>
                <i class="fas fa-list helpcard_icon"></i>
                <div className="helpcard_body">
                  <h5 className="helpcard_title">About EazzyTransfer</h5>
                  <p className="helpcard_subtitle">
                    Access answers to our FAQs to schedule a time to speak with a member of our team ...
                  </p>
                  <div className="btn helpcard_footer" type="button" data-toggle="modal" data-target="#exampleModal">see more</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 helpcol">
            <div class="card helpcard">
              <div class="card-body" style={{ display: "flex" }}>
                <i class="fas fa-list helpcard_icon"></i>
                <div className="helpcard_body">
                  <h5 className="helpcard_title">About EazzyTransfer</h5>
                  <p className="helpcard_subtitle">
                    Access answers to our FAQs to schedule a time to speak with a member of our team ...
                  </p>
                  <div className="btn helpcard_footer" type="button" data-toggle="modal" data-target="#exampleModal">see more</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row helprow">
          <div className="col-md-6 helpcol">
            <div class="card helpcard">
              <div class="card-body" style={{ display: "flex" }}>
                <i class="fas fa-list helpcard_icon"></i>
                <div className="helpcard_body">
                  <h5 className="helpcard_title">About EazzyTransfer</h5>
                  <p className="helpcard_subtitle">
                    Access answers to our FAQs to schedule a time to speak with a member of our team ...
                  </p>
                  <div className="btn helpcard_footer" type="button" data-toggle="modal" data-target="#exampleModal">see more</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 helpcol">
            <div class="card helpcard">
              <div class="card-body" style={{ display: "flex" }}>
                <i class="fas fa-list helpcard_icon"></i>
                <div className="helpcard_body">
                  <h5 className="helpcard_title">About EazzyTransfer</h5>
                  <p className="helpcard_subtitle">
                    Access answers to our FAQs to schedule a time to speak with a member of our team ...
                  </p>
                  <div className="btn helpcard_footer" type="button" data-toggle="modal" data-target="#exampleModal">see more</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row helprow">
          <div className="col-md-6 helpcol">
            <div class="card helpcard">
              <div class="card-body" style={{ display: "flex" }}>
                <i class="fas fa-list helpcard_icon"></i>
                <div className="helpcard_body">
                  <h5 className="helpcard_title">About EazzyTransfer</h5>
                  <p className="helpcard_subtitle">
                    Access answers to our FAQs to schedule a time to speak with a member of our team ...
                  </p>
                  <div className="btn helpcard_footer" type="button" data-toggle="modal" data-target="#exampleModal">see more</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 helpcol">
            <div class="card helpcard">
              <div class="card-body" style={{ display: "flex" }}>
                <i class="fas fa-list helpcard_icon"></i>
                <div className="helpcard_body">
                  <h5 className="helpcard_title">About EazzyTransfer</h5>
                  <p className="helpcard_subtitle">
                    Access answers to our FAQs to schedule a time to speak with a member of our team ...
                  </p>
                  <div className="btn helpcard_footer" type="button" data-toggle="modal" data-target="#exampleModal">see more</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header helpdesk_modal_header ">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h5 className="modal-title" id="exampleModalLabel">How do I fund my wallet?</h5>
              <div>
                <div className="helpdesk_modal_logo_row">
                  <img src={logo} alt="" className="helpdesk_modal_logo" />
                  <div style={{ marginLeft: "12px" }}>
                    <h6 className="helpdesk_modal_title">Written by <span className="helpdesk_modal_title_bold">Eazzy Transfer team</span></h6>
                    <small className="helpdesk_modal_timestamp">Updated 2 weeks ago</small>
                  </div>
                </div>
                <h6 className="helpdesk_modal_content">
                  Access answers to our FAQs to schedule a time to speak with a member of our team. Access answers to our FAQs to schedule a time to speak.
                </h6>
                <p>There are three options;</p>
                <ol>
                  <li>By using a bank transfer option</li>
                  <li>By a Ussd code transfer</li>
                  <li>By using a bank transfer option</li>
                  <li>By a Ussd code transfer</li>
                  <li>By using a bank transfer option</li>
                  <li>By a Ussd code transfer</li>
                </ol>
                <p>There are three option there are three options there are three.</p>
                <p><small>Was this helful? Have more questions? Get help below.</small></p>
              </div>
            </div>
            <div className="modal-footer helpdesk_modal_footer ">
              <button type="button" className="btn btn-primary helpdesk_modal_btn">Get More Help</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};
export default HelpDesk