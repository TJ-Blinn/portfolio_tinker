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

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border: 1px solid var(--border-color);
  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem;
    img {
      width: 70%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;
    li {
      display: block;
      a {
        display: block;
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 2rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
`;

export default Navigation;
