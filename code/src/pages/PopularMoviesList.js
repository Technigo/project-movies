import React from 'react'

const PopularMoviesList = ( {movies} ) => {
    return(
        <section>
            {movies.map((movie) => {
                return <div key={movie.original_title}>{movie.original_title}</div>
            })}
        </section>
    )
}

export default PopularMoviesList; 