import React from 'react';
import {Link} from 'react-router-dom';

import "../components/PopularList.css"



const PopularList = ({ movies }) => {
	return (
		//here we map our movies and list them and we display a poster for each with original title and release date
		<section className="movies">
			{movies.map((movie) => (
				<Link key={movie.original_title} to={`/details/${movie.id}`}>
				<div>
                	<img src ={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt="posters of movies"></img>
					<div className="details">
            			<h1>{movie.title}</h1>
            			<p>Released {movie.release_date}</p>
          			</div>
				</div>
				</Link>
			))}
		</section>
	);
};

export default PopularList;
