import React from 'react'
import { Link }  from 'react-router-dom'

import './movieList.css'

export const MovieList = ({movieList}) => {
	console.log(movieList)
    return (
      <section className="movie-container"> 
       {movieList.map(movie => (
		<Link 
		to={`/movies/${movie.id}`} 
		key={movie.id}
		className="movie-card"> 
		<img 
			src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} 
			alt={movie.title}
			className="movie-image" />
         <div className="movie-details">
			 <div className="text">
			 	<h1>{movie.title}</h1>
		   		<p>Release Date: {movie.release_date}</p>
			 </div>
         </div>
		</Link>
       	))}
      </section>
    )
  }

 