import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useDetectOutsideClick from "./UseDetectOutsideClick";
import "./nav.css";

const Nav2 = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <img src="https://www.clipartmax.com/png/middle/77-773806_call-610-465-white-hamburger-menu-icon-png.png" />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <Link to="/">
                <h6>Popular</h6>
              </Link>
            </li>
            <li>
              <Link to="/top">
                <h6>Top Rated</h6>
              </Link>
            </li>
            <li>
              <Link to="/new">
                <h6>New releases</h6>
              </Link>
            </li>
            <li>
              <Link to="/upcoming">
                <h6>Upcoming</h6>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav2;
