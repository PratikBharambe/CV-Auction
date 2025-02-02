import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"; // Import axios for making API requests

const AllVehicles = () => {
  const [serverTime, setServerTime] = useState(new Date());
  const [activeButton, setActiveButton] = useState(0);
  const [basePrice, setBasePrice] = useState(""); // State for base price
  const [eventId, setEventId] = useState(""); // State for event ID
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDetailsModal, setShowDetailsModal] = useState(false); // State for vehicle details modal visibility
  const [vehicles, setVehicles] = useState([]); // State for vehicles data fetched from API

  // Fetch data from API
  useEffect(() => {
    // Assuming the API endpoint is '/api/vehicles'
    axios
      .get("/api/vehicles")
      .then((response) => {
        setVehicles(response.data); // Set the fetched data to the state
      })
      .catch((error) => {
        console.error("There was an error fetching the vehicles data:", error);
      });

    const interval = setInterval(() => {
      setServerTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (index) => {
    setActiveButton(index); // Set the clicked button as active
    if (index === 0) {
      setShowModal(true); // Open modal when "Gallery" button is clicked
    }
  };

  const handleBidChange = (e) => setBasePrice(e.target.value); // Handle bid input change for base price
  const handleEventIdChange = (e) => setEventId(e.target.value); // Handle event ID input change
  const handleVehicleDetailsClick = () => {
    setShowDetailsModal(true); // Open modal when "Vehicle Details" button is clicked
  };

  const handleCloseModal = () => setShowModal(false); // Close modal
  const handleNextImage = () => {
    if (currentImageIndex < galleryImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };
  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.number.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const galleryImages = filteredVehicles[0]?.images || []; // First vehicle images

  // Add to auction function
  const handleAddToAuction = (vehicleId) => {
    const vehicleToAuction = vehicles.find((vehicle) => vehicle.id === vehicleId);

    if (vehicleToAuction && basePrice && eventId) {
      // Send the vehicle along with base price and event ID to auction
      const auctionData = {
        vehicleId: vehicleToAuction.id,
        basePrice: basePrice,
        eventId: eventId,
      };

      axios
        .post("/api/auction", auctionData) // Send the auction data to the server
        .then((response) => {
          alert(`Vehicle with ID ${vehicleId} added to auction`);
          // Optionally, update UI or handle response here
        })
        .catch((error) => {
          console.error("There was an error adding the vehicle to the auction:", error);
          alert("Error adding the vehicle to the auction");
        });
    } else {
      alert("Please provide both Base Price and Event ID.");
    }
  };

  // Delete vehicle function
  const handleDeleteVehicle = (vehicleId) => {
    const updatedVehicles = vehicles.filter((vehicle) => vehicle.id !== vehicleId);
    setVehicles(updatedVehicles);
    alert(`Vehicle with ID ${vehicleId} has been deleted`);
    // Optionally, call an API to delete the vehicle from the database.
  };

  return (
    <div className="container-fluid d-flex flex-column min-vh-100 px-4 py-3">
      {/* Search Bar */}
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

      {/* Vehicle Cards */}
      <div className="mt-4 row">
        {filteredVehicles.map((vehicle) => (
          <div key={vehicle.id} className="col-12 col-md-6 col-lg-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src={vehicle.images[0]}
                className="card-img-top"
                alt={vehicle.name}
                loading="lazy"
              />
              <div className="card-body">
                <h6 className="card-title">
                  {vehicle.name} <span className="text-primary">{vehicle.number}</span>
                </h6>
                <hr />
                {/* Buttons */}
                <div className="d-flex flex-wrap">
                  {["Gallery", "Vehicle Details", "Evaluation Report"].map((label, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`btn btn-sm me-2 mt-2 ${activeButton === index ? "btn-primary" : "btn-light"}`}
                      onClick={() => {
                        handleButtonClick(index);
                        if (index === 1) {
                          handleVehicleDetailsClick(); // Open modal for vehicle details
                        }
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* Base Price and Event ID */}
                <div className="mt-1">
                  <label htmlFor="baseprice" className="form-label">
                    Base Price
                  </label>
                  <input
                    type="number"
                    id="baseprice"
                    className="form-control"
                    placeholder="Base Price"
                    value={basePrice}
                    onChange={handleBidChange}
                  />

                  <label htmlFor="eventid" className="form-label mt-3">
                    Event ID
                  </label>
                  <input
                    type="number"
                    id="eventid"
                    className="form-control"
                    placeholder="Event ID"
                    value={eventId}
                    onChange={handleEventIdChange}
                  />
                </div>

                {/* Buttons for add to auction and delete */}
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => handleAddToAuction(vehicle.id)} // Call Add to Auction handler
                  >
                    Add To Auction
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDeleteVehicle(vehicle.id)} // Call Delete handler
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Gallery */}
      {showModal && (
        <div
          className="modal fade show mb-4"
          style={{ display: "block" }}
          tabIndex="-1"
          aria-labelledby="galleryModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="galleryModalLabel">
                  Vehicle Gallery
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={galleryImages[currentImageIndex]}
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
                  disabled={currentImageIndex === galleryImages.length - 1}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Vehicle Details */}
      {showDetailsModal && (
        <div
          className="modal fade show mb-4"
          style={{ display: "block" }}
          tabIndex="-1"
          aria-labelledby="vehicleDetailsModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="vehicleDetailsModalLabel">
                  Vehicle Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowDetailsModal(false)} // Close modal
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Register Number:</strong> {filteredVehicles[0]?.number}
                </p>
                <p>
                  <strong>Manufacturer Name:</strong> {filteredVehicles[0]?.manufacturer}
                </p>
                <p>
                  <strong>Model Name:</strong> {filteredVehicles[0]?.model}
                </p>
                <p>
                  <strong>Fuel Type:</strong> {filteredVehicles[0]?.fuelType}
                </p>
                <p>
                  <strong>Insurance:</strong> {filteredVehicles[0]?.insurance}
                </p>
                <p>
                  <strong>KM Driven:</strong> {filteredVehicles[0]?.kmDriven}
                </p>
                <p>
                  <strong>RTO Passing:</strong> {filteredVehicles[0]?.rtoPassing}
                </p>
                <p>
                  <strong>Registration Year:</strong> {filteredVehicles[0]?.registrationYear}
                </p>
                <p>
                  <strong>Year of Manufacturing:</strong> {filteredVehicles[0]?.yearOfManufacturing}
                </p>
                <p>
                  <strong>Parking Location:</strong> {filteredVehicles[0]?.parkingLocation}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowDetailsModal(false)} // Close modal
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllVehicles;
