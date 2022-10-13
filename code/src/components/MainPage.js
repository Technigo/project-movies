import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from 'Utils/Urls';

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

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

  return (
    <section className="sectionWrapper">
      {/*  <div className="innerWrapper"> */}
      {movies.map((movie) => {
        return (
          <Link
            key={movie.id}
            to={`/details/${movie.id}`}
            className="movieBox">

            <img className="img" src={`http://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={movie.title} />

            <div className="hoverBox">
              <h1>{movie.title}</h1>
              <p>{movie.release_date}</p>
            </div>

          </Link>
        )
      })}
      {/*       </div> */}
    </section>
  )
};

export default MainPage;