import React, { useState, useEffect } from "react";
import { TOKEN } from "token";
import MovieList from "components/MovieList";

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
            coverImgUrl: `https://image.tmdb.org/t/p/w300/${item.poster_path}`,
            backdropImgUrl: `https://image.tmdb.org/t/p/w780/${item.backdrop_path}`,
          }))
        );
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <MovieList movies={movies}/>
    </main>
  );
};
