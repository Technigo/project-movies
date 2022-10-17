import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from 'utils/urls';

const Library = () => {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setLibrary(data.results))
      .catch((error) => console.error(error))
  }, []);

  return (
    <section className="library">
      {library.map((movie) => {
        return (
          <div className="release-container">
            <Link
              key={movie.id}
              to={`/details/${movie.id}`}
              className="movie">
              <div className="img-overlay" />
              <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="poster" />
              <div className="library-info">
                <h1>{movie.title}</h1>
                <p>Release date: {movie.release_date}</p>
              </div>

            </Link>
          </div>
        )
      })}
    </section>
  )
};

/* className="library-image" */

export default Library;

// First page before you click, should have an overlay and title in white
// fix id later and poster images
// took away image container - put back if needed
// <div className="library-element">