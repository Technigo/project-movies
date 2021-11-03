import React, { useEffect, useState } from 'react'; //import useEffect and useState
import { Link } from 'react-router-dom'; //import link

import { API_URL } from './Url';

export const MovieLists = () => {
	const [movies, setMovies] = useState([]); // a state property that collects all the movies

	//Fetch movie data detail API
	useEffect(() => {
		fetch(
			API_URL
		)
			.then((res) => res.json())
			.then((json) => {
				setMovies(json.results);
			});
	}, []); //empty dependency
	return (
		<section className="main-container">
			{movies.map((movie) => (
				<div key={movie.id}>
					<Link to={`/movie/${movie.id}`}>
						<div className="image-container">
					<div className="overlay">
						<div className="movie-list-text">
						<h2 className="movie-title">{movie.title}</h2>
						<p className="release-date">{movie.release_date}</p>
						</div></div>
						<img className="movie-poster"
							src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
							alt={movie.title}
						/>
					</div>
					</Link>
				</div>
			))}
		</section>
	);
};
