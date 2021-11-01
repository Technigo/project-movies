import React from "react";
import { Link } from "react-router-dom";
import MoviePage from "./MoviePage";

const MovieList = ({movies}) => {
	return (
		<div>
		{/* 	{movies.map((movie) => (
				<Link key={movie.id} to={`/movie/${movie.original_title}`}>
					<MoviePage title={movie.original_title}  />
				</Link>
			))}  */}
		</div>
	);
};

export default MovieList;
