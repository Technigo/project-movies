import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { API_key } from "../API_info";
import Button from "../components/Button";

import "./movie-details.css";

const MovieDetails = () => {

  const [movie, setMovie] = useState({});
  //id is captured by useParams hook & ready to use
  const { id } = useParams();

  useEffect(() => {
    //API url pasted from API_info + inserted id
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_key}&language=en-US&page=1`)
      .then(response => response.json())
      //.then(data => console.log(data));
      .then(data => setMovie(data));
  }, [id])

  const BACKDROP_URL = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
  const POSTER_URL = `https://image.tmdb.org/t/p/w342${movie.poster_path}`;

  return (
    <section className="movie-details-main-container">
      <Button />
      <img className="movie-details-background" src={BACKDROP_URL} alt={movie.title} />
      <div className="poster-and-movie-details">
        <img src={POSTER_URL} alt={movie.title} />
        <div className="title-rate-overview">
          <h1>
            {movie.title} <span>{movie.vote_average}/10</span>
          </h1>
          <h2>
            ({movie.original_title})
          </h2>
          <p>
            {movie.overview}
          </p>
        </div>
      </div>
    </section>
  );
};


export default MovieDetails;