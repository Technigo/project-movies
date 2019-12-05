import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Movie from "pages/Movie";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=2cd0162b203bf54d75948b07b61d634f&language=en-US&page=1"
    )
      .then(res => res.json())
      .then(json => setMovies(json.results));
  }, []);

  console.log(movies);

  return (
    <div className="movieListPage">
      {movies.map(movie => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} />
          <div className="movieDetails">
            <h1>{movie.original_title}</h1>
            <p>Released {movie.release_date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

//``
