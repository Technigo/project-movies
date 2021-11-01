import React, { useState, useEffect, } from "react";
import { Link } from "react-router-dom";


const MovieList = () => {

	const [movies, setMovies] = useState([])


	useEffect(() => {
	
		fetch('https://api.themoviedb.org/3/movie/popular?api_key=48753b4635882bcc3d25cfb1266d76bb&language=en-US')
		.then((res) => res.json())
		.then((json) => setMovies(json.results))
			
	}, []);

	
	return (

		<div >
		{movies.map((movie) => (
			<Link key={movie.id} to={`/movies/${movie.title}`}>
				

				<div className="movieListContent">
					<img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`}  alt={movie.title} />
					<h1>{movie.title}</h1>
					<p>Released {movie.release_date}</p>
				</div>
			</Link>
		))}
	</div>






			
	);
};

export default MovieList;
