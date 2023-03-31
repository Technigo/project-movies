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
      <h1>Loading...</h1>
    )
  }
  return (
    <div className="list-wrapper">
      {movieList.map((singleMovie) => {
        return (
          <div key={singleMovie.id} style={{ position: 'relative' }}>
            <img className="poster" src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`} alt="movie poster" />
            <Link className="list-link" to={`/moviedetails/${singleMovie.id}`}>
              <div className="single-item-child">
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