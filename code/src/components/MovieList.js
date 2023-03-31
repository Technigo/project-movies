import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading.js';
import Footer from './Footer.js';

const MovieList = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const API_KEY = '7e62f4c867db459871fea2a9a052cb08';
  console.log(list)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then((res) => res.json())
        .then((data) => {
          setList(data.results)
        })
        .catch((e) => {
          console.error(console.error(e))
        })
        .finally(() => {
          setLoading(false);
        })
    }, 1200)
  }, []);

  return (
    <>
      <section className="listContainer">
        {!loading && list.map((movie) => {
          const posterPath = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
          return (
            <Link
              key={movie.id}
              to={`/details/${movie.id}`}
              className="list-element">
              <img src={posterPath} alt={movie.id} />
              <div className="details">
                <h1>{movie.title}</h1>
                <p>Released {movie.release_date}</p>
              </div>
            </Link>
          )
        })}
      </section>
      {!loading && <Footer />}
      {loading && (<Loading />)}
    </>
  );
}

export default MovieList
