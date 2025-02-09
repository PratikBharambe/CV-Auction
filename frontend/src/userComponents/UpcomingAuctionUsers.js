import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import AdminService from '../services/AdminService';
import axios from 'axios';

const UpcomingAuctionUsers = () => {

  const URL = 'https://localhost:44358/api';

  const [auctionEvents, setAuctionEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AdminService.getAllAuctions()
      .then((response) => {
        console.log(response.data);
        setAuctionEvents(response.data); // Store auction events in state
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error('Error fetching auction events:', error);
        setLoading(false);
      });
  }, []);

  const handleStart = (auctionId) => {
    AdminService.startAuction(auctionId) // Start auction event
      .then(() => {
        setAuctionEvents((prevEvents) =>
          prevEvents.map((event) =>
            event.auctionid === auctionId ? { ...event, status: 'Started' } : event
          )
        );
      })
      .catch((error) => {
        console.error('Error starting auction:', error);
      });
  };

  const handleDelete = (auctionId) => {
    AdminService.deleteAuction(auctionId) 
      .then(() => {
        const response = axios.delete(`${URL}/HostAuction/${auctionId}`)
        setAuctionEvents((prevEvents) => prevEvents.filter((event) => event.auctionid !== auctionId));
      })
      .catch((error) => {
        console.error('Error deleting auction event:', error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
       <header className="d-flex justify-content-between align-items-center p-3 bg-light">
        <h4>Upcoming Auctions</h4>
      </header>
      <table className="table table-bordered text-center table-hover">
        <thead className="table-primary">
          <tr>
            <th>Auction ID</th>
            <th>Vehicle ID</th>
            <th>Base Price</th>
            <th>Auction Start</th>
            <th>Auction End</th>
          </tr>
        </thead>
        <tbody>
          {auctionEvents.map((event) => (
            <tr key={event.auctionid}>
              <td>{event.auctionid}</td>
              <td>{event.vehicleid}</td>
              <td>{event.basePrice}</td>
              <td>{event.auctionStart}</td>
              <td>{event.auctionEnd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingAuctionUsers;
