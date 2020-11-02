import React from 'react'
import { Link } from 'react-router-dom'

export const MovieCard = ({
    title, 
    poster_path,
    release_date,
    slug
}) =>{
return( 
    <Link to={`/games/${slug}`}>
        <section className='movie-card-container'>
            <div className='movie-card-details'>
                <h1>{title}</h1>
                <p>{`Released ${release_date}`}</p>
            </div> 
            <div>
               <img className='movie-card-img'src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title}></img> 
            </div>
        </section>
    </Link>

    )
}