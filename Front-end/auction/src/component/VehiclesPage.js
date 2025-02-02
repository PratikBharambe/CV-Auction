import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./VehiclesPage.css";

const VehiclesPage = () => {
  // Vehicle data
  const vehicleData = [
    { name: "Nanox", id: "MH14DT2794", image: "/images/" },
    { name: "Tata Ace D", id: "MH18AA4288", image: "/images/trucks-wallpaper.jpg" },
    { name: "Nexon Xm", id: "MH31FA9051", image: "/images/nexon.jpg" },
    { name: "Vehicle 4", id: "MH12DT1234", image: "/images/vehicle4.jpg" },
  ];

  const [searchQuery, setSearchQuery] = useState(""); // State to store the search input
  const [filteredVehicles, setFilteredVehicles] = useState(vehicleData); // State for filtered results
  const [showGalleryModal, setShowGalleryModal] = useState(false); // State to control modal visibility
  const [selectedVehicle, setSelectedVehicle] = useState(null); // Store the selected vehicle for gallery

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

  // Fallback image if vehicle image is not available
  const getImage = (imageSrc) => {
    return imageSrc ? imageSrc : "/images/default-placeholder.jpg"; // Placeholder image for missing images
  };

  // Handle Enter key press for search
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  // Handle opening gallery modal
  const handleGalleryOpen = (vehicle) => {
    setSelectedVehicle(vehicle); // Store the selected vehicle
    setShowGalleryModal(true); // Open the modal
  };

  // Handle closing gallery modal
  const handleGalleryClose = () => {
    setShowGalleryModal(false); // Close the modal
    setSelectedVehicle(null); // Clear the selected vehicle
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
                <Link to="/" className="nav-link text-dark"><strong>Home</strong></Link>
              </li>
              <li className="nav-item">
                <Link to="/auction" className="nav-link text-dark"><strong>Auctions List</strong></Link>
              </li>
              <li className="nav-item">
                <Link to="/AuctionPage" className="nav-link text-dark"><strong>AuctionPage</strong></Link>
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
              onKeyPress={handleKeyPress}  // Trigger search on Enter key press
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
        <div className="container-fluid">
          <h3>Search Result</h3>
          <div className="row mt-3">
            {filteredVehicles.length > 0 ? (
              filteredVehicles.map((vehicle, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card vehicle-card">
                    <img
                      src={getImage(vehicle.image)} // Use fallback image if missing
                      alt={vehicle.name}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to={`/vehicle-details/${vehicle.id}`} className="text-dark">
                          {vehicle.name} <span>{vehicle.id}</span>
                        </Link>
                      </h5>
                      <div className="d-flex justify-content-between mb-3">
                        <button
                          className="btn btn-light btn-sm"
                          onClick={() => handleGalleryOpen(vehicle)} // Open gallery when clicked
                        >
                          Gallery
                        </button>
                        <button className="btn btn-light btn-sm">Vehicle Details</button>
                        <button className="btn btn-light btn-sm">Other Details</button>
                        <button className="btn btn-light btn-sm">Evaluation Report</button>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="form-control mb-2"
                          placeholder="Base Price"
                        />
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <button className="btn btn-success btn-sm">Add to Auction</button>
                        <button className="btn btn-danger btn-sm">Remove</button>
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

      {/* Gallery Modal */}
      {showGalleryModal && selectedVehicle && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} aria-labelledby="galleryModal" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Gallery for {selectedVehicle.name}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleGalleryClose}></button>
              </div>
              <div className="modal-body">
                {/* Gallery Images */}
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <img src={getImage(selectedVehicle.image)} alt="vehicle" className="img-fluid" />
                  </div>
                  {/* Add more images as needed */}
                  <div className="col-md-4 mb-3">
                    <img src="/images/vehicle2.jpg" alt="vehicle" className="img-fluid" />
                  </div>
                  <div className="col-md-4 mb-3">
                    <img src="/images/vehicle3.jpg" alt="vehicle" className="img-fluid" />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleGalleryClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehiclesPage;
