import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from 'utils/urls';

const List = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setMovieList(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="movie-list">
      {movieList.map((movie) => {
        return (
          <Link className="movies" key={movie.id} to={`/details/${movie.id}`}>
            <div className="movie-cards">
              <div className="image-overlay" />
              <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" />
              <div className="image-text">
                <h1 className="list-title">{movie.title}</h1>
                <h2 className="release-date">Released {movie.release_date}</h2>
              </div>
            </div>
          </Link>
        )
      })}

    </div>
  )
}

export default List;