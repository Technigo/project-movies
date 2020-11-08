import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Nav = () => {

    return (
        <section className="nav-section">
            <Link to="/popular"><h1>Movies</h1></Link>
            <ul className="nav-bar">
                <li>
                    <NavLink to="/popular">Popular</NavLink> 
                </li>
                <li>
                    <NavLink to="/now-playing">Now playing</NavLink>
                </li>
                <li>
                    <NavLink to="/upcoming">Upcoming</NavLink> 
                </li>
            </ul>
        </section>
    )
}
