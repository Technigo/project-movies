import React, { useState } from 'react';

const Actor = ({ movieId }) => {
	const [actors, setActors] = useState([]);

	const ApiKey = '175ffd5710eba9b52b1d7f46de42a152';

	// const fetchMovieActor = movieId => {
	fetch(
		`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${ApiKey}`
	)
		.then(res => res.json())
		.then(json => {
			setActors(json.cast);
			console.log(json.cast);
		});
	// };

	return actors.map(actor => (
		<div>
			<p>{actor.name}</p>
			<p>{actor.character}</p>
		</div>
	));
};
export default Actor;
