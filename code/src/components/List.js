import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MOVIES_URL } from '../utils/urls'

/* Styled component? 
Const Section = styled.section`

`; */

const List = ({ movie }) => {
  const [movies, setMovies] = useState([])

  useEffect (() => {
    fetch(MOVIES_URL).then((res) => res.json()).then((json) => {
      setMovies(json.results)
    });
  }, []);

  return (
    <div>
    <h1>hey</h1>
    {movies.map((movie) => (
      <div key={movie.id}>
        <h2>{movie.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w342${movie.backdrop_path}`} alt="imagesmovies"/>
      </div>
    ))}
    </div>
  );
};

export default List;