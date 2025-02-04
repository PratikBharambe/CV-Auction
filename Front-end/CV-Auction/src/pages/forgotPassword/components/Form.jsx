import React, { useState } from "react";
import OTP from "./OTP";
import SetNewPassword from "./SetNewPassword";
import LoginAndRegisterService from "../../../services/LoginAndRegisterService";

function Form() {
  const [showOTP, setShowOTP] = useState(false);
  const [showSetNewPassword, setShowSetNewPassword] = useState(false);

  const [Uemail, SetUemail] = useState("");

  const [otp, setOtp] = useState("");

  function checkData(event) {
    event.preventDefault();
    const userData = {Uemail}
    console.log("OTP sent to email:", userData);
    LoginAndRegisterService.forgotPassword(userData)
    .then((response) => {
      console.log(response.data);
      setOtp(response.data.otp);
      alert("OTP sent successfully");
      setShowOTP(true);

    }).catch((error) => {
      console.log("Emaail not found");
    });
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
                  <input type="email" className="form-control" id="email" name="email" placeholder="example@gmail.com" required
                  value={Uemail} onChange={(e) => SetUemail(e.target.value)} />
                  <div className="invalid-feedback">Please provide a valid email.</div>
                </div>
                <button type="submit" className="btn btn-primary w-100" onClick={checkData}>Send Verification Code</button>
              </form>
              {showOTP && <OTP OTP={otp} onValidate={handleOTPValidation} />}
            </div>
          </div>
        ) : (
          <SetNewPassword mail={Uemail} />
        )}
      </div>
    </>
  );
}

export default Form;
