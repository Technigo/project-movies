import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/nav.css'

//The Link from router-dom is a special component
//It comes with a class called 'active' which you can
//do stuff with in css to display which page you're currently on

/* What I plan:
Movies-links show long movies and desserts show shorts*/
export const Nav = () => {
    return (
        <nav className='nav__container'>
            <h1>
                <Link to='/'>FoodieMovies</Link>
            </h1>

            <ul className='nav__links'>
                <li>
                    <Link to='/movie'>Movies</Link>
                </li>
                <li>
                    <Link to='/short'>Desserts</Link>
                </li>
            </ul>
        </nav>
    );
};