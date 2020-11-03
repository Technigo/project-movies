import React, { useState, useEffect } from 'react'


export const MovieList = () => {
  const [topMovies, setTopMovies] = useState([]); 
  //We use [] in the Use state hook since it will be returning an array
  const MOVIE_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=3bc84b0ae751d27c186bde28023ce8fe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
  useEffect(() => {
    fetch(MOVIE_URL)
      .then((response) => response.json())
      .then((json) => {
        setTopMovies(json.results)
        console.log(json)
      })
  }, [])

  return (
      <div className='all-top-movies'>
        {topMovies.map((movie) => (
        <div className='top-movie-card' key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}/>
          <h3>{movie.original_title}</h3>
          <p>Release Date : {movie.release_date}</p>
          <p>⭐   {movie.vote_average} / 10</p>
        </div>  
      ))}
      </div>
      )
}
