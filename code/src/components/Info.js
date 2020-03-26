import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./infostyle.css";

export const DetailedInfo = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const detailsURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=57134eb2a62754e27d3ec2d3fe453512&language=en-US`;

  useEffect(() => {
    fetch(detailsURL)
      .then(res => res.json())
      .then(json => {
        setMovie(json);
      });
  }, []);

  const detailStyle = {
    backgroundImage: `url("http://image.tmdb.org/t/p/w1280${
      movie.backdrop_path
      }")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };

  return (
    <section className="eachMovie" style={detailStyle}>
      <div className="shading">
        <div className="goBack">
          <Link to="/">
            <span role="img" aria-label="back">
              ⬅️
            </span>{" "}
            Go Back
        </Link>
        </div>

        <div className="singleMovie">
          <img
            src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt="poster"
          />
          <div className="overview">
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};