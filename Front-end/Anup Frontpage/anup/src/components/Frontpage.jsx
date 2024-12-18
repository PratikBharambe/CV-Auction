import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Frontpage.css"; // Import the external CSS file

function Frontpage() {
  // State to control which content to display
  const [activeSection, setActiveSection] = useState("live");

  return (
    <div>
      {/* Header */}
      <header className="bg-light p-3 border">
        <div className="text-center">
          <h1>This is header</h1>
          <p>Heading & symbol of "CV Auction"</p>
        </div>
      </header>

      {/* Main Section */}
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {/* Dropdown Buttons */}
            <div className="d-flex justify-content-start mb-2">
              <button
                className={`btn ${
                  activeSection === "live" ? "btn-secondary" : "btn-outline-secondary"
                } me-2`}
                onClick={() => setActiveSection("live")}
              >
                Live Auction
              </button>
              <button
                className={`btn ${
                  activeSection === "upcoming" ? "btn-secondary" : "btn-outline-secondary"
                }`}
                onClick={() => setActiveSection("upcoming")}
              >
                Upcoming Auction
              </button>
            </div>

            {/* Scroller Container */}
            <div className="border p-3 scroller-container">
              {activeSection === "live" ? (
                <div>
                  <h5>Live Auction Content</h5>
                  <p>Details of live auctions will appear here.</p>
                  <p>Live Auction List 1</p>
                  <p>Live Auction List 2</p>
                  <p>Live Auction List 3</p>
                  <p>Live Auction List 4</p>
                  <p>Live Auction List 5</p>
                </div>
              ) : (
                <div>
                  <h5>Upcoming Auction Content</h5>
                  <p>Details of upcoming auctions will appear here.</p>
                  <p>Upcoming Auction List 1</p>
                  <p>Upcoming Auction List 2</p>
                  <p>Upcoming Auction List 3</p>
                  <p>Upcoming Auction List 4</p>
                  <p>Upcoming Auction List 5</p>
                </div>
              )}
            </div>
          </div>

          {/* Login Section */}
          <div className="col-md-2">
            <button className="btn btn-primary mb-2 w-100">Log In</button>
            <button className="btn btn-success mb-2 w-100">Sign Up</button>
            <button className="btn btn-warning w-100">Continue as Guest</button>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="container mt-4 text-center">
        <h5>Contact Us 📞</h5>
        <p>
          <strong>Helpline Number:</strong> 7020700000
        </p>
        <p>
          <strong>Email:</strong> cvauction@gmail.com
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-light p-3 text-center border-top mt-4">
        <p>
          <strong>
            © 2024 cvauction.com. All rights reserved in favour of CV Auction
            Tech Ltd.
          </strong>
        </p>
      </footer>
    </div>
  );
}

export default Frontpage;