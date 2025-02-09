import React, { useState, useEffect } from "react";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

const BuyLeadsPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [openBidModal, setOpenBidModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [newBidAmount, setNewBidAmount] = useState(0);
  const [userBidLeft, setUserBidLeft] = useState(5); // Example user bid left
  var user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await axios.get("https://localhost:44358/api/currentauction");
      setVehicles(response.data);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  const openBidModalForVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
    setNewBidAmount(vehicle.currentBid + 2000); // Minimum bid increment
    setOpenBidModal(true);
  };

  const handleBidSubmit = async () => {
    if (selectedVehicle) {
      if (userBidLeft <= 0) {
        alert("No bids left in your account!");
        return;
      }

      if (newBidAmount <= selectedVehicle.currentBid + 2000) {
        alert(`Your bid must be more than ₹2000 higher than the current highest bid (₹${selectedVehicle.currentBid}).`);
        return;
      }

      const bidData = {
        allowedUserUid: user.uid,
        vehicleid: selectedVehicle.vehicleId,
        auctionid: selectedVehicle.auctionid,
        priceOffered: newBidAmount,
        userBidLeft: userBidLeft - 1,
        highestBidder: user.id,
        auctionEnd: false,
      };

      try {
        const response = await axios.post("https://localhost:44358/api/utils/participated", bidData);
        if (response.data.success) {
          alert("Bid placed successfully!");
          setUserBidLeft(userBidLeft - 1);
          setOpenBidModal(false);
          fetchVehicles(); // Refresh auction data
        }
      } catch (error) {
        if (error.response && error.response.status === 409) {
          alert("The auction data has been updated. Please refresh and try again.");
          fetchVehicles();
        } else {
          console.error("Error placing bid:", error);
        }
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1>Vehicle Auction</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Vehicle ID</th>
            <th>Make</th>
            <th>Model</th>
            <th>Current Bid</th>
            <th>Place Bid</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.vehicleId}>
              <td>{vehicle.vehicleId}</td>
              <td>{vehicle.make}</td>
              <td>{vehicle.model}</td>
              <td>₹{vehicle.currentBid}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => openBidModalForVehicle(vehicle)}
                >
                  Place Bid
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {openBidModal && (
        <div className="modal show" style={{ display: "block", background: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Place a Bid for {selectedVehicle.make} {selectedVehicle.model}</h5>
                <button type="button" className="btn-close" onClick={() => setOpenBidModal(false)}></button>
              </div>
              <div className="modal-body">
                <input
                  type="number"
                  value={newBidAmount}
                  onChange={(e) => setNewBidAmount(Number(e.target.value))}
                  className="form-control"
                  min={selectedVehicle.currentBid + 2000}
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setOpenBidModal(false)}>Close</button>
                <button className="btn btn-primary" onClick={handleBidSubmit}>Submit Bid</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyLeadsPage;
