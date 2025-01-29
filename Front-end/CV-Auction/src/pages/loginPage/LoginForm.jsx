import React, { useState } from "react";
import logo from "/logo.png";
import LoginAndRegisterService from "../../services/LoginAndRegisterService";

function LoginForm() {
  // State variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For handling errors

  // Form submission handler
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Clear previous error message
    setError("");

    // Call an authentication API or service here (e.g., login service)
    // For demonstration purposes, let's assume the login is successful
    const userData = { 
      Uemail : email, 
      Upwd : password 
    };

    LoginAndRegisterService.loginUser(userData)
    .then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log("Invalid Usernam or password");
    });

    // Simulate an API request (you can replace this with your actual API call)
    console.log("Logging in with data:", userData);

    // If the login is successful, you would typically redirect the user
    // For example:
    // history.push("/dashboard");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4" style={{ width: '400px' }}>
        <div className="text-center mb-4">
          <img src={logo} alt="logo.png" className="mb-3" style={{ maxWidth: '150px' }} />
          <h2 className="fw-bold">Login</h2>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              required
            />
          </div>

          {/* Error message display */}
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="mb-3 text-end">
            <a href="/forgotpassword" className="text-decoration-none text-primary">Forgot Password?</a>
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <div className="mt-3 text-center">
          <span>Don't have an account? </span>
          <a href="/register" className="text-decoration-none text-primary">Register for free</a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
