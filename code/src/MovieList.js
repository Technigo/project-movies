import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Loading from "components/Loading";
import { PopularUrl } from "Urls";

const MovieList = () => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch(PopularUrl)
			.then((res) => res.json())
			.then((json) => setMovies(json.results))
			.finally(setLoading(false));
	}, []);

	return (
		<div className="movieListContainer">
			{loading && <Loading />}
			{movies.map((movie) => (
				<Link to={`/movies/${movie.id}`}>
					<div key={movie.id} className="contentBlock">
						<div className="movieListContent">
							<img
								src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
								alt={movie.id}
							/>
							<div className="textMovieList">
								<h1>{movie.title}</h1>
								<p>
								
									Release date:
									<Moment format="MM/DD">{movie.release_date}</Moment>
								</p>
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default MovieList;
