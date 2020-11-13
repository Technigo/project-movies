import React, { useState , useEffect } from 'react';

import { Link } from 'react-router-dom';

export const MovieList = () => {
  const[movies,setMovies] = useState([]);
  const[listType, setListType] = useState("top_rated");

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${listType}?sort_by=vote_average.desc&api_key=303d50a32fc0419fb55796d006e5d6c2&language=en-US&page=1`)
    .then((res) => res.json())
    .then((json) => {
     setMovies(json.results);
   })
  },[listType]);

const handleListTypeChange = (event) => {
    setListType(event.target.value);
};

  return (<>
    <header className="app-header">
    <select className="select-list-type"
      value={listType}
      onChange={handleListTypeChange}
    >
      Change view
      <option value="now_playing">Now playing in theatres</option>
      <option value="popular">Popular</option>
      <option value="top_rated">Top Rated</option>
      <option value="upcoming">Coming in theatres</option>
    </select>

    </header>
    <section className="app-container">
    {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id} className="movie-link">
          <img className="movie-poster" src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
          <div className="movie-info-container">
          <h2 className="movie-title">{movie.title}</h2>
          <h2 className="movie-release-date">Release date: {movie.release_date}</h2>
          </div>
        </Link>    
    ))}
    </section></>
  );
}