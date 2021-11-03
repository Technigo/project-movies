import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
	return (
		<Link to={`/details/${movie.id}`} className="movie-container">
			<img
				src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
				alt={movie.title}
			></img>
			<div className="details-overlay">
				<h1>{movie.title}</h1>
				<p>Released {movie.release_date}</p>
			</div>
		</Link>
	);
};

export default Movie;
