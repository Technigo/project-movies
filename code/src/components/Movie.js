import React from 'react'

import '../styles/movie.css'

/* The idea is to use props to display 
movie-titles and images from different endpoints
of the API */
export const Movie = () => {
    return ( 
        <section className='movie__card'>
            <h2>Movie Title</h2>
            <img src='' alt='Picture of Movie'/>
        </section>
    )
}