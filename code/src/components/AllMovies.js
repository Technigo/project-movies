import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import Movie from "./Movie";

const AllMovies = ({ userApiKey }) => {
  const [allMovies, setAllMovies] = useState([]);
  const history = useHistory();

  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${userApiKey}&language=en-US&page=1`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .then((data) => {
        if (data.results !== undefined) {
          setAllMovies(data.results);
        } else {
            // pushing to homepage because lack of data is probably no API key
          history.push("/");
        }
      });
  }, [API_URL]);

  console.log(allMovies);

  return (
    <div className="all-movies-container">
      {allMovies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default AllMovies;
