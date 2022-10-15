import React from 'react';
import { Link } from 'react-router-dom';

//mapping all the movies with img, title, ratings

const Movies = ({ movies }) => {
	return (
		<div className="movies-container">
			{movies.map((movie) => {
				<Link to={`movies/${movie.id}`}>
					<article key={movie.id} className="movie-group">
						<img
							className="movie-img"
							src={movie.coverImgUrl}
							alt={movie.title}
						/>
						<div className="movie-text-group">
							<h2 className="movie-title">{movie.title}</h2>
							<p className="movie-date">Released {movie.date}</p>
						</div>
					</article>
				</Link>;
			})}
		</div>
	);
};

export default Movies;
