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
							<article key={movie.id} className="movie-group">
								<img
									className="movie-img"
									src={movie.coverImgUrl}
									alt={movie.title}
								/>
								<div className="text-hover">
									<h2 className="title">{movie.title}</h2>
									<p className="release">Released:{movie.date}</p>
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
