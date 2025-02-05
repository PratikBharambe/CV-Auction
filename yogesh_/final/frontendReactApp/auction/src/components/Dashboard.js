import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Dashboard() {
  const [serverTime, setServerTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [showModal, setShowModal] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false); 
  const [userInfo, setUserInfo] = useState({
    name: "Admin1",
    email: "admin1@cvauction.com",
    role: "Administrator",
    lastLogin: new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" }),
  });
  const [metrics, setMetrics] = useState([]);
  const navigate = useNavigate();

  const handleAuctionsClick = () => {
    setActiveTab("Auctions");
    navigate("/auction");
  };

  const handleAboutusClick = () => {
    navigate('/about-us');
  };

  const handleProfileClick = () => {
    setShowProfilePopup(!showProfilePopup); 
  };

  const handleContactUsClick = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handlePaymentDetailsClick = () => alert("Viewing Bank Details");
  const handleCustomerFeedbackClick = () => navigate('/customer-rating');

  useEffect(() => {
    const interval = setInterval(() => {
      setServerTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    axios.get('https://localhost:44358/api/metrics')
      .then(response => {
        setMetrics(response.data);
      })
      .catch(error => {
        console.error("Error fetching metrics data:", error);
      });
  }, []);

  return (
    <div className="container-fluid d-flex flex-column min-vh-100 px-4 py-3">
      <header className="d-flex justify-content-between align-items-center p-3 bg-white shadow-sm w-100">
        <div className="d-flex align-items-center">
          <img
            src="/images/CV_AUCTION_HQ_LOGO (1).png"
            className="img-fluid"
            alt="logo"
            style={{ width: "180px" }}
          />
          <div className="ms-3">
            <p className="fw-bold mb-0 text-primary">Welcome, User1</p>
            <small className="text-muted">
              {serverTime.toLocaleDateString("en-IN", {
                timeZone: "Asia/Kolkata",
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </small>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <span className="fw-bold me-3">
            Server Time:{" "}
            <span className="badge bg-light text-dark">
              {serverTime.toLocaleTimeString("en-IN", {
                timeZone: "Asia/Kolkata",
              })}
            </span>
          </span>
          <span
            className="text-primary fw-bold me-3"
            style={{ cursor: "pointer" }}
            onClick={handleAboutusClick}
          >
            <u>About Us</u>
          </span>
          <span
            className="text-primary fw-bold me-3"
            style={{ cursor: "pointer" }}
            onClick={handleProfileClick}
          >
            <BsPersonCircle size={25} className="me-1" />
          </span>
          <button className="btn btn-outline-danger btn-sm">Logout</button>
        </div>
      </header>
      <br />

      {showProfilePopup && (
        <div
          className="position-absolute bg-white shadow-lg p-4 w-25"
          style={{
            top: "60px", 
            right: "10px", 
            zIndex: 9999,
            transition: "transform 0.3s ease-in-out",
            borderRadius: "10px",
          }}
        >
          <button
            className="btn-close position-absolute top-0 end-0"
            onClick={() => setShowProfilePopup(false)}
          ></button>
          <h4 className="text-center">User Profile</h4>
          <div className="mt-4">
            <p><strong>Name:</strong> {userInfo.name}</p>
            <p><strong>Email:</strong> {userInfo.email}</p>
            <p><strong>Role:</strong> {userInfo.role}</p>
            <p><strong>Status:</strong> Active</p>
            <p><strong>Last Login:</strong> {userInfo.lastLogin}</p>
          </div>
        </div>
      )}

      <nav className="py-2">
        <div className="container d-flex flex-wrap">
          {["Dashboard", "My Wins", "Auctions", "Payments"].map((item, index) => (
            <button
              key={index}
              className={`btn ${
                activeTab === item ? "btn-danger" : "btn-outline-secondary"
              } me-2 mb-2`}
              onClick={() =>
                item === "Auctions"
                  ? handleAuctionsClick()
                  : setActiveTab(item)
              }
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {activeTab === "Dashboard" && (
        <div className="container-fluid d-flex flex-column min-vh-100 px-4 py-3">
          <div className="row">

            {/* Metrics Section */}
            <div className="col-md-8">
              <div className="row g-4">
                {metrics.map((metric, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="card shadow-sm text-center p-4 border-0">
                      <p className="text-secondary fw-semibold mb-1">{metric.label}</p>
                      <h5 className={`fw-bold ${metric.color}`}>{metric.value}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm p-4 border-0 mb-4">
                <h6 className="fw-bold text-primary">Quick Links</h6>
                <ul className="list-unstyled">
                  {[
                    "Contact Us",
                    "Customer Feedback",
                  ].map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-decoration-none text-primary fw-semibold d-block py-1"
                        onClick={
                          link === "Contact Us"
                            ? handleContactUsClick
                            : handleCustomerFeedbackClick
                        }
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "My Wins" && (
        <div className="container-fluid px-4 py-3">
          <h5 className="text-primary">My Wins</h5>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Vehicle ID</th>
                <th>Vehicle Name</th>
                <th>Register Number</th>
                <th>Bid Amount</th>
                <th>Payment Details</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "Payments" && (
        <div className="text-center fw-bold text-primary fs-4">
          This is Payments
        </div>
      )}

      <footer className="bg-dark text-white text-center py-3 mt-auto w-100">
        <p className="mb-0">© 2025 cvauction.tech All rights reserved in favour of CV Auction Tech Ltd.</p>
      </footer>
    </div>
  );
}
export default Dashboard;