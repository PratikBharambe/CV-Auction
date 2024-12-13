import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./VehiclesPage.css";

const VehiclesPage = () => {
  // Vehicle data
  const vehicleData = [
    { name: "Nanox", id: "MH14DT2794", image: "/images/nanox.jpg" },
    { name: "Tata Ace D", id: "MH18AA4288", image: "/images/tata-ace.jpg" },
    { name: "Nexon Xm", id: "MH31FA9051", image: "/images/nexon.jpg" },
    { name: "Vehicle 4", id: "MH12DT1234", image: "/images/vehicle4.jpg" },
    // Add more vehicles here
  ];

  const [searchQuery, setSearchQuery] = useState(""); // State to store the search input
  const [filteredVehicles, setFilteredVehicles] = useState(vehicleData); // State for filtered results

  // Search functionality
  const handleSearch = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = vehicleData.filter(
      (vehicle) =>
        vehicle.name.toLowerCase().includes(lowerCaseQuery) ||
        vehicle.id.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredVehicles(filtered);
  };

  return (
    <div className="vehicles-page">
      {/* Header Section */}
      <header className="header-container bg-light border-bottom p-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h4>CV Auction</h4>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a href="#home" className="nav-link text-dark">
                  <strong>Home</strong>
                </a>
              </li>
              <li className="nav-item">
                <a href="#auctions" className="nav-link text-dark">
                  <strong>Auctions</strong>
                </a>
              </li>
              <li className="nav-item">
                <a href="#vehicles" className="nav-link text-dark">
                  <strong>Vehicles for Sale</strong>
                </a>
              </li>
              <li className="nav-item">
                <a href="#register" className="nav-link text-dark">
                  <strong>Register</strong>
                </a>
              </li>
              <li className="nav-item">
                <a href="#login" className="nav-link text-dark">
                  <strong>Login</strong>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Search and Filter Section */}
      <div className="search-container py-4">
        <div className="container">
          <h2>FIND</h2>
          <div className="input-group mt-3">
            <input
              type="text"
              className="form-control search-bar"
              placeholder="Type vehicle name or number"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSearch}
            >
              Find
            </button>
          </div>
        </div>
      </div>

      {/* Vehicle Cards Section */}
      <div className="vehicles-container py-4">
        <div className="container">
          <h3>Search Result</h3>
          <div className="row mt-3">
            {filteredVehicles.length > 0 ? (
              filteredVehicles.map((vehicle, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card vehicle-card">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {vehicle.name} <span>{vehicle.id}</span>
                      </h5>
                      <div className="d-flex justify-content-between mb-3">
                        <button className="btn btn-light btn-sm">Gallery</button>
                        <button className="btn btn-light btn-sm">
                          Vehicle Details
                        </button>
                        <button className="btn btn-light btn-sm">
                          Other Details
                        </button>
                        <button className="btn btn-light btn-sm">
                          Evaluation Report
                        </button>
                      </div>
                      <button className="btn btn-outline-warning w-100 mb-2">
                        Add to Watchlist
                      </button>
                      <div>
                        <input
                          type="text"
                          className="form-control mb-2"
                          placeholder="Your Bid"
                        />
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={`terms-${index}`}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`terms-${index}`}
                          >
                            I Agree <a href="#terms">Terms & Conditions</a>
                          </label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <button className="btn btn-warning">View Details</button>
                        <button className="btn btn-primary">Place Bid</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <p>No vehicles found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclesPage;