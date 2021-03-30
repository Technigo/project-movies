import React from 'react'

import { Link } from 'react-router-dom'

export const  MovieCard = ({id, poster_path, movie_title, movie_release_date}) => {
    return (  

        <section className='movie-details-container'>
            <Link to={`/movies/${id}`}>
            <div className='movie-detail-box'>
                <img className='movie-detail-image'src={`https://image.tmdb.org/t/p/w342${poster_path}`}/>
            </div>
            <div>
                <h1>{movie_title}</h1>
                <p>{movie_release_date}</p>
            </div>
            </Link>
           
           


        </section>

    )
}
 
 