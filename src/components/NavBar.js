import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link to="/logout">Logout </Link>
      <Link to="/login">Login </Link>
      <Link to="/register">Register </Link>
      <Link to="/dashboard">Dashboard </Link>
    </nav>
  );
}

export default NavBar;
