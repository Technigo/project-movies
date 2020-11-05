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
				className="movie__details"
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 6%, rgb(0, 0, 0) 100%), url("https://image.tmdb.org/t/p/w1280/${backdrop_path}")`,
				}}
			>
				<div className="movie__details--container">
					<img
						src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
						alt={`${title}`}
						className="movie__detail--img"
					/>
					<div className="movie__detail--info">
						<h3>
							{title}
							<span className="movie__detail--rate">{vote_average}/10</span>
						</h3>
						<p className="movie__detail--description">{overview}</p>
						<a href={`https://www.imdb.com/title/${imdb_id}/`} target="blank">
							<p>
								IMDB
								<img
									src="../Images/link.svg"
									alt="link direction icon"
									className="movie__detail--imdb"
								/>
							</p>
						</a>
						<div className="movie__detail--tag">
							<p className="movie__detail--tag--heading">Genres:</p>
							<div className="movie__detail--tag--list--wrapper">
								{genres.map(genre => (
									<ul
										className="movie__detail--tag--list grey"
										key={genre.name}
									>
										<li>{genre.name}</li>
									</ul>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="movie__detail--tag--company">
				<p className="movie__detail--tag--heading">Production companies:</p>
				<div className="movie__detail--tag--list--wrapper">
					{production_companies.map(company => (
						<Link key={company.name} to={`/company/${company.id}`}>
							<ul className="movie__detail--tag--list purple">
								<li>{company.name}</li>
							</ul>
						</Link>
					))}
				</div>
			</section>
		</>
	);
};
export default MovieDetail;
