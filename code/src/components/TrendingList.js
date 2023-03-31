import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_KEY } from 'utils/key';
import './TrendingList.css'
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
    <section className="frontPage">
      {movieList.map((movie) => {
        return (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <img src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="poster" />
            <div className="movieDetails">
              <h1>{movie.title}</h1>
              <p>Released {movie.release_date}</p>
            </div>
          </Link>
        )
      })}
    </section>
  )
}

export default TrendingList;