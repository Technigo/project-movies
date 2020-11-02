import React from 'react'

import { Movie } from './Movie'

import '../styles/movielist.css'

export const MovieList = ({movies}) => {

    return (
        <section className='movielist__container'>
            <h1>Welcome to Foodie Movies!</h1>
            {movies.map((movie) => (
              <Movie 
              key={movie.id}
              title={movie.title}/>
            ))}
        </section>
    )
}