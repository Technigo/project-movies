import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "components/details.css";

const Details = () => {
  const [details, setDetails] = useState({});

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a89f6720304b78135ad37cee571cef4e&language=en-US`
    )
      .then((res) => res.json())
      .then((res) => setDetails(res));
  }, [id]);

  console.log(details);
  return (
    <section className="details-backdrop">
      <link src=""></link>
      <div className="backdrop-container">
        <img
          className="backdrop-image"
          src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`}
          alt={id.title}
        />
      </div>
      <div className="movie-details-container">
        <div className="movie-detail-info">
          <img
            className="poster-img"
            src={`https://image.tmdb.org/t/p/w400${details.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="details-child">
          <div className="title-rating-container">
            <h2 className="movie-title">
              Movie title: {details.original_title}
            </h2>
            <p className="rating-text">{details.vote_average}/10</p>
          </div>
          <p>Description: {details.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
