import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../details.css'

const Details = () => {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  // eslint-disable-next-line camelcase
  const { movieId } = useParams();

  const onBackButtonClick = () => {
    navigate(-1);
  }
  useEffect(() => {
    // eslint-disable-next-line camelcase
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c77f0f257b1db8c5cdfe593182e32f79&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data)
      })
  }, [movieId])

  return (
    <div className="detailsWrapper">
      <button type="button" className="backBtn" onClick={onBackButtonClick}>Movies</button>
      <div className="background">
        <img alt="img" className="backdropImg" src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} />
        <div className="foreground">
          <img alt="img" className="detailsPosterImg" src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} />
          <div className="movieDetails">
            <div className="detailHeadline">
              <h3>{details.title}</h3>
              <p className="rating">{details.vote_average}</p>
            </div>
            <p className="overview">{details.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details;

// return (
//   <div className="detailsWrapper">
//     <button type="button" className="backBtn" onClick={onBackButtonClick}>Go back</button>
//       <img alt="img" className="backdropImg" src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} />
//       <img alt="img" className="detailsPosterImg" src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} />
//       <div className="movieDetails">
//         <h3>{details.title}</h3>
//         <p className="rating">{details.vote_average}</p>
//         <p className="overview">{details.overview}</p>
//       </div>
//   </div>
// )
// }
