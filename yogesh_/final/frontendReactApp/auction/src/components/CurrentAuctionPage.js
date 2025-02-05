import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CurrentAuctionPage = () => {
  const api = 'https://localhost:44358/api';
  const navigate = useNavigate();

  const [currentAuctions, setCurrentAuctions] = useState([]);
  const [auctionStatus, setAuctionStatus] = useState([]);
  const [userBidLeft, setUserBidLeft] = useState(0);
  const [userId, setUserId] = useState(4);

  const fetchAuctionData = async () => {
    try {
      const auctionResponse = await fetch(`${api}/currentauction`);
      const auctionData = await auctionResponse.json();
      setCurrentAuctions(auctionData);

      const statusResponse = await fetch(`${api}/auction-status`);
      const statusData = await statusResponse.json();
      setAuctionStatus(statusData);

      const userBidResponse = await fetch(`${api}/userbidleft/${userId}`);
      const userBidData = await userBidResponse.json();
      setUserBidLeft(userBidData.bidsLeft || 0);
    } catch (error) {
      console.error('Error fetching auction data:', error);
    }
  };

  const handlePlaceBid = (auction) => {
    if (userBidLeft > 0) {
      alert(`Bid placed for vehicle ${auction.vehicleId}`);
      // Logic for placing a bid can go here
    } else {
      alert('No bids left in your account!');
    }
  };

  useEffect(() => {
    fetchAuctionData();
  }, [userId]);

  return (
    <div className="container-fluid">
      <header className="d-flex justify-content-between align-items-center p-3 bg-light">
        <h4>Current Auctions</h4>
        <div>
          <button className="btn btn-primary btn-sm" onClick={() => navigate('/host-auction')}>Upcoming Auctions</button>
        </div>
      </header>

      <section>
        <h5>Your Remaining Bids: {userBidLeft}</h5>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Vehicle ID</th>
              <th>Auction ID</th>
              <th>Base Price</th>
              <th>Highest Bid</th>
              <th>Auction Start</th>
              <th>Auction End</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentAuctions.map((auction) => {
              const status = auctionStatus.find(status => status.auctionid === auction.auctionid);
              const isHighestBidder = status?.highestBidder === userId;

              return (
                <tr key={auction.auctionid}>
                  <td>{auction.vehicleid}</td>
                  <td>{auction.auctionid}</td>
                  <td>{auction.basePrice}</td>
                  <td>{auction.highestBid}</td>
                  <td>{auction.auctionStart}</td>
                  <td>{auction.auctionEnd}</td>
                  <td>
                    {isHighestBidder ? (
                      <span className="badge bg-success">Winning</span>
                    ) : (
                      <button 
                        className="btn btn-primary"
                        onClick={() => handlePlaceBid(auction)}
                      >
                        Place Bid
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CurrentAuctionPage;
