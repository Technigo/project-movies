import React, { useEffect, useState } from 'react'

export const MovieList = () => {
    const MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=f8d93b3169765fb54ceb97a483ec4821&language=en-US&page=1'
    const [movieList, setMovieList] = useState([])
    
    useEffect(() => {
      fetch(MOVIES_URL)
        .then((response) => response.json())
        .then((json) => setMovieList(json.results))
    },[])
  
    return (
      <section className='movie-list'>
        {movieList.map((movie) => (
          <div key={movie.id} className='movie-wrapper'>
            <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt='{movie.title}'/>
            <div className='movie-details'>
              <h1>{movie.title}</h1>
              <h3>{movie.release_date}</h3>
            </div>
          </div>
        ))}
      </section>
    )
}