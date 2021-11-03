import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Movie from "./Movie";

const AllMovies = ({ userApiKey, allMovies, setAllMovies }) => {
  const history = useHistory();

  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${userApiKey}&language=en-US&page=1`;


  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.results !== undefined) {
          setAllMovies(data.results);
        } else {
            // pushing to homepage because lack of data is probably no API key
          history.push("/");
        }
      });
  }, [API_URL]);

  return (
    <div className="all-movies-container">
      {allMovies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default AllMovies;
