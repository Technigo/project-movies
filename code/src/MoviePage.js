import React from "react";
import {useParams} from "react-router-dom";
import Movie from "components/Movie";

const MoviePage = ({movies}) => {
	const param = useParams()
const matchMovie = movies.find((movies)=>movies.id === param.id)

	return (
		<div>
		< Movie name={matchMovie.id} id={matchMovie.id}
		 />
		</div>
	);
};

export default MoviePage;
