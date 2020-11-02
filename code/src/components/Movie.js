import React from 'react';
import { Link } from 'react-router-dom';

export const Movie = ({ id, title, release_date, poster_path }) => {
	return (
		<Link to={`/movies/${id}`}>
			<article>
				<img
					src={`https://image.tmdb.org/t/p/w300${poster_path}`}
					alt="Movie poster"
				/>
				<div>
					<h1>{title}</h1>
					<p>Released {release_date}</p>
				</div>
			</article>
		</Link>
	);
};
