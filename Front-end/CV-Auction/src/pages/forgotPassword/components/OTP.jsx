import React, {useState} from "react";

function OTP(props) {

  const [userOtp, setUserOtp] = useState("");

  function validateOtp(event) {
    event.preventDefault();
    console.log("Validating OTP:", Number.parseInt(userOtp));
    if (Number.parseInt(userOtp) !== props.OTP) {
      alert("Invalid OTP. Please try again.");
      return;
    }
    props.onValidate();
  }

  return (
    <div>
      <form action="#" method="post">
        <div className="mb-3 m-3">
          <label htmlFor="otp" className="form-label">Enter OTP</label>
          <input type="number" className="form-control" id="otp" name="otp" placeholder="XXXXXX" required
          value={userOtp} onChange={(e) => setUserOtp(e.target.value)} />
          <div className="invalid-feedback"></div>
        </div>
        <button type="submit" className="btn btn-primary w-100" onClick={validateOtp}>Validate</button>
      </form>
    </div>
  );
}

export default OTP;
