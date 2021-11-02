import React from 'react'
import { Link }  from 'react-router-dom'

export const MovieList = ({movieList}) => {
	console.log(movieList)
    return (
      <article> 

       {movieList.map(movie => (
		<Link to={`/movies/${movie.id}`} key={movie.id}> 
         <div>
           <h1>{movie.title}</h1>
		   <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
         </div>
		</Link>
       	))}


      </article>
    )
  }

 