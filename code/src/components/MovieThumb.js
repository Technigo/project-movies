import React from 'react'
import { Link } from 'react-router-dom'

const MovieThumb = ({original_title, id, poster_path, release_date}) => {
    return (
        <Link to={`/movies/${id}`}>
            <section>
                <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
                <h1>{original_title}</h1>
                <p>{release_date}</p>
            </section>
        </Link>
    )
}

export default MovieThumb
