import React from "react";
import { NavLink } from 'react-router-dom';
import "../components/BurgerMenu.css";

const BurgerMenu = (props) => {

    return (
        <div className="burger">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <ul className="menu">
                {(
                    props.items.map((item, index) => (
                        <li>
                            <NavLink key={index} to={item.to} exact className="navbar-links">
                                {item.displayName}
                            </NavLink>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default BurgerMenu;