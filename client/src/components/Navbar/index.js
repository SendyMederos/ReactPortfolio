import React from "react";
import { NavLink } from "react-router-dom";

   
function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-dark bg-info mx-5 my-2 " fixed="top">
        <b><h4 className="ml-3">Sendy Mederos</h4></b>
        <ul className= "nav justify-content-end mr-5" >
      <li><b><NavLink className="nav-item text-dark mx-3" to="/"> About Me </NavLink></b></li>
      <li><b><NavLink className="nav-item text-dark mx-3" to="/projects"> Projects </NavLink></b></li>
    </ul>
    </nav>
  );
}

export default Navbar;
