import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const MovieList = () => {
	const [ movies, setMovies ] = useState([]);

	useEffect(() => {
		fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=3506f645d143411491b3a1c8d00f1217&language=en-US&page=1'
		)
			.then((res) => res.json())
			.then((json) => {
				setMovies(json.results);
			});
	}, []);

	return (
		<div className="movies-container">
			{movies.map((movie) => (
				<div className="movie-card" key={movie.id}>
					<Link to={`/movies/${movie.id}`}>
						<img
							className="img-poster"
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
							alt={movie.original_title}
						/>

						<h3>{movie.original_title}</h3>
					</Link>
				</div>
			))}
		</div>
	);
};
