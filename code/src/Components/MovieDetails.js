import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const MovieDetails = ( { movieList } ) => {
  
  console.log(movieList)
  // console.log('testing', movieList[0].id)
  const movieId = useParams()
  const movieMatch = movieList.filter(movie => movie.id === Number(movieId.movienumber))[0]
  console.log('movieMatch', movieMatch)
  console.log('movieId', Number(movieId.movienumber))
  console.log('img path', movieMatch.backdrop_path)
  
  return (
    <main className="moviedetail-wrapper">
       <img className="background-movie-img"src={`https://image.tmdb.org/t/p/w1280${movieMatch.backdrop_path}`} alt="background"/> 
       <div className="detail-wrapper">
          <img clasName="detail-info-img"src={`https://image.tmdb.org/t/p/w342${movieMatch.poster_path}`} alt="poster"/>
          <div className="detail-info">
            <h2>{movieMatch.title} <span className="vote-average">{movieMatch.vote_average}/10</span></h2>
            <p>{movieMatch.overview}</p>
          </div>
       </div>
    </main>
  )
}