// AppRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Frontpage from './Frontpage';
import Dashboard from './Dashboard';
import AdminDashboard from './AdminDashboard';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default AppRoutes;
