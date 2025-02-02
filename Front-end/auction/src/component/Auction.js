import React from 'react';
import './Auction.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Auction = () => {
  // Function to handle the "Start" button click
  const handleStart = (e) => {
    const row = e.target.closest('tr'); // Get the row of the clicked button
    row.classList.add('table-success'); // Add a green background to indicate "started"
    e.target.disabled = true; // Disable the "Start" button after it's clicked
  };

  // Function to handle the "Delete" button click
  const handleDelete = (e) => {
    const row = e.target.closest('tr'); // Get the row of the clicked button
    row.remove(); // Remove the row from the table
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Auction Events</h1>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Event_ID</th>
            <th>Vehicle_ID</th>
            <th>Auction_ID</th>
            <th>Base_Price</th>
            <th>Auction_Start</th>
            <th>Auction_End</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Table Row 1 */}
          <tr>
            <td>1</td>
            <td>V1234</td>
            <td>A123</td>
            <td>$10,000</td>
            <td><input type="date" className="form-control" value="2025-01-30" /></td>
            <td><input type="date" className="form-control" value="2025-02-10" /></td>
            <td>
              <button className="btn btn-success btn-sm" onClick={handleStart}>Start</button>
              <button className="btn btn-danger btn-sm" onClick={handleDelete}>Delete</button>
            </td>
          </tr>

          {/* Table Row 2 */}
          <tr>
            <td>2</td>
            <td>V5678</td>
            <td>A456</td>
            <td>$12,000</td>
            <td><input type="date" className="form-control" value="2025-02-01" /></td>
            <td><input type="date" className="form-control" value="2025-02-12" /></td>
            <td>
              <button className="btn btn-success btn-sm" onClick={handleStart}>Start</button>
              <button className="btn btn-danger btn-sm" onClick={handleDelete}>Delete</button>
            </td>
          </tr>
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

export default Auction;
