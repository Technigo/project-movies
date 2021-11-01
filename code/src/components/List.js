import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ movies }) => {
    return (
    <>
    <div className="movie-card-container" >
        {movies.map((movie) => (      
        <Link to={`/movie/${movie.id}`}  key={movie.id}>
            <div className="movie-card">
                <img
                className="movie-list-poster"
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt={movie.title}
                />
                <div className="movie-overlay">
                    <h1>{movie.title}</h1>
                    <p>Release date: {movie.release_date}</p>
                </div>
            </div>
        </Link>
        ))} 
        </div> 
    </>
    )
}

export default List