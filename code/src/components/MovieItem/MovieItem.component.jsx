import React from "react";
import { Link } from "react-router-dom";

import {
  MovieItemContainer,
  Image,
  MovieDetailsContainer,
  Title,
  ReleaseDate,
} from "./MovieItem.style";

const MovieItem = ({ id, title, poster_path: image, release_date }) => {
  return (
    <MovieItemContainer>
      <Link to={`/movie/${id}`}>
        <Image src={`https://image.tmdb.org/t/p/w342/${image}`} alt={title} />
        <MovieDetailsContainer>
          <Title>{title}</Title>
          <ReleaseDate>Release Date: {release_date}</ReleaseDate>
        </MovieDetailsContainer>
      </Link>
    </MovieItemContainer>
  );
};

export default MovieItem;
