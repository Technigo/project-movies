import React from "react";
import { useParams } from "react-router";
const MovieDetail = () => {
	const { title } = useParams();


	return (
		<div>
		
			<h2>Title: {title} </h2>
     
		</div>
	);
};

export default MovieDetail;
