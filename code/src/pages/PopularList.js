import React from 'react'
import { Link } from 'react-router-dom'
import '../css/popularList.css'

const PopularList = ({movielist}) => {
    return (
        <div className="movie-container">
            {movielist.map((movie) => (
                <Link
                   className="link-container"
                   key={movie.title}
                   to={`/details/${movie.id}`}
                >
                    <img  
                        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                        alt={movie.title}
                    />
                      <div className="title-container">
                        <h1>{movie.title}</h1>
                        <p>Released {movie.release_date}</p>
                      </div> 
                </Link>
            ))}
        </div>
    )
}

export default PopularList
