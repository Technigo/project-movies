import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { URL_DETAILS } from "utils/urls";
// import styled from "styled-components";
import "../css/details.css";

export const MovieDetails = () => {
	const [movie, setMovie] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		fetch(URL_DETAILS(id))
			.then((response) => response.json())
			.then((data) => setMovie(data));
	}, []);

	return (
		<article className="container">
			<img className="background-image" alt={movie.title} src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} />
			<Link className="back-btn" to="/">
				<span className="back-icon fas fa-chevron-circle-left"></span>
				<span className="link-text"> Movies</span>
			</Link>
			<div className="details-container">
				<img className="poster-image" alt={movie.title} src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} />
				<div className="movie-info">
					<h1>
						{movie.title}
						<span className="rating"> {movie.vote_average}/10</span>
					</h1>
					<p className="summery">{movie.overview}</p>
				</div>
			</div>
		</article>
	);
};

// Poster Image (stående format): props.poster_path (plus allt annat innan)
// Image Background (liggande format): props.backdrop_path (kanske)
// Title: props.title
// Summery: props.overview
// Rating: props.vote_average

// Lägg till senare
// Genres: props.genres.map => .name
