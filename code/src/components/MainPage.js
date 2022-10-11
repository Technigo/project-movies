import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=6cfbbdc6034efd81a5554b5cb5a11377&language=en-US&page=1')
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
    <section className="list">
      {movies.map((movie) => {
        return (

          <Link
            key={movie.id}
            to={`/details/${movie.id}`}>

            <div>
              <img src={`http://image.tmdb.org/t/p/w780/${movie.poster_path}`} alt={movie.title} />
              {movie.title}
            </div>
          </Link>
        )
      })}
    </section>
  )
};

export default MainPage;