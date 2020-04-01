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
        console.log(json)
        setMovie(json);
      });
  }, [detailsURL]);

  const detailStyle = {
    backgroundImage: `url("http://image.tmdb.org/t/p/w1280${movie.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };

  return (
    <section className="eachMovie" style={detailStyle}>
      <div className="darkenBackground">
        <div className="goBack">
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#fff"><path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm-1-17v4h8v2h-8v4l-6-5 6-5z"/></svg>
            <span>Back</span>
        </Link>
        </div>

        <div className="singleMovie">
          <img
            src={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt="poster"
          />
          <div className="overview">
            <h1 className="infoTitle">{movie.title}
            </h1>
            <h3><span className="starRating" role="img" aria-label="star">⭐️</span><span className="rating">{movie.vote_average}/10
            </span></h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
};