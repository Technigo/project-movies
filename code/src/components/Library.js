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

  /* const Library = ({ library }) => { */
  return (
    <section className="library">
      {library.map((movie) => {
        return (
          <Link
            key={movie.id}
            to={`/details/${movie.id}`}>
            <div className="release-container">
              <img className="library-image" src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="poster" />
              <h1>{movie.title}</h1>
              <p>Release date: {movie.release_date}</p>
            </div>

          </Link>
        )
      })}
    </section>
  )
};

export default Library;

// First page before you click, should have an overlay and title in white
// fix id later and poster images
// took away image container - put back if needed
// <div className="library-element">