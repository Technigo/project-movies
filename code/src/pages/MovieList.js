import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
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
          <div>
            {movies.map((movie) => (
              <div key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    alt={movie.original_title}
                  />
                </Link>
                <h2>{movie.original_title}</h2>
                <h3>{movie.release_date}</h3>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};
