import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

import { IMAGES_URL } from "../utils/urls";

/* const GoBackButton = styled.button`
  padding: 10px;
  font-style: italic;
  color: green;
  background-color: red;
  border-radius: 10px;
`; 

const MovieImage = styled.img`
  width: 100px;
  border-radius: 50%;
  border 3px solid #333;
`*/

const Details = () => {
  const [details, setDetails] = useState({});

  const { id } = useParams();
  const history = useHistory();

  console.log(id);

  useEffect(() => {
    fetch(IMAGES_URL(id))
      .then((res) => res.json())
      .then(res => setDetails(res));
  },[id]);

/*   const onButtonBackClick = () => {
    history.goBack();
  }; */

  return (
    <section
      className='details-backdrop'>
      <img src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} alt={id.title} />
      <div>
        <h2>Movie title: {details.original_title}</h2>
        <p>Description: {details.overview}</p>
        <p>Genre: {details.genres.map}</p>
        <p>Rating: </p>
      </div>
      </section>
  )};
    {/* <div>
      <p>{details.results.vote_average}</p>
      {/*   
      <button onClick={onButtonBackClick}>Back</button>
      <h2>Name: {details.name}</h2>
      <img src={details?.sprites?.other["official-artwork"]?.front_default} /> */}

export default Details;
