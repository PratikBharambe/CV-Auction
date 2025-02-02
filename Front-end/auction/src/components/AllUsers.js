import React, { useState, useEffect } from "react";
import AdminService from "../services/AdminService"; // Import the service
import 'bootstrap/dist/css/bootstrap.min.css'; 

const AllUsers = () => {
  const [users, setUsers] = useState([]); // State to hold users
  const [loading, setLoading] = useState(true); // State to track loading state

  // Fetch users from API using AdminService
  useEffect(() => {
    AdminService.getAllUsers()
      .then(response => {
        setUsers(response.data); // Set users from response data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error("Error fetching users:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []); // Empty array to run only once when the component is mounted

  // Function to handle the "Delete" button click using AdminService
  const handleDelete = (userId) => {
    AdminService.deleteUser(userId) // Call the delete method from AdminService
      .then(response => {
        // If delete is successful, filter out the deleted user
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div className="container mt-5">
      {/* Heading Section */}
      <h3 className="text-center mb-4">All Users</h3>

      {/* Table Section */}
      <table className="table table-bordered text-center table-hover">
        <thead className="table-primary">
          <tr>
            <th>Sr.No</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr><td colSpan="6">Loading...</td></tr>
          ) : (
            users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user.id)} // Pass user id for deletion
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
