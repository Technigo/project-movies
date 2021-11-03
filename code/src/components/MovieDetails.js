import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetails = ({ allMovies }) => {
	const { movieId } = useParams();
	const matchingMovie = allMovies.find((movie) => movie.id == movieId);
	const styles = {
		backgroundImage: `https://image.tmdb.org/t/p/w1280${matchingMovie.backdrop_path}`,
    width: "100%",
    display: "block",
	};
	return (
		<article>
			<Link to="/all-movies" className="back-button">
				<button>Movies</button>
			</Link>
			<div className="detail-section" style={styles}>
				<img
					src={`https://image.tmdb.org/t/p/w342${matchingMovie.poster_path}`}
				/>
				<div className="summary-section">
					<h1>{matchingMovie.title}</h1>
					<h2>{matchingMovie.vote_average}/10</h2>
					<p>{matchingMovie.overview}</p>
				</div>
			</div>
		</article>
	);
};

export default MovieDetails;
