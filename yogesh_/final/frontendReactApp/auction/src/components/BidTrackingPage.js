import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BidTrackingPage = () => {
  const api = 'https://localhost:44358/api';
  const [userBids, setUserBids] = useState([]);
  const [userBidLeft, setUserBidLeft] = useState(0);
  const [userId] = useState(4); // Assume userId is 4

  const fetchBidData = async () => {
    try {
      const bidsResponse = await fetch(`${api}/user-bids/${userId}`);
      const bidsData = await bidsResponse.json();
      setUserBids(bidsData);

      const userBidResponse = await fetch(`${api}/user-bid-left/${userId}`);
      const userBidData = await userBidResponse.json();
      setUserBidLeft(userBidData.bidsLeft || 0);
    } catch (error) {
      console.error('Error fetching bid data:', error);
    }
  };

  useEffect(() => {
    fetchBidData();
  }, [userId]);

  return (
    <div className="container-fluid">
      <header className="d-flex justify-content-between align-items-center p-3 bg-light">
        <h4>Your Bid Tracking</h4>
      </header>

      <section>
        <h5>Your Remaining Bids: {userBidLeft}</h5>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Auction ID</th>
              <th>Vehicle ID</th>
              <th>Bid Amount</th>
              <th>Bid Status</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {userBids.map((bid, index) => (
              <tr key={index}>
                <td>{bid.auctionId}</td>
                <td>{bid.vehicleId}</td>
                <td>{bid.bidAmount}</td>
                <td>{bid.isWinning ? 'Winning' : 'Not Winning'}</td>
                <td>{new Date(bid.time).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default BidTrackingPage;
