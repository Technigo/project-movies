import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

import { DETAILS_URL } from "../utils/urls";

/* const GoBackButton = styled.button`
  padding: 10px;
  font-style: italic;
  color: green;
  background-color: red;
  border-radius: 10px;
`; 

const MovieImage = styled.img``
  width: 100px;
  border-radius: 50%;
  border 3px solid #333;
`*/

const Details = () => {
  const [details, setDetails] = useState({});

  const { movieName } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(DETAILS_URL(movieName))
      .then((res) => res.json())
      .then((data) => setDetails(data));
  });

  const onButtonBackClick = () => {
    history.goBack();
  };

  return (
    <div>
      {/*   
      <button onClick={onButtonBackClick}>Back</button>
      <h2>Name: {details.name}</h2>
      <img src={details?.sprites?.other["official-artwork"]?.front_default} /> */}
      Here I will add details about the movie
    </div>
  );
};

export default Details;
