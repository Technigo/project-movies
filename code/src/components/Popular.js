import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { MOVIES_URL } from 'utils/urls'


const Popular = () => {

    const [movieList, setMovieList] = useState([])

    //moved fetch here since we want the fetch to happen only when this Route (/) opens and not for every visit on our website.

    useEffect(() => {
        fetch(MOVIES_URL)
            .then(res => res.json())
            .then(data => {
                setMovieList(data.results)
            })
    }, [])

    return (
        <section className="popular-page">
            {movieList.map((movie => {
                return (
                    <div key={movie.title}>
                        <div className="movie-text-group">
                            <Link className="details" to={`/movies/${movie.id}`}>
                                <img className="img" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                                <h1>{movie.title}</h1>
                                <p>Released {movie.release_date}</p>
                            </Link>

                        </div>
                    </div>
                )
            }))}

        </section>


    )
}

export default Popular