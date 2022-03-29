import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { MOVIE_LIST_URL } from 'utils/urls'
import { POSTER_URL } from 'utils/urls'

const MovieList = () => {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        fetch(MOVIE_LIST_URL)
            .then((res) => res.json())
            .then((data) => {
                setMovieList(data.results)
            })
    }, [])
    console.log(movieList)


    return (
        <section className="movie-section">
            {movieList.map((movie) => {
                const url = POSTER_URL + movie.poster_path
                return (
                    <Link key={movie.id} to={`/movies/${movie.id}`}>
                        <article className="movie-card">
                           <img src={url} alt={movie.title} />
                         </article>
                    </Link>
                    
                )
            })}
        </section>
    )
}

export default MovieList