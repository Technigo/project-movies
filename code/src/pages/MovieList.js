import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './movielist.css';

export const MovieList = ({ setDirector, director }) => {
	const [ movies, setMovies ] = useState([]);
	let filteredMovies;

	useEffect(
		() => {
			fetch(
				`https://api.themoviedb.org/3/person/${director}/movie_credits?api_key=3506f645d143411491b3a1c8d00f1217`
			)
				.then((res) => res.json())
				.then((json) => {
					setMovies(json.crew);
				});
		},
		[ director ]
	);

	if (director !== undefined) {
		setDirector(localStorage.getItem('director'));
		console.log(director);
		filteredMovies = movies.filter(
			(movie) =>
				movie.job.toLowerCase().includes('director') && movie.poster_path !== null && movie.release_date !== ''
		);
	}

	if (director !== '') {
		return (
			<div className="movies-container">
				{filteredMovies.map((movie) => (
					<Link key={movie.id} to={`/${director}/${movie.id}`}>
						<div>
							<img
								className="img-poster"
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt={movie.original_title}
							/>

							<div className="text-container">
								<h1>{movie.original_title}</h1>
								<p>{movie.release_date}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		);
	} else {
		return <div />;
	}
};
