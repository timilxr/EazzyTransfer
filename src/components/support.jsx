import React from "react";
import { Link } from 'react-router-dom';
import logo from '../imgs/eazzyfinancialsLOGOUPDATE (3).svg';
import helpdesk_img from '../imgs/image 20.svg';


const Support = () => {


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
          <h1 className="helpdesk_title">Start, Get a response. </h1>
        </div>
        <div class="form-group message-box">
          <div class="input-icons text-white">
            {/* <i class="fa fa-key icon"></i> */}
            <input type="search" class="form-control w-100" id="search" placeholder="Send us a message" style={{ backgroundColor: "#0898A0", color: "#fff" }} />
          </div>
        </div>
        <img src={helpdesk_img} alt="" style={{ width: "100%" }} />
        <div className="row helprow">
          <div className="col-md-10 helpcol">
            <div class="card helpcard">
              <div class="card-body">
                <div className="helpcard_body">
                  <h5 className="helpcard_question">What is a multicurrency account and how does it operate?</h5>
                  <p className="helpcard_answer">
                  Access answers to our FAQs to schedule a time to speak with a member of our team answers to our FAQs to schedule a time to speak with a member of our team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row helprow">
          <div className="col-md-10 helpcol">
            <div class="card helpcard">
              <div class="card-body">
                <div className="helpcard_body">
                  <h5 className="helpcard_question">Do deposits and transfer occur?</h5>
                  <p className="helpcard_answer" style={{opacity: '0.7'}}>
                  Access answers to our FAQs to schedule a time to speak with a member of our team...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row helprow">
          <div className="col-md-10 helpcol">
            <div class="card helpcard">
              <div class="card-body">
                <div className="helpcard_body">
                  <h5 className="helpcard_question">VHow long do international transfer take?</h5>
                  <p className="helpcard_answer" style={{opacity: '0.7'}}>
                  Access answers to our FAQs to schedule a time to speak with a member of our team...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row helprow">
          <div className="col-md-10 helpcol">
            <div class="card helpcard">
              <div class="card-body">
                <div className="helpcard_body">
                  <h5 className="helpcard_question further_question">Have further questions?</h5>
                  <div>
                    <input type="search" id="search" name="search" placeholder="Find Articles" style={{ width: "70%" }} />
                    <input type="submit" />
                  </div>
                  <div style={{ display: "flex", flexWrap: 'wrap', marginTop: "30px" }}>
                    <button type="button" class="btn support_btn">Talk to us on Whatsapp <i class="fab fa-whatsapp whatsapp_icon"></i></button>
                    <button type="button" class="btn support_btn" style={{ marginLeft: "20px" }}>Call Us <i class="fas fa-phone-square-alt" style={{ color: "#25d366" }}></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </React.Fragment>
  )
};
export default Support