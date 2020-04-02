import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './movielist.css';
import './director.css';
import { BackButton } from 'components/BackButton';

export const MovieList = ({ directorName}) => {
	 const { directorId } = useParams();

	const [ movies, setMovies ] = useState([]);
	let filteredMovies = [];
	const url = `https://api.themoviedb.org/3/person/${directorId}/movie_credits?api_key=3506f645d143411491b3a1c8d00f1217`;
	useEffect(
		() => {
			fetch(url).then((res) => res.json()).then((json) => {
				setMovies(json.crew);
			});
		},
		[url ]
	);

	//So many if's but I'm not sure how to write this otherwise so I'll keep it like this for now
	if (directorId !== undefined) {
		const filteredMoviesIds = [];

		movies.forEach((movie) => {
			if (!filteredMoviesIds.includes(movie.id) && !filteredMoviesIds.includes(movie.original_title)) {
				if (
					movie.department.toLowerCase().includes('directing') ||
					movie.department.toLowerCase().includes('writing')
				) {
					if (movie.poster_path !== null && movie.release_date !== '') {
						filteredMoviesIds.push(movie.id);
						filteredMoviesIds.push(movie.original_title);
						filteredMovies.push(movie);
					}
				}
			}
		});
	}

	return (
		<div className="site-container">
			<BackButton path={'/'} text={'Back to Movies'} />
			<header>
				<h1>Written and/or directed by {directorName}</h1>
			</header>
			<div className="movies-container">
				{filteredMovies.map((movie) => (
					<Link key={movie.id} to={`/${directorId}/${movie.id}`}>
						<div className="movie-card">
							<img
								className="img-poster"
								src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								alt={movie.original_title}
							/>

							<div className="movie-card-layer" />
							<div className="text-container">
								<h2>{movie.original_title}</h2>
								<p>{movie.release_date}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};
