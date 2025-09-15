import React from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";


function Navbar({ theme, changeTheme }) {
  return (
    <nav className='navbar'>
      {/* Left side */}
      <div className='leftnav'>
        <span>Home</span>
        <span>About</span>
        <span>Explore</span>
      </div>

      {/* Right side */}
      <div className='rightnav'>
        <button className="theme-btn" onClick={changeTheme}>
          {theme ? <IoSunnyOutline /> : <GoMoon />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
