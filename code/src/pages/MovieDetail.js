import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

//import Actor from '../components/MovieActors';

import '../styles/MovieDetails.css';

const MovieDetail = () => {
	const { movieId } = useParams();
	const [movieDetail, setMovieDetail] = useState({});
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
				setMovieDetail(json);
				console.log(json);
			});
	};

	//console.log(movieDetail);

	return (
		<section className="movie-details-container">
			{movieDetail.title && (
				<>
					<div
						className="movie-details-background"
						style={{
							backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${movieDetail.backdrop_path}")`,
							backgroundRepeat: 'no-repeat',
						}}
					></div>
					{/* <img
						src={`https://image.tmdb.org/t/p/w1280/${movieDetail.backdrop_path}`}
						alt={`${movieDetail.title}`}
					/> */}
					<div className="movie-details-wrapper">
						{/* <img
							src={`https://image.tmdb.org/t/p/w300/${movieDetail.poster_path}`}
							alt={`${movieDetail.title}`}
							className="poster-image"
						/> */}
						<div className="movie-details-info">
							<h3>
								{movieDetail.title}
								<span className="average-vote">
									{movieDetail.vote_average}/10
								</span>
							</h3>
							<p className="movie-description">{movieDetail.overview}</p>
						</div>
					</div>
					<div className="genres">
						<p>Genre:</p>
						{movieDetail.genres.map(genre => (
							<Link key={genre.name} to={`/genre/${genre.id}`}>
								<li>{genre.name}</li>
							</Link>
						))}
					</div>
					<div className="companies">
						<p>Production companies:</p>
						{movieDetail.production_companies.map(company => (
							<Link key={company.name} to={`/company/${company.id}`}>
								<li>{company.name}</li>
							</Link>
						))}
					</div>
				</>
			)}
		</section>
	);
};
export default MovieDetail;
// const MovieDetail = ({ onMovieClick, movieDetail }) => {
// 	const { movieId } = useParams();

// 	useEffect(() => {
// 		onMovieClick(movieId);
// 	}, []);

// 	return (
// 		<section>
// 			<img
// 				src={`https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path}`}
// 				alt={`${movieDetail.title}`}
// 			/>
// 			<h2>{movieDetail.title} </h2>
// 			<p>{movieDetail.vote_average}/10</p>
// 			<p>{movieDetail.overview}</p>
// 			<img
// 				src={`https://image.tmdb.org/t/p/w300${movieDetail.poster_path}`}
// 				alt={`${movieDetail.title}`}
// 			/>
// 		</section>
// 	);
// };
// export default MovieDetail;
