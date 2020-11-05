import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'





import { baseAPI, apiKey } from "config";

export const MovieInfo = () => {

    const { id } = useParams();
    const history = useHistory();
    const moviesUrl = `${baseAPI}movie/${id}?api_key=${apiKey}&language=en-US`;
    const [movieInfo, setMovieInfo] = useState({});


    useEffect(() => {
        fetch(moviesUrl)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                if (json.success === false) {
                    history.push("/");
                }
                setMovieInfo(json)
            })
    }, [id])




    return (

        <div className="movie-info-container"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url('https://image.tmdb.org/t/p/w1280${movieInfo.backdrop_path}')` }}>

            <Link className="button" to={"/"}>
                <FontAwesomeIcon icon={faChevronCircleLeft} size="lg" />
                <span className="button-text">Movies</span>
            </Link>

            <div className="movie-info-container__details">
                <img className="movie-info__info-img" src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`} alt={movieInfo.title} />
                <div className="details">
                    <h2>{movieInfo.title}  <span className="rating">{movieInfo.vote_average}/10</span></h2>
                    <p>{movieInfo.overview}</p>
                </div>
            </div>
        </div>

    )
}
