import React from "react";
import logo from "/logo.png";

function LoginForm() {
  return (
    <div className="container d-flex justify-content-start align-items-center min-vh-100">
      <div className="card shadow-lg p-4" style={{ width: '400px' }}>
        <div className="text-center mb-4">
          <img src={logo} alt="logo.png" className="mb-3" style={{ maxWidth: '150px' }} />
          <h2 className="fw-bold">Login</h2>
        </div>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" required />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" required />
          </div>
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
