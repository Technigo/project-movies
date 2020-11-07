import React from 'react';

import { Link } from 'react-router-dom';

const MovieDetail = ({
	backdrop_path,
	poster_path,
	title,
	vote_average,
	tagline,
	overview,
	imdb_id,
	genres,
	production_companies,
}) => {
	return (
		<>
			<section
				className="details"
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 6%, rgb(0, 0, 0) 100%), url("https://image.tmdb.org/t/p/w1280/${backdrop_path}")`,
				}}
			>
				<div className="details-container">
					<img
						src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
						alt={`${title}`}
						className="details__img"
						tabIndex="0"
					/>
					<div className="details__info">
						<h3 tabIndex="0">
							{title}
							<span className="details__rate" tabIndex="0">
								{vote_average}/10
							</span>
						</h3>
						<p className="details__tagline">{tagline}</p>
						<p className="movie__details--description" tabIndex="0">
							{overview}
						</p>
						<a href={`https://www.imdb.com/title/${imdb_id}/`} target="blank">
							<img
								src="../Images/imdb.svg"
								alt="link direction icon"
								className="details__imdb"
							/>
						</a>
						<div className="details__tag-container">
							<h4 tabIndex="0">Genres:</h4>
							<div className="details__tag-lists">
								{genres.map(genre => (
									<ul className="details__tag-list-color" key={genre.name}>
										<li tabIndex="0">{genre.name}</li>
									</ul>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="company">
					<h4 tabIndex="0">Production companies:</h4>
					<div className="company-container">
						{production_companies.map(company => (
							<Link
								className="company__names"
								key={company.name}
								to={`/company/${company.id}`}
							>
								{company.name}
							</Link>
						))}
					</div>
				</div>
			</section>
		</>
	);
};
export default MovieDetail;
