import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Favicon from 'react-favicon';

import { DETAILS_URL } from '../utils/urls';

const GoBackButton = styled.button`
  position: absolute;
  left: 50px;
  top: 50px;
  background: transparent;
  border: none;
  color: #fff;
  font-weight: 700;
  padding: 5px;
`;

const Details = () => {
  const [details, setDetails] = useState({});
  const [hasError, setHasError] = useState('');

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(DETAILS_URL(id))
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          setDetails(data);
        } else {
          setHasError(true);
        }
      })
      .catch(() => setHasError(true));
  }, [id]);

  const onButtonBackClick = () => {
    history.goBack();
  };

  const detailsImageUrl = details.poster_path
    ? `https://image.tmdb.org/t/p/w342${details.poster_path}`
    : '';

  if (hasError) {
    return <h2>Sorry, this movie doesn't exist :(</h2>;
  }

  return (
    <div
      className="details-backdrop-container"
      key={details.id}
      style={{
        backgroundImage: details.backdrop_path
          ? `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})`
          : '',
      }}
    >
      <div>
        <Favicon url="" />
        <GoBackButton onClick={onButtonBackClick}>MOVIES</GoBackButton>
      </div>
      <div className="details-container">
        <img className="details-img" src={detailsImageUrl} alt="" />
        <div className="details-text">
          <h2>{details.title}</h2>
          <h3>{details.tagline}</h3>
          <p>{details.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
