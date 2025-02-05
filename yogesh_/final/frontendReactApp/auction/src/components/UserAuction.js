import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import HostAuction from "./HostAuction";
import CurrentAuctionPage from "./CurrentAuctionPage";
import axios from 'axios';

const UserAuction = () => {
  const api = 'https://localhost:44358/api';

  const [serverTime, setServerTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState("live");
  const [liveEvents, setLiveEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [buyLeads, setBuyLeads] = useState([]);
  const [bidAmounts, setBidAmounts] = useState({});
  const [openBidModal, setOpenBidModal] = useState(false);
  const [currentBid, setCurrentBid] = useState(0);
  const [selectedVehicleId, setSelectedVehicleId] = useState(null);
  const [newBidAmount, setNewBidAmount] = useState(0);
  const navigate = useNavigate();

  const fetchEventData = async () => {
    try {
      const eventResponse = await fetch(`${api}/currentauction`);
      const eventData = await eventResponse.json();
      setLiveEvents(eventData.liveEvents || []);
      setUpcomingEvents(eventData.upcomingEvents || []);

      // Fetch current auction data for buy leads
      const auctionResponse = await fetch(`${api}/currentauction`);
      const auctionData = await auctionResponse.json();
      setBuyLeads(auctionData || []);
    } catch (error) {
      console.error("Error fetching events or auction data:", error);
    }
  };

  useEffect(() => {
    fetchEventData();
    const interval = setInterval(() => {
      setServerTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBasicPlan = () => {
    navigate("/vehicles");
  };

  const handleBidNow = (event) => alert(`BID NOW Clicked for: ${event.eventName}`);
  const handleOpenEvent = (event) => alert(`OPEN Clicked for: ${event.eventName}`);
  const handleProfileClick = () => alert("Redirecting to Profile Page");
  const handleAboutUsClick = () => navigate('/about-us');
  const handlePaymentDetailsClick = () => alert("Viewing Bank Details");

  const handleBidAmountChange = (vehicleId, amount) => {
    setBidAmounts(prev => ({
      ...prev,
      [vehicleId]: amount
    }));
  };

  const handlePlaceBid = (vehicleId, currentBid) => {
    setSelectedVehicleId(vehicleId);
    setCurrentBid(currentBid);
    setOpenBidModal(true); // Open the modal when the button is clicked
  };

  const handleBidSubmit = async () => {
    if (newBidAmount < currentBid + 2000) {
      alert("Bid must be at least 2000 more than the current bid.");
      return;
    }

    try {
      await axios.post(`${api}/placeBid`, { vehicleId: selectedVehicleId, bidAmount: newBidAmount });
      alert("Bid placed successfully");
      setOpenBidModal(false);
    } catch (error) {
      console.error("Error placing bid:", error);
      alert("There was an error placing your bid.");
    }
  };

  const renderEventTable = (events, isBidButton = false, isOpenButton = false) => (
    <table className="table table-bordered text-center table-hover">
      <thead className="table-primary">
        <tr>
          <th>Event ID</th>
          <th>Event Name</th>
          <th>Vehicle Type</th>
          <th>Start Date & Time</th>
          <th>End Date & Time</th>
          <th>Location</th>
          <th>No. of Vehicles</th>
          {isBidButton && <th>Action</th>}
          {isOpenButton && <th>Open</th>}
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.id}>
            <td>{event.id}</td>
            <td>{event.eventName}</td>
            <td>{event.vehicleType}</td>
            <td>{event.startDate}</td>
            <td>{event.endDate}</td>
            <td>{event.location}</td>
            <td>{event.vehicles}</td>
            {isBidButton && (
              <td>
                <button type="button" className="btn btn-primary btn-sm" onClick={() => handlePlaceBid(event.vehicleId, event.currentBid)}>
                  Place Bid
                </button>
              </td>
            )}
            {isOpenButton && (
              <td>
                <button className="btn btn-success btn-sm" onClick={() => handleOpenEvent(event)}>OPEN</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="container-fluid d-flex flex-column min-vh-100 px-4 py-3">
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center p-3 bg-white shadow-sm w-100">
        <div className="d-flex align-items-center">
          <img src="/images/CV_AUCTION_HQ_LOGO (1).png" className="img-fluid" alt="logo" style={{ width: "180px" }} />
          <div className="ms-3">
            <p className="fw-bold mb-0 text-primary">Welcome, User1</p>
            <small className="text-muted">
              {serverTime.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata", day: "2-digit", month: "long", year: "numeric" })}
            </small>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <span className="fw-bold me-3">Server Time: <span className="badge bg-light text-dark">{serverTime.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" })}</span></span>
          <span className="text-primary fw-bold me-3" style={{ cursor: "pointer" }} onClick={handleAboutUsClick}><u>About Us</u></span>
          <span className="text-primary fw-bold me-3" style={{ cursor: "pointer" }} onClick={handleProfileClick}><BsPersonCircle size={25} className="me-1" /></span>
          <button className="btn btn-outline-danger btn-sm">Logout</button>
        </div>
      </header>

      {/* Buttons */}
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-secondary me-2" onClick={() => window.location.reload()}>REFRESH</button>
      </div>

      {/* Tabs */}
      <div className="mt-3 d-flex">
        <button className={`btn me-2 ${activeTab === "live" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setActiveTab("live")}>
          LIVE EVENTS ({liveEvents.length})
        </button>
        <button className={`btn me-2 ${activeTab === "upcoming" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setActiveTab("upcoming")}>
          UPCOMING EVENTS
        </button>
        <button className={`btn ${activeTab === "buyLeads" ? "btn-success" : "btn-outline-success"}`} onClick={() => setActiveTab("buyLeads")}>
          BUY LEADS
        </button>
      </div>

      {/* Event Tables */}
      <div className="mt-3">
        {activeTab === "live" && (
          <>
            {renderEventTable(liveEvents, true)}
            <CurrentAuctionPage />
          </>
        )}
        {activeTab === "upcoming" && (
          <>
            {renderEventTable(upcomingEvents, false, true)}
            <HostAuction />
          </>
        )}
        {activeTab === "buyLeads" && (
          <div className="container-fluid px-4 py-3">
            <h5 className="text-primary">Buy Leads</h5>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Vehicle Name</th>
                  <th>Register Number</th>
                  <th>Bid Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {buyLeads.map((lead, index) => (
                  <tr key={index}>
                    <td>{lead.vehicleName}</td>
                    <td>{lead.registerNumber}</td>
                    <td>₹{lead.currentBid || 'No bid yet'}</td>
                    <td>
                      <input
                        type="number"
                        value={bidAmounts[lead.vehicleId] || ''}
                        onChange={(e) => handleBidAmountChange(lead.vehicleId, e.target.value)}
                        className="form-control"
                        min="1"
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handlePlaceBid(lead.vehicleId, lead.currentBid)}
                      >
                        Place Bid
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Bid Modal */}
      {openBidModal && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Place Bid</h5>
                <button type="button" className="btn-close" onClick={() => setOpenBidModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Current Bid: ₹{currentBid}</p>
                <div className="mb-3">
                  <label htmlFor="newBidAmount" className="form-label">Enter New Bid Amount</label>
                  <input
                    type="number"
                    id="newBidAmount"
                    className="form-control"
                    value={newBidAmount}
                    onChange={(e) => setNewBidAmount(e.target.value)}
                    min={currentBid + 2000}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setOpenBidModal(false)}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleBidSubmit}>Place Bid</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAuction;
