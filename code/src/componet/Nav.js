import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Nav = ( {onListChange} ) => {

    return (
        <section className="nav-section">
            <Link 
                onClick={() => onListChange('popular')} 
                to="/">
                <h1>Movies</h1>
            </Link>
            <ul className="nav-bar">
                <li>
                    <NavLink 
                        onClick={() => onListChange('popular')} 
                        to="/popular">
                        Popular
                    </NavLink> 
                </li>
                <li>
                    <NavLink 
                        onClick={() => onListChange('now_playing')}
                        to="/now-playing">
                        Now playing
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        onClick={() => onListChange('upcoming')}
                        to="/upcoming">
                        Upcoming
                    </NavLink> 
                </li>
            </ul>
        </section>
    )
}
