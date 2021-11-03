import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DETAILS_URL } from "utils/urls";

const MovieDetails = () => {
const [movieDetails, setMovieDetails] = useState({});

const { movieId } = useParams();

console.log(DETAILS_URL(movieId));

useEffect(() => {
    fetch(DETAILS_URL(movieId))
    .then((res) => res.json())
    .then((json) => {
        setMovieDetails(json);
        console.log("DETAILS", json);
    });
}, [movieId]);

  //added a color in css to see if the page works
return (
    <div
    className="background-image"
    style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`,
    }}
    >
    <div className="movie-name">{movieDetails.title}</div>
    </div>
);
};

export default MovieDetails;