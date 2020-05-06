import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link to="/register">Register </Link>
      <Link to="/dashboard">Dashboard </Link>
      <Link to="/logout">Logout </Link>
    </nav>
  );
}

export default NavBar;
