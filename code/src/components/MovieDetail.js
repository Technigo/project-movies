import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetail = ({
	backdrop_path,
	poster_path,
	title,
	vote_average,
	overview,
	imdb_id,
	genres,
	production_companies,
}) => {
	return (
		// <section className="movie-details-container">
		<>
			<div
				className="movie-details-background"
				style={{
					backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${backdrop_path}")`,
				}}
			></div>

			<div className="movie-details-wrapper">
				<img
					src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
					alt={`${title}`}
					className="poster-image"
				/>
				<h3>
					{title}
					<span className="average-vote">{vote_average}/10</span>
				</h3>
				<p className="movie-description">{overview}</p>
				<a href={`https://www.imdb.com/title/${imdb_id}/`} target="blank">
					Imdb
				</a>
				<div className="genres">
					<p>Genre:</p>
					<div className="genres-wrapper">
						{genres.map(genre => (
							//<Link key={genre.name} to={`/genre/${genre.id}`}>
							<ul className="movie-genres" key={genre.name}>
								<li>{genre.name}</li>
							</ul>
							//</Link>
						))}
					</div>
				</div>

				<div className="companies">
					<p>Production companies:</p>
					<div className="production-wrapper">
						{production_companies.map(company => (
							<Link key={company.name} to={`/company/${company.id}`}>
								<ul className="production-companies">
									<li>{company.name}</li>
								</ul>
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
export default MovieDetail;
