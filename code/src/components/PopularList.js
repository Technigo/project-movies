import React from 'react';
import {Link} from 'react-router-dom';

import "../components/PopularList.css"



const PopularList = ({ movies }) => {
	return (
		<section className="movies">
			{movies.map((movie) => (
				<Link to={`/details/${movie.id}`}>
				<div key={movie.original_title}>
                <img src ={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt="posters of movies"></img>
				<div className="details">
            <h1>{movie.original_title}</h1>
            <p>Released {movie.release_date}</p>
          </div>
				</div>
				</Link>
			))}
		</section>
	);
};

export default PopularList;
