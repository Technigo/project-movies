import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ list }) => {
	console.log(list);

	return (
		<section className="wrapper">
			{list.map((movie) => (
				<Link to={`${movie.id}`} key={movie.id}>
					<div className="container">
						<img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="cover of movie" />
						<div className="movie-details">
							<h1>{movie.title}</h1>
							<p>Released {movie.release_date}</p>
						</div>
					</div>
				</Link>
			))}
		</section>
	);
};

export default List;
