import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, DETAIL_URL } from "../Utils/Url.js";
import { IMG_URL } from "../Utils/Url.js";

const Moviedetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const url = `${DETAIL_URL}/${id}?api_key=${API_KEY}&language=en-US`;
    fetch(url)
      .then((data) => data.json())
      .then(setMovie);
  }, []);
  return (
    <div>
      {movie && (
        <div>
          <img
            src={`${IMG_URL}${movie.backdrop_path}`}
            alt={movie.original_title}
          />
          <h1>{movie.original_title}</h1>
          <h2>{movie.overview}</h2>
          <h3>{movie.vote_average}</h3>
        </div>
      )}
    </div>
  );
};

export default Moviedetails;
