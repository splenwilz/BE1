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
      <p>&copy; 2023 Be1Stacks. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
