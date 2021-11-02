import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "components/Loading";

const MovieList = () => {
	const [movie, setMovies] = useState([]);
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
			{movie.map((movies) => (

<div className="contentBlock" key={movies.id}>
				<Link to={`/movie/${movies.title}`}>
				
						<div className="movieListContent">
							<img
								src={`http://image.tmdb.org/t/p/original${movies.poster_path}`}
								alt={movies.title}
							/>
							<div className="textMovieList">
								<h1>{movies.title}</h1>
								<p>Released {movies.release_date}</p>
							</div>
						</div>
						</Link>
					</div>
				
			))}
		</div>
	);
};

export default MovieList;
