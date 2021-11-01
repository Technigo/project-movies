import React, { useState, useEffect } from "react";
import Loading from "components/Loading";
import MovieList from "pages/MovieList";

const API =
	"https://api.themoviedb.org/3/movie/popular?api_key=48753b4635882bcc3d25cfb1266d76bb&language=en-US&page=1";

const Home = () => {
	const [loading, setLoading] = useState(false);
	const [movies, setMovies] = useState([])



	useEffect(() => {
		getmoviedata();
	}, []);

	const getmoviedata = () => {
		setLoading(true);
		fetch(API)
			.then((res) => res.json)
			.then((data) => (data))
			.finally(() => setLoading(false));
	};

	return (
		<>
			{/* Loading component */}

			<div>{loading && <Loading />}</div>

			{/* Movielist */}
			
<MovieList movies={movies} />
			
		</>
	);
};

export default Home;
