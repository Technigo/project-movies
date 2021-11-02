import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_MOVIE_DETAILS } from "./Links";
import { BackButton } from "./BackButton";
import "./MovieDetails.css";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(API_MOVIE_DETAILS(movieId))
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
      });
  }, [movieId]);
  console.log(details);
  //I added all styling into MovieDetails.css because I didn't have the energy to read up on the styled components.
  //It is 100% fine , as I understood we are not supposed to use only styled components , we can try them but thats not at all a requirement
  return (
    <section className="movie-wrapper">
      <div className="gradient">
        <img className="background-image" src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} alt={`still from ${details.title}`} />
      </div>
      <div className="movie-details">
        <BackButton />
        <img className="poster" src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} alt={`poster from ${details.title}`} />
        <div className="text-details">
          <div className="title-wrapper">
            <h1>{details.title}</h1>
            <span className="movie-rating">{details.vote_average}</span>
          </div>
          <p>{details.overview}</p>
        </div>
      </div>
    </section>
  );
};
