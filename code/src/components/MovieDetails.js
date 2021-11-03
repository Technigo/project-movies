import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const MovieDetails = ({ allMovies }) => {
	const { movieId } = useParams();
	const matchingMovie = allMovies.find((movie) => movie.id == movieId);

	const BackgroundStyles = {
		backgroundImage: `url(https://image.tmdb.org/t/p/w1280${matchingMovie.backdrop_path})`,
		display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		minHeight: "100vh",
	};

	return (
		<article>
			<Link className="back-link" to="/all-movies">
      <img src="https://img.icons8.com/material-outlined/24/000000/circled-left--v2.png"/>Movies
			</Link>
			<div style={BackgroundStyles}>
      <div className="summary-section">
				<img className="poster"
					src={`https://image.tmdb.org/t/p/w342${matchingMovie.poster_path}`}
				/>
        <div className="details">
					<h1 className="movie-title">
            {matchingMovie.title}
            <span className="ratings">
              {matchingMovie.vote_average}/10
              </span>
            </h1>
					<p className="movie-description">
            {matchingMovie.overview}
            </p>
          </div>
				</div>
			</div>
		</article>
	);
};

export default MovieDetails;
