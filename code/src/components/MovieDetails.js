import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { URL_DETAILS } from "utils/urls";
import "../css/details.css";

export const MovieDetails = () => {
	const [movie, setMovie] = useState([]);

	const { id } = useParams();

	useEffect(() => {
		fetch(URL_DETAILS(id))
			.then((response) => response.json())
			.then((data) => setMovie(data));
	}, [id]);

	return (
		<div className="container">
			<img className="background-image" alt={movie.title} src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} />
			<Link className="back-btn" to="/">
				<button>Movies</button>
			</Link>
			<div className="details-container">
				<img className="poster-image" alt={movie.title} src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} />
				<div className="movie-info">
					<h1>{movie.title}</h1>
					<p className="summery">{movie.vote_average}/10</p>
					<p>{movie.overview}</p>
				</div>
			</div>
		</div>
	);
};

// Poster Image (stående format): props.poster_path (plus allt annat innan)
// Image Background (liggande format): props.backdrop_path (kanske)
// Title: props.title
// Summery: props.overview
// Rating: props.vote_average

// Lägg till senare
// Genres: props.genres.map => .name

/*
{
  "images": {
    "base_url": "http://image.tmdb.org/t/p/",
    "secure_base_url": "https://image.tmdb.org/t/p/",
    "backdrop_sizes": ["w300", "w780", "w1280", "original"],
    "logo_sizes": ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
    "poster_sizes": ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
    "profile_sizes": ["w45", "w185", "h632", "original"],
    "still_sizes": ["w92", "w185", "w300", "original"]
  }
}
*/
