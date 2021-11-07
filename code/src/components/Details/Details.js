import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { DETAILS_URL } from "../../utils/urls";
import "./Details.css";

// import NotFound from "./NotFound";
// import styled from 'styled-components'

// const GoBackButton = styled.button`

// padding: 10px;
// font-style: italic;
// color; pink;
// background-color: blue;
// border-radius;25px;
// `

const Details = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [errors, setErrors] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setMovieDetails(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  // console.log(movieDetails);
  if (errors) {
    return <h2>Sorry this page does not exist</h2>;
  }
  const onButtonBackClick = () => {
    history.push("/");
  };

  return (
    <>
      <div class="img-container">
        <img
          className="background-img"
          src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`}
          alt="{movieDetails.title}"
        />

        <button className="back-button" onClick={onButtonBackClick}>
          <i className="fa fa-chevron-circle-left"></i>Back to the list
        </button>
        <>
          <article className="information-card-details">
            <img
              src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
              alt="{movieDetails.title}"
              className="small-img-movie"
            />

            <div className="movie-information">
              <h1>
                {movieDetails.title}
                {/* <span class to be able to style only a part of the text (the rating) red */}
                <span className="rating">{movieDetails.vote_average}/10 </span>{" "}
              </h1>
              <p>{movieDetails.overview}</p>
            </div>
          </article>
        </>
      </div>
      {/* </div> */}
    </>
  );
};
export default Details;

// movie-info-text-wrapper
