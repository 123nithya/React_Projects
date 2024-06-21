import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <p className='logo'>Delight</p>
      </div>
      <div className='navbar-links'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Our Delights</li>
            <li>Testimonial</li>
            <li>Contact</li>
        </ul>
      </div>
      <button className='button'>Order Now!</button>
    </div>
  )
}

export default Navbar
