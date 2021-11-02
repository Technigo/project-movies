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
       <h1>
           Hello!!!
       {/* "{movie.title}"
       `${movie.title}` */}
       </h1>
    </div>;
};

export default Details;