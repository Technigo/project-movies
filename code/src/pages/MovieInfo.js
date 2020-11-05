import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loader-spinner'

import { baseAPI, apiKey } from "config";

export const MovieInfo = () => {

    const { id } = useParams();
    const history = useHistory();

    const [movieInfo, setMovieInfo] = useState({});
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        const moviesUrl = `${baseAPI}movie/${id}?api_key=${apiKey}&language=en-US`;

        setLoader(true)
        fetch(moviesUrl)
            .then(response => response.json())
            .then(json => {
                if (json.success === false) {
                    history.push("/error");
                }
                setMovieInfo(json)
            })
            .finally(() => setLoader(false))
        // eslint-disable-next-line 
    }, [id])

    return loader
        ? <Loader
            type="Hearts"
            color="red"
            height={400}
            width={400}
            className="loader" />
        : <div className="movie-info-container"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), 
            url('https://image.tmdb.org/t/p/w1280${movieInfo.backdrop_path}')`
            }}>

            <Link className="movie-info-container__button" to={"/"}>
                <FontAwesomeIcon icon={faChevronCircleLeft} size="lg" />
                <span className="button-text">Movies</span>
            </Link>

            <div className="movie-info-container__details">
                <img className="movie-img"
                    src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`}
                    alt={movieInfo.title} />
                <div className="details">
                    <h2>{movieInfo.title}  <span className="rating">{movieInfo.vote_average}/10</span></h2>
                    <p>{movieInfo.overview}</p>
                </div>
            </div>
        </div>
}
