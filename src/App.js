import React, { useEffect, useState } from "react";
import LandingPage from './landing_page';
import { Route, Routes } from "react-router-dom";
// import SignUp from './signup/signUp';
import DashboardBody from "./dashboard/dashboard_body";
import DropdownSearchSelection from "./currency_list";
// import DashboardContent from "./dashboard/dashboard_content";

import './css/eazzy_transfer.css';
import './css/components.css';


const BASE_URL = '  http://api.exchangeratesapi.io/v1/latest?access_key=314e5de72710349184bf0957901f682c'


function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  console.log(currencyOptions)

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)
        ])
      })
  }, [])

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<DashboardBody />} />
        <Route path="/currency" element={<DropdownSearchSelection />} />
      </Routes>
    </div>
  );
}

export default App;
