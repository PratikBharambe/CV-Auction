import React from "react";
import RegistrationForm from "./RegistrationForm";
import "./style/register.css";

function Register() {
  return (
    <div>
      <div className="fade-in-up" onLoadStart={document.title="Register new user"}>
        <RegistrationForm />
      </div>
    </div>
  );
}

export default Register;
