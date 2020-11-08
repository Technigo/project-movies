import React from 'react'
import { Link } from 'react-router-dom'


export const MovieCard = ({
    title, 
    id,
    poster_path,
    release_date,
    slug
    }) =>{

    return( 
        /* Display movie image, title and releasedate */
        <section className='movie-card'>
              <Link to={`movies/${id}`}>
               <img className='movie-card-img'src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title}/>
            <div className='text-over-movie-card'>
                <h2>{title}</h2>
                <p>{`Released ${release_date}`}</p>
            </div> 
            </Link>
        </section>
    )
}