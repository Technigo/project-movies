import React from "react"
import { Link, NavLink } from "react-router-dom"

export const Nav =() => { 
    return (
    <nav>
        <ul>
            <li className="list-items">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="list-items">
                <NavLink className="nav-link" to="/About">About</NavLink>
            </li>
            <li className="list-items">
                <NavLink className="nav-link" to="/best-choince">Best Choice</NavLink> 
            </li>
            <li className="list-items">
                <Link className="nav-link" to="/most-watched">Hot Today</Link>
            </li>
        </ul>
    </nav>
    )
}