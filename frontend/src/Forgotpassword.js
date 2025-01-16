// ForgotPassword.js
import React from "react";
import logo from "./Images/logo-placeholder.png";

function ForgotPassword({ onSwitchForm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset link has been sent to your email!");
  };

  return (
    <div className="container">
      <img src={logo} alt="Bluestock Logo" className="logo" />
      <form className="form" onSubmit={handleSubmit}>
        <h2>Forgot Password?</h2>
        <p>Enter your email address to get the password reset link</p>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@gmail.com"
            required
          />
        </div>

        <button type="submit" className="btn primary">
          Reset Password
        </button>

        <p>
          <button
            type="button"
            className="link"
            onClick={() => onSwitchForm("login")}
          >
            Back to Login
          </button>
        </p>
      </form>
    </div>
  );
}

export default ForgotPassword;
