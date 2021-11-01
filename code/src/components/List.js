import React from 'react';

const List = ({ movies }) => {
	return (
		<section>
			{movies.map((movie) => (
				<div key={movie.original_title}>{movie.original_title}
                <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}></img>
                </div>
			))}
		</section>
	);
};

export default List;
