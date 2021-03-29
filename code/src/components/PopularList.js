import React, { useState, useEffect } from "react";

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
  }, []);

  return (
    <section className="popular-list">
      <div className="popular-list-wrapper">
        {popularList.map((movie) => (
          <div className="popular-list-card">
            <div key={movie.id} className="popular-list-card__image-container">
              <img
                src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
              ></img>
            </div>
            <div className="popular-list-card__text-container">
              <h1
                className="popular-list-card__title"
                key={movie.original_title}
              >
                {movie.original_title}
              </h1>
              <p
                className="popular-list-card__release"
                key={movie.release_date}
              >
                Released {movie.release_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularList;
