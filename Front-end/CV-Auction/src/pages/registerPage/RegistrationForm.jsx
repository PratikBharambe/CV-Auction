import React from 'react';
import logo from "/logo.png";

function RegistrationForm() {
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

  function validateData(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let isValidUsername = validateUsername(username);
    if (!isValidUsername.isValid) {
      document.getElementById('username-error-msg').innerText = isValidUsername.message;
    } else {
      document.getElementById('username-error-msg').innerText = '';
    }

    let isValidPassword = validatePassword(password);
    if (!isValidPassword.isValid) {
      document.getElementById('pass-error-msg').innerText = isValidPassword.message;
    } else {
      document.getElementById('pass-error-msg').innerText = '';
    }

    if (password !== confirmPassword) {
      document.getElementById('confirm-pass-error-msg').innerText = "Passwords do not match";
    } else {
      document.getElementById('confirm-pass-error-msg').innerText = '';
    }
  }

  return (
    <div className="container bg-transparent p-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg p-4 border-primary rounded-3">
            <div className="card-body">
              <div className="text-center mb-4">
                <img src={logo} alt="logo.png" className="img-fluid w-25 mb-2" />
                <h1 className="fw-bold">Create your account</h1>
              </div>
              <form onSubmit={validateData}>
                <div className="row">
                  <div className="col-12 col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="firstname" className="form-label">First name</label>
                      <input type="text" className="form-control" id="firstname" placeholder="Enter first name" required />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="lastname" className="form-label">Last name</label>
                      <input type="text" className="form-control" id="lastname" placeholder="Enter last name" required />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="example@gmail.com" required />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="mobile" className="form-label">Mobile Number</label>
                      <input type="number" className="form-control" id="mobile" placeholder="xxxxxxxxxx" required />
                    </div>
                  </div>
                </div>

                <hr className="border-primary" />

                <div className="row">
                  <div className="col-12 mb-3">
                    <div className="form-group">
                      <label htmlFor="pancard" className="form-label">Enter PAN Card no.</label>
                      <input type="text" className="form-control" id="pancard" placeholder="ABCTY1234D" required />
                    </div>
                  </div>
                </div>

                <hr className="border-primary" />

                <div className="row">
                  <div className="col-12 col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="username" className="form-label">Enter Username</label>
                      <input type="text" className="form-control" id="username" placeholder="Enter username" required />
                      <small className="text-danger" id="username-error-msg"></small>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <div className="form-group">
                      <label htmlFor="password" className="form-label">Enter Password</label>
                      <input type="password" className="form-control" id="password" placeholder="Enter password" required />
                      <small className="text-danger" id="pass-error-msg"></small>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 mb-3">
                    <div className="form-group">
                      <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                      <input type="password" className="form-control" id="confirmPassword" placeholder="Re-enter password" required />
                      <small className="text-danger" id="confirm-pass-error-msg"></small>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-3">Create Account</button>
              </form>
              <div className='mx-2 mt-3'>
                Already a user?&nbsp;
                <a href="/" className="text-decoration-none text-primary">Login Here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;