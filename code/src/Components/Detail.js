import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components'

import { DETAIL_URL } from "utils/urls";

const Section = styled.section `
min-height: 100vh;
background-repeat: no-repeat;
background-size: cover;
display: grid;
padding: 5vw;
background-image: url(${(props) => props.backgroundimage});
`;

const DetailContainer = styled.div `
display:flex;
flex-direction: flex-end;
position:realtive;
`;

const GoBackButton = styled.button `
    background-color:green;
    border-radius: 50%;
`;

const Poster = styled.img `
border: 3px solid #fff; 
`;

const DetailsText = styled.div `
justify-content:flex-start;
align-self:flex-end;
color:#fff;
`;


const Detail = () => {
    const [movieDetail,setMovieDetail] = useState(null)
    const { movieId } = useParams()
    const navigate = useNavigate();
    const backgroundImageUrl = `https://image.tmdb.org/t/p/w1280${movieDetail?.backdrop_path}`;

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
    <Section backgroundimage={backgroundImageUrl}>
    <DetailContainer>
      <GoBackButton onClick={onBackButtonClick}>Back</GoBackButton>
         <Poster src={`https://image.tmdb.org/t/p/w300${movieDetail.poster_path}`} alt="poster-image"/>
         <DetailsText>
         <p>{movieDetail.original_title} {movieDetail.vote_average}</p>
         <p>{movieDetail.overview}</p>
         </DetailsText>
    </DetailContainer>  
    </Section>   
  ) 
};
export default Detail;

