import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useDetectOutsideClick from "./UseDetectOutsideClick";
import "./nav.css";

const Nav = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <svg
            className="icon"
            id="Capa_1"
            data-name="Capa 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 124 112"
          >
            <title>menu-button</title>
            <path
              d="M112,6H12a12,12,0,0,0,0,24H112a12,12,0,0,0,0-24Z"
              transform="translate(0 -6)"
            />
            <path
              d="M112,50H12a12,12,0,0,0,0,24H112a12,12,0,0,0,0-24Z"
              transform="translate(0 -6)"
            />
            <path
              d="M112,94H12a12,12,0,0,0,0,24H112a12,12,0,0,0,0-24Z"
              transform="translate(0 -6)"
            />
          </svg>
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <Link to="/">
                <h3>Popular</h3>
              </Link>
            </li>
            <li>
              <Link to="/top">
                <h3>Top Rated</h3>
              </Link>
            </li>
            <li>
              <Link to="/new">
                <h3>New releases</h3>
              </Link>
            </li>
            <li>
              <Link to="/upcoming">
                <h3>Upcoming</h3>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
