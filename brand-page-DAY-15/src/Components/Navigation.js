import React from 'react'
import logo from "../Image/brand_logo.png";

export const Navigation = () => {
  return (
        <nav className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
  )
}
