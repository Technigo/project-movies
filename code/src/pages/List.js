import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Movie from 'components/Movie';

const List = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=5c488ae3d23d9ae818b9225c2ec7dd14&language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => setMovieList(data.results))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="movie-list">
      {movieList.map((movie) => {
        return (
          <div className="movie-cards">
            <div className="image-overlay" />
            <Link className="movies" key={movie.id} to={`/details/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" />
              <h1 className="list-title">{movie.title}</h1>
            </Link>
          </div>
        )
      })}

    </div>
  )
}

export default List;