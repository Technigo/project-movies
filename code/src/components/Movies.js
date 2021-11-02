import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MOVIES_URL } from 'utils/urls'

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch(MOVIES_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results))
    }, []) 

    return (
        <main className="movie-container">
            {movies.map((movie) => (
                <div className='movie-item'>
                    <Link key={movie.id} to={`/movies/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}/>
                        <div className='overlay'>
                            <div className='movie-details'>
                                <h3>{movie.original_title}</h3>
                                <h4>{movie.release_date}</h4>
                            </div>
                        </div>
                    </Link>
                </div>
))}
        </main> 

    )
}


export default Movies