import React from 'react';
import { Link } from 'react-router-dom';
import './MainNav.css'; // Add custom CSS for MainNav

const MainNav = () => {
    return (
        <header className="main-nav">
            <div className="logo">
                <h1>CV-Auction</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/add-vehicle" className="nav-link">Add Vehicle</Link></li>
                    <li><Link to="/all-vehicles" className="nav-link">All Vehicles</Link></li>
                    <li><Link to="/auction" className="nav-link">Auction</Link></li> 
                    <li><Link to="/logout" className="nav-link">Logout</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNav;
