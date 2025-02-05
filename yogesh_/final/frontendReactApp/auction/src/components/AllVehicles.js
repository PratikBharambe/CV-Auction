import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Card from "./Card";

const AllVehicles = () => {

  const URL = 'https://localhost:44358/api';
  
  const [vehicles, setVehicles] = useState([]);
  const [activeButtonIndices, setActiveButtonIndices] = useState({});
  const [basePrices, setBasePrices] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [vehicleDetails, setVehicleDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`${URL}/vehicles`)
      .then((response) => {
        setVehicles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching vehicles data:", error);
      });
  }, []);

  const handleButtonClick = (vehicleId, index) => {
    setActiveButtonIndices((prevState) => ({
      ...prevState,
      [vehicleId]: index
    }));

    if (index === 1) {
      const selectedVehicle = vehicles.find((vehicle) => vehicle.id === vehicleId);
      setVehicleDetails(selectedVehicle);
      setShowDetailsModal(true);
    }
    if (index === 0) {
      setShowModal(true);
    }
  };

  const handleBidChange = (vehicleId, e) => {
    setBasePrices((prevState) => ({
      ...prevState,
      [vehicleId]: e.target.value
    }));
  };

  const handleAddToAuction = (vehicleId) => {
    const vehicleToAuction = vehicles.find((vehicle) => vehicle.id === vehicleId);
    const basePrice = basePrices[vehicleId];

    if (vehicleToAuction && basePrice) {
      const auctionData = { vehicleId: vehicleToAuction.id, basePrice: basePrice };

      axios
        .post(`${URL}/auction`, auctionData)
        .then(() => alert(`Vehicle with ID ${vehicleId} added to auction`))
        .catch(() => alert("Error adding the vehicle to the auction"));
    } else {
      alert("Please provide a Base Price.");
    }
  };

  const handleDeleteVehicle = (vehicleId) => {
    const updatedVehicles = vehicles.filter((vehicle) => vehicle.id !== vehicleId);
    setVehicles(updatedVehicles);
    alert(`Vehicle with ID ${vehicleId} has been deleted`);
  };

  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      (vehicle.modelName && vehicle.modelName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (vehicle.regNo && vehicle.regNo.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCloseModal = () => setShowModal(false);

  const handleNextImage = () => {
    if (currentImageIndex < filteredVehicles[0]?.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="container-fluid d-flex flex-column min-vh-100 px-4 py-3">
      <div className="mt-4 text-center">
        <div className="input-group">
          <input
            type="text"
            className="form-control mx-auto shadow-lg"
            placeholder="Type vehicle name or number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ maxWidth: "700px" }}
          />
        </div>
      </div>

      <div className="mt-4 row">
        {filteredVehicles.length > 0 ? (
          filteredVehicles.map((vehicle) => (
            <Card
              key={vehicle.id}
              vehicle={vehicle}
              activeButtonIndices={activeButtonIndices}
              onButtonClick={handleButtonClick}
              basePrice={basePrices[vehicle.id]}
              onBasePriceChange={handleBidChange}
              onAddToAuction={handleAddToAuction}
              onDeleteVehicle={handleDeleteVehicle}
              onImageClick={() => setShowModal(true)} // Handle image click to show modal
            />
          ))
        ) : (
          <p>No vehicles found.</p>
        )}
      </div>

      {/* Modal for vehicle gallery */}
      {showModal && filteredVehicles.length > 0 && (
        <div className="modal fade show mb-4" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Vehicle Gallery</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={filteredVehicles[0]?.images[currentImageIndex] || "https://via.placeholder.com/150"}
                  className="img-fluid"
                  alt="Gallery"
                  style={{ maxHeight: "150px" }}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handlePreviousImage}
                  disabled={currentImageIndex === 0}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleNextImage}
                  disabled={currentImageIndex === filteredVehicles[0]?.images.length - 1}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for vehicle details */}
      {showDetailsModal && vehicleDetails && (
        <div className="modal fade show mb-4" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Vehicle Details</h5>
                <button type="button" className="btn-close" onClick={() => setShowDetailsModal(false)}></button>
              </div>
              <div className="modal-body">
                <p><strong>Register Number:</strong> {vehicleDetails.regNo}</p>
                <p><strong>Manufacturer Name:</strong> {vehicleDetails.manufacName}</p>
                <p><strong>Model Name:</strong> {vehicleDetails.modelName}</p>
                <p><strong>Year of Manufacturing:</strong> {vehicleDetails.yearOfManufacturing}</p>
                <p><strong>Fuel Type:</strong> {vehicleDetails.fuelType}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllVehicles;
