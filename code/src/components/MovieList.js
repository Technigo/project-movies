import React from 'react'
import { Link }  from 'react-router-dom'

import './movieList.css'

export const MovieList = ({movieList}) => {

    return (

      <section className="movie-container"> 

       {movieList.map(movie => (

		<Link to={`/movies/${movie.id}`} key={movie.id}> 
		<div  className="movie-card" >
			<div className="image-container">
				<img 
					src={`https://image.tmdb.org/t/p/w342/${movie?.poster_path}`} 
					alt={movie.title}
					className="image" />
				<div className="overlay">
					<div className="text">
						<h1>{movie.title}</h1>
						<p>Release Date: {movie.release_date}</p>
					</div>
				</div>
			</div>
		</div>
		</Link>

		))}
      </section>

    )
  }

 