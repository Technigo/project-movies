import React from 'react'


export const MovieTable = (movie) => {
    movieList.map(movie => {
        return(
            <div className="movie" key={movie.id}>
                <img src={MOVIE_BACKDROP(movie.poster_path)} />
                <h1 className="movie-title">{movie.title}</h1>
                <p className="movie-release">{movie.release_date}</p>
            </div>
        )
    })
}


