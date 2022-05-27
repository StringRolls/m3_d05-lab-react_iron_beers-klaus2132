//Navbar: Displaying the basic navbar with the LAB name

import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>

        <NavLink exact to="/" className="selected"> Home </NavLink>

      </ul>
    </nav>
  );
}

export default Navbar;