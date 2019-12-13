import React, { useState, useEffect } from "react";
import { Popular } from "components/Popular";

export const PopularList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=f8c1be31e73a50dc5317ce4e3571f7a6&language=en-US&page=1"
    )
      .then(res => res.json())
      .then(json => {
        setMovies(json.results);
        // console.log(json.results);
      });
    setLoading(false);
  }, []);

  return (
    <section className="movies">
      {loading && <h2 className="loading">Loading movies..................</h2>}
      {movies.map(movie => (
        <Popular
          title={movie.title}
          image={movie.poster_path}
          date={movie.release_date}
          id={movie.id}
        />
      ))}
    </section>
  );
};
