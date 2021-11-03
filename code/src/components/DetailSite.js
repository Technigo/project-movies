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

  // const genres = details.map(function (subarray) {
  //   return subarray.name;
  // });

  // console.log(genres);

  return (
    <div className="details-box">
      <button className="returnbtn" onClick={goBackButton}>
        Return
      </button>
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
          src={`https://image.tmdb.org/t/p/w400${details.poster_path}`}
          alt="poster"
        />
      </div>
      <section className="details-text">
        <div className="details-head">
          <h2>{details.original_title}</h2>
          <p className="rating">{details.vote_average}/10</p>
        </div>
        <p>Description: {details.overview}</p>
        {/* <p>
          {details.genres.map((item) => {
            return item.name={item.name}
          })}
        </p> */}
        {/* <p>Genre: {genres}</p> */}
      </section>
    </div>
  );
};

export default DetailSite;
