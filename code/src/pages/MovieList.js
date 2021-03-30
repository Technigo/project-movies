import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { POPULAR_API_URL } from '../reusable/urls'

//backdrop: https://image.tmdb.org/t/p/w1280{movie.backdrop_path}
//Poster: https://image.tmdb.org/t/p/w342{movie.poster_path}

export const MovieList = () => {
    const [movieList, setMovieList] = useState([])

    useEffect(() => {
    fetch(POPULAR_API_URL)
        .then((res) => res.json())
        .then(json => {
            setMovieList(json.results)
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <section>
                {movieList.map((movie) => (
                    <div key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.original_title}/>
                            <h1>
                                {movie.original_title}
                            </h1>
                            <h2>
                                {movie.release_date}
                            </h2>
                        </Link>

                    </div>

                ))}
            </section>
        </div>
    )

}