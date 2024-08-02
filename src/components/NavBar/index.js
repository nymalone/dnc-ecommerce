import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="DNC Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/novidades" activeClassName="active">
            Novidades
          </NavLink>
        </li>
        <li>
          <NavLink to="/feminino" activeClassName="active">
            Feminino
          </NavLink>
        </li>
        <li>
          <NavLink to="/masculino" activeClassName="active">
            Masculino
          </NavLink>
        </li>
        <li>
          <NavLink to="/atendimento" activeClassName="active">
            Atendimento
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
