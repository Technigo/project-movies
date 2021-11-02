import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=03e945ac54f666ecb5176aa9f90b8fa0&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieDetail(data);
      });
  }, []);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w342${movieDetail.poster_path}`}
        alt={movieDetail.title}
      />
      <h1>
        {movieDetail.title} <span>{movieDetail.vote_average}/10</span>
      </h1>
      <p>{movieDetail.overview}</p>
    </div>
  );
};

export default Details;
