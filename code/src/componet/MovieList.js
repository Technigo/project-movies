import React from 'react'

import { MovieContainer } from 'componet/MovieContainer';

export const MovieList = ({ movieArray }) => {
    return (
        <section className="movie-list">
            {movieArray.map(movie => {
                return (
                    <MovieContainer 
                        key={movie.id}
                        title={movie.title}
                        release={movie.release_date}
                        poster={movie.poster_path}
                        backdrop={movie.backdrop_path}
                        overview={movie.overview}
                        id={movie.id}
                    />
                )
            })}
        </section>
    )
}