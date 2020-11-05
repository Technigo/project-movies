import React, { useState, useEffect } from 'react';
import { Loader } from '../components/Loader';
import { MovieThumb } from '../components/MovieThumb';
import '../styles/PopularList.css';

export const PopularList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=a4952259f6d389d2957bfec34fa69938&language=en-US&page=1'
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setMovies(json.results);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <main className="popular-page">
          {movies.map((movie) => (
            <MovieThumb key={movie.id} {...movie} />
          ))}
        </main>
      )}
    </>
  );
};
