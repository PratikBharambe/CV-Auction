import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Import the CSS file for styling (optional)

const AdminDashboard = () => {
  return (
    <div>
      {/* Header Section */}
      <header>
        <h1>CV-Auction</h1>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/add-vehicle">Add Vehicle</Link></li>
            <li><Link to="/vehicles-page">All Vehicles</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
      </header>
      
      {/* Main Content */}
      <main>
        <h2>Admin Dashboard</h2>
        
        {/* Host Auction Button */}
        <Link to="/auction">
          <button id="host-auction-btn">Host Auction</button>
        </Link>

        
        
        <Link to="/AuctionPage" className="mt-3"><br>
        
        </br>
        
        <button id="auction-page-btn" className="mt-3">Auction Page</button>
        </Link>
      </main>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Commercial Vehicle auction. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminDashboard;
