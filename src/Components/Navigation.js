import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import avatar from "../img/avatar.jpg";

function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/home" activeClassName="activeClass">
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/about" activeClassName="activeClass">
            About
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/resume" activeClassName="activeClass">
            Resume
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/Portfolio" activeClassName="activeClass">
            Portfolio
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/blogs" activeClassName="activeClass">
            Blogs
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/contact" activeClassName="activeClass">
            Contact
          </NavLink>
        </li>
      </ul>

      <footer className="footer">
        <p>@2022 Anthony-J. Blinn Portfolio</p>
      </footer>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav``;

export default Navigation;
