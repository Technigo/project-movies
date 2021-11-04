import React from 'react'
import { Link }  from 'react-router-dom'

import './movieList.css'

export const TopRatedList = ({topRatedList}) => {

    return (
      <section className="movie-container"> 
       {topRatedList.map(movie => (

		<Link to={`/top_rated/${movie.id}`} key={movie.id}> 
		<div  className="movie-card" >
			<div className="image-container">
				<img 
					src={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`} 
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