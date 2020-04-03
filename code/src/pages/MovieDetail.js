import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Link } from "react-router-dom";
import "./moviedetail.css";
import { Loading } from '../components/Loading';

export const MovieDetail = () => {
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(true)
  const { movieId } = useParams();
  const history = useHistory();
  const apiKey = "84288b086658b1092348123e4fc9180a"
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`
  const [statusCode, setStatusCode] = useState(200);

  useEffect(() => {
    fetch(url)
      .then(res => {
        setStatusCode(res.status)
        return res.json()
      })
      .then(json => {
        setMovie(json)
        setTimeout(() => { setLoading(false); }, 250);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId, url])


  if (statusCode !== 200) {
    history.push("/")
  }

  return (
    <>
      {loading ? <Loading />
        :
        <div className="movie-detail-container" style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
        }}>
          <Link className="backlink" to={`/similar/${movieId}`}>
            ◀️ <span>Show similar movies</span>
            {/* Last minute change from "back" to "similar" will move later */}
          </Link>
          <div className="movie-info">
            <img src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt={movie.title} />
            <div className="info-text">
              <h2>{movie.title}<span className="rating">{movie.vote_average}/10</span></h2>
              <p>{movie.overview}</p>
            </div>
          </div>
          <div className="fade">
          </div>
        </div >
      }
    </>
  )
}
