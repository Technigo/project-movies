import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './movie.css';

export const Movie = ({ id, title, release_date, poster_path }) => {
	const [showTitle, setShowTitle] = useState(false);
	return (
		<Link
			to={`/movies/${id}`}
			onMouseOver={() => setShowTitle(true)}
			onMouseLeave={() => setShowTitle(false)}>
			<article className="movie__wrapper">
				<img
					src={`https://image.tmdb.org/t/p/w342${poster_path}`}
					alt="Movie poster"
				/>
				{showTitle && (
					<div className="movie__description">
						<h1>{title}</h1>
						<p>Released {release_date}</p>
					</div>
				)}
			</article>
		</Link>
	);
};
