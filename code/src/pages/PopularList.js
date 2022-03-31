import React from 'react'
import { Link } from 'react-router-dom'

const PopularList = ({movielist}) => {
    return (
        <main>
            {movielist.map((movie) => (
                <Link 
                   key={movie.title}
                   to={`/details/${movie.id}`}
                >
                    <img  
                        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                        alt={movie.title}
                    />
                      <div>
                        <h1>{movie.title}</h1>
                        <p>Released {movie.release_date}</p>
                      </div> 
                </Link>
            ))}
        </main>
    )
}

export default PopularList
