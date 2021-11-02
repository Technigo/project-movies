import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=abdb03f8abcf67d9d8dda1bdbff21b0a&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [id]);

  console.log(detail);
  return (
    <div className="detail-container">
      <img
        src={`https://image.tmdb.org/t/p/w780${detail.poster_path}`}
        alt="movie-poster"
      />
      <div>{detail.overview}</div>
      <div>{detail.vote_average}</div>
    </div>
  );
};
export default MovieDetail;
