import React from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import { NotFound } from './NotFound'


export const MovieDetails = ( { movieList } ) => {
  
  console.log(movieList)
  const {movieId} = useParams()
  const movieMatch = movieList.find(movie => movie.id === Number(movieId))
  const navigate = useNavigate()


  const onBackButtonClick = () =>{
    navigate(-1)
  }
 
  
  const backgroundStyle = { backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieMatch?.backdrop_path})`, backgroundRepeat:'no-repeat', backgroundSize: 'cover'}
  console.log('moviematch', movieMatch)
  if (!movieMatch) {
    return( 
    <NotFound />
    )
    }
  return (
    <main className="moviedetail-wrapper" style={backgroundStyle}>
      <div className="back-link">
        <button onClick={onBackButtonClick} className="back-btn">
                <svg width="25" height="25" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40ZM24.8932 46.3017L24.8674 46.3256L19 40.8874L19.0258 40.8635L19 40.8395L24.8674 35.4013L24.8932 35.4253L49.0882 13L54.9556 18.4382L30.7606 40.8635L54.0378 62.438L48.1704 67.8763L24.8932 46.3017Z" fill="white"/>
      </svg><span className="back-btn--text"> Movies</span></button>
        </div>
      <div className="detail-wrapper">
        <img className="detail-info-img"src={`https://image.tmdb.org/t/p/w342${movieMatch.poster_path}`} alt="poster"/>
        <div className="detail-info">
            <h2>{movieMatch.title} <span className="vote-average">{movieMatch.vote_average}/10</span></h2>
            <p>{movieMatch.overview}</p>
          </div>
      </div> 
    </main>
  )




}



