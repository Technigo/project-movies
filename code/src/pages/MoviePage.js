import React from "react";
import {useParams} from "react-router-dom";
import Movie from "components/Movie";

const MoviePage = () => {
	const param = useParams()

	console.log(param)

	return (
		<div>
			<p> hello here is a movie</p>
		</div>
	);
};

export default MoviePage;
