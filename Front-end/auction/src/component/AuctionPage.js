import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap included
import './AuctionPage.css'; // Optional custom styles
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const AuctionPage = () => {
  // Function to handle the "Sold" button click
  const handleSold = (e) => {
    const row = e.target.closest('tr'); // Get the row of the clicked button
    row.classList.add('table-success'); // Add a green background to indicate "sold"
    e.target.disabled = true; // Disable the "Sold" button after it's clicked
  };

  // Function to handle the "Delete" button click
  const handleDelete = (e) => {
    const row = e.target.closest('tr'); // Get the row of the clicked button
    row.remove(); // Remove the row from the table
  };

  return (
    <div className="container mt-5">
      {/* Heading Section */}
      <h1 className="text-center">Auction Page</h1>
      <h3 className="text-center mb-4">Bids</h3>

      {/* Table Section */}
      <table className="table table-bordered">
        <thead>
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
          {/* Table Row 1 */}
          <tr>
            <td>V1234</td>
            <td>E001</td>
            <td>A123</td>
            <td>$10,000</td>
            <td>$12,500</td>
            <td>2025-01-30 10:00 AM</td>
            <td>
              <button className="btn btn-success btn-sm" onClick={handleSold}>Sold</button>
              <button className="btn btn-danger btn-sm" onClick={handleDelete}>Delete</button>
            </td>
          </tr>

          {/* Table Row 2 */}
          <tr>
            <td>V5678</td>
            <td>E002</td>
            <td>A456</td>
            <td>$15,000</td>
            <td>$18,000</td>
            <td>2025-02-01 11:00 AM</td>
            <td>
              <button className="btn btn-success btn-sm" onClick={handleSold}>Sold</button>
              <button className="btn btn-danger btn-sm" onClick={handleDelete}>Delete</button>
            </td>
          </tr>

          {/* Add more rows as necessary */}
        </tbody>
      </table>
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary btn-lg">
          Go to Admin Dashboard
        </Link>
      </div>
   
    </div>

    
  );
};

export default AuctionPage;
