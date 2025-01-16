// Login.js
import React, { useState } from "react";
import "./Login.css";
import logo from "./Images/logo-placeholder.png";
import ReCAPTCHA from "react-google-recaptcha";

const Login = ({ onSwitchForm }) => {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please verify that you are not a robot.");
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <div className="container">
      <img src={logo} alt="Bluestock Logo" className="logo" />
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>

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

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="................."
            required
          />
        </div>

        <div className="form-group">
          <button
            type="button"
            className="forgot-password"
            onClick={() => onSwitchForm("forgotPassword")}
          >
            Forgot Password?
          </button>
        </div>

        <div className="checkbox-wrapper">
          <label>
            <input type="checkbox" name="keepSignedIn" />
            Keep me signed in
          </label>
        </div>

        <div className="form-group">
          <ReCAPTCHA
            sitekey="6Lere7gqAAAAADfIVh1DU1lNIWQ1VT5Z57iMmuq7" 
            onChange={handleCaptchaChange}
          />
        </div>

        <button
          type="submit"
          className="btn primary"
          disabled={!captchaVerified}
        >
          Login
        </button>

        <p>or sign in with</p>

        <button type="button" className="btn google">
          Continue with Google
        </button>

        <p>
          <button
            type="button"
            className="link"
            onClick={() => onSwitchForm("signup")}
          >
            Create an account
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
