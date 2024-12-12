import React from "react";
import bg from "./images/bg.jpg";
import LoginForm from "./LoginForm";
import "./css/login.css";

function Login() {
  return (
    <div className="background">
      <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="row w-100">
          <div className="col-md-4 d-flex justify-content-center mb-4 mb-md-0">
            <div className="m-auto">
              <LoginForm />
            </div>``
          </div>
          <div className="col-md-8">
            <div id="img-container" className="position-relative h-100">
              <img src={bg} alt="" className="w-100 h-100 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
