import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PopularList.css'

export const PopularList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=bdc909b4c34b17568b8111077d9d4d62&language=en-US&page=1')
      .then((res) => res.json())
      .then((data) => {
        setList(data.results)
      })
      .catch((error) => {
        console.error(console.error(error))
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  return (
    <div className="popularPage">
      {list.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
          <div className="details">
            <h1>{movie.title}</h1>
            <p>Released {movie.release_date}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}