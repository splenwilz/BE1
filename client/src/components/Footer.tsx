import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-media-icons">
        <a href="https://www.facebook.com">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram />
        </a>
      </div>
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-and-conditions">Terms and Conditions</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
      <p>&copy; 2023 Be1Stacks. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
