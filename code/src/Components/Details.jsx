import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import arrow from '../assets/arrow.png'
import Error from "./Error";

const Details = ({films}) => {
    const {id} = useParams()
    const movie = films.filter(movie => movie.id === Number(id))[0];

    const backgroundImageUrl = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`
    
    if (movie) {
    return(
        // <section style={backgroundStyle}>
        <Section backgroundimage={backgroundImageUrl}>
            <VerticalFlex>
                <Link to="/" style={{width: '110px'}}>
                    <BackButton>
                        <ArrowIcon src={arrow} alt="back-button" />
                        <ButtonText>Movies</ButtonText>
                    </BackButton>
                </Link>
                <HorizontalFlex>
                    <DetailsImage src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
                    <MovieDetails>
                        <h3>{movie.title} <MovieRating>{movie.vote_average}/10</MovieRating></h3>
                        <p>{movie.overview}</p>
                    </MovieDetails>
                </HorizontalFlex>
            </VerticalFlex>
        </Section>
        )
    } else if (!movie) {
        return (
            <Error />
        )
    }
}

export default Details

const Section = styled.section`
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  display: grid;
  padding: 5vw;
  background-image: url(${(props) => props.backgroundimage});
`

const VerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ButtonText = styled.span`
`

const ArrowIcon = styled.img`
  height: 25px;
  width: 25px;
`

const BackButton = styled.button`
  padding: 3px;
  border: none;
  background-color: transparent;
  color: white;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover ${ButtonText} {
    transition: .5s ease-in;
    transform: translateX(5px)
  }

  &:active ${ButtonText} {
    transition: .5s ease-in;
    transform: translateX(5px)
  }
`

const DetailsImage = styled.img`
  width: 45vw;
  border: 5px solid white;
  border-radius: 10px;

  @media (min-width: 768px) {
    height: 45vh;
    width: auto;
  }
`

const MovieDetails = styled.div`
  width: 90vw;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  border-radius: 10px;

  @media (min-width: 768px) {
    min-width: 40vw;
    max-width: 55vw;
    height: fit-content;
    align-self: flex-end;
  }

  @media (min-width: 1100px) {
    height: auto;
  }
`

const MovieRating = styled.span`
  color: red;
  font-size: 16px;
  padding-left: 7px;
`

const HorizontalFlex = styled.div`
    @media (min-width: 768px) {
        display: flex;
        gap: 5vw;
        max-height: 45vh;
    }

    @media (min-width: 1100px) {
        gap: 2vw;
    }
`