import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/nav.css'

export const Nav = () => {
    const categories = [
        {
            name: 'Top Rated',
            path: 'top_rated'
        },
        {
            name: 'Upcoming',
            path: 'upcoming'
        },
        {
            name: 'Now Playing',
            path: 'now_playing'
        }
    ]

    return (
        <nav className='nav__container'>
            <h1>
                <Link to='/'>Popular Movies</Link>
            </h1>
            <ul className='nav__links'>
                {categories.map(category => (
                    <li key={category.path}>
                        <Link to={`/category/${category.path}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}