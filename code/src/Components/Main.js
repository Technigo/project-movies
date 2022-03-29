import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from 'utils/urls';

const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);
  {
    return (
      <section className='movie-wrapper'>
        {movies.map((movie) => (
          <Link to={`movie/${movie.id}`}>
            <div key={movie.id} className='movie-card'>
              <img
                className='movie-image'
                src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                alt='movieposter'
              />
              <div className='movie-text'>
                <h2 className='movie-title'>{movie.title}</h2>
                <p className='movie-release-date'>{movie.release_date}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    );
  }
};
export default Main;
