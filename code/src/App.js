import React, { useEffect, useState } from 'react'

export const App = () => {
  const MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=f8d93b3169765fb54ceb97a483ec4821&language=en-US&page=1'
  const [movieList, setMovieList] = useState([])
  
  useEffect(() => {
    fetch(MOVIES_URL)
      .then((response) => response.json())
      .then((json) => setMovieList(json.results))
  },[])

  console.log(movieList)
  return (
    <section>
      {movieList.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt='{movie.title}'/>
          <h1>{movie.title}</h1>
          <h3>{movie.release_date}</h3>
        </div>
      ))}
    </section>
  )
  
}
