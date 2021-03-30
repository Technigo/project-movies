import React, { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";

const PopularList = () => {
  const [popularList, setPopularList] = useState([]);
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=9e2d991bdc86d11d2a7e1e110ef63aac&language=en-US&page=1";

  const fetchPopularList = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((movies) => setPopularList(movies.results));
  };

  useEffect(() => {
    fetchPopularList();
  }, [setPopularList]);

  return (
    <section className="popular-list">
      <div className="popular-list-wrapper">
        {popularList.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            original_title={movie.original_title}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularList;
