import React from 'react'

import { Link } from 'react-router-dom'

export const  MovieCard = ({id, poster_path, title, release_date}) => {
    return (  

        <section className='movie-card-container'>
            <Link to={`/movies/${id}`}>
                <div className='movie-card-overlay'>
                    <img className='movie-card-image'src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                        alt={`${`title`}`}/>
                    <div className='text-overlay'>
                        <h1 className='list-title'>{title}</h1>
                        <p className='list-p'>{`Release Date: ${release_date}`}</p>
                    </div>
                </div>
            </Link>
        </section>

    )
}
 
 