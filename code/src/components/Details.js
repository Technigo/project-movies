import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DETAILS_URL } from '../utils/urls'

const Details = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState({})

useEffect(() => {
    fetch(DETAILS_URL(movieId))
    .then((res)=> res.json())
    .then((data) => setMovieDetails(data));

}, [movieId]);

console.log(movieDetails);

    return <div>
      {movieDetails.title} {<img src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} alt="{movieDetails.title}"/>}
      {movieDetails.overview} {<img src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`} alt="{movieDetails.title}"/>}
    </div>;
};

export default Details;