import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from 'Utils/Urls';

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  // Fetches list of popular movies and creates a function to show a loading page if info is loading
  useEffect(() => {
    setLoading(true);
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
      })
      .catch((e) => {
        console.error(console.error(e))
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  if (loading) {
    return (
      <p>Loading </p>
    )
  }
  // maps through the list and returns specific info for all of the movies
  return (
    <section className="sectionWrapper">
      {movies.map((movie) => {
        return (
          <Link
            key={movie.id}
            to={`/details/${movie.id}`}
            // Creates separate boxes for all movies and for the overlay effect
            className="movieBox">
            <img className="img" src={`http://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={movie.title} />
            <div
              className="hoverBox"
              tabIndex="0"
              role="button">
              <h1 className="hoverDetails hoverTitle">{movie.title}</h1>
              <p className="hoverDetails hoverDate">Released: {movie.release_date}</p>
            </div>

          </Link>
        )
      })}
    </section>
  )
};

export default MainPage;