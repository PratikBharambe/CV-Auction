import React, { useState } from "react";

function SetNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
    } else {
      setErrorMessage("");
      alert("Password changed successfully!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 shadow-lg p-3 mb-5 bg-body rounded">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">
                Enter New Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Enter password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <small className="text-danger" id="pass-error-msg"></small>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm New Password
              </label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Re-Enter password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <small className="text-danger" id="confirm-pass-error-msg">
                {errorMessage}
              </small>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Set New Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SetNewPassword;
