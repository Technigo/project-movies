import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Roure} from 'react-router-dom'
// import Movie from './Movie'

const MovieApp = () => {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=d96429e32bc0ad6087333ea9da61765c&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => setMovieList(data.results))
      .catch((error) => console.error(error))
      .finally(() => console.log(movieList))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(movieList)
  return (
    <div>
      {movieList && movieList.map((movie) => {
        return <p key={movie.id}>{movie.original_title}</p>
      })}
    </div>

  )
}

export default MovieApp;