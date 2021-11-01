import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { URL_LIST } from "utils/urls";
import "../css/list.css";

export const List = () => {
	const [list, setList] = useState([]);

	useEffect(() => {
		fetch(URL_LIST)
			.then((response) => response.json())
			.then((data) => setList(data.results));
	}, []);

	return (
		<div className="movie-grid">
			{list.map((movie) => (
				<Link className="movie-container" key={movie.id} to={`/movies/${movie.id}`}>
					<img className="movie-poster" src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title}></img>
					<div className="overlay-container">
						<h1 className="movie-title">{movie.title}</h1>
						<p className="release-date">{movie.release_date}</p>
					</div>
				</Link>
			))}
		</div>
	);
};

// Titel: props.title
// Date: props.release_date
// Image: props.poster_path   //Detta ger nog bara en path till bilden, som i "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg"
// ID: props.id

/*
{
  "images": {
    "base_url": "http://image.tmdb.org/t/p/",
    "secure_base_url": "https://image.tmdb.org/t/p/",
    "backdrop_sizes": ["w300", "w780", "w1280", "original"],
    "logo_sizes": ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
    "poster_sizes": ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
    "profile_sizes": ["w45", "w185", "h632", "original"],
    "still_sizes": ["w92", "w185", "w300", "original"]
  }
}
*/
