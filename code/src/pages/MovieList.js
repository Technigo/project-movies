import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

import { Link } from "react-router-dom";
import { NavBar } from "components/NavBar";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [chosenList, setChosenList] = useState("popular");
  const [loading, setLoading] = useState(false);

  const dropDownChosenMovieList = (movieList) => {
    setChosenList(movieList);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${chosenList}?api_key=995425e2e6cd0fcf599ff795098e1e8b&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      });
  }, [chosenList]);

  return (
    <main>
      {loading && <LoadingSpinner />}
      {!loading && (
        <section>
          <NavBar
            dropDownChosenMovieList={dropDownChosenMovieList}
            chosenList={chosenList}
          />
          <div className="movie-list">
            {movies.map((movie) => (
              <div className="movie" key={movie.id}>
                <Link className="movie-link" to={`/movies/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="movie-details">
                    <h2>{movie.title}</h2>
                    <p>Released:{movie.release_date}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};
