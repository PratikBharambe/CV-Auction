import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './component/AdminDashboard';
import AddVehicle from './component/AddVehicle';
import Card from './component/Card';
import Auction from './component/Auction';
import Logout from './component/Logout';
import Layout from './component/Layout';
import AboutUs from './component/AboutUs';
import VehiclesPage from './component/VehiclesPage';
import AuctionPage from './component/AuctionPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/add-vehicle" element={<AddVehicle />} />
           <Route path="/vehicles-page" element={<VehiclesPage />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/about-us" element={<AboutUs />} />
           <Route path="/logout" element={<Logout />} />
           <Route path="/AuctionPage" element={<AuctionPage />} />

        </Routes>
      </div>
    </Router>
    );
  }
           

export default App;
