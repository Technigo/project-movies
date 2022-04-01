import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "components/smart/Header";
import MovieList from "components/smart/MovieList";
import MovieDetails from "components/smart/MovieDetails";
import NotFound from "components/dumb/NotFound";

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [selection, setSelection] = useState("now_playing");
  const TOKEN = 'd36dd5036852810f7b509134ae270b85'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${selection}?api_key=${TOKEN}&language=en-US&page=1`)
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
            backdropImgUrl: `https://image.tmdb.org/t/p/w1280${item.backdrop_path}`,
          }))
        );
        setSelection(selection);
      })
      .catch((error) => console.log(error));
  }, [selection]);

  return (
    <>
      <Header movies={movies} value={selection} setSelection={setSelection} />
      <main>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="movies/:movieId" element={<MovieDetails movies={movies} />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
    </>
  );
};
