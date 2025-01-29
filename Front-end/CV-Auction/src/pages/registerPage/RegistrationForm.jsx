import React, { useState } from 'react';
import logo from "/logo.png";
import Registerservice from './services/Registerservice';

function RegistrationForm() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [Uname, setUname] = useState('');
  const [Upwd, setUpwd] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [Uemail, setUemail] = useState('');
  const [MobNo, setMobNo] = useState('');
  const [PanCard, setPanCard] = useState('');
  const [Address, setAddress] = useState('');
  const [BankAccNo, setBankAccNo] = useState('');

  function validateUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9]{4,15}$/;
    if (!username) {
      return { isValid: false, message: "Username is required" };
    } else if (!usernameRegex.test(username)) {
      return { isValid: false, message: "Username must be 4-15 characters long and contain only letters and numbers" };
    } else {
      return { isValid: true, message: "" };
    }
  }

  function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!password) {
      return { isValid: false, message: "Password is required" };
    } else if (!passwordRegex.test(password)) {
      return { isValid: false, message: "Password must be at least 8 characters long, and contain at least one uppercase letter, one lowercase letter, and one number" };
    } else {
      return { isValid: true, message: "" };
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Validate Username
    let isValidUsername = validateUsername(Uname);
    if (!isValidUsername.isValid) {
      document.getElementById('username-error-msg').innerText = isValidUsername.message;
    } else {
      document.getElementById('username-error-msg').innerText = '';
    }

    // Validate Password
    let isValidPassword = validatePassword(Upwd);
    if (!isValidPassword.isValid) {
      document.getElementById('pass-error-msg').innerText = isValidPassword.message;
    } else {
      document.getElementById('pass-error-msg').innerText = '';
    }

    // Check if passwords match
    if (Upwd !== confirmPassword) {
      document.getElementById('confirm-pass-error-msg').innerText = "Passwords do not match";
    } else {
      document.getElementById('confirm-pass-error-msg').innerText = '';
    }

    // If all validations pass, set the form to submitted and show address/bank account fields
    if (isValidUsername.isValid && isValidPassword.isValid && Upwd === confirmPassword) {
      setIsFormSubmitted(true);
    }
  }

  function handleFinalSubmit() {
    const userData = {
      Ufullname: firstName + " " + lastName,
      Uemail,
      MobNo,
      PanCard,
      Uname,
      Upwd,
      Address,
      BankAccNo,
      UserRole: "Customer",
      AccessStatus: "Inactive",
    };

    Registerservice.registerUser(userData)
      .then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });

    // Optionally, reset the form or show success message
    // document.getElementById('registration-form').reset();
  }

  return (
    <div className="container-fluid bg-transparent p-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg p-4 border-primary rounded-3">
            <div className="card-body">
              <div className="text-center mb-4">
                <img src={logo} alt="logo.png" className="img-fluid w-25 mb-2" />
                <h1 className="fw-bold">Create your account</h1>
              </div>
              <form id="registration-form" onSubmit={handleFormSubmit}>
                {!isFormSubmitted && (
                  <>
                    <div className="row">
                      <div className="col-12 col-md-6 mb-3">
                        <div className="form-group">
                          <label htmlFor="firstname" className="form-label">First name</label>
                          <input type="text" className="form-control" id="firstname" placeholder="Enter first name" required 
                            value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 mb-3">
                        <div className="form-group">
                          <label htmlFor="lastname" className="form-label">Last name</label>
                          <input type="text" className="form-control" id="lastname" placeholder="Enter last name" required 
                            value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 col-md-6 mb-3">
                        <div className="form-group">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input type="email" className="form-control" id="email" placeholder="example@gmail.com" required 
                            value={Uemail} onChange={(e) => setUemail(e.target.value)} />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 mb-3">
                        <div className="form-group">
                          <label htmlFor="mobile" className="form-label">Mobile Number</label>
                          <input type="number" className="form-control" id="mobile" placeholder="xxxxxxxxxx" required 
                            value={MobNo} onChange={(e) => setMobNo(e.target.value)} />
                        </div>
                      </div>
                    </div>

                    <hr className="border-primary" />

                    <div className="row">
                      <div className="col-12 mb-3">
                        <div className="form-group">
                          <label htmlFor="pancard" className="form-label">Enter PAN Card no.</label>
                          <input type="text" className="form-control" id="pancard" placeholder="ABCTY1234D" required 
                            value={PanCard} onChange={(e) => setPanCard(e.target.value)} />
                        </div>
                      </div>
                    </div>

                    <hr className="border-primary" />

                    <div className="row">
                      <div className="col-12 col-md-6 mb-3">
                        <div className="form-group">
                          <label htmlFor="username" className="form-label">Enter Username</label>
                          <input type="text" className="form-control" id="username" placeholder="Enter username" required 
                            value={Uname} onChange={(e) => setUname(e.target.value)} />
                          <small className="text-danger" id="username-error-msg"></small>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 mb-3">
                        <div className="form-group">
                          <label htmlFor="password" className="form-label">Enter Password</label>
                          <input type="password" className="form-control" id="password" placeholder="Enter password" required 
                            value={Upwd} onChange={(e) => setUpwd(e.target.value)} />
                          <small className="text-danger" id="pass-error-msg"></small>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 mb-3">
                        <div className="form-group">
                          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                          <input type="password" className="form-control" id="confirmPassword" placeholder="Re-enter password" required 
                            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                          <small className="text-danger" id="confirm-pass-error-msg"></small>
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mt-3">Create Account</button>
                  </>
                )}

                {/* Show Address and Bank Account Number Fields After Form Submitted */}
                {isFormSubmitted && (
                  <>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <div className="form-group">
                          <label htmlFor="address" className="form-label">Address</label>
                          <input type="text" className="form-control" id="address" placeholder="Enter your address" 
                            value={Address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 mb-3">
                        <div className="form-group">
                          <label htmlFor="bankAccNo" className="form-label">Bank Account Number</label>
                          <input type="text" className="form-control" id="bankAccNo" placeholder="Enter bank account number" 
                            value={BankAccNo} onChange={(e) => setBankAccNo(e.target.value)} />
                        </div>
                      </div>
                    </div>

                    <button type="button" className="btn btn-success w-100 mt-3" onClick={handleFinalSubmit}>Register</button>
                  </>
                )}
              </form>
              <div className='mx-2 mt-3'>
                Already a user?&nbsp;
                <a href="/login" className="text-decoration-none text-primary">Login Here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
