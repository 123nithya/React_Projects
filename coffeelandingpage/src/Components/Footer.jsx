import React from "react";
import {
  FaSquareInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Joe 💓</h3>
          <div className="icons">
            <FaSquareInstagram className="icon" />
            <FaFacebook className="icon" />
            <FaYoutube className="icon" />
            <FaTwitter className="icon" />
          </div>
        </div>
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>Specialty Coffee</li>
            <li>Coffee Catering</li>
            <li>Event Space</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@beanblisscoffee.com</p>
          <p>Phone: +1-123-456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Bean Bliss Coffee. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
