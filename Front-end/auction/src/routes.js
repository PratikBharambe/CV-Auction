// src/routes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

import Adashboard from "./components/ADashboard";
import VehiclesPage from "./components/VehiclesPage";
// import CustomerRatingForm from "./components/CustomerRatingForm";
import RegistrationForm from "./components/RegistrationForm";
import AboutUs from "./components/AboutUs";
import Auction from "./components/UserAuction";
import Package from "./components/Package";
import PaymentComponentBasic from "./components/PaymentComponentBasic";
import PaymentComponentPremium from "./components/PaymentComponentPremium";
import Dashboard from "./components/Dashboard";
import CustomerRatingForm from "./components/CustomerRatingForm";



const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<App />} />
        <Route path="/admin-dashboard" element={<Adashboard />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/package" element={<Package />} />
        <Route path="/payment-basic" element={<PaymentComponentBasic />} />
        <Route path="/payment-premium" element={<PaymentComponentPremium />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer-rating" element={<CustomerRatingForm />} />
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;