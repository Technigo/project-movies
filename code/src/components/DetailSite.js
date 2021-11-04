import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import styled from "styled-components";

//import { DETAIL_URL } from "./utils/urls";
const BackLink = styled.div`
  position: absolute;
  display: inline-flex;
  align-items: center;
  left: 50px;
  top: 50px;
  a {
    text-decoration: none;
    font-weight: 700;
    color: #fff;
  }
`;

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
      <BackLink>
        <a className="BackLink" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
            <path
              d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z"
              fill="#fff"
            ></path>
          </svg>{" "}
          Movies
        </a>
      </BackLink>
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
