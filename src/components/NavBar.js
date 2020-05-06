import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
    {/* User is authenticated */}
      <Link to="/logout">Logout </Link>
    {/* User is NOT authenticated */}
      <Link to="/dashboard">Login </Link>
      <Link to="/register">Register </Link>
    </nav>
  );
}

export default NavBar;
