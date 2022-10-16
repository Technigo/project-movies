import React from 'react';
import { Link } from 'react-router-dom';

//mapping all the movies with img, title, ratings

const Movies = ({ movies, loading }) => {
	if (loading) {
		return <p>Loading...</p>;
	}
	return (
		<div className="movies-container">
			{movies.map((movie) => {
				return (
					<>
						<Link to={`movies/${movie.id}`}>
							<article key={movie.id} className="movies">
								<img
									className="movie-img"
									src={movie.posterUrl}
									alt={movie.title}
								/>
								<div className="text-hover">
									<h2 className="title">{movie.title}</h2>
									<p className="rating">Rating: {movie.rating} /10</p>
								</div>
							</article>
						</Link>
					</>
				);
			})}
		</div>
	);
};

export default Movies;
