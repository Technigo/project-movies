import React, { useEffect, useState } from 'react'
// import { Link } from "react-router-dom" 
import { MovieThumb } from 'components/MovieThumb'

import './MovieList.css'

export const MovieList = () => {
  const baseURL = 'https://api.themoviedb.org'
  const listID = '7063718'
  const apiKey = '18fb720a795c179526f7b480bba674dd'
  const movieUrl = `${baseURL}/3/list/${listID}?api_key=${apiKey}`
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(movieUrl)
      .then(response => response.json())
      .then(json => setMovies(json.items))
  }, [movieUrl])
  return (
    // <section className='movie-wrapper'>
    //   {movies.map((movies) =>
    //     <div className='movie-title' key={movies.id}>
    //       <MovieDetails />
    //       <h1>{movies.title}</h1>
    //       <div className='movie-image'>
    //       {/* <Link to={`//${movies.id}`}> */}
    //         <img 
    //         alt={movies.title} 
    //         className='movie-img-thumb' 
    //         src={`https://image.tmdb.org/t/p/w342${movies.poster_path}`} />
    //         {/* </Link> */}
    //       </div>
    //     </div>
    //   )}
    // </section>
    <section className='movie-wrapper'>
      {movies.map(movie => (
				<MovieThumb key={movie.id} {...movie} />
			))}
    </section>
  )
}