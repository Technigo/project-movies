import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PopularContainer = styled.div `
display:flex;
flex-wrap:wrap;
position:relative;
background-color:#000;
`;

const CardContainer = styled.div `
position:relative;
width:100%;

img{
  width:100%;
  height:100%;
}

a{
  display:flex;
}


@media(min-width: 767px) {
  width: 50%;
  height: 100%;
}
@media(min-width: 1024px) {
  width: 25%;
  height: 100%;
}
`;

const MovieCardOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: 0.5s ease;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  padding: 1.5rem;
  box-sizing: border-box;
  &:hover{
    opacity: 1;
  }
  `;

const MovieText = styled.div `
justify-content:flex-start;
align-self:flex-end;
color:#fff;
`;

const MovieTitle = styled.div `
font-size: 30px;
`;

const ReleaseText = styled.div ` 
font-size: 16px;
`;



const PopularList = ({movielist}) => {
    
  return ( 

    <PopularContainer> 
        {movielist.map((popular) => (  
             <CardContainer key={popular.id}>
                 <Link to={`/movie/${popular.id}`} key={popular.id}>
                <img src={`https://image.tmdb.org/t/p/w342${popular.poster_path}`} alt="Movies"></img>
                <MovieCardOverlay>
                <MovieText>
                <MovieTitle>{popular.original_title}</MovieTitle>
                <ReleaseText>{popular.release_date}</ReleaseText>
                </MovieText>
                </MovieCardOverlay>
                </Link>
            </CardContainer>
        ))}

        </PopularContainer>   
  )
  
};
export default PopularList;