import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Auction = () => {
  const [serverTime, setServerTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState("live");
  const [liveEvents, setLiveEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [buyLeads, setBuyLeads] = useState([]); // Added state for buyLeads
  const navigate = useNavigate();

  // Function to fetch data from the server (replace URL with your real API endpoint)
  const fetchEventData = async () => {
    try {
      const response = await fetch('/api/events'); // Replace with your actual API endpoint
      const data = await response.json();

      // Assuming your API response contains liveEvents, upcomingEvents, and buyLeads
      setLiveEvents(data.liveEvents || []);
      setUpcomingEvents(data.upcomingEvents || []);
      setBuyLeads(data.buyLeads || []); // Ensure buyLeads is fetched correctly
    } catch (error) {
      console.error("Error fetching events data:", error);
    }
  };

  useEffect(() => {
    fetchEventData(); // Fetch data on component mount
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
                <button type="button" className="btn btn-primary btn-sm" onClick={() => handleBidNow(event)}>BID NOW</button>
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
        {activeTab === "live" && renderEventTable(liveEvents, true)}
        {activeTab === "upcoming" && renderEventTable(upcomingEvents, false, true)}
        {activeTab === "buyLeads" && (
          <div className="container-fluid px-4 py-3">
            <h5 className="text-primary">Buy Leads</h5>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Event ID</th>
                  <th>Vehicle ID</th>
                  <th>Vehicle Name</th>
                  <th>Register Number</th>
                  <th>Bid Amount</th>
                </tr>
              </thead>
              <tbody>
                {buyLeads.map((lead, index) => (
                  <tr key={index}>
                    <td>{lead.eventId}</td>
                    <td>{lead.vehicleId}</td>
                    <td>{lead.vehicleName}</td>
                    <td>{lead.registerNumber}</td>
                    <td>{lead.bidAmount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "wins" && (
          <div className="text-center mt-5">
            <h4>No Wins Yet!</h4>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto w-100">
        <p className="mb-0">© 2025 cvauction.tech All rights reserved in favour of CV Auction Tech Ltd.</p>
      </footer>
    </div>
  );
};

export default Auction;
