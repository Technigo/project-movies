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
		<>
			<section
				className="movie-details-background"
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url("https://image.tmdb.org/t/p/w1280/${backdrop_path}")`,
				}}
			>
				<div className="movie-details-wrapper">
					<img
						src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
						alt={`${title}`}
						className="poster-image"
					/>
					<div className="more-info">
						<h3>
							{title}
							<span className="average-vote">{vote_average}/10</span>
						</h3>
						<p className="movie-description">{overview}</p>
						<a href={`https://www.imdb.com/title/${imdb_id}/`} target="blank">
							IMDB<span className="imdb-link"> 🔗</span>
						</a>
						<div className="genres-wrapper">
							<p>Genres:</p>
							<div className="genres">
								{genres.map(genre => (
									<ul className="movie-genres" key={genre.name}>
										<li>{genre.name}</li>
									</ul>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="production-companies-container">
				<p>Production companies:</p>
				<div className="companies-wrapper">
					{production_companies.map(company => (
						<Link key={company.name} to={`/company/${company.id}`}>
							<ul className="production-companies">
								<li>{company.name}</li>
							</ul>
						</Link>
					))}
				</div>
			</div>
		</>
	);
};
export default MovieDetail;
