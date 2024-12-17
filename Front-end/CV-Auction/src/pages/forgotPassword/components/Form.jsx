import React, { useState } from "react";
import OTP from "./OTP";
import SetNewPassword from "./SetNewPassword";

function Form() {
  const [showOTP, setShowOTP] = useState(false);
  const [showSetNewPassword, setShowSetNewPassword] = useState(false);

  function checkData(event) {
    event.preventDefault();
    alert("OTP sent successfully");
    setShowOTP(true);
  }

  function handleOTPValidation() {
    alert("OTP Validation started");
    setShowSetNewPassword(true);
    setShowOTP(false);
  }

  return (
    <>
      <div className="container mt-5">
        {!showSetNewPassword ? (
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 shadow-lg p-3 mb-5 bg-body rounded">
              <form className="needs-validation" noValidate>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="example@gmail.com" required />
                  <div className="invalid-feedback">Please provide a valid email.</div>
                </div>
                <button type="submit" className="btn btn-primary w-100" onClick={checkData}>Send Verification Code</button>
              </form>
              {showOTP && <OTP onValidate={handleOTPValidation} />}
            </div>
          </div>
        ) : (
          <SetNewPassword />
        )}
      </div>
    </>
  );
}

export default Form;
