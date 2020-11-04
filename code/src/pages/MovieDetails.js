import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const { movieId, title } = useParams();
  console.log("movieId: " + movieId)
  console.log("title: " + title)
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=16cd57d89911f5854d96fcf791abf8a9&language=en-US`)
    .then((res) => res.json())
    .then((json) => {
      setMovie(json)
      console.log(json);
    })
  }, [movieId])

  if (!movie.id) {
    return <p>Not found!</p>
  }
  return (
    <div>
      <img
              className="x-image"
              src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
              alt=""
      ></img>
      <p className="movie-title">{movie.title}</p>
      <p className="rating">{movie.vote_average}/10</p>
      <p className="overview">{movie.overview}</p>
    </div>
  );
};
