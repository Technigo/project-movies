import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetail = ({
	backdrop_path,
	title,
	vote_average,
	overview,
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
					backgroundRepeat: 'no-repeat',
				}}
			></div>

			<div className="movie-details-wrapper">
				{/* <img
        src={`https://image.tmdb.org/t/p/w300/${movieDetail.poster_path}`}
        alt={`${movieDetail.title}`}
        className="poster-image"
      /> */}
				<div className="movie-details-info">
					<h3>
						{title}
						<span className="average-vote">{vote_average}/10</span>
					</h3>
					<p className="movie-description">{overview}</p>
				</div>
			</div>

			<div className="genres">
				<p>Genre:</p>
				{genres.map(genre => (
					//<Link key={genre.name} to={`/genre/${genre.id}`}>
					<ul key={genre.name}>
						<li>{genre.name}</li>
					</ul>
					//</Link>
				))}
			</div>

			<div className="companies">
				<p>Production companies:</p>
				{production_companies.map(company => (
					<Link key={company.name} to={`/company/${company.id}`}>
						<li>{company.name}</li>
					</Link>
				))}
			</div>
		</>
	);
};
export default MovieDetail;
