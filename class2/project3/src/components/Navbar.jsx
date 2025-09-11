import React from 'react'
import './Navbar.css'   // import the css file

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left section */}
      <div className="navbar-left">
        <img src="/vite.svg" alt="Logo" className="logo" />
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">Register for free</a>
      </div>

      {/* Right section */}
      <div className="navbar-right">
        <div><p>Login</p></div>
        <div><p>Sign Up</p></div>
      </div>
    </nav>
  )
}

export default Navbar
