import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY } from 'utils/key';
// import SingleMovie from './SingleMovie';

const TrendingList = () => {
  const [movieList, setMovieList] = useState([])
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => setMovieList(data.results))
      .catch((error) => console.log(error))
  }, [])
  return (
    <section>
      {movieList.map((movie) => {
        return (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <h2>{movie.title}</h2>
          </Link>
        )
      })}
    </section>
  )
}

export default TrendingList;