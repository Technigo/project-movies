import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_MOVIE_URL } from 'utils/urls';

export const MovieList = ({ loading, setLoading }) => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(BASE_MOVIE_URL)
      .then((response) => response.json())
      .then((data) => setMovieList(data.results))
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false) })
  }, [])

  if (loading) {
    return (
      <p>Loading...</p>
    )
  }
  return (
    <div className="single-movie-wrapper">
      {movieList.map((singleMovie) => {
        return (
          <div key={singleMovie.id} style={{ position: 'relative' }}>
            <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`} alt="movie poster" />
            <Link className="movie-link" to={`/moviedetails/${singleMovie.id}`}>
              <div className="single-movie-child">
                <h2 style={{ margin: 0, width: '90%', display: 'flex', justifyContent: 'center' }}>{singleMovie.title}</h2>
                <p>{singleMovie.release_date}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};