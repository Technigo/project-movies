import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { API_DETAILS } from 'utils/urls';

const Details = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/676705?api_key=a90dcccc9047bfdf345615e2c530184c&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data.results);
        console.log(movieDetails);
      });
  }, []);

  return <div>Hello</div>;
};

export default Details;
