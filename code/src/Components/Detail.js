import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components'

import { DETAIL_URL, LIST_URL } from "utils/urls";

const GoBackButton = styled.button `
    background-color:green;
`;

const BackgroundImage = styled.img `
width: 150px;

`;

const Detail = () => {
    const [movieDetail,setMovieDetail] = useState(null)
    const { movieId } = useParams()
    const navigate = useNavigate();

    const onBackButtonClick = () => {
      navigate(-1);
    }

    useEffect(() => {
        fetch(DETAIL_URL(movieId))
        .then(res=> res.json())
        .then(data=> { 
            setMovieDetail(data)
        
        })
    }, [movieId])

console.log(movieDetail)
if (movieDetail === null) {
  return <p></p>
}
  return (
    <div>
      <GoBackButton onClick={onBackButtonClick}>Go Back</GoBackButton>
      
 
         <img className="card-images" src={`https://image.tmdb.org/t/p/w300${movieDetail.poster_path}`} alt={movieDetail.original_title}/>
         <BackgroundImage  src={`https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path}`} alt={movieDetail.original_title}/>
         <p>{movieDetail.original_title}</p>
         <p>{movieDetail.vote_average}</p>
         <p>{movieDetail.overview}</p>
        
      
    </div>     
  ) 
};
export default Detail;