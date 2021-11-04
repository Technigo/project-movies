import React, { useEffect, useState } from 'react'; //import useEffect and useState
import { Link } from 'react-router-dom'; //import link
import styled from 'styled-components';
import { Loading } from './Loading';

import { API_URL } from './Url';

const MovieListText = styled.div`
	display:flex;
  flex-direction: column; 
  color:white;
`

const MoviePoster = styled.img `
	width:100%;
`


export const MovieLists = () => {
	const [movies, setMovies] = useState([]); // a state property that collects all the movies
	const [loading, setLoading] = useState(false); // a state property that holds the loading state

	useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .finally(() => setLoading(false));
  };

	//Fetch movie data detail API
	// useEffect(() => {
		
	// 	fetch(
	// 		API_URL
	// 	)
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			setMovies(json.results);
	// 		});	
	// 		.finally(() => setLoading(false));
	// }, []); //empty dependency
	
	return (
		<div>{loading && <Loading />}
		<section className="main-container">
			{movies.map((movie) => (
				<div key={movie.id}>
					<Link to={`/movie/${movie.id}`}>
						<div className="image-container">
							<div className="overlay">
								<MovieListText>
									<h2 >{movie.title}</h2>
									<p>{movie.release_date}</p>
								</MovieListText>
							</div>
							<MoviePoster
							src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
							alt={movie.title}
						/>
					</div>
					</Link>
				</div>
				 
			))}
		</section>
		</div>
	);
};
