import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

const GoBackButton = styled.button`
  padding: 10px;
  font-style: italic;
  color: green;
  background-color: red;
  border-radius: 10px;
`;

/*
const MovieImage = styled.img`
  width: 100px;
  border-radius: 50%;
  border 3px solid #333;
`*/

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

  const onButtonBackClick = () => {
    history.goBack();
  };

  console.log(details);
  return (
    <section className="details-backdrop">
      <button onClick={onButtonBackClick}>Back</button>
      <img
        src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`}
        alt={id.title}
      />
      <div className="movie-detail-info">
        <img
          className="poster-img"
          src={`https://image.tmdb.org/t/p/w400${details.poster_path}`}
          alt="poster"
        />
      </div>
      <div>
        <h2>Movie title: {details.original_title}</h2>
        <p>Description: {details.overview}</p>
        <p>Rating: {details.vote_average}/10</p>
      </div>
    </section>
  );
};

export default Details;
