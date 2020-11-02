import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import '../styles/MovieList.css';

const MovieList = ({ children }) => {
	const [movies, setMovies] = useState([]);

	const ApiKey = '175ffd5710eba9b52b1d7f46de42a152';
	//const movieListURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=en-US`;
	const movieListURL = `https://api.themoviedb.org/3/movie/${
		children ? children : 'now_playing'
	}?api_key=${ApiKey}&language=en-US`;

	// 	The React docs say that you can use props.children on
	//components that represent ‘generic boxes’ and that ‘don’t know their children ahead of time’.
	//For me, that didn’t really clear things up.
	//I’m sure for some, that definition makes perfect sense but it didn’t for me.
	// My simple explanation of what this.props.children does is that it is used
	//to display whatever you include between the opening and closing tags when invoking a component.

	useEffect(() => {
		fetchMovieList();
	}, [movieListURL]);

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
			<section className="movie-container">
				{movies.map(movie => (
					<article key={movie.id}>
						<Link to={`/movies/${movie.id}`}>
							<img
								src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
								alt={`${movie.id}`}
							/>
							<div className="movie-information">
								<h2>{movie.title}</h2>
								<p className="release-date">{`Released ${movie.release_date}`}</p>
							</div>
						</Link>
					</article>
				))}
			</section>
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
