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
          return { isValid: false, message: "Password must be at least 6 characters long, and contain at least one uppercase letter, one lowercase letter, and one number" };
        } else {
          return { isValid: true, message: "" };
        }
    }

    function validateData() {
        console.log("Hello World");
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let isValidUsername = validateUsername(username);
        let isValidPassword;
        if(password === confirmPassword){
          isValidPassword = validatePassword(password);
        } else {
          console.log("Not matches");
        }
    }

  return (
    <div className="container m-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg p-4 border-primary rounded-3">
            <div className="card-body">
              <div className="text-center mb-4">
                <img src={logo} alt="logo.png" className="img-fluid w-25 mb-2" />
                <h1 className="fw-bold">Create your account</h1>
              </div>
              <form action="" method="post">
                <table className='table'>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-group mb-3">
                          <label htmlFor="firstname" className="form-label">First name</label>
                          <input type="text" className="form-control" name="firstname" id="firstname" placeholder="Enter first name" required />
                        </div>
                      </td>
                      <td>
                        <div className="form-group mb-3">
                          <label htmlFor="lastname" className="form-label">Last name</label>
                          <input type="text" className="form-control" name="lastname" id="lastname" placeholder="Enter last name" required />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-group mb-3">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input type="email" className="form-control" name="email" id="email" placeholder="example@gmail.com" required />
                        </div>
                      </td>
                      <td>
                        <div className="form-group mb-3">
                          <label htmlFor="mobile" className="form-label">Mobile Number</label>
                          <input type="number" maxLength="10" className="form-control" name="mobile" id="mobile" placeholder="xxxxxxxxxx" required />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <hr className="border-primary" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-group mb-3">
                          <label htmlFor="username" className="form-label">Enter Username</label>
                          <input type="text" className="form-control" name="username" id="username" placeholder="Enter username" required />
                          <small className='text-danger' id='username-error-msg'></small>
                        </div>
                      </td>
                      <td>
                        <div className="form-group mb-3">
                          <label htmlFor="password" className="form-label">Enter password</label>
                          <input type="password" className="form-control" name="password" id="password" placeholder="Enter password" required />
                          <small className='text-danger' id='pass-error-msg'></small>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <div className="form-group mb-3">
                          <label htmlFor="confirmPassword" className="form-label">Confirm password</label>
                          <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" placeholder="Re-Enter password" required />
                          <small className='text-danger' id='confirm-pass-error-msg'></small>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button type="submit" onClick={validateData} className="btn btn-primary w-100 mt-3">Create Account</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
