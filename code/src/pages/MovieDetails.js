import React, { useEffect, useState } from 'react'; //import React
import { useParams } from 'react-router-dom'; //import Param

export const MovieDetails = () => {
	const { movieId } = useParams(); // a variable for param (hook)
	const [movies, setMovies] = useState([]); // a state property that collects all the movie details

	//Fetch movie data detail API
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/movie/${movieId}?api_key=18efe4e6c09e4e4229e6b54ff367df52&language=en-US`
		)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data); //[0]
			});
	}, [movieId]);

	return (
		<div>
			{/* What key should we use? WHY IS IT COMPLAINING ABOUT THE MAP! */}
			<img
				src={`https://image.tmdb.org/t/p/w1280${movies.backdrop_path}`}
				alt={movies.title}
			/>
			<h2>{movies.title} </h2>
			<h2>{movies.vote_average}/10</h2>
			<p>{movies.overview}</p>
		</div>

		// <>
		// 	{/* //What key should we use? WHY IS IT COMPLAINING ABOUT THE MAP! */}
		// 	<div>
		// 		<img
		// 			src={`https://image.tmdb.org/t/p/w1280${movies.backdrop_path}`}
		// 			alt={movies.title}
		// 		/>
		// 		<h2>{movies.title} </h2>
		// 		<h2>{movies.vote_average}/10</h2>
		// 		<p>{movies.overview}</p>
		// 	</div>
		// </>
	);
};
