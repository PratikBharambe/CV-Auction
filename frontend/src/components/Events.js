import React, { useState } from 'react';
import Auction from './Auction';  // Import Auction component
import HostAuction from '../userComponents/UpcomingAuctionUsers';  // Import HostAuction component

const Event = () => {
  const [showAuction, setShowAuction] = useState(false);
  const [showHostAuction, setShowHostAuction] = useState(false);

  const handleShowAuction = () => {
    setShowAuction(true);
    setShowHostAuction(false); // Hide Host Auction table
  };

  const handleShowHostAuction = () => {
    setShowAuction(false); // Hide Auction table
    setShowHostAuction(true);
  };

  return (
    <div className="container mt-5">
      <div className="mb-4 text-center">
        <button className="btn btn-primary btn-lg mx-2" onClick={handleShowAuction}>
          Live Events
        </button>
        <button className="btn btn-secondary btn-lg mx-2" onClick={handleShowHostAuction}>
          Upcoming Events
        </button>
      </div>

      {/* Show Auction Table */}
      {showAuction && (
        <div>
          <h3 className="text-center mb-4">Auction Events</h3>
          <Auction /> {/* Render Auction component */}
        </div>
      )}

      {/* Show Host Auction Table */}
      {showHostAuction && (
        <div>
          <h3 className="text-center mb-4">Host Auction Events</h3>
          <HostAuction /> {/* Render HostAuction component */}
        </div>
      )}
    </div>
  );
};

export default Event;
