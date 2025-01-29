import React from "react";
import RegistrationForm from "./RegistrationForm";
import "./style/register.css";

function Register() {
  return (
    <div className="carbg">
      <div className="bg-black h-100 bg-opacity-50">
        <div className="fade-in-up" onLoadStart={(document.title = "Register new user")}>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default Register;
