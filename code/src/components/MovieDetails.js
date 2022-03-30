import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
// import {SINGLE_MOVIES_URL} from "utils/urls" //../utils/urls?

// const GoBackButton = styled.button`
//     padding: 10px;
//     color: green;
//     background-color: red;
//     font-style: italic;
// `;

const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const onBackButtonClick = ()=> {
        navigate(-1);
    }

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e99c6c8e9d657c50fc40ffe9db9d16f5&language=en-US`)
            .then((res) => res.json())
            .then(data => {
                setMovie(data);
            })
    }, [id])

    return (
        <article>
            {movie && (
                <div>
                    <button onClick={onBackButtonClick}>Go back</button>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <p>Rating: {movie.vote_average}/10</p>
                    <img 
                        className="movie-poster"
                        src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                        alt={movie.title}
                    />
                     <img 
                        className="movie-backdrop"
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title}
                    />
                </div>
            )}
        </article>
    )
}

export default MovieDetails;
