import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
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

  // THIS IS WITH THE LINEAR GRADIENT, BEFORE ICONS WERE ADDED

  //   return (
  //     <div className="detailsWrapper">
  //       <button type="button" className="backBtn" onClick={onBackButtonClick}>Movies</button>
  //       <div className="background">
  //         <div className="backdropImg" style={{ Img: `linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%), url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }} />
  //         <div className="foreground">
  //           <img alt="img" className="detailsPosterImg" src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} />
  //           <div className="movieDetails">
  //             <h3><span className="title">{details.title}</span>
  // <span className="rating">{Math.round(details.vote_average * 10) / 10}</span></h3>
  //             <p className="overview">{details.overview}</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="detailsWrapper">
      <button type="button" className="backBtn" onClick={onBackButtonClick}><FontAwesomeIcon icon={faCircleChevronLeft} />Movies</button>
      <div className="background">
        <img alt="img" className="backdropImg" src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} />
        <div className="foreground">
          <img alt="img" className="detailsPosterImg" src={`https://image.tmdb.org/t/p/w342${details.poster_path}`} />
          <div className="movieDetails">
            <h3><span className="title">{details.title}</span><span className="rating"><FontAwesomeIcon icon={faStar} />{Math.round(details.vote_average * 10) / 10}</span></h3>
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
