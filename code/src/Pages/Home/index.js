import React from 'react'
import './home.css'
import { MovieCard } from '../../Components/MovieCard'
import { Link } from 'react-router-dom'


export const Home = () => {
    return (
        <Link to="/movie-details">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </Link>
    )
}
