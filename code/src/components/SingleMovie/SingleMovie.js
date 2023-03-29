import React, { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";
import { SingleMoviePoster } from 'components/SingleMoviePoster/SingleMoviePoster';
import { SingleMovieDetails } from '../SingleMovieDetails/SingleMovieDetails';

export const SingleMovie = () => {
  const [loading, setLoading] = useState(false);
  // useEffect
  // setLoading
  // fetch API https://api.themoviedb.org/3/movie/popular?api_key={api_key}&language=en-US&page=1

  return (
    <>
      <h1>I am the SingleMovie component</h1>
      <p>Should probably map() over movies here</p>
      <SingleMoviePoster name="" />
      <SingleMovieDetails name="" />
    </>
  );
};