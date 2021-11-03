import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";

//import { DETAIL_URL } from "./utils/urls";

const DetailSite = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const history = useHistory();
  console.log(id);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=5c4188456a9b734458844d02dc8962a9&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log("checking fetch", json);
        setDetails(json);
      });
  }, [id]);

  const goBackButton = () => {
    history.goBack();
  };

  return (
    <div className="details-box">
      <button onClick={goBackButton}>Return</button>
      {/* <div
        className="background"
        style="background-image url(`https://image.tmdb.org/t/p/original${details.backdrop_path}`)"
      > */}
      <img
        className="backdrop"
        src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
        alt="backdropimg"
      />
      <div className="movie-detail-info">
        <img
          className="poster-img"
          src={`https://image.tmdb.org/t/p/w300${details.poster_path}`}
          alt="poster"
        />
      </div>
      <div>
        <h2>{details.original_title}</h2>
        <p>Description: {details.overview}</p>
        <p>Rating: {details.vote_average}</p>
      </div>
    </div>
  );
};

export default DetailSite;
