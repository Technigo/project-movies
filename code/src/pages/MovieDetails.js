import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { DETAILS_URL, IMAGE_URL } from "../components/URLS";

export const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
      });
  }, [movieId]);

  /* I'd like to display spoken_languages, need a mpa for that? */
  
  return (
    <div>
      <img src={`${IMAGE_URL}${details.backdrop_path}`} alt={details.title}/>
      <div><img src={`${IMAGE_URL}${details.poster_path}`} alt={details.title}/>
      <h2>{details.title}</h2>
      <h4>{details.tagline}</h4>
      <p>Length: {details.runtime} minutes</p>  
      <p>Plot: {details.overview}</p>
      <p>Rating: {details.vote_average}</p>
      </div>
    </div>
  );
};
