import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { DETAILS_URL } from '../utils/urls'

const Details = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState({})
    const [hasError, setHasError]= useState (false)
    const history = useHistory();

useEffect(() => {
    fetch(DETAILS_URL(movieId))
    .then((res)=> res.json())
    .then((data) => {  
    if (data.id){
        setMovieDetails(data);
    } else {
        setHasError(true);
    }

})
.catch (() => setHasError(true));
;}, [movieId]);

// console.log(movieDetails);

const onButtonBackClick = () => {
    history.goBack();
}
if (hasError){
    return <h2>Sorry this page does not exist<h2>
}

    return  <div>
    <button onClick={onButtonBackClick}>Back</button>
      {movieDetails.title} {<img src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} alt="{movieDetails.title}"/>}
      {movieDetails.overview} {<img src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`} alt="{movieDetails.title}"/>}
    </div>;
};

export default Details;