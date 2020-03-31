import React from 'react';
import { useParams } from "react-router-dom";
import { Movie } from 'Components/Movie';

export const ShowMovieDetails = ({movies}) => {

  console.log("all movies", movies)

  const params = useParams();

   const movieFind = movies.find(movie => movie.id == params.moviedetails)

   {if (movieFind !== undefined) {
     return (
      <Movie movie={movieFind}/> 
     ) 
    }
    
    return (
      <>
      </>
    )
  }}

