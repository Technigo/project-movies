import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import { Page } from './Page';

const key = "1ff77d3fb46cefb77c7370504c6cb69d"

export const MovieDetails = () => {
    const [movie, setMovie] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    
// fetching data
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => {
        if (json.status_code === 34) {
          setError("Movie not found");
        } else {
          setMovie(json);
          console.log(json)
        }

        setLoading(false);
      });
  }, [id]); // We need to pass id as a dependecy here so everytime the id changes, we do a new fetch.
// loading, error, and if it passes show Page component.   
  if (loading) {
    return <h1>LOADING</h1>;
  }

  if (error) {
    return <h1 style = {{"color": "white"}}>{error}, please go back to home page</h1>;
  }

  return (
    <Page item = {movie} />
    
  );
};

//https://api.themoviedb.org/3/movie/550?api_key=1ff77d3fb46cefb77c7370504c6cb69d