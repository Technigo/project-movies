import React from 'react';
import { Link } from 'react-router-dom';

const MovieThumb = ({ id, poster_path, name, title, release_date }) => {
	return (
		<article>
			<Link to={`/movies/${id}`}>
				<img
					src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
					alt={name}
				/>
				<div className="movie-information">
					<h2>{title}</h2>
					<p className="release-date">{`Released ${release_date}`}</p>
				</div>
			</Link>
		</article>
	);
};
export default MovieThumb;

//used in MovieList and CompanyList
