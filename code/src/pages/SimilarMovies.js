import React, { useEffect, useState } from 'react'; //import React
import { useParams } from 'react-router-dom'; //import Param
import styled from 'styled-components';
import { Link } from 'react-router-dom'; //import link

import { SIMILAR_URL } from './Url';

const ImageContainer = styled.div `
display: grid; 
grid-template-columns: repeat(4,1fr);
width:100%;
`

const Image = styled.img `
padding:0;
margin:0;
width:80%; 
height:auto;
`

const SimilarTitel = styled.h3` 
display:flex;
	margin: 20px auto;
    justify-content: center;


`


// const MoviePoster = styled.img `
// 	width:100%;
// `


export const SimilarMovies = () => {

  const { movieId } = useParams(); // a variable for param (hook)
  const [similarMovies, setSimilarMovies] = useState ([]) // a state property that collects all the similar movie details


  useEffect(() => {
    fetch(SIMILAR_URL(movieId))
    .then((res) => res.json())
    .then ((data) => {
        setSimilarMovies(data.results);
    });
  }, [movieId]);

  return (
  <section>
      <SimilarTitel> Similar Movies </SimilarTitel>
    {similarMovies.map((similar) => (
      <div key={similar.id}>
        <Link to={`/movie/${similar.id}`}>
          <ImageContainer>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${similar.poster_path}`}
              alt={similar.title}
            />
          </ImageContainer>
        </Link>
      </div>
    ))}
  </section>

  
  
)}
