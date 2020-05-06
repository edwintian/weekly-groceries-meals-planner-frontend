import React from "react";
//import {Link} from 'react-router-dom';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link to="/dashboard">Login </Link>
      <Link to="/register">Register </Link>
    </nav>
  );
}

export default NavBar;
