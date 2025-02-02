import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; // Import axios for API calls

const Approvals = () => {
  // State to store approval data
  const [approvals, setApprovals] = useState([]);

  // Fetch data from the backend on component mount
  useEffect(() => {
    axios.get('http://localhost:30699/api/approvals')  // Update the URL to your actual endpoint
      .then((response) => {
        setApprovals(response.data); // Assuming response.data contains the approvals data
      })
      .catch((error) => {
        console.error("Error fetching approval data:", error);
      });
  }, []);

  // Function to handle the "Approved" button click
  const handleApproved = (e, vehicleId) => {
    const row = e.target.closest('tr'); // Get the row of the clicked button
    row.classList.add('table-success'); // Add a green background to indicate "approved"
    e.target.disabled = true; // Disable the "Approved" button after it's clicked

    // Here you can make an API call to update the approval status in the backend
    axios.put(`http://localhost:30699/api/approvals/${vehicleId}/approve`)
      .then(() => {
        console.log(`Vehicle ${vehicleId} approved`);
      })
      .catch((error) => {
        console.error(`Error approving vehicle ${vehicleId}:`, error);
      });
  };

  // Function to handle the "Deny" button click
  const handleDeny = (e, vehicleId) => {
    const row = e.target.closest('tr'); // Get the row of the clicked button
    row.remove(); // Remove the row from the table

    // Here you can make an API call to update the denial status in the backend
    axios.put(`http://localhost:30699/api/approvals/${vehicleId}/deny`)
      .then(() => {
        console.log(`Vehicle ${vehicleId} denied`);
      })
      .catch((error) => {
        console.error(`Error denying vehicle ${vehicleId}:`, error);
      });
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Approvals</h3>

      {/* Table Section */}
      <table className="table table-bordered text-center table-hover">
        <thead className="table-primary">
          <tr>
            <th>Vehicle_ID</th>
            <th>Event_ID</th>
            <th>Auction_ID</th>
            <th>Vehicle_Name</th>
            <th>Bid_Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop through the approvals data and render rows dynamically */}
          {approvals.length > 0 ? (
            approvals.map((approval) => (
              <tr key={approval.vehicleId}>
                <td>{approval.vehicleId}</td>
                <td>{approval.eventId}</td>
                <td>{approval.auctionId}</td>
                <td>{approval.vehicleName}</td>
                <td>{approval.bidAmount}</td>
                <td>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={(e) => handleApproved(e, approval.vehicleId)}
                  >
                    Approved
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={(e) => handleDeny(e, approval.vehicleId)}
                  >
                    Deny
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No approvals available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Approvals;
