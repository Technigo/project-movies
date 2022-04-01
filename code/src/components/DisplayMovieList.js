import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "styles/Button";


const CoverArt = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border: 0px;

`
const MovieCard = styled.div`
  width: 25vw;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;

  @media (max-width: 600px) {
    width: 50vw;
  }

  @media (min-width: 601px) and (max-width: 1100px) {
    width: 33.33vw;
  }
`
const Title = styled.p`
  bottom: 4rem;
  position: absolute;
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  z-index: 100;
  max-width: 80%;
  text-wrap: wrap;
  line-height: 1.4;



  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
  @media (min-width: 601px) and (max-width: 1100px) {
    font-size: 2rem;
  }
`
const Release = styled.p`
  bottom: 2rem;
  position: absolute;
  color: white;
  font-size: 18px;
  font-weight: 400;
  z-index: 100;
  width: 100%
`
const Hover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  transition-duration: 0.2s;
  padding: 20px;


  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.700);
  }

  @media (max-width: 600px) {
    opacity: 1;
    background-image: linear-gradient(180deg, transparent, transparent, rgba(0, 0, 0, 0.800));

  }
  
`

const DisplayMovieList = ( { movie, onLikeBtnClick } ) => {
   
    return (
        <Link key={movie.id} to={`details/${movie.id}`}>
                    
        <MovieCard key={movie.id}>
           <CoverArt src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}/>
             <Hover>
             <Title>{movie.title}</Title>
             
             <Button id={movie.id} onClick={(e) => { onLikeBtnClick(e,movie.id, movie) }} fontsize='3rem' color="white"  top='5%' left='75%' ><ion-icon name="star-outline"></ion-icon></Button>

             <Release>{movie.release_date}</Release>
             </Hover>
               
       </MovieCard>
       </Link>
    )
}

export default DisplayMovieList;