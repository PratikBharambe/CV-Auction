import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminService from '../services/AdminService'; // Import AdminService
import 'bootstrap/dist/css/bootstrap.min.css';

const Auction = () => {
  const [auctions, setAuctions] = useState([]); // To store fetched auction data
  const [loading, setLoading] = useState(true); // To show loading indicator

  // Function to fetch auction data from the backend using AdminService
  const fetchAuctions = async () => {
    try {
      const response = await AdminService.getAllAuctions(); // Fetch auctions using AdminService
      setAuctions(response.data); // Set fetched data to state
      setLoading(false); // Stop loading
    } catch (error) {
      console.error('Error fetching auction data:', error);
      setLoading(false); // Stop loading in case of error
    }
  };

  useEffect(() => {
    fetchAuctions(); // Fetch data on component mount
  }, []);

  // Function to handle "Start" button click (mark the auction as started)
  const handleStart = async (e, auctionId) => {
    const row = e.target.closest('tr'); // Get the row of the clicked button
    row.classList.add('table-success'); // Add a green background to indicate "started"
    e.target.disabled = true; // Disable the "Start" button after it's clicked

    try {
      await AdminService.startAuction(auctionId); // Call the API to start the auction
    } catch (error) {
      console.error('Error starting auction:', error);
    }
  };

  // Function to handle "Delete" button click
  const handleDelete = async (e, auctionId) => {
    const row = e.target.closest('tr'); // Get the row of the clicked button
    row.remove(); // Remove the row from the table

    try {
      await AdminService.deleteAuction(auctionId); // Delete the auction from the database
    } catch (error) {
      console.error('Error deleting auction:', error);
    }
  };

  // Show loading spinner while fetching data
  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Bids</h3>

      {/* Table Section */}
      <table className="table table-bordered text-center table-hover">
        <thead className="table-primary">
          <tr>
            <th>Vehicle_ID</th>
            <th>Event_ID</th>
            <th>Auction_ID</th>
            <th>Base_Price</th>
            <th>Highest_Bid</th>
            <th>Auction_Start</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {auctions.map((auction) => (
            <tr key={auction.auctionId}>
              <td>{auction.vehicleId}</td>
              <td>{auction.eventId}</td>
              <td>{auction.auctionId}</td>
              <td>${auction.basePrice}</td>
              <td>${auction.highestBid}</td>
              <td>{new Date(auction.auctionStart).toLocaleString()}</td>
              <td>
                <button
                  className="btn btn-success btn-sm"
                  onClick={(e) => handleStart(e, auction.auctionId)}
                  disabled={auction.status === 'Started'} // Disable if already started
                >
                  Start
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={(e) => handleDelete(e, auction.auctionId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Auction;
