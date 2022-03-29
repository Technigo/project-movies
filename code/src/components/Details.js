import React from 'react';

const Details = ({ movies }) => {
	return (
		<section>
			{movies.map((movie) => {
				<div>{movie.name}</div>;
			})}
		</section>
	);
};

export default Details;
