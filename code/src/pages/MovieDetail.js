import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import arrow from "../components/back-arrow.png"

export const MovieDetail = () => {
  const { id } = useParams()
  const [movieDetail, setMovieDetail] = useState ([])
  const MOVIE_DETAIL_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=2c2891737dd5ffa64a8858cdba25ddfe&language=en-US`

  useEffect(() => {
    fetch(MOVIE_DETAIL_URL)
    .then((res) => res.json())
    .then((json) => {
      setMovieDetail(json)
      console.log(json) 
    })
  }, [MOVIE_DETAIL_URL])
    

  // I had issues to bring back the background image for the ipad and the desktop
  // with it in within the image tab so I put it back inside the section tag. 
  // I actually think the dark filter for the description works fine so it is
  // easy to read and we keep the design's uniformoty for all views :) . 

  //LEFT TO DO:
  // Styling for movieDetail for ipad and desktop
  // Fixing the titles in the home page for each movie-thumb. I actually only notice japanese characters overlapping
  // Removing the color blue from the movie titles  in home page
  
    return (
      <div> {movieDetail.length===0 ?<></> :    
        <section className="movie-details-page" style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1280/${movieDetail.backdrop_path})`}}>
        {/* <img style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1280/${movieDetail.backdrop_path})`}}/>  */}
            <Link to={`/`} style={{ textDecoration: 'none' }}>
            <div className="back-arrow-wrapper">
                <img className="back-arrow-icon" src={arrow} alt="back-arrow"/> 
                <p className="back-arrow-text">Movies</p>
            </div>
            </Link> 
            <div className="movie-details-card">
              <img className="movie-poster" src={`https://image.tmdb.org/t/p/w780${movieDetail.poster_path}`} alt="movie poster"/>
                <div className="movie-details-text"> 
                  <h2 className="movie-title">{movieDetail.original_title}</h2>
                  <p className="movie-vote">{movieDetail.vote_average}/10</p>
                  <p className="movie-overview">{movieDetail.overview}</p>
                </div> 
            </div>
        </section>

       }</div>
    )
}