import React from 'react'
import './home.css'
import { MovieCard } from '../../Components/MovieCard'
import { Loader } from '../../Components/Loader'
import { Link } from 'react-router-dom'



export const Home = ({ movies }) => {

    return (
        movies ? movies.map(movie => {
            return <Link className="ancor" key={movie.id} to={`/movie-details/${movie.id}`}><MovieCard {...movie} /></Link>
        }) : < Loader />
    )
}
