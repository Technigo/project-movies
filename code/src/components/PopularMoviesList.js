import React from 'react'
import { Link } from 'react-router-dom'

const PopularMoviesList = ({movies}) => {
    console.log('popularmovielist', movies)

    return(
        <section className='home-container'>
        {movies.map((movie) => {
            return (
                <section key={movie.id}>
                    <Link to={`/details/${movie.id}`}>
                        <div className='overlay-group'>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='poster' className='poster'/>
                            <div className='overlay-text'>
                                <h1>{movie.original_title}</h1>
                                <h4>{movie.release_date}</h4>
                            </div>
                        </div>
                    </Link>
                </section>
            )
        })}
        </section>
    )
}

export default PopularMoviesList; 
