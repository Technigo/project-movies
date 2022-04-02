import React from 'react';
import { Link } from 'react-router-dom';

import '../css/moviecards.css';


const MovieCards = ({movies}) => {
    return (
        <section className='movie-cards'>
            {movies.map((movie) => (
                <Link key={movie.id} to={`/moviedetails/${movie.id}`} >
                    <div>
                        <img 
                            className='movie-poster'
                            src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                            alt={movie.title}
                        />
                    </div>
                    <div className='info-container'>
                        <h3
                            className='poster-title'>
                            {movie.title}
                        </h3>
                        <p>Release date {movie.release_date}</p>
                    </div>
                </Link>
            ))}
        </section>      
    )
}

export default MovieCards;
