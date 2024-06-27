import React from "react";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <h1>First </h1>
        <span>💓</span>
      </div>
      <div className="navbar-links">
        <div className="links">
          <ul>
            <li className="data">Home</li>
            <li className="data">Coffee Menu</li>
            <li className="data">About Us</li>
            <li className="data">Contact Us</li>
          </ul>
        </div>
        <div className="btn">
          <button>Coffee Shop!</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
