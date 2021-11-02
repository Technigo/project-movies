import React, { useEffect, useState } from 'react'; //import useEffect and useState
import { Link } from 'react-router-dom'; //import link

export const MovieLists = () => {
	const [movies, setMovies] = useState([]); // a state property that collects all the movies

	//Fetch movie data detail API
	useEffect(() => {
		fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=18efe4e6c09e4e4229e6b54ff367df52&language=en-US&page=1'
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
