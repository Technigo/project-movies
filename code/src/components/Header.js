import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
    <header>
        <nav>
        <NavLink exact to ="/"> List</NavLink>
        <NavLink exact to ="/details">Details</NavLink>
        </nav>
    </header>
     
     );
};

export default Header;