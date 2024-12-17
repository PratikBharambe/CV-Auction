import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css"; // Import external CSS

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <header className="bg-light p-3 border-bottom shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo, Website Name, and User Details */}
          <div className="d-flex align-items-center">
            <h4 className="mb-0">CV Auction</h4>
            <div className="user-details ms-3">
              <p className="mb-0">Welcome, User1</p>
              <small>December 12, 2024</small>
            </div>
          </div>

          {/* Login and Sign-Up Buttons */}
          <div className="auth-buttons">
            <button className="btn btn-outline-primary me-2">Login</button>
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Navbar Section */}
      <nav className="bg-white shadow-sm py-2">
        <div className="container d-flex justify-content-start">
          <button className="btn btn-outline-secondary me-2">Dashboard</button>
          <button className="btn btn-outline-secondary me-2">My Inventory</button>
          <button className="btn btn-outline-secondary me-2">Buy Leads</button>
          <button className="btn btn-outline-secondary me-2">Sell Leads</button>
          <button className="btn btn-outline-secondary me-2">Marketplace Inventory</button>
          <button className="btn btn-outline-secondary me-2">Auctions</button>
          <button className="btn btn-outline-secondary">Payments</button>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            {/* Metrics Section */}
            <div className="row g-3">
              {[
                { label: "Security Amount", value: 10000 },
                { label: "Vehicle Limit", value: 0 },
                { label: "Bid Per Vehicle", value: 0 },
                { label: "Pending Bill", value: 0 },
                { label: "Your Package", value: "Expired" },
                { label: "Plan Started on", value: "30 Nov -0001" },
                { label: "Plan Ends on", value: "30 Nov -0001" },
              ].map((metric, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card text-center p-3">
                    <p className="metric-label">{metric.label}</p>
                    <h5 className="metric-value">{metric.value}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4">
            <div className="quick-links card p-3">
              <h6>Quick Links</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#valuation" className="text-decoration-none">
                    Check Car Valuation (next page link)
                  </a>
                </li>
                <li>
                  <a href="#listing" className="text-decoration-none">
                    link
                  </a>
                </li>
                <li>
                  <a href="#upgrade" className="text-decoration-none">
                   contact us link
                  </a>
                </li>
                <li>
                  <a href="#feedback" className="text-decoration-none">
                   customer feedback 
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card p-3">
              <h6>Inventory Ageing</h6>
              {/* Placeholder for a chart */}
              <div className="chart-placeholder bg-light border rounded" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-3">
              <h6>Area of Improvements</h6>
              {/* Placeholder for a chart */}
              <div className="chart-placeholder bg-light border rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;