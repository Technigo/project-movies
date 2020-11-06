import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/nav.css'

export const Nav = () => {
    return (
        <nav className='nav__container'>
            <h1>
                <Link to='/'>FoodieMovies</Link>
            </h1>
            <ul className='nav__links'>
                <li>
                    <Link to='/:movie'>Popular</Link>
                </li>
                <li>
                    <Link to='/:food'></Link>
                </li>
            </ul>
        </nav>
    )
}