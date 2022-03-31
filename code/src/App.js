import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { TOKEN } from "token";
import MovieList from "components/MovieList";
import MovieDetails from "components/MovieDetails";

const Header = () => {
  return (
    <header>
      <h1>Movie Madness</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
};

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TOKEN}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(
          data.results.map((item) => ({
            id: item.id,
            title: item.title,
            date: item.release_date,
            description: item.overview,
            rating: item.vote_average,
            coverImgUrl: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
            backdropImgUrl: `https://image.tmdb.org/t/p/w780${item.backdrop_path}`,
          }))
        );
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="movies/:movieId" element={<MovieDetails movies={movies} />} />
      </Routes>
    </>
  );
};
