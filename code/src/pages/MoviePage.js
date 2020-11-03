import React, { useState, useEffect } from 'react';
import { useParams, Link, Route } from 'react-router-dom';

//import Actor from '../components/MovieActors';
import MovieDetail from '../components/MovieDetail';
import Loader from '../components/Loader';
import Error from '../components/Error';
import '../styles/MovieDetails.css';

const MoviePage = () => {
	const { movieId } = useParams();
	const [movieDetail, setMovieDetail] = useState({});
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	//const [error, setError] = useState(false);
	//const history = useHistory(); //TO PUSH BACK TO MAIN IF WRONG ID ENTERED

	const ApiKey = '175ffd5710eba9b52b1d7f46de42a152';

	// const movieIdMatch = movies.find(movie => movie.movieId === movieId);

	// if (!movieIdMatch) {
	// 	history.push('/');
	// }

	useEffect(() => {
		fetchMovieDetail(movieId);
	}, [movieId]);

	const fetchMovieDetail = movieId => {
		fetch(
			`https://api.themoviedb.org/3/movie/${movieId}?api_key=${ApiKey}&language=en-US`
		)
			.then(res => res.json())
			.then(json => {
				//console.log(json);

				if (json.success === false) {
					setError(true);
					console.log(json);
				} else {
					setMovieDetail(json);
					console.log(json);
				}
				setLoading(false);
			});
	};

	return (
		<main>
			<Route path="/movies">
				<Link to="/">
					<button type="button" className="back-button">
						Home
					</button>
				</Link>
			</Route>
			{loading && <Loader />}
			{error && <Error />}
			{!loading && !error && <MovieDetail {...movieDetail} />}
		</main>
	);
};
export default MoviePage;
