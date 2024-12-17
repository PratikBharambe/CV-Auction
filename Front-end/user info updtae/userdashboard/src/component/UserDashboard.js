import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const UserDashboard = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("User information updated successfully!\n" + JSON.stringify(userInfo, null, 2));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">User Dashboard</h1>
      <form onSubmit={handleSubmit} className="row g-3">
        {/* Name Input */}
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            className="form-control"
            id="name"
            required
          />
        </div>

        {/* Email Input */}
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            className="form-control"
            id="email"
            required
          />
        </div>

        {/* Phone Input */}
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">Phone:</label>
          <input
            type="text"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
            className="form-control"
            id="phone"
            required
          />
        </div>

        {/* Address Input */}
        <div className="col-md-6">
          <label htmlFor="address" className="form-label">Address:</label>
          <input
            type="text"
            name="address"
            value={userInfo.address}
            onChange={handleChange}
            className="form-control"
            id="address"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100">Update Information</button>
        </div>
      </form>
    </div>
  );
};

export default UserDashboard;
