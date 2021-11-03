import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";

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

  if (detail === undefined) {
    return <></>;
  }
  return (
    <section className="detail-container">
      <div
        className="background"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${detail.backdrop_path}),
          linear-gradient(rgba(0,0,0,0) 70%,rgba(0,0,0,100%)`,
          backgroundPosition: "left",
        }}
        alt={detail.title}
      >
        <Nav />
        <div className="summary">
          <img
            className="movie-detail"
            src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
            alt="movie-title"
          />
          <div className="detail">
            <div>{detail.title}</div>
            <div className="rating">{detail.vote_average}/10</div>
            <p>{detail.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MovieDetail;
