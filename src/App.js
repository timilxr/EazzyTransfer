import React, { useEffect, useState } from "react";
import LandingPage from './landing_page';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './signup/signUp';
import DashboardBody from "./dashboard/dashboard_body";
import DropdownSearchSelection from "./currency_list";
import Support from "./components/support";
import TermsandConditions from "./components/terms_and_conditions";
import PrivacyPolicy from "./components/privacy_policy";
import HelpDesk from "./components/helpdesk";
import UpdateProfile from "./components/updateProfile";
import SendMoney from "./views/sendMoney";
import ConvertCurrency from "./views/convertCurrency";
import Settings from './views/settings';
// import DashboardContent from "./dashboard/dashboard_content";

import './css/components.css';
import './css/eazzy_transfer.css';


const BASE_URL = '  http://api.exchangeratesapi.io/v1/latest?access_key=314e5de72710349184bf0957901f682c'


function App() {
  // const [currencyOptions, setCurrencyOptions] = useState([])
  // console.log(currencyOptions)

  // useEffect(() => {
  //   fetch(BASE_URL)
  //     .then(res => res.json())
  //     .then(data => {
  //       setCurrencyOptions([data.base, ...Object.keys(data.rates)
  //       ])
  //     })
  // }, [])

  return (
    <div className="m-0 p-0">
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="dashboard/*" element={<DashboardBody />} />
          <Route path="send-money" element={<SendMoney />} />
          <Route path="convert-currency" element={<ConvertCurrency />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="update-profile" element={<UpdateProfile />} />
          {/* <Route path="currency" element={<DropdownSearchSelection />} /> */}
          <Route path="support" element={<Support />} />
          <Route path="terms-and-conditions" element={<TermsandConditions />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="help-desk" element={<HelpDesk />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
