import React from 'react';
import MovieBox from './MovieBox';
import "../components/PopularList.css"



const PopularList = ({ movies }) => {
	return (
		//here we map our movies and list them and we display a poster for each with original title and release date
		<section className="movies">
			{movies.map((movie) => (
				<MovieBox key={movie.id} movie={movie} />
			))}
		</section>
	);
};

export default PopularList;
