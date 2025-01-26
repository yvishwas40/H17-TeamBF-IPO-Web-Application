import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    alert("Password reset link has been sent to your email!");
  };

  return (
    <div className="forgot-password-container">
      <div className="form-container">
        <img src="/logo-placeholder.png" alt="Bluestock Logo" className="logo-signin" />
        <h3 className="forgot-password-title">Forgot Password?</h3>
        <p className="forgot-password-description">
          Enter your email address below to receive a password reset link.
        </p>
        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="reset-password-button">
            Send Reset Link
          </button>
        </form>
        <Link to="/signin" className="back-to-login">
          Back to Sign In
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
