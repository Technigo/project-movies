import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "components/Loading";

const MovieList = () => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(
			"https://api.themoviedb.org/3/movie/popular?api_key=48753b4635882bcc3d25cfb1266d76bb&language=en-US"
		)
			.then((res) => res.json())
			.then((json) => setMovies(json.results))
			.finally(setLoading(false));
	}, []);

	return (
		<div className="movieListContainer">
			{loading && <Loading />}
			{movies.map((movie) => (
				<Link key={movie.id} to={`/movies/${movie.title}`}>
					<div className="contentBlock">
						<div className="movieListContent">
							<img
								src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
								alt={movie.title}
							/>
							<div className="textMovieList">
								<h1>{movie.title}</h1>
								<p>Released {movie.release_date}</p>
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default MovieList;
