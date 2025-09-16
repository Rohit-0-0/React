import React from "react";
import "./Navbar.css";
import { Link, Router } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Route } from "react-router-dom";
function Navbar() {
  return (<>
    <nav className="navbar">
      <div className="logo">MyLogo</div>
      <ul className="nav-links">
        
        <Link to="/Home">Home</Link >
        <Link to="/Login">Login</Link >
        <Link to="/Signup">Signup</Link >
        <Link to="/Singlecard">Singlecard</Link >
        <Link to="/Mycart">Mycart</Link >
        
      </ul>
    </nav>
    <Outlet/></>
  );
}

export default Navbar;
