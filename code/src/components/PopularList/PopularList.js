import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const PopularList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f8c1be31e73a50dc5317ce4e3571f7a6&language=en-US&page=1"
    )
      .then(res => res.json())
      .then(json => {
        setMovies(json.results);
        console.log(json.results);
      });
  }, []);

  return (
    <div className="movies">
      {movies.map(movie => (
        <div key={movie.id} className="movie">
          <Link to={`/details/${movie.idArtist}`} className="movie_grid">
            <img
              src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie_details">
              <h2>{movie.title}</h2>
              <p>Released: {movie.release_date}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
