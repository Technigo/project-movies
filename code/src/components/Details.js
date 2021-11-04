import React, { useEffect, useState } from 'react';
import { useParams, useHistory, } from 'react-router-dom';
// import styled from 'styled-components'
import { DETAILS_URL } from '../utils/urls'
import NotFound from './NotFound';

// const GoBackButton = styled.button`

// padding: 10px;
// font-style: italic;
// color; pink;
// background-color: blue;
// border-radius;25px;
// `

const Details = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [errors, setErrors]= useState (false);
    const history = useHistory();

useEffect(() => {
    fetch(DETAILS_URL(movieId))
    .then((res)=> res.json())
    .then((data) => {  
    console.log(data)
    
        setMovieDetails(data);
  
        
    
})
    .catch((error) => { console.log(error);
    
    });
    
}, [movieId]);

// console.log(movieDetails);
if (errors) {
    return <h2>Sorry this page does not exist</h2>;
}
const onButtonBackClick = () => {
    history.push('/');
};

return (
<div>
<button onClick={onButtonBackClick}>Back</button>
<div>{movieDetails.title}</div>
{movieDetails.overview} <img src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} alt="{movieDetails.title}"/>
 <img src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`} alt="{movieDetails.title}"/>
</div>

);

    // return (
    //     <>
    //     {errors && <NotFound/>}
    //  <div>
    //     <GoBackButton onClick={onButtonBackClick}> Back</GoBackButton>
    //     <article className="card-details">
    //     <img src={movieDetails.poster_path ? `https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}` :''}
    //     alt={movieDetails.title}
    //     className="movie-card-small"/>
    //     <h2>Name: {movieDetails.title}</h2>;
    //     <img src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} alt="{movieDetails.title}"/>}
    //   {movieDetails.overview} {<img src={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`} alt="{movieDetails.title}"/>}
    //     </div>
    //  </>
    // );
 
 };
export default Details;