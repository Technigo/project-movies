import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MovieList = () => {
	const [movies, setMovies] = useState([]);
	const ApiKey = '175ffd5710eba9b52b1d7f46de42a152';
	const movieListURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=en-US`;

	useEffect(() => {
		fetchMovieList();
	}, []);

	const fetchMovieList = () => {
		fetch(movieListURL)
			.then(res => res.json())
			.then(json => {
				setMovies(json.results);
				console.log(json.results);
			});
	};

	return (
		<main>
			{movies.map(movie => (
				<article key={movie.id}>
					<Link to={`/movies/${movie.id}`}>
						<img
							src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
							alt={`${movie.id}`}
						/>
						<h2>{movie.title}</h2>
					</Link>
					<p>{movie.overview}</p>
					<p>{movie.release_date}</p>
				</article>
			))}
		</main>
	);
};
export default MovieList;
// const MovieList = ({ movies }) => {
// 	return (
// 		<main>
// 			{movies.map(movie => (
// 				<article key={movie.id}>
// 					<Link to={`/movies/${movie.id}`}>
// 						<img
// 							src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
// 							alt={`${movie.id}`}
// 						/>
// 						<h2>{movie.title}</h2>
// 					</Link>
// 					<p>{movie.overview}</p>
// 					<p>{movie.release_date}</p>
// 				</article>
// 			))}
// 		</main>
// 	);
// };
// export default MovieList;
