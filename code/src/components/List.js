import React from "react";
import { Link } from "react-router-dom";

const List = ({list}) => {

	console.log(list)

    return(
		<section className="wrapper">
		{list.map((movie) => (
			<Link to={`${movie.id}`} key={movie.id}>
			<div>
			 <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="cover of movie"/>
			</div>
			 <div>
			   <h1>{movie.title}</h1>
			   <p>Released {movie.release_date}</p>
			 </div>
			</Link>
		))}
	</section>
    )
}

export default List