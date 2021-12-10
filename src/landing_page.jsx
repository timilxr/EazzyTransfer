import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Dropdown } from 'semantic-ui-react';
import SelectCurrency from "./components/selectCurrency";
// import {connect} from 'react-redux';
// import {ReactCountryFlagsCurrencySelect} from 'react-country-flag-currency-picker';
import logo from './imgs/eazzyfinancialsLOGOUPDATE (3).svg';
import bg from './imgs/Vector.png';
import wallet from './imgs/image 8.png';
import six from './imgs/image 9.png';
import aus from './imgs/Rectangle 190.png';
import GBP from './imgs/GBP.svg';
import abbas from './imgs/abbas.svg';
import yuli from './imgs/yuli.svg';
import ray from './imgs/ray.svg';
import Rectangle from './imgs/Rectangle 196.png';
import rightCaret from './imgs/rightcaret.svg';
import bigBullet from './imgs/bigbullet.svg';
import security from './imgs/security.png';
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

const FAQs = [
  {
    Q: 'What is a multicurrency account and how does it operate?',
    A: 'Your eazzy transfer is an electrnic money account. It is diffrent from a bnak account because your money is safeguard, you can get an overdraft or loan and still earn an interest'
  },
  {
    Q: 'How is the eazzy transfer bank diffrent from a bank account? How safe is my money?',
    A: 'Your eazzy transfer is an electrnic money account. It is diffrent from a bnak account because your money is safeguard, you can get an overdraft or loan and still earn an interest'
  },
  {
    Q: 'How long do international transfer take?',
    A: 'Your eazzy transfer is an electrnic money account. It is diffrent from a bnak account because your money is safeguard, you can get an overdraft or loan and still earn an interest'
  },
  {
    Q: 'Do deposits and transfer occur?',
    A: 'Your eazzy transfer is an electrnic money account. It is diffrent from a bnak account because your money is safeguard, you can get an overdraft or loan and still earn an interest'
  },
  {
    Q: 'How is the eazzy transfer bank diffrent from a bank account? How safe is my money?',
    A: 'Your eazzy transfer is an electrnic money account. It is diffrent from a bnak account because your money is safeguard, you can get an overdraft or loan and still earn an interest'
  },
];
const CurrencyOptions = [
  {
    img: aus,
    value: "Nigeria Naira - NGN",
    text: 'NGN'
  },
  {
    img: aus,
    value: "America (United States) Dollars - USD",
    text: 'USD'
  },
  {
    img: aus,
    value: "Afghanistan Afghanis - AFN",
    text: 'GBP'
  },
  {
    img: aus,
    value: "Albania Leke - ALL",
    text: 'CAD'
  },
  {
    img: aus,
    value: "Algeria Dinars - DZD",
    text: 'ZAR'
  },
  {
    img: aus,
    value: "Argentina Pesos - ARS",
    text: 'EUR'
  },
  {
    img: aus,
    value: "Austria Schillings - ATS",
    text: 'KES'
  },
];

const CurrencyCountryOptions = [
  {
    img: aus,
    text: "Nigeria Naira",
    code: 'NGN'
  },
  {
    img: aus,
    text: "American Dollars",
    code: 'USD'
  },
  {
    img: GBP,
    text: "Afghanistan Afghanis",
    code: 'GBP'
  },
  {
    img: aus,
    text: "Albania Leke",
    code: 'CAD'
  },
  {
    img: aus,
    text: "Algeria Dinars",
    code: 'ZAR'
  },
  {
    img: aus,
    text: "Argentina Pesos",
    code: 'EUR'
  },
  {
    img: aus,
    text: "Austria Schillings",
    code: 'KES'
  },
];

const SelectCountryCurrency = ({ options, selected, setValue, name, ...props }) => {
  const [selectedOption, setSelectedOption] = useState(selected ? selected : options[0]);

  useEffect(() => {
    if (setValue) {
      setValue({ [name]: selectedOption })
    }
  }, [selectedOption])

  return (
    <>
      <div className="dropdown modal_inputs p-0 h-100 w-100 border-0">
        <a className="btn dropdown-toggle p-0 px-1 h-100 d-flex justify-content-between align-items-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div className="w-75 text-left p-2 text-truncate" href="#">
            <h3 className="m-0" style={{ fontSize: '22px', fontWeight: 'bold' }}>{selectedOption.code}</h3>
            <p className="m-0" style={{ fontSize: '13px', fontWeight: 'bold' }}>{selectedOption.text}</p>
          </div>
          <img src={selectedOption.img} className="" width="" alt="" />
        </a>

        <div className="dropdown-menu p-0" aria-labelledby="dropdownMenuLink">
          {options && options.map((option, index) =>
            <div key={index} onClick={() => setSelectedOption(option)} style={{ cursor: 'pointer' }} className="dropdown-item d-flex justify-content-between p-1 py-2" href="#">
              <div className="text-left p-2" href="#">
                <h3 className="m-0" style={{ fontSize: '22px', fontWeight: 'bold' }}>{option.code}</h3>
                <p className="m-0" style={{ fontSize: '13px', fontWeight: 'bold' }}>{option.text}</p>
              </div>
              <img src={option.img} className="" width="65px" alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  )
}


const LandingPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);


  return (
    <div className="homepage">
      <React.Fragment>
        <div className="top-section">
          <header className="menu_header p-3" id="myHeader">
            <nav className="navbar navbar-expand-lg nav-header">
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
                      <Link className="nav-link mx-md-2" to="product" style={{ color: '#4B506D' }}>Product</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link mx-md-2" to="currency" style={{ color: '#4B506D' }}>Currency</Link>
                    </li>
                    {/* <li className="nav-item">
    <Link className="nav-link" to="/rate">Rate</Link>
  </li> */}
                    <li className="nav-item mx-md-2">
                      <Link className="nav-link" to="support" style={{ color: '#4B506D' }}>Support</Link>
                    </li>
                    <li className="nav-item ml-md-5">
                      <Link className="nav-link small_screen_sign" to="sign-up">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link small_screen_sign" to="sign-up">Sign In</Link>
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
            <div className="row_one_col_one col-md-5">
              <h1 className="row_one_title">Affordable secure way to send money abroad.</h1>
              <ul className="row_one_list">
                <li className="row_one_sublist">Competitive rate with Zero transacton fee</li>
                <li className="row_one_sublist">Assured security on all transactions with 6 currencies.</li>
              </ul>
              <button type="button" className="btn text-white create_acc_btn">Get a free account</button>
            </div>
            <div className="col-md-3 mt-4 mt-md-0"></div>
            <div className="row_one_col_two col-md-4 mx-auto p-0">
              <div className="currency_one_div row d-flex align-items-center m-0">
                <div className="col-md-6 col-6 text-white pl-md-5">
                  <span className="send_currency m-0 p-0">You send</span>
                  <div>
                    <h5>$ 3224</h5>
                    {/* <input type="number" className="currency_input" /> */}
                  </div>
                </div>
                <div className="col-md-6 col-6 px-md-4 h-75 d-flex align-items-center justify-content-center">
                  <div className='h-75 w-100 d-flex align-items-end justify-content-center'>
                    <div className="form-group bg-white h-100 w-100 rounded m-0">
                      <SelectCurrency name="send" options={CurrencyOptions} selected={CurrencyOptions[1]} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="currency_exchange_row">
                <h6 className="input_currency">1 EUR</h6><span className="equal_to_sign">=</span><h6 className="output_currency">0.8797 GBP</h6>
              </div>
              <div className="currency_two_div row d-flex align-items-center m-0">
                <div className="col-md-6 col-6 text-white pl-md-5">
                  <span className="recieve_currency">Recipient receives</span>
                  <div>
                    <h5>$ 982</h5>
                    {/* <input type="number" className="currency_input" /> */}
                  </div>
                </div>
                <div className="col-md-6 col-6 px-md-4 h-75 d-flex align-items-center justify-content-center">
                  <div className='h-75 w-100 d-flex align-items-end justify-content-center'>
                    <div className="form-group bg-white h-100 w-100 rounded m-0">
                      <SelectCurrency name="recieve" options={CurrencyOptions} selected={CurrencyOptions[3]} />
                    </div>
                  </div>
                </div>
              </div>
              <h6 className="row_one_col_two_subscript">Recipent gets <span className="currency_amount">£ 3,200</span> more when compared to regular traditional banks</h6>

            </div>
          </div>

        </div>

        <div className="row row_two">
          <div className="col-md-5 m-auto">
            <h1 className="row_two_title">Why Eazzy Transfer?</h1>
            <h6 className="row_two_subtitle">
              Avoid the bank appointments, Send money to diffrent countries, always with a low and transparent fee. Paying your bills and subscriptions across currencies is easier than ever.
            </h6>
          </div>
          <div className="row sub_row_two">
            <div className="col-md-4 mb-2 text-center">
              <img src={RowTwoImgOne} alt="" className="row_two_img" />
              <h1 className="framework_properties">Fast & Secure Onboarding</h1>
              <span className="framework_subtext">
                Get a quick overview of all your transactions in our easy-to-use user interphase
              </span>
            </div>
            <div className="col-md-4 mb-2 text-center">
              <img src={RowTwoImgTwo} alt="" className="row_two_img" />
              <h1 className="framework_properties">Free Transactions</h1>
              <span className="framework_subtext">
                Every transactions on eazzy transfer is free of service charge.. You don’t worry about fees.
              </span>
            </div>
            <div className="col-md-4 mb-2 text-center">
              <img src={RowTwoImgThree} alt="" className="row_two_img" />
              <h1 className="framework_properties">Secured with privacy</h1>
              <span className="framework_subtext">
                The platform provides a private and secure channel for foreign transactions.
              </span>
            </div>
          </div>
        </div>
        <div className="row row_three">
          <div style={{ backgroundImage: `url(${bg})` }}></div>
          <div className="col-md-6">
            <h1 className="row_three_title">Start Now With 3 Steps</h1>
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
                  <div className="to_do_subtitle">Signing up for your own Peyme account is easy and free. Just connection with phone or gmail instandly</div>
                </div>
                <div className="to_do_list">
                  <div className="numbers">
                    <i className="fas fa-landmark fa-2x"></i>
                  </div>
                  <div className="to_do_title">Step 2: Upload a local currency</div>
                  <div className="to_do_subtitle">Link your preferred credit, debit or prepaid cards to your Payme account.</div>
                </div>
                <div className="to_do_list">
                  <div className="numbers">
                    <i className="fas fa-wallet fa-2x"></i>
                  </div>
                  <div className="to_do_title">Step 3:  Convert to choice of currency</div>
                  <div className="to_do_subtitle">Thats all done. Now you can explore any apps, any webs that are ours partnets to transfer with them</div>
                </div>
                <div className="to_do_list">
                  <div className="numbers">
                    <i className="fas fa-exchange-alt fa-2x"></i>
                  </div>
                  <div className="to_do_title">  Step 4:  Make transfer</div>
                  <div className="to_do_subtitle">Thats all done. Now you can explore any apps, any webs that are ours partnets to transfer with them</div>
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
            <h1 className="row_four_title">How long do international transfers take?</h1>
            <h6 className="row_four_subtitle">
              Many of our international transfers are completed within 24 hours. Deposits and transfers of GBP can occur within one hour using faster payments with participating banks.
              <p>The maximum time a transfer would take is between 2 hours to 5 working days.</p>
            </h6>
            <div>
              <div className="row row_four_sub">
                <div className="col-md-5 row_four_col_one">
                  <SelectCountryCurrency options={CurrencyCountryOptions} selected={CurrencyCountryOptions[2]} />
                </div>
                <i className="fas fa-arrow-right fa-2x"></i>
                <div className="col-md-5  row_four_col_two">
                  <SelectCountryCurrency options={CurrencyCountryOptions} selected={CurrencyCountryOptions[1]} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="input-group" style={{ backgroundColor: '#DDF1FF' }}>
                    <div className="form-control bg-transparent" style={{ borderRadius: '0' }}>
                      <p className="ml-3 font-weight-bold">13 hours delivery time</p>
                    </div>
                    {/* <input type="text" className="form-control" aria-label="..." /> */}
                    <div className="input-group-btn">
                      <button type="button" className="btn btn-default dropdown-toggle row_four_btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ borderRadius: '0' }}>Normal Time <span className="caret"></span></button>
                      <ul className="dropdown-menu dropdown-menu-right row_four_dropdown">
                        <li><a href="#">13 hours delivery</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" className="divider"></li>
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
          {/* <div className="col-md-4">
                <h2 className="row_nine_title">What are the major features</h2>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <h6>
              We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company
              </h6>
            </div>
            <div className="card-deck mt-4">
                <div className="card row_nine_card">
                    <div className="icon_nine_holder ">

                    </div>
                  <div className="card-body">
                    <h5 className="card-title row_three_card_title">Send a request</h5>
                    <p className="card-text">Publish your content automatically to ensure that your content reaches the right people. Publish your content automatically.</p>
                  </div>
                </div>
                <div className="card row_nine_card">
                    <div className="icon_nine_holder">

                    </div>
                  <div className="card-body">
                    <h5 className="card-title  row_nine_card_title">Relocation Package</h5>
                    <p className="card-text">Publish your content automatically to ensure that your content reaches the right people. Publish your content automatically.</p>
                  </div>
                </div>
                <div className="card row_nine_card">
                    <div className="icon_nine_holder">

                    </div>
                  <div className="card-body">
                    <h5 className="card-title  row_nine_card_title">Work Permit</h5>
                    <p className="card-text">Publish your content automatically to ensure that your content reaches the right people. Publish your content automatically.</p>
                  </div>
                </div>
                <div className="card row_nine_card">
                    <div className="icon_nine_holder ">

                    </div>
                  <div className="card-body">
                    <h5 className="card-title  row_nine_card_title">Tourist Visa</h5>
                    <p className="card-text">Publish your content automatically to ensure that your content reaches the right people. Publish your content automatically.</p>
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
            <h1 className="row_six_title">Seamless interaction for all devices.</h1>
            <h6 className="row_six_subtitle">Everyone can quickly onboard on the eazzy transfer app, with its seamless and good user experience.</h6>
            <p className="row_six_subtitle mt-md-4">By simply connecting any of your devices to eazzytransfer.com, you get a perfect responsive app. It’s smooth and aesthetically pleasing.</p>
          </div>
          <div className="col-md-7">
            <img src={six} alt="" className="row_six_img" />
          </div>
        </div>
        <div className="row_seven">
          <h1 className="row_seven_title">Our partner companies</h1>
          <h6 className="row_seven_subtitle">Big brands, small bussiness, new startup, corporate and inividuals  </h6>
          <div className="row mt-5">
            <div className="col-md-2 mb-3 mb-sm-0">
              <img src={partnerOne} alt="" className="row_seven_img" />
            </div>
            <div className="col-md-2 mb-3 mb-sm-0">
              <img src={partnerTwo} alt="" className="row_seven_img" />
            </div>
            <div className="col-md-2 mb-3 mb-sm-0">
              <img src={partnerThree} alt="" className="row_seven_img" />
            </div>
            <div className="col-md-2 mb-3 mb-sm-0">
              <img src={partnerFour} alt="" className="row_seven_img" />
            </div>
            <div className="col-md-2 mb-3 mb-sm-0">
              <img src={partnerFive} alt="" className="row_seven_img" />
            </div>
            <div className="col-md-2 mb-3 mb-sm-0">
              <img src={partnerSix} alt="" className="row_seven_img" />
            </div>
          </div>
        </div>
        <div className="row row_ten">
          <div className="col-md-4">
            <h2 className="row_nine_title">What our customers are saying</h2>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="btn-group" role="group" aria-label="Basic example" style={{ float: "right" }}>
              <div type="button" className="btn btn-secondary row_ten_btn" style={{ width: "100px", paddingTop: "10px" }}><i className="fas fa-arrow-left fa-2x"></i></div>
              <div type="button" className="btn btn-secondary row_ten_btn" style={{ width: "100px" }}><i className="fas fa-arrow-right fa-2x"></i></div>
            </div>
          </div>
          <div className="card-deck mt-4">
            <div className="card row_ten_card">
              <div className="card-body row_ten_card_body p-0">
                <p className="card-text row_ten_card_text">
                  I am delighted with Eazzy transfer and will certainly recommend it as it is far more competitive than the bank rates offered and will be looking to using your services again in the very near future.
                </p>
                <div className="row_ten_card_div">
                  <img src={abbas} className="row_ten_img" alt="" />
                  <div className="row_ten_customer_info">
                    <h6 className="row_ten_customer_name"> Abbas Favour</h6>
                    <p className="customer_designation">Manager Google</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card row_ten_card">
              <div className="card-body row_ten_card_body p-0">
                <p className="card-text row_ten_card_text">
                  Eazzy transfer enabled our organization to convert our USD to African currencies at a 20% better rate than anything else we could find. That meant more donor dollars going directly towards helping smallholder farmers increase their incomes. If the competitive exchange rate wasn’t enough, the process was seamless, with money going from the US to our Nigerian bank account in less than a day. I recommend Eazzy transfer to any and every business looking to make cross-border payments.
                </p>
                <div className="row_ten_card_div">
                  <img src={ray} className="row_ten_img" alt="" />
                  <div className="row_ten_customer_info">
                    <h6 className="row_ten_customer_name">Raymond Owolabi</h6>
                    <p className="customer_designation">Professional manager</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card row_ten_card">
              <div className="card-body row_ten_card_body p-0">
                <div className="w-100">
                  <p className="card-text row_ten_card_text">
                    Just three words : Eazzy Transfer  is Awesome!
                  </p>
                </div>
                <div className="row_ten_card_div">
                  <img src={yuli} className="row_ten_img" alt="" />
                  <div className="row_ten_customer_info">
                    <h6 className="row_ten_customer_name"> Yuli Ibrahim</h6>
                    <p className="customer_designation">IOS Dev at Tokopedia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row_eight">
          <h1 className="row_eight_title">Frequently asked questions</h1>
          <h6 className="row_eight_subtitle">The most important part of the Startup Framework are the samples  </h6>
          <div className="d-block d-lg-none">
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
          <div className="mt-3 d-none d-lg-block">
            <div className="row">
              <div className="col-md-5 position-relative d-flex align-items-center p-0">
                {/* <div className="questions position-absolute p-0" style={{ right: '-5vw', zIndex: '1', cursor: 'pointer' }}> */}
                <div className="questions p-0">
                  <ul className="list-group">
                    {
                      FAQs.map((faq, index) =>
                        <li key={index} onClick={() => setCurrentQuestion(faq)} className={`list-group-item ${currentQuestion === faq ? "question-active" : "question"}`}>
                          <div className="d-flex justify-content-between">
                            {/* <img src={bigBullet} alt="" /> */}
                            <div className={`${currentQuestion === faq ? "bullet-active" : "bullet"}`}></div>
                            <span className='ml-2 mr-4'>{faq.Q}</span>
                          </div>
                          <img src={rightCaret} alt="" />
                        </li>
                      )
                    }
                  </ul>
                </div>
              </div>
              <div className={`col-md-7 answer`}>
                {
                  currentQuestion &&
                  <>
                    <h2>{currentQuestion.Q}</h2>
                    <p>{currentQuestion.A}</p>
                  </>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="row footer">
          <div className="">
            <h6 className="footer_list_title">Eazzy transfer</h6>
            <h6 className="footer_list_subtitle">Transfer</h6>
            <h6 className="footer_list_subtitle">Convert</h6>
            <h6 className="footer_list_subtitle">Check Rates</h6>
          </div>
          <div className="">
            <h6 className="footer_list_title">Partnership</h6>
            <h6 className="footer_list_subtitle">Blog</h6>
            <h6 className="footer_list_subtitle">Support</h6>
            <h6 className="footer_list_subtitle">Newsletter</h6>
          </div>
          <div className="">
            <h5 className="footer_list_title">about</h5>
            <ul className="footer_list p-0">
              <li className="footer_list_subtitle">Twitter</li>
              <li className="footer_list_subtitle">Instagram</li>
              <li className="footer_list_subtitle">Facebook</li>
              <li className="footer_list_subtitle">Youtube</li>
            </ul>
          </div>
          <div className="">
            <h5 className="footer_list_title">Support</h5>
            <ul className="footer_list p-0">
              <li className="footer_list_subtitle">
                <Link to="support" className="text-decoration-none footer_list_subtitle">My Account</Link>
              </li>
              <li className="footer_list_subtitle">
                <Link to="help-desk" className="text-decoration-none footer_list_subtitle">Help & Support</Link>
              </li>
              <li className="footer_list_subtitle">
                <Link to="support" className="text-decoration-none footer_list_subtitle">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h6 className="footer_list_title">Company</h6>
            <p className="footer_list_subtitle">
              <Link to="privacy-policy" className="text-decoration-none footer_list_subtitle">Privacy Policy</Link>
            </p>
            <p className="footer_list_subtitle">
              <Link to="terms-and-conditions" className="text-decoration-none footer_list_subtitle">Terms of Service</Link>
            </p>
            <p className="footer_list_subtitle">
              <Link to="terms-and-conditions" className="text-decoration-none footer_list_subtitle">Code of Conduct</Link>
            </p>
            {/* <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i> */}
          </div>
        </div>
        {/* <hr className="footer_hr" /> */}
        <div className="sub_footer_row">
          <div className="">
            <img src={logo} alt="logo" className="eazzy_logo" />
          </div>
          <div className="text-center flex-fill">
            <h6>Copyright © 2021. <a href="">Eazzy Transfer</a>. All rights reserved.</h6>
          </div>
        </div>
      </React.Fragment>
    </div>
  )
};

export default LandingPage;