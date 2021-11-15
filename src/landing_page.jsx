import React from "react";
import { Link } from 'react-router-dom';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Dropdown } from 'semantic-ui-react'
// import {connect} from 'react-redux';
// import {ReactCountryFlagsCurrencySelect} from 'react-country-flag-currency-picker';
import logo from './imgs/eazzyfinancialsLOGOUPDATE (3).svg';
import bg from './imgs/Vector.png';
import wallet from './imgs/image 8.png';
import six from './imgs/image 9.png';
import Rectangle from './imgs/Rectangle 196.png';
import security from './imgs/security.png';
import usd from './imgs/united-states.png';
import partnerOne from './imgs/Logo (1).png';
import partnerTwo from './imgs/Logo (2).png';
import partnerThree from './imgs/Logo (3).png';
import partnerFour from './imgs/Logo.png';
import partnerFive from './imgs/Logo (4).png';
import partnerSix from './imgs/Group.png';
import RowTwoImgOne from './imgs/Frame 4573.png';
import RowTwoImgTwo from './imgs/Frame 4574.png';
import RowTwoImgThree from './imgs/Frame 4575.png';
import avatar from './imgs/avatar.jpg';
import RowThreeImg from './imgs/Image Placeholder.png';
import DropdownSearchSelection from './currency_list.jsx'

const LandingPage = () => {


  return (
    <div className="homepage">
      <React.Fragment>
        <header className="menu_header p-3" id="myHeader">
          <nav className="navbar navbar-expand-lg navbar-light bg-light nav-header">
            {/* <div className="container-fluid"> */}
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
                    <Link className="nav-link" to="product">Product</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="currency">Currency</Link>
                  </li>
                  {/* <li className="nav-item">
    <Link className="nav-link" to="/rate">Rate</Link>
  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="support">Support</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link small_screen_sign" to="support">Sign In</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sign_input_div">
              <Link to="sign-in" className="btn sign_in sign_in_btn">Log In</Link>
              <Link to="sign-up" className="btn sign_in_up sign_up_btn">Join Now</Link>
            </div>
          </nav>
        </header>


        <div className="row row_one">
          <div className="row_one_col_one col-md-7">
            <h1 className="row_one_title"> Cheaper, Faster money speed wave. </h1>
            <ul className="row_one_list">
              <li className="row_one_sublist">Cheaper than all other financial services</li>
              <li className="row_one_sublist">Send money overseas at better exchange rates now</li>
            </ul>
            <button type="button" class="btn btn-primary create_acc_btn">Get a free account</button>
            {/* <div className="sub_row_one">
  <h1 className="country_flag_row_title">Transaction to 120 countries</h1>
  <ul className="country_flag_row">
    <li><div class="currency-flag currency-flag-usd">
      <img src={Rectangle} alt="" className="row_one_img"/>
      </div></li>
    <li><div class="currency-flag currency-flag-usd">
      <img src={Rectangle} alt="" className="row_one_img"/>
      </div></li>
      <li><div class="currency-flag currency-flag-usd">
      <img src={Rectangle} alt="" className="row_one_img"/>
      </div></li>
      <li><div class="currency-flag currency-flag-usd">
      <img src={Rectangle} alt="" className="row_one_img"/>
      </div></li>
      <li><div class="currency-flag currency-flag-usd">
      <img src={Rectangle} alt="" className="row_one_img"/>
      </div></li>
      <li><div class="currency-flag currency-flag-usd">
      <i class="fas fa-chevron-right fa-2x" role="button" style={{marginTop: "2px", color: "#979797"}}></i>
      </div></li>
  </ul>
</div> */}
          </div>
          <div className="row_one_col_two col-md-5">
            <div className="currency_one_div row">
              <div className="col-md-6 col-sm-6">
                <span className="send_currency">You send</span>
                <div>
                  <input type="number" className="currency_input" />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 ">
                <Dropdown placeholder='Select currency' />
                <select name="currencies" classname="flaglist" style={{ height: "80%", width: "100%" }}>
                  <option value="Nigeria Naira - NGN"> NGN</option>
                  <option value="America (United States) Dollars - USD">
                    <img src={usd} alt="" className="currency_flag" /> USD</option>
                  <option value="Afghanistan Afghanis - AFN">GBP</option>
                  <option value="Albania Leke - ALL"> CAD</option>
                  <option value="Algeria Dinars - DZD"> ZAR</option>
                  <option value="Argentina Pesos - ARS">EUR</option>
                  <option value="Austria Schillings - ATS"> KES</option>

                  {/* <select name="" id="" className=" flaglist"> */}
                  {/* <ReactCountryFlagsCurrencySelect /> */}
                </select>
              </div>
            </div>
            <div className="currency_exchange_row">
              <h6 className="input_currency">1 EUR</h6><span className="equal_to_sign">=</span><h6 className="output_currency">0.8797 GBP</h6>
            </div>
            <div className="currency_two_div row">
              <div className="col-md-6 col-sm-6">
                <span className="recieve_currency">Recipient receives</span>
                <div>
                  <input type="number" className="currency_input" />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 flag_list">

                <select name="currencies" classname="flaglist" style={{ height: "80%", width: "100%" }}>
                  <option value="America (United States) Dollars - USD">
                    <img src={usd} alt="" className="currency_flag" />USD</option>
                  <option value="Australia Dollars - AUD"> NGN</option>
                  <option value="Afghanistan Afghanis - AFN">GBP</option>
                  <option value="Albania Leke - ALL"> CAD</option>
                  <option value="Algeria Dinars - DZD"> ZAR</option>
                  <option value="Argentina Pesos - ARS">EUR</option>
                  <option value="Austria Schillings - ATS"> KES</option>
                </select>
              </div>
            </div>
            <h6 className="row_one_col_two_subscript">Recipent gets <span className="currency_amount">£ 3,200</span> more when compared to regular traditional banks</h6>

          </div>
        </div>
        <div className="row row_two">
          <div className="col-md-5 m-auto">
            <h1 className="row_two_title">Why Choose Us</h1>
            <h6 className="row_two_subtitle">
              When the life too much things you need more than you have. Let Eazzy Transfer help your life to easier with smart payment system
            </h6>
          </div>
          <div className="row sub_row_two">
            <div className="col-md-4 mb-2">
              <img src={RowTwoImgOne} alt="" className="row_two_img" />
              <h1 className="framework_properties">Purchase One Touch</h1>
              <span className="framework_subtext">
                Get a quick overview of all your transactions in our easy-to-use Peyme in one touch
              </span>
            </div>
            <div className="col-md-4 mb-2">
              <img src={RowTwoImgTwo} alt="" className="row_two_img" />
              <h1 className="framework_properties">Free Transactions</h1>
              <span className="framework_subtext">
                Every transactions in Eazzy Transfer is free. You don’t worry about fees. Our profits base your satisfied and ads
              </span>
            </div>
            <div className="col-md-4 mb-2">
              <img src={RowTwoImgThree} alt="" className="row_two_img" />
              <h1 className="framework_properties">Trusted and Secured</h1>
              <span className="framework_subtext">
                None of your personcal data is ever collected or stored in our Peyme. Your history transaction just you see
              </span>
            </div>
          </div>
        </div>
        <div className="row row_three">
          <div style={{ backgroundImage: `url(${bg})` }}></div>
          <div className="col-md-6">
            <h1 className="row_three_title">Build a better way</h1>
            {/* <h6 className="row_three_subtitle">
  The most important part of the Startup Framework are the
  samples or Bootstrap themes and templates. The samples consist of a set of few pages you can.
  </h6> */}
            <div className="row sub_row_three">
              <div className="col-md-12">
                <div className="to_do_list">
                  <div className="numbers">
                    <i className="fas fa-user fa-2x"></i>
                  </div>
                  <div className="to_do_title">Step 1:  Create Your Account</div>
                  <div className="to_do_subtitle">Signing up for your own Eazzy Transfer account is easy and free. Just connection with phone or gmail instandly </div>
                </div>
                <div className="to_do_list">
                  <div className="numbers">
                    <i class="fas fa-landmark fa-2x"></i>
                  </div>
                  <div className="to_do_title">Step 2: Upload a local currency</div>
                  <div className="to_do_subtitle">Pay once and it’s yours forever. Use it to build as many sites as you needs. </div>
                </div>
                <div className="to_do_list">
                  <div className="numbers">
                    <i class="fas fa-wallet fa-2x"></i>
                  </div>
                  <div className="to_do_title">Step 3:  Convert to choice of currency</div>
                  <div className="to_do_subtitle">Thats all done. Now you can explore any apps, any webs that are ours partnets to transfer with them </div>
                </div>
                <div className="to_do_list">
                  <div className="numbers">
                    <i class="fas fa-exchange-alt fa-2x"></i>
                  </div>
                  <div className="to_do_title">  Step 4:  Make transfer</div>
                  <div className="to_do_subtitle">Thats all done. Now you can explore any apps, any webs that are ours partnets to transfer with them </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={RowThreeImg} alt="" className="row_three_img" />
          </div>
        </div>
        <div className="row row_four">
          <div className="col-md-5">
            <img src={wallet} alt="wallet_icon" />
          </div>
          <div className="col-md-7">
            <h1 className="row_four_title">How long does money transfer take</h1>
            <h6 className="row_four_subtitle">
              Many of our international transfers are completed within 24 hours. Deposits and transfers of GBP can occur within one hour using faster payments with participating banks.
              <p>The maximum time a transfer would take is between 2 hours to 5 working days.</p>
            </h6>
            <div>
              <div className="row row_four_sub">
                <div className="col-md-5 row_four_col_one">
                  <select name="currencies" classname="flaglist" style={{ height: "100%", width: "100%" }}>
                    {/* <option selected value="">Select currency</option> */}
                    <option value="Australia Dollars - AUD"> NGN</option>
                    <option value="America (United States) Dollars - USD">
                      <img src={usd} alt="" className="currency_flag" />USD</option>
                    <option value="Afghanistan Afghanis - AFN">GBP</option>
                    <option value="Albania Leke - ALL"> CAD</option>
                    <option value="Algeria Dinars - DZD"> ZAR</option>
                    <option value="Argentina Pesos - ARS">EUR</option>
                    <option value="Austria Schillings - ATS"> KES</option>
                  </select>
                </div>
                <i className="fas fa-arrow-right fa-2x"></i>
                <div className="col-md-5  row_four_col_two">
                  <select name="currencies" classname="flaglist" style={{ height: "100%", width: "100%" }}>
                    <option value="America (United States) Dollars - USD">
                      <img src={usd} alt="" className="currency_flag" />USD</option>
                    <option value="Australia Dollars - AUD"> NGN</option>
                    <option value="Afghanistan Afghanis - AFN">GBP</option>
                    <option value="Albania Leke - ALL"> CAD</option>
                    <option value="Algeria Dinars - DZD"> ZAR</option>
                    <option value="Argentina Pesos - ARS">EUR</option>
                    <option value="Austria Schillings - ATS"> KES</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="input-group">
                    <input type="text" className="form-control" aria-label="..." />
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-default dropdown-toggle row_four_btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Normal Time <span class="caret"></span></button>
                      <ul className="dropdown-menu dropdown-menu-right row_four_dropdown">
                        <li><a href="#">13 hours delivery</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row_nine">
          <div className="col-md-6 row_nine_col_one">
            <h4 className="row_nine_title">What we do</h4>
            <h2 className="row_nine_subtitle">Leading digital Foreign exchange solution</h2>
          </div>
          <div className="col-md-6 row_nine_col_two">
            <h6 className="row_nine_subtitle_col">
              Eazzy transfer is a leading digital payment solution/platform that allows Africans
              experience seamlessly way to send money abroad.
            </h6>
          </div>
          {/* <div class="col-md-4">
                <h2 class="row_nine_title">What are the major features</h2>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <h6>
              We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company
              </h6>
            </div>
            <div class="card-deck mt-4">
                <div class="card row_nine_card">
                    <div class="icon_nine_holder ">

                    </div>
                  <div class="card-body">
                    <h5 class="card-title row_three_card_title">Send a request</h5>
                    <p class="card-text">Publish your content automatically to ensure that your content reaches the right people. Publish your content automatically.</p>
                  </div>
                </div>
                <div class="card row_nine_card">
                    <div class="icon_nine_holder">

                    </div>
                  <div class="card-body">
                    <h5 class="card-title  row_nine_card_title">Relocation Package</h5>
                    <p class="card-text">Publish your content automatically to ensure that your content reaches the right people. Publish your content automatically.</p>
                  </div>
                </div>
                <div class="card row_nine_card">
                    <div class="icon_nine_holder">

                    </div>
                  <div class="card-body">
                    <h5 class="card-title  row_nine_card_title">Work Permit</h5>
                    <p class="card-text">Publish your content automatically to ensure that your content reaches the right people. Publish your content automatically.</p>
                  </div>
                </div>
                <div class="card row_nine_card">
                    <div class="icon_nine_holder ">

                    </div>
                  <div class="card-body">
                    <h5 class="card-title  row_nine_card_title">Tourist Visa</h5>
                    <p class="card-text">Publish your content automatically to ensure that your content reaches the right people. Publish your content automatically.</p>
                  </div>
                </div>
              </div> */}
        </div>
        <div className="row row_five">
          <div className="col-md-7 row_five_col">
            <h1 className="row_five_title">Money is safe and secure.</h1>
            <h6 className="row_five_subtitle">We are a sec licensed organization, fully regulated in all every territory we opearte. Customer funds are ring-fenced and held in Tier 1 international banks.</h6>
            <h6 className="row_five_subtitle">Our role in this industry is to become a leading go-to channel for fund transfers from home and abroad. Privacy and security in all transactions are important features provided by our unique online transfer platform.</h6>
            <h6 className="row_five_sub_title">Fully regulate in every territory we operate</h6>
          </div>
          <div className="col-md-5">
            <img src={security} alt="" style={{ display: "block", margin: "auto" }} />
          </div>
        </div>
        <div className="row row_six">
          <div className="col-md-5">
            <h1 className="row_six_title">Your interaction in all  experience </h1>
            <h6 className="row_six_subtitle">Depending on the country, moeny transfer has diffrent routes it goes through relating to diffrent countries. </h6>
            <p className="row_six_subtitle">Depending on the country, moeny transfer has diffrent routes it goes through relating to diffrent countries. </p>
          </div>
          <div className="col-md-7">
            <img src={six} alt="" className="row_six_img" />
          </div>
        </div>
        <div className="row_seven">
          <h1 className="row_seven_title">Our partner companies</h1>
          <h6 className="row_seven_subtitle">Big brands, small bussiness, new startup, corporate and inividuals  </h6>
          <div className="row mt-5">
            <div className="col-md-2">
              <img src={partnerOne} alt="" className="row_seven_img" />
            </div>
            <div className="col-md-2">
              <img src={partnerTwo} alt="" className="row_seven_img" />
            </div>
            <div className="col-md-2">
              <img src={partnerThree} alt="" className="row_seven_img" />
            </div>
            <div className="col-md-2">
              <img src={partnerFour} alt="" className="row_seven_img" />
            </div>
            <div className="col-md-2">
              <img src={partnerFive} alt="" className="row_seven_img" />
            </div>
            <div className="col-md-2">
              <img src={partnerSix} alt="" className="row_seven_img" />
            </div>
          </div>
        </div>
        <div className="row row_ten">
          <div class="col-md-4">
            <h2 class="row_nine_title">What our customers are saying</h2>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div class="btn-group" role="group" aria-label="Basic example" style={{ float: "right" }}>
              <div type="button" class="btn btn-secondary row_ten_btn" style={{ width: "100px", paddingTop: "10px" }}><i class="fas fa-arrow-left fa-2x"></i></div>
              <div type="button" class="btn btn-secondary row_ten_btn" style={{ width: "100px" }}><i class="fas fa-arrow-right fa-2x"></i></div>
            </div>
          </div>
          <div class="card-deck mt-4">
            <div class="card row_ten_card">
              <div class="card-body row_ten_card_body">
                <p class="card-text row_ten_card_text">
                  Our team has been working at frispes for almost 2 months because our office still closed.
                  During working at frispes, we feel a new experience, we can feel working with a beautiful, modern, and comfortablm.
                </p>
                <div className="row_ten_card_div">
                  <img src={avatar} className="row_ten_img" alt="" />
                  <div style={{ marginLeft: "20px", marginTop: "5px" }}>
                    <h6 className="row_ten_customer_name"> Julius Berger</h6>
                    <p className="customer_designation">Importer/Exporter</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card row_ten_card">
              <div class="card-body row_ten_card_body">
                <p class="card-text row_ten_card_text">
                  Our team has been working at frispes for almost 2 months because our office still closed.
                  During working at frispes, we feel a new experience, we can feel working with a beautiful, modern, and comfortablm.
                </p>
                <div className="row_ten_card_div">
                  <img src={avatar} className="row_ten_img" alt="" />
                  <div style={{ marginLeft: "20px", marginTop: "5px" }}>
                    <h6 className="row_ten_customer_name"> Julius Berger</h6>
                    <p className="customer_designation">Importer/Exporter</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card row_ten_card">
              <div class="card-body row_ten_card_body">
                <p class="card-text row_ten_card_text">
                  Our team has been working at frispes for almost 2 months because our office still closed.
                  During working at frispes, we feel a new experience, we can feel working with a beautiful, modern, and comfortablm.
                </p>
                <div className="row_ten_card_div">
                  <img src={avatar} className="row_ten_img" alt="" />
                  <div style={{ marginLeft: "20px", marginTop: "5px" }}>
                    <h6 className="row_ten_customer_name"> Julius Berger</h6>
                    <p className="customer_designation">Importer/Exporter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row_eight">
          <h1 className="row_eight_title">Frequently asked questions</h1>
          <h6 className="row_eight_subtitle">The most important part of the Startup Framework are the samples  </h6>
          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What harsh truths do you prefer to ignore?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in
                  cupidatat occaecat ut occaecat consequat est minim minim
                  esse tempor laborum consequat esse adipisicing eu
                  reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur
                  ea in ut nostrud velit in irure cillum tempor laboris
                  sed adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur
                  ea in ut nostrud velit in irure cillum tempor laboris
                  sed adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Is free will real or just an illusion?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In ad velit in ex nostrud dolore cupidatat consectetur
                  ea in ut nostrud velit in irure cillum tempor laboris
                  sed adipisicing eu esse duis nulla non.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="row footer">
          <div className="col-md-3">
            <h6 className="footer_list_title">Nigeria</h6>
            <h6 className="footer_list_subtitle">16B Aliu Animashaun Street, Lekki Phase one, Lagos Nigeria</h6>
            <h6 className="footer_list_subtitle">+234 816 5503 335</h6>
            <br />
            <h6 className="footer_list_title">Kenya</h6>
            <h6 className="footer_list_subtitle">4th Floor Cavendish Building, 14th Riverside, Nairobi Kenya</h6>
            <h6 className="footer_list_subtitle">+254 706345362</h6>
          </div>
          <div className="col-md-3">
            <ul className="footer_list">
              <li className="footer_list_title">Products</li>
              <li>Convert</li>
              <li>Exchange</li>
              <li>Transfer</li>
              <li>Receive</li>
              <li>Rates</li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="footer_list">
              <li className="footer_list_title">Quick Links</li>
              <li>Our Story</li>
              <li>Benefits</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="col-md_3">
            <h6 className="footer_list_title">Reach us at</h6>
            <h6 className="footer_list_subtitle">eazzytransfer@gmail.com</h6>
            <h6 className="footer_list_subtitle">eazzytransfer@gmail.com</h6>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
          </div>
        </div>
        <hr className="footer_hr" />
        <div className="sub_footer_row">
          <h6>Copyright © 2021. <a href="">Eazzy Transfer</a>. All rights reserved.</h6>
        </div>
      </React.Fragment>
    </div>
  )
};

export default LandingPage;