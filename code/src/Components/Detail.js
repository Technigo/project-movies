import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { DETAIL_URL } from "utils/urls";

const Section = styled.section `
min-height:100vh;
background-repeat:no-repeat;
background-size:cover;
display:grid;
padding:5vw;
background-image:url(${(props) => props.backgroundimage});
`;

const DetailContainer = styled.div `
display:flex;
flex-direction:column;
position:realtive;

@media(min-width:1024px) {
  display:flex;
  flex-direction:row;
}
`;

const GoBackButton = styled.button `
    background-color:#000;
    width:40px;
    height:40px;
    border-radius:50%;
    color:#fff; 
    border:none;
    margin-bottom:15px;
    
 @media(min-width:767px) {
  width:65px;
  height:65px;
  margin-bottom:30px;
 }

 @media(min-width:1024px) {
  width:90px;
  height:90px;
}
`;

const Arrow = styled.div `
 font-size:30px;
 display:flex;
 justify-content:center;
 align-items:center;

 @media(min-width:767px) {
  font-size:40px;
 }

 @media(min-width:1024px) {
  font-size:50px;
}
`;

const Poster = styled.img `
border: 3px solid #fff; 
width:250px;

@media(min-width:767px) {
  width:50%;
 }

 @media(min-width:1024px) {
  width:60%;
}
`;

const DetailsText = styled.div `
justify-content:flex-start;
align-self:flex-end;
color:#fff;

@media(min-width:1024px) {
  padding-left:20px;
}
`;

const Description = styled.div`
  @media (min-width:767px) {
    font-size:25px;
  }
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
        <GoBackButton onClick={onBackButtonClick}>
          <Arrow>
          <IoIosArrowBack/> 
          </Arrow>
          </GoBackButton>
    <DetailContainer>
         <Poster src={`https://image.tmdb.org/t/p/w300${movieDetail.poster_path}`} alt="poster-image"/>
         <DetailsText>
         <h1>{movieDetail.original_title} {movieDetail.vote_average}/10</h1>
         <Description>{movieDetail.overview}</Description>
         </DetailsText>
    </DetailContainer>  
    </Section>   
  
  ) 
};
export default Detail;

