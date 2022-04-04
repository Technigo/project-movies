import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { AiFillCaretLeft } from 'react-icons/ai';

const Details = () => {
	const { movieId } = useParams();

	const [ details, setDetails ] = useState([]);

	const navigate = useNavigate();

	const onBackButtonClick = () => {
		//Use this if go to previous page
		//navigate(-1)

		navigate('/');
	};

	useEffect(
		() => {
			fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=25d003084b426a61d39038ca690f9a7c&language=en-US`).then((res) => res.json()).then((data) => setDetails(data));
		},
		[ movieId ]
	);

	console.log(details);

	return (
		<section>
			{details.backdrop_path && (
				<div
					className="details-container"
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 70%, rgb(0, 0, 0) 100%), url(https://image.tmdb.org/t/p/original${details.backdrop_path})`
					}}
				>
					<button onClick={onBackButtonClick}>
						<span>
							<AiFillCaretLeft />
						</span>Movies
					</button>
					<div className="details">
						<img className="movie-details-cover-image" src={`https://image.tmdb.org/t/p/w342/${details.poster_path}`} alt={details.title} />
						<div className="movie-introduction">
							<h1>
								{details.title}
								<span className="votes">{details.vote_average}/10</span>
							</h1>
							<p>{details.overview}</p>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Details;
