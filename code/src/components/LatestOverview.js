import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LATEST_URL_LIST } from "utils/urls";
import "../css/overview.css";

export const LatestOverview = () => {
	const [latestOverview, setLatestOverview] = useState([]);

	useEffect(() => {
		fetch(LATEST_URL_LIST)
			.then((response) => response.json())
			.then((data) => setLatestOverview(data.results));
	}, []);

	return (
		<div className="movie-grid">
			{latestOverview.map((movie) => (
				<Link className="movie-container" key={movie.id} to={`/movies/${movie.id}`}>
					<img className="movie-poster" src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}></img>
					<div className="overlay-container">
						<h1 className="movie-title">{movie.title}</h1>
						<p className="release-date">{movie.release_date}</p>
					</div>
				</Link>
			))}
		</div>
	);
};
