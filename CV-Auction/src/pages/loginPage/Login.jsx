import React from "react";
import logo from "./../../../public/logo.png";

function Login() {
  return (
    <div>
      <div className="position-absolute top-50 start-50 translate-middle border border-black rounded-5 p-4 col-4">
        <div className="d-flex align-items-center justify-content-center position-relative">
          <img src={logo} alt="logo.png" />
        </div>
        <div className="text-center display-6 m-3">Login</div>
        <div className="d-flex align-items-center justify-content-center position-relative">
          <form action="#" method="post">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email :</label>
              <input type="email" name="email" id="email" required className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password : </label>
              <input type="password" name="password" id="password" required className="form-control"/>
            </div>
            <div className="mb-3">
              <a className="text-decoration-none" href="#">Forgot Password ?</a>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-block">Login</button>
            </div>
            <div className="mt-3 text-center">
              Don't have an account yet? <a href="#" className="text-decoration-none">Register for free</a>
            </div>
          </form>       
        </div>
      </div>
    </div>
  );
}

export default Login;
