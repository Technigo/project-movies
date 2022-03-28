import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
            <header>
                <nav>
                <NavLink to="/details" className={({isActive}) => 'default.class' + (isActive ? "my-custom-classname" : "")}>
                    Details
                </NavLink>
                <NavLink to="/">List</NavLink>
               

                </nav>
            </header>
    )

}

export default Header