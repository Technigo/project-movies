import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/nav.css'

export const Nav = () => {
    const movielists = [
        {
            category: 'Top Rated',
            path: 'top_rated'
        },
        {
            category: 'Upcoming',
            path: 'upcoming'
        },
        {
            category: 'Now Playing',
            path: 'now_playing'
        }
    ]

    return (
        <nav className='nav__container'>
            <h1>
                <Link to='/'>Popular Movies</Link>
            </h1>
            <ul className='nav__links'>
                {movielists.map(list => (
                    <li key={list.path}>
                        <Link to={`/category/${list.path}`}>{list.category}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}