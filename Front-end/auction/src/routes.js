// src/routes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

import Dashboard from "./components/Dashboard";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<App />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;