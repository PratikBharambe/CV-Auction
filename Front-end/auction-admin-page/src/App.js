import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './component/AdminDashboard';
import AddVehicle from './component/AddVehicle';
import AllVehicles from './component/AllVehicles';
import Auction from './component/Auction';
import Logout from './component/Logout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/add-vehicle" element={<AddVehicle />} />
          <Route path="/all-vehicles" element={<AllVehicles />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
