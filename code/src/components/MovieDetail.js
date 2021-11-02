import React from "react";
import { useParams } from "react-router";
const MovieDetail = () => {
	const { id } = useParams();


	return (
		<div>
		
			<h2>Title: {id} </h2>
     
		</div>
	);
};

export default MovieDetail;
