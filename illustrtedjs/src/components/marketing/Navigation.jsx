import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../AuthButton';
import './Navigation.css';
const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigationLogo">Illustrated JS</div>
      <ul className="navigationLinks">
        <li>
          <NavLink
            className="navLink"
            activeClassName="navLinkActive"
            exact
            to="/"
          >
            Why Illustrated JS?
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Content"
            activeClassName="navLinkActive"
            className="navLink"
          >
            Content
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Purchase"
            activeClassName="navLinkActive"
            className="navLink"
          >
            Purchase
          </NavLink>
        </li>
        <li>
          <Button text="Log In" />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
