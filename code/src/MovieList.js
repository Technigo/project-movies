import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const MovieList = ({id}) => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("popular");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category}?api_key=${id}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => {
          setMovies(json.results)
          console.log(json)
        });
  }, [category]);

  return (
    <div>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="popular">Popular</option>
          <option value="top_rated">Top Rated</option>
          <option value="upcoming">Upcoming</option>
        </select>
      {movies.map(movie => (
   
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title}
          />
          <h1>{movie.title}</h1>
        </Link>
      ))}
    </div>
  );
};