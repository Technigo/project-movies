import React, { useEffect, useState } from "react";
import { DETAILS_URL } from "../utils/urls";
import "./MovieDetails.css"
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const [movie, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        fetch(DETAILS_URL(id))
            .then((res) => res.json())
            .then((data) => setMovie(data))
    }, [id])

    return (
        <article>
            {movie && (
                <div className="background">
                    <div className="summary">
                        <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                        <div className="details">
                            <h1>{movie.title} <span className="rating">{movie.vote_average}/10</span></h1>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                </div>
            )}
        </article>
    )
}

export default MovieDetails