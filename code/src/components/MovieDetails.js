import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_MOVIE_DETAILS } from "./Links";
import { BackButton } from "./BackButton";
import "./MovieDetails.css";
import { Loader } from "./Loader";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(loading);
    // if you comment out the code below this line
    fetch(API_MOVIE_DETAILS(movieId))
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
      });
    setLoading(!loading);
    // and above this line -> you will see the loader
  }, [movieId, setLoading]);
  console.log(details);
  //I added all styling into MovieDetails.css because I didn't have the energy to read up on the styled components.
  //It is 100% fine , as I understood we are not supposed to use only styled components , we can try them but thats not at all a requirement
  return (
    <>
      {(loading && (
        <div className="grid">
          <div className="loader-wrapper">
            <Loader color={"goldenrod"} width={120} height={120} />
            <p className="lazy-data-loader">Data is lazy today &#128512;. Let's wait a little... </p>
          </div>
        </div>
      )) || (
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
      )}
    </>
  );
};
